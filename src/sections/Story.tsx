import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../hooks/useContent'

/** A big rounded panel of team photos, each with a caption, in the style of an editorial product page. */
export function Story() {
  const { STORY, GALLERY } = useContent()
  return (
    <section className="section section--compact" aria-labelledby="story-title">
      <div className="container">
        <SectionHeading id="story-title" center {...STORY} />
        <div className="story" data-reveal>
          <ul className="story__panel">
            {GALLERY.map((photo) => (
              <li key={photo.src} className="story__item">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </li>
            ))}
          </ul>
          <ul className="story__captions">
            {GALLERY.map((photo) => (
              <li key={photo.src}>{photo.caption}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
