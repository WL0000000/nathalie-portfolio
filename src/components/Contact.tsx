import { useState } from 'react'
import type { FormEvent } from 'react'
import { getInvolvedIntro, site } from '../data/content'
import { Reveal } from './Reveal'
import { SectionBackdrop } from './SectionBackdrop'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    const name = String(data.name ?? '').trim()
    const email = String(data.email ?? '').trim()
    const message = String(data.message ?? '').trim()

    const errors: FieldErrors = {}
    if (!name) errors.name = 'Full name is required.'
    if (!email) {
      errors.email = 'Email address is required.'
    } else if (!EMAIL_RE.test(email)) {
      errors.email = 'Please enter a valid email address.'
    }
    if (!message) errors.message = 'Message is required.'

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = (await res.json()) as {
        success?: boolean
        error?: string
        fieldErrors?: FieldErrors
      }

      if (!res.ok) {
        if (json.fieldErrors) {
          setFieldErrors(json.fieldErrors)
          setStatus('idle')
        } else {
          setErrorMsg(json.error ?? 'Something went wrong. Please try again.')
          setStatus('error')
        }
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact">
      <SectionBackdrop variant="contact" />
      <div className="container contact__grid">
        <div className="contact__info">
          <Reveal variant="left">
            <p className="eyebrow">Get Involved</p>
          </Reveal>
          <Reveal variant="left" delay={80}>
            <h2 className="section__title">Get Involved</h2>
          </Reveal>
          <Reveal variant="left" delay={160}>
            <p className="section__lead">{getInvolvedIntro}</p>
          </Reveal>

          <ul className="contact__details">
            <Reveal as="li" variant="left" delay={240}>
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </Reveal>
            <Reveal as="li" variant="left" delay={300}>
              <span>Phone</span>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </Reveal>
            <Reveal as="li" variant="left" delay={360}>
              <span>Location</span>
              <p>{site.location}</p>
            </Reveal>
          </ul>

          <Reveal variant="left" delay={420}>
            <a
              href={site.resumeUrl}
              className="contact__linkedin"
              target="_blank"
              rel="noreferrer"
            >
              View full resume (PDF)
            </a>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120}>
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className={`form-field${fieldErrors.name ? ' form-field--error' : ''}`}>
              <label htmlFor="name">
                Full name <span className="form-required" aria-hidden="true">*</span>
              </label>
              <input id="name" name="name" type="text" autoComplete="name" />
              {fieldErrors.name && (
                <p className="form-field__error" role="alert">{fieldErrors.name}</p>
              )}
            </div>

            <div className={`form-field${fieldErrors.email ? ' form-field--error' : ''}`}>
              <label htmlFor="email">
                Email <span className="form-required" aria-hidden="true">*</span>
              </label>
              <input id="email" name="email" type="email" autoComplete="email" />
              {fieldErrors.email && (
                <p className="form-field__error" role="alert">{fieldErrors.email}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="company">
                Company <span className="form-optional">(optional)</span>
              </label>
              <input id="company" name="company" type="text" autoComplete="organization" />
            </div>

            <div className={`form-field${fieldErrors.message ? ' form-field--error' : ''}`}>
              <label htmlFor="message">
                Message <span className="form-required" aria-hidden="true">*</span>
              </label>
              <textarea id="message" name="message" rows={5} />
              {fieldErrors.message && (
                <p className="form-field__error" role="alert">{fieldErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="form-success" role="status">
                Message sent! Natalie will be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-error" role="alert">
                {errorMsg}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
