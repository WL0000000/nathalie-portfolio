import { projects } from '../data/content'

export function Work() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Selected Work</p>
          <h2 className="section__title">Recent engagements &amp; outcomes</h2>
          <p className="section__lead section__lead--centered">
            A sample of projects across industries. Client names are anonymized
            where required by confidentiality agreements.
          </p>
        </div>

        <div className="work__grid">
          {projects.map((project) => (
            <article key={project.title} className="work-card">
              <div className="work-card__meta">
                <span className="work-card__category">{project.category}</span>
                <span className="work-card__year">{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
