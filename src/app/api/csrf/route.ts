import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'

export async function GET() {
  const token = randomUUID()

  const res = NextResponse.json({ csrfToken: token })
  res.cookies.set('csrf_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 30, // 30 minutes
  })

  return res
}
