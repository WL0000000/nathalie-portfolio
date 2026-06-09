import { site, stats } from '../data/content'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Business Portfolio</p>
          <h1 className="hero__title">
            Strategic clarity for
            <span className="hero__accent"> ambitious organizations</span>
          </h1>
          <p className="hero__subtitle">{site.tagline}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Start a conversation
            </a>
            <a href="#work" className="btn btn--ghost">
              View selected work
            </a>
          </div>
          <dl className="hero__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual" aria-hidden="true">
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
        </div>
      </div>
    </section>
  )
}
