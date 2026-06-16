import { Reveal } from './Reveal'

const photos = [
  {
    src: '/natalie-award-ceremony.jpg',
    alt: 'Natalie Wang receiving the Sutton Group Platinum Sales Award',
    caption: 'Sutton Group Platinum Sales Award',
  },
  {
    src: '/natalie-tennis-action.jpg',
    alt: 'Natalie Wang playing tennis at Coquitlam Tennis Club',
    caption: 'Active in the Coquitlam community',
  },
  {
    src: '/natalie-staff-appreciation.jpg',
    alt: 'Natalie Wang with community partners at an appreciation event',
    caption: 'Celebrating with community partners',
  },
  {
    src: '/natalie-community-fundraiser.jpg',
    alt: 'Natalie Wang connecting with community members at a school gym event',
    caption: 'Connecting with the community',
  },
]

export function PhotoStrip() {
  return (
    <div className="photo-strip">
      <div className="container photo-strip__grid">
        {photos.map((photo, i) => (
          <Reveal key={photo.src} variant="up" delay={i * 120}>
            <figure className="photo-strip__item">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
