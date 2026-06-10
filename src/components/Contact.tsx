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
            <h2 className="section__title">Get in touch</h2>
          </Reveal>
          <Reveal variant="left" delay={160}>
            <p className="section__lead">
              For career counselling, real estate, or speaking inquiries, please email
              or call. I am based in Coquitlam and serve clients across the Lower Mainland.
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
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
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
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              Send message
            </button>
            {status === 'success' && (
              <p className="form-success" role="status">
                Thank you. Your message has been saved locally. Connect this form to
                an email service before going live.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
