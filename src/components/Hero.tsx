import { useEffect, useState } from 'react'
import { site, stats } from '../data/content'
import { Reveal } from './Reveal'
import { SectionBackdrop } from './SectionBackdrop'

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setLoaded(true))
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className={`hero${loaded ? ' hero--loaded' : ''}`} id="top">
      <SectionBackdrop variant="hero" />
      <div className="container hero__grid">
        <div className="hero__content">
          <Reveal immediate variant="fade" delay={0}>
            <p className="eyebrow">Professional Portfolio</p>
          </Reveal>
          <Reveal immediate variant="up" delay={120}>
            <h1 className="hero__title">
              Guidance and clarity for
              <span className="hero__accent"> careers and community</span>
            </h1>
          </Reveal>
          <Reveal immediate variant="up" delay={280}>
            <p className="hero__subtitle">{site.tagline}</p>
          </Reveal>
          <Reveal immediate variant="up" delay={440}>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary">
                Start a conversation
              </a>
              <a
                href={site.resumeUrl}
                className="btn btn--ghost"
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
            </div>
          </Reveal>
          <Reveal immediate variant="up" delay={600}>
            <dl className="hero__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero__stat">
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal immediate variant="scale" delay={360} className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-top">
              <span className="hero__avatar">
                <img
                  src={site.profilePhoto}
                  alt={`Portrait of ${site.name}`}
                  width={116}
                  height={144}
                  loading="eager"
                  decoding="async"
                />
              </span>
              <div>
                <p className="hero__card-name">{site.name}</p>
                <p className="hero__card-role">{site.title}</p>
              </div>
            </div>
            <ul className="hero__card-list">
              <li>Career counselling &amp; job search</li>
              <li>Cross-cultural integration</li>
              <li>Real estate advisory</li>
            </ul>
            <div className="hero__card-badge">Serving Coquitlam &amp; the Lower Mainland</div>
          </div>
          <div className="hero__glow" />
        </Reveal>
      </div>
    </section>
  )
}
