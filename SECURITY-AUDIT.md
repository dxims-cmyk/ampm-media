# AM:PM Media - Security Audit Report

**Date**: 2026-02-24
**Scope**: Full codebase (`mediampm.com`)
**Auditor**: Automated scan (Claude Code)
**Status**: Report only - no fixes applied

---

## Executive Summary

The AM:PM Media website is a Next.js marketing site with a single API endpoint (`/api/contact`), client-side Supabase writes, and third-party embeds (Cal.com, Google Analytics, reCAPTCHA). No secrets were found committed to git.

**Risk profile**: Low-to-moderate overall. The site is primarily static marketing content. The main attack surface is the `/api/contact` endpoint, which lacks input validation, rate limiting, and CSRF protection. No authentication system exists (no user accounts), which limits the blast radius.

| Severity | Count |
|----------|-------|
| Critical | 2     |
| High     | 4     |
| Medium   | 4     |
| Low      | 3     |

---

## Findings by Severity

### CRITICAL

#### C1. No Input Validation on `/api/contact`

**File**: `src/app/api/contact/route.ts`
**Risk**: The endpoint accepts arbitrary JSON and forwards it to a webhook. An attacker could inject oversized payloads, malformed data, or XSS payloads that render in whatever system consumes the webhook.

**Details**:
- No schema validation (no zod, yup, or manual checks)
- No field length limits (name, email, phone, message)
- No email format validation server-side
- No phone format validation server-side
- Trusts client-side validation entirely

**Recommended patch**:
- Add zod schema validation with strict field types and length limits
- Validate email format with regex or `validator` library
- Cap message length (e.g. 2000 chars)
- Sanitize all string inputs before forwarding to webhook

---

#### C2. Missing Security Headers

**File**: No `next.config.js` security headers configured
**Risk**: The site is missing standard security headers, leaving it vulnerable to clickjacking, MIME sniffing, and XSS.

**Missing headers**:
- `Content-Security-Policy` (CSP)
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `Strict-Transport-Security` (HSTS)

**Recommended patch**:
```js
// next.config.js
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      // CSP needs careful tuning for Cal.com iframes, GA, reCAPTCHA
    ],
  }]
}
```

---

### HIGH

#### H1. No Rate Limiting on `/api/contact`

**File**: `src/app/api/contact/route.ts`
**Risk**: The endpoint can be spammed with unlimited requests, flooding the webhook destination and Supabase table with junk submissions.

**Recommended patch**:
- Add Vercel Edge Middleware rate limiting, or
- Use `upstash/ratelimit` with Redis, or
- At minimum, add IP-based in-memory rate limiting (e.g. 5 requests per minute per IP)

---

#### H2. No CSRF Protection

**File**: `src/app/api/contact/route.ts`
**Risk**: The contact form POST can be submitted from any origin. An attacker could craft a page that auto-submits the form on behalf of a visitor.

**Note**: Impact is limited since there's no auth system - the worst case is spam submissions, not account takeover.

**Recommended patch**:
- Validate `Origin` or `Referer` header matches your domain
- Or implement a CSRF token pattern

---

#### H3. reCAPTCHA Action Not Verified

**File**: `src/app/api/contact/route.ts`
**Risk**: The server checks the reCAPTCHA score but does not verify the `action` name. An attacker could reuse a valid reCAPTCHA token from a different page action.

**Recommended patch**:
```ts
// After verifying score, also check:
if (recaptchaData.action !== 'contact_form') {
  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}
```

---

#### H4. Webhook URL Hardcoded Without Authentication

**File**: `src/app/api/contact/route.ts`
**Risk**: The webhook URL is hardcoded in source code. If the repo becomes public, anyone can send payloads to that webhook. The webhook endpoint itself has no authentication or signature verification.

**Recommended patch**:
- Move webhook URL to environment variable (`WEBHOOK_URL`)
- Add HMAC signature to webhook payloads so the receiver can verify authenticity
- Consider adding a shared secret header

---

### MEDIUM

#### M1. Supabase Client-Side Access

