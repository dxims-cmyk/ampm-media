import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// --- C1: Input validation schema ---
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Invalid email address').max(254),
  phone: z.string().min(7).max(20).optional().or(z.literal('')),
  business: z.string().max(200).optional().or(z.literal('')),
  company: z.string().max(200).optional().or(z.literal('')),
  service: z.enum(['growth-system', 'video', 'studio', 'branding', 'other'], {
    error: 'Invalid service selection',
  }),
  message: z.string().max(2000).optional().or(z.literal('')),
  source: z.string().max(100).optional().or(z.literal('')),
  recaptchaToken: z.string().min(1, 'reCAPTCHA token required'),
  csrfToken: z.string().min(1, 'CSRF token required'),
})

// --- H1: In-memory rate limiting (5 requests per IP per minute) ---
const RATE_LIMIT_WINDOW = 60_000
const RATE_LIMIT_MAX = 5
const ipRequests = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = ipRequests.get(ip) ?? []
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW)

  if (recent.length >= RATE_LIMIT_MAX) {
    ipRequests.set(ip, recent)
    return true
  }

  recent.push(now)
  ipRequests.set(ip, recent)
  return false
}

// Cleanup stale entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [ip, timestamps] of ipRequests) {
    const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW)
    if (recent.length === 0) ipRequests.delete(ip)
    else ipRequests.set(ip, recent)
  }
}, 5 * 60_000)

export async function POST(req: NextRequest) {
  // --- H1: Rate limit check ---
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a minute.' },
      { status: 429 }
    )
  }

  // --- C1: Validate input ---
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return NextResponse.json({ error: 'Validation failed', fields: errors }, { status: 400 })
  }

  const { recaptchaToken, csrfToken, ...formData } = result.data

  // --- H2: CSRF double-submit cookie validation ---
  const cookieToken = req.cookies.get('csrf_token')?.value
  if (!cookieToken || cookieToken !== csrfToken) {
    return NextResponse.json({ error: 'Invalid CSRF token' }, { status: 403 })
  }

  // Verify reCAPTCHA v3 token with Google
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) {
    return NextResponse.json({ error: 'Server config error' }, { status: 500 })
  }

  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${recaptchaToken}`,
  })

  const verifyData = await verifyRes.json()

  // --- H3: Verify reCAPTCHA action matches expected value ---
  if (!verifyData.success || verifyData.score < 0.5 || verifyData.action !== 'contact_form') {
    return NextResponse.json({ error: 'Verification failed' }, { status: 403 })
  }

  // --- H4: Webhook URL from env var ---
  const webhookUrl = process.env.IMPACT_WEBHOOK_URL
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch {
      // Still return success - we've verified the human
    }
  }

  return NextResponse.json({ success: true, score: verifyData.score })
}
