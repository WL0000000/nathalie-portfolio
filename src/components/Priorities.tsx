import type { ReactNode } from 'react'
import { priorities, prioritiesIntro } from '../data/content'
import { Reveal } from './Reveal'
import { SectionBackdrop } from './SectionBackdrop'

const icons: Record<(typeof priorities)[number]['icon'], ReactNode> = {
  strategy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19V5M4 19h16M8 15l3-4 3 2 4-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  operations: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 7h16M4 12h10M4 17h14" strokeLinecap="round" />
      <circle cx="18" cy="12" r="2" />
    </svg>
  ),
  leadership: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z" strokeLinejoin="round" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 18h16M7 14l3-4 3 3 4-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export function Priorities() {
  return (
    <section className="section section--muted services" id="priorities">
      <SectionBackdrop variant="muted" />
      <div className="container">
        <Reveal variant="up" className="section__header">
          <p className="eyebrow">Priorities</p>
          <h2 className="section__title">What I'll Fight For</h2>
          <p className="section__lead section__lead--centered">{prioritiesIntro}</p>
        </Reveal>

        <div className="services__grid">
          {priorities.map((priority, index) => (
            <Reveal
              key={priority.title}
              as="article"
              variant="up"
              delay={index * 90}
              className="service-card"
            >
              <div className="service-card__icon">{icons[priority.icon]}</div>
              <h3>{priority.title}</h3>
              <p>{priority.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