**File**: `src/lib/supabase.ts` (or similar)
**Risk**: The Supabase anon key is used client-side. Security depends entirely on Row Level Security (RLS) policies being correctly configured.

**Action**: Verify RLS policies are enabled and restrictive on all tables. The anon key should only allow INSERT on the contact submissions table, nothing else.

---

#### M2. reCAPTCHA Site Key Hardcoded

**File**: Contact form component
**Risk**: Low - reCAPTCHA site keys are designed to be public. However, best practice is to use environment variables for all external service keys.

**Recommended patch**:
- Move to `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` env var

---

#### M3. Google Analytics ID Hardcoded

**File**: Layout or analytics component
**Risk**: Low - GA IDs are public by nature. Same best-practice recommendation as M2.

**Recommended patch**:
- Move to `NEXT_PUBLIC_GA_ID` env var

---

#### M4. No Message Length Limits

**File**: `src/app/api/contact/route.ts`
**Risk**: An attacker could submit extremely large payloads (e.g. 10MB message field), potentially causing memory issues or excessive Supabase storage costs.

**Recommended patch**:
- Enforce `Content-Length` limit in middleware or API route
- Validate individual field lengths (name: 100, email: 254, phone: 20, message: 2000)

---

### LOW

#### L1. npm Audit Vulnerabilities (Dev Dependencies Only)

**Details**: 18 vulnerabilities found, all in the eslint dependency chain:
- 1 moderate: `ajv` ReDoS vulnerability
- 17 high: `minimatch` ReDoS vulnerability

**Risk**: These are development-only dependencies. They do not ship to production or affect the deployed site. No action required unless you want a clean audit.

**Recommended patch** (optional):
```bash
npm audit fix
# If that doesn't resolve them:
# These are deep transitive deps in eslint - wait for upstream fix or override
```

---

#### L2. Missing `sandbox` Attribute on Embeds

**Files**: Various division pages with Cal.com iframes
**Risk**: Cal.com iframes load without a `sandbox` attribute, giving the embedded content full capabilities. Since Cal.com is a trusted service, the practical risk is very low.

**Recommended patch** (optional):
```html
<iframe sandbox="allow-scripts allow-same-origin allow-forms allow-popups" ...>
```

---

#### L3. Vercel OIDC Token in `.env.local`

**File**: `.env.local` (local only, NOT in git)
**Risk**: Very low. The file is gitignored and only exists on your local machine. The token is a Vercel deployment token.

**Recommended action**: Rotate if you suspect the machine has been compromised. Otherwise, no action needed.

---

## npm Audit Results

```
18 vulnerabilities (1 moderate, 17 high)

All in eslint dependency chain (dev-only):
- minimatch <3.0.5 (ReDoS) - 17 instances via eslint
- ajv <6.12.3 (ReDoS) - 1 instance via eslint

Production impact: NONE
These packages are not bundled into the Next.js build.
```

---

## Action Items Checklist

### Priority 1 (Do now)
- [ ] **C1**: Add input validation to `/api/contact` (zod schema, field limits, email regex)
- [ ] **C2**: Add security headers in `next.config.js`
- [ ] **H1**: Add rate limiting to `/api/contact`
- [ ] **H4**: Move webhook URL to environment variable

### Priority 2 (Do soon)
- [ ] **H2**: Add CSRF protection (Origin header check)
- [ ] **H3**: Verify reCAPTCHA action name server-side
- [ ] **M1**: Audit Supabase RLS policies
- [ ] **M4**: Enforce payload size limits

### Priority 3 (Nice to have)
- [ ] **M2**: Move reCAPTCHA site key to env var
- [ ] **M3**: Move GA ID to env var
- [ ] **L2**: Add sandbox attributes to Cal.com iframes
- [ ] **L1**: Run `npm audit fix` for clean audit (optional)

### No Action Required
- [x] **L3**: `.env.local` token is local-only, gitignored - safe as-is
- [x] No secrets committed to git
- [x] No `.env` files in repository

---

*Report generated 2026-02-24. No code changes were made - review and apply patches manually.*
