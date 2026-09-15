import type { ReactNode } from 'react'
import { voterInfo } from '../data/content'
import { Reveal } from './Reveal'

const icons: Record<(typeof voterInfo.links)[number]['icon'], ReactNode> = {
  ballot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 13h16v7H4z" />
      <path d="M7 13V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8" />
      <path d="m9.5 8.5 2 2 3.5-3.5" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
}

export function VoterInfo() {
  return (
    <section className="voter" id="vote">
      <div className="container voter__inner">
        <Reveal variant="up" className="voter__header">
          <p className="eyebrow">{voterInfo.eyebrow}</p>
          <h2 className="voter__title">{voterInfo.title}</h2>
          <p className="voter__intro">{voterInfo.intro}</p>
        </Reveal>

        <div className="voter__cards">
          {voterInfo.links.map((link, index) => (
            <Reveal key={link.href} variant="up" delay={index * 90}>
              <a href={link.href} className="voter__card" target="_blank" rel="noreferrer">
                <span className="voter__icon" aria-hidden="true">
                  {icons[link.icon]}
                </span>
                <span className="voter__label">{link.label}</span>
                <span className="voter__name">{link.title}</span>
                <span className="voter__detail">{link.detail}</span>
                <span className="voter__cta">
                  {voterInfo.cta} <span aria-hidden="true">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
