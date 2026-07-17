import { support } from '../data/content'
import { Reveal } from './Reveal'
import { SectionBackdrop } from './SectionBackdrop'

export function Support() {
  return (
    <section className="section section--muted support" id="support">
      <SectionBackdrop variant="muted" />
      <div className="container">
        <Reveal variant="up" className="section__header">
          <p className="eyebrow">{support.eyebrow}</p>
          <h2 className="section__title">{support.title}</h2>
          <p className="section__lead section__lead--centered">{support.intro}</p>
        </Reveal>

        <Reveal variant="up" as="article" className="support-card support-card--single">
          <h3>{support.etransfer.label}</h3>
          <p>{support.etransfer.lead}</p>
          <a href={`mailto:${support.etransfer.email}`} className="support__email">
            {support.etransfer.email}
          </a>
          <p>{support.etransfer.detail}</p>
        </Reveal>

        <Reveal variant="up" delay={120} className="support__eligibility">
          <h3 className="support__eligibility-title">Who can contribute</h3>
          <ul className="support__rules">
            {support.eligibility.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <p className="support__note">{support.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
