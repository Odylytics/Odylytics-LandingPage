import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../hooks/useContent'

/** A rounded panel of team photos shown whole (never cropped): one large, two stacked beside it. */
export function Story() {
  const { STORY, GALLERY } = useContent()
  // Large photo first: the certificate shot shows everyone in frame.
  const order = [GALLERY[1], GALLERY[0], GALLERY[2]]
  return (
    <section className="section section--compact" aria-labelledby="story-title">
      <div className="container">
        <SectionHeading id="story-title" center {...STORY} />
        <ul className="story" data-reveal>
          {order.map((photo) => (
            <li key={photo.src} className="story__item">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="story__caption">{photo.caption}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
