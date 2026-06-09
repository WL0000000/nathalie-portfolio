import { site } from '../data/content'

const highlights = [
  'Former management consultant with Fortune 500 and mid-market clients',
  'MBA, Strategy & Organizational Leadership',
  'Fluent in English and French; based in Montreal with global project experience',
]

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__visual">
          <div className="about__frame">
            <div className="about__portrait">
              <span>NL</span>
            </div>
            <div className="about__frame-accent" />
          </div>
        </div>

        <div className="about__content">
          <p className="eyebrow">About</p>
          <h2 className="section__title">
            Partnering with leaders who want sustainable growth
          </h2>
          <p className="section__lead">
            I am {site.name}, a business strategist focused on helping companies
            translate vision into execution. My work sits at the intersection of
            strategy, operations, and leadership — where plans either succeed or
            stall.
          </p>
          <p className="section__text">
            Whether you are scaling into new markets, restructuring internal
            teams, or preparing for a pivotal growth phase, I bring structured
            thinking, stakeholder alignment, and hands-on follow-through.
          </p>
          <ul className="about__highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
