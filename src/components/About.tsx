import { site } from '../data/content'
import { Reveal } from './Reveal'

const highlights = [
  'Former management consultant with Fortune 500 and mid-market clients',
  'MBA, Strategy & Organizational Leadership',
  'Fluent in English and French; based in Montreal with global project experience',
]

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <Reveal variant="right" className="about__visual">
          <div className="about__frame">
            <div className="about__portrait">
              <span>NW</span>
            </div>
            <div className="about__frame-accent" />
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal variant="up">
            <p className="eyebrow">About</p>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="section__title">
              Partnering with leaders who want sustainable growth
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="section__lead">
              I am {site.name}, a business strategist focused on helping companies
              translate vision into execution. My work sits at the intersection of
              strategy, operations, and leadership — where plans either succeed or
              stall.
            </p>
          </Reveal>
          <Reveal variant="up" delay={240}>
            <p className="section__text">
              Whether you are scaling into new markets, restructuring internal
              teams, or preparing for a pivotal growth phase, I bring structured
              thinking, stakeholder alignment, and hands-on follow-through.
            </p>
          </Reveal>
          <ul className="about__highlights">
            {highlights.map((item, index) => (
              <Reveal key={item} as="li" variant="left" delay={index * 80}>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
