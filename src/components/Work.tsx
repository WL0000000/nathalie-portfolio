import { projects } from '../data/content'
import { Reveal } from './Reveal'
import { SectionBackdrop } from './SectionBackdrop'

export function Work() {
  return (
    <section className="section work" id="work">
      <SectionBackdrop variant="work" />
      <div className="container">
        <Reveal variant="up" className="section__header">
          <p className="eyebrow">Highlights</p>
          <h2 className="section__title">Community and professional highlights</h2>
          <p className="section__lead section__lead--centered">
            School leadership, employment programs, and community initiatives across
            Coquitlam and the Lower Mainland.
          </p>
        </Reveal>

        <div className="work__grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} as="article" variant="up" delay={index * 100} className="work-card">
              <div className="work-card__meta">
                <span className="work-card__category">{project.category}</span>
                <span className="work-card__year">{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
