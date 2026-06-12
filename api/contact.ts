import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

// In-memory rate limiter — resets on cold start, sufficient for a portfolio contact form.
// Upgrade to Upstash Redis if you need persistence across function instances.
const attempts = new Map<string, { count: number; resetAt: number }>()
const MAX_PER_HOUR = 5
const ONE_HOUR_MS = 60 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = attempts.get(ip)
  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + ONE_HOUR_MS })
    return true
  }
  if (entry.count >= MAX_PER_HOUR) return false
  entry.count++
  return true
}

function getIp(req: VercelRequest): string {
  return (
    (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ??
    (req.headers['x-real-ip'] as string | undefined) ??
    'unknown'
  )
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TO_EMAIL = 'nathaliewang_bc@hotmail.com'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const ip = getIp(req)
  if (!checkRateLimit(ip)) {
    return res
      .status(429)
      .json({ error: 'Too many requests. Please wait a while before trying again.' })
  }

  const body = req.body as Record<string, unknown> | undefined
  const name = String(body?.name ?? '').trim()
  const email = String(body?.email ?? '').trim()
  const company = String(body?.company ?? '').trim()
  const message = String(body?.message ?? '').trim()

  type FieldKey = 'name' | 'email' | 'message'
  const fieldErrors: Partial<Record<FieldKey, string>> = {}

  if (!name) fieldErrors.name = 'Full name is required.'
  if (!email) {
    fieldErrors.email = 'Email address is required.'
  } else if (!EMAIL_RE.test(email)) {
    fieldErrors.email = 'Please enter a valid email address.'
  }
  if (!message) fieldErrors.message = 'Message is required.'

  if (Object.keys(fieldErrors).length > 0) {
    return res.status(400).json({ fieldErrors })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return res.status(500).json({ error: 'Server configuration error. Please email directly.' })
  }

  const resend = new Resend(apiKey)
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? 'Portfolio Contact Form <onboarding@resend.dev>'

  const companyLine = company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${companyLine}
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:1rem 0" />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res
      .status(500)
      .json({ error: 'Failed to send your message. Please try again or email directly.' })
  }
}
