import { useEffect, useState } from 'react'
import { aboutGroups, aboutIntro } from '../data/content'
import { Reveal } from './Reveal'

const galleryPhotos = [
  { src: '/natalie-headshot.jpg', alt: 'Natalie Wang' },
  { src: '/natalie-certificate.jpg', alt: 'Natalie Wang receiving Certificate of Appreciation from Sutton Group' },
  { src: '/natalie-tennis-club.jpg', alt: 'Natalie Wang at Coquitlam Tennis Club Canada 150 event' },
]

export function About() {
  const [activePhoto, setActivePhoto] = useState(0)
  const [autoKey, setAutoKey] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActivePhoto(i => (i + 1) % galleryPhotos.length)
    }, 4000)
    return () => clearInterval(id)
  }, [autoKey])

  const goTo = (i: number) => {
    setActivePhoto(i)
    setAutoKey(k => k + 1)
  }

  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <Reveal variant="right" className="about__visual">
          <div className="about__frame">
            <div className="about__gallery">
              {galleryPhotos.map((photo, i) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  className={`about__gallery-img${i === activePhoto ? ' about__gallery-img--active' : ''}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
            <div className="about__frame-accent" />
          </div>
          <div className="about__gallery-dots">
            {galleryPhotos.map((_, i) => (
              <button
                key={i}
                className={`about__gallery-dot${i === activePhoto ? ' about__gallery-dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`View photo ${i + 1}`}
              />
            ))}
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal variant="up">
            <p className="eyebrow">About Natalie</p>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="section__title">A neighbour who shows up</h2>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="section__lead">{aboutIntro}</p>
          </Reveal>

          <div className="about__groups">
            {aboutGroups.map((group, index) => (
              <Reveal key={group.title} variant="up" delay={200 + index * 80} className="about__group">
                <h3 className="about__group-title">{group.title}</h3>
                <ul className="about__highlights">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
