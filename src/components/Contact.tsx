import { useState } from 'react'
import type { FormEvent } from 'react'
import { site } from '../data/content'
import { Reveal } from './Reveal'
import { SectionBackdrop } from './SectionBackdrop'

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
      <SectionBackdrop variant="contact" />
      <div className="container contact__grid">
        <div className="contact__info">
          <Reveal variant="left">
            <p className="eyebrow">Contact</p>
          </Reveal>
          <Reveal variant="left" delay={80}>
            <h2 className="section__title">Let&apos;s discuss your next initiative</h2>
          </Reveal>
          <Reveal variant="left" delay={160}>
            <p className="section__lead">
              Share a brief overview of your goals and timeline. I typically
              respond within two business days.
            </p>
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
              href={site.linkedin}
              className="contact__linkedin"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120}>
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
        </Reveal>
      </div>
    </section>
  )
}
