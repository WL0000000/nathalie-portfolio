import { aboutHighlights, site } from '../data/content'
import { Reveal } from './Reveal'

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
              Career counselling, employment services, and real estate
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="section__lead">
              I am {site.name}, based in Coquitlam. I have worked in career counselling,
              government-funded immigrant programs, and real estate for more than eight years.
            </p>
          </Reveal>
          <Reveal variant="up" delay={240}>
            <p className="section__text">
              My background includes employment consulting with S.U.C.C.E.S.S. and Training
              Innovations, ESL instruction, and community event coordination. I am comfortable
              working with diverse clients, leading workshops, and managing programs under
              tight deadlines.
            </p>
          </Reveal>
          <ul className="about__highlights">
            {aboutHighlights.map((item, index) => (
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
