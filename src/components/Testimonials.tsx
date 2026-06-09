import { testimonials } from '../data/content'

export function Testimonials() {
  return (
    <section className="section section--muted testimonials" id="testimonials">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section__title">Trusted by leaders across sectors</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <figure key={item.name} className="testimonial-card">
              <blockquote>
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
