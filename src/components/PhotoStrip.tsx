import { Reveal } from './Reveal'

const photos = [
  {
    src: '/natalie-community-women.jpg',
    alt: 'Natalie Wang with community leaders at a campaign gathering',
    caption: 'With community leaders across the Tri-Cities',
  },
  {
    src: '/natalie-tennis-action.jpg',
    alt: 'Natalie Wang playing tennis at Coquitlam Tennis Club',
    caption: 'Active in the Coquitlam community',
  },
  {
    src: '/natalie-community-fundraiser.jpg',
    alt: 'Natalie Wang connecting with community members at a school gym event',
    caption: 'Connecting with the community',
  },
  {
    src: '/natalie-supporters-group.jpg',
    alt: 'Natalie Wang celebrating with a group of supporters at a campaign event',
    caption: 'Rallying supporters across the community',
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
