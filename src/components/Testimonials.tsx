import { testimonials } from '../data/content'
import { Reveal } from './Reveal'
import { SectionBackdrop } from './SectionBackdrop'

export function Testimonials() {
  return (
    <section className="section section--muted testimonials" id="testimonials">
      <SectionBackdrop variant="muted" />
      <div className="container">
        <Reveal variant="up" className="section__header">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section__title">Program and employer results</h2>
        </Reveal>

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} as="figure" variant="up" delay={index * 120} className="testimonial-card">
              <blockquote>
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
