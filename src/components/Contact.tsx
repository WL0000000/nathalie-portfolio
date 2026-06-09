import { useState } from 'react'
import type { FormEvent } from 'react'
import { site } from '../data/content'

type FormStatus = 'idle' | 'success'

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('success')
    event.currentTarget.reset()
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="eyebrow">Contact</p>
          <h2 className="section__title">Let&apos;s discuss your next initiative</h2>
          <p className="section__lead">
            Share a brief overview of your goals and timeline. I typically
            respond within two business days.
          </p>

          <ul className="contact__details">
            <li>
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </li>
            <li>
              <span>Location</span>
              <p>{site.location}</p>
            </li>
          </ul>

          <a
            href={site.linkedin}
            className="contact__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" required autoComplete="name" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Work email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div className="form-field">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" autoComplete="organization" />
          </div>
          <div className="form-field">
            <label htmlFor="message">How can I help?</label>
            <textarea id="message" name="message" rows={5} required />
          </div>
          <button type="submit" className="btn btn--primary btn--full">
            Send inquiry
          </button>
          {status === 'success' && (
            <p className="form-success" role="status">
              Thank you — your message has been recorded locally. Connect this
              form to your email service when you are ready to go live.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
