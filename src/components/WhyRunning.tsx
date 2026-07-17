import { whyRunning } from '../data/content'
import { Reveal } from './Reveal'
import { SectionBackdrop } from './SectionBackdrop'

export function WhyRunning() {
  return (
    <section className="section why" id="why">
      <SectionBackdrop variant="work" />
      <div className="container why__inner">
        <Reveal variant="up" className="why__header">
          <p className="eyebrow">My story</p>
          <h2 className="section__title">Why I'm Running</h2>
        </Reveal>

        <div className="why__body">
          {whyRunning.map((paragraph, index) => (
            <Reveal key={index} as="p" variant="up" delay={index * 90} className="why__para">
              {paragraph}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
