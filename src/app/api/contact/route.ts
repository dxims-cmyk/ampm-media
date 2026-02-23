import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { recaptchaToken, ...formData } = body

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

  if (!verifyData.success || verifyData.score < 0.5) {
    return NextResponse.json({ error: 'Verification failed' }, { status: 403 })
  }

  // Forward to Impact webhook
  try {
    await fetch('https://impact-full.vercel.app/api/webhooks/lead-form?org_slug=ampm-media', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
  } catch {
    // Still return success - we've verified the human
  }

  return NextResponse.json({ success: true, score: verifyData.score })
}
