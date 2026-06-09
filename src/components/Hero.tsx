import { site, stats } from '../data/content'
import { Reveal } from './Reveal'
import { SectionBackdrop } from './SectionBackdrop'

export function Hero() {
  return (
    <section className="hero" id="top">
      <SectionBackdrop variant="hero" />
      <div className="container hero__grid">
        <div className="hero__content">
          <Reveal immediate variant="fade" delay={0}>
            <p className="eyebrow">Business Portfolio</p>
          </Reveal>
          <Reveal immediate variant="up" delay={80}>
            <h1 className="hero__title">
              Strategic clarity for
              <span className="hero__accent"> ambitious organizations</span>
            </h1>
          </Reveal>
          <Reveal immediate variant="up" delay={160}>
            <p className="hero__subtitle">{site.tagline}</p>
          </Reveal>
          <Reveal immediate variant="up" delay={240}>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary">
                Start a conversation
              </a>
              <a href="#work" className="btn btn--ghost">
                View selected work
              </a>
            </div>
          </Reveal>
          <Reveal immediate variant="up" delay={320}>
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

        <Reveal immediate variant="scale" delay={200} className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-top">
              <span className="hero__avatar">NL</span>
              <div>
                <p className="hero__card-name">{site.name}</p>
                <p className="hero__card-role">{site.title}</p>
              </div>
            </div>
            <ul className="hero__card-list">
              <li>Strategy &amp; growth planning</li>
              <li>Operations optimization</li>
              <li>Executive advisory</li>
            </ul>
            <div className="hero__card-badge">Available for Q3 engagements</div>
          </div>
          <div className="hero__glow" />
        </Reveal>
      </div>
    </section>
  )
}
