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
              Supporting people through career, cultural, and life transitions
            </h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="section__lead">
              I am {site.name}, a career strategist and real estate advisor based
              in Coquitlam, BC. My work spans cross-cultural counselling, job search
              coaching, and community program coordination — always with a sincere
              commitment to the best interests of those I serve.
            </p>
          </Reveal>
          <Reveal variant="up" delay={240}>
            <p className="section__text">
              From government-funded immigrant services and employment consulting to
              real estate and freelance writing, I bring strong interpersonal skills,
              public-speaking experience, and a proven ability to deliver results under
              pressure.
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
