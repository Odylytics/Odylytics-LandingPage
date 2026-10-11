import { SectionHeading } from '../components/SectionHeading'
import { SOLUTIONS } from '../data/content'
import { useContent, useUi } from '../hooks/useContent'
import { useBrandAssets } from '../hooks/useBrandAssets'

export function Recognition() {
  const { RECOGNITION, RECOGNITION_HEADING, GALLERY, GALLERY_HEADING } = useContent()
  const ui = useUi()
  const { solutionLogo } = useBrandAssets()
  const prizes = RECOGNITION.flatMap((group) => group.items.map((item) => ({ ...item, solutionId: group.solutionId, solutionName: group.solutionName })))

  return (
    <section id="recognition" className="section" aria-labelledby="recognition-title">
      <div className="container">
        <SectionHeading id="recognition-title" {...RECOGNITION_HEADING} />

        <ul className="prize-grid">
          {prizes.map((prize, index) => {
            const logo = SOLUTIONS.find((solution) => solution.id === prize.solutionId)?.logo
            return (
              <li key={index} className="card card--hover prize" data-reveal>
                <div className="prize__media">
                  {prize.image ? <img src={prize.image} alt={`${prize.title}, ${prize.issuer}`} loading="lazy" /> : <span className="logo-placeholder">{ui.photoSoon}</span>}
                  <span className={`prize__medal${prize.place === '1st' ? ' prize__medal--first' : ''}`}>{prize.place ?? prize.type}</span>
                </div>
                <div className="prize__body">
                  <span className="logo-chip prize__project">
                    {logo ? <img src={solutionLogo(logo)} alt={prize.solutionName} loading="lazy" /> : prize.solutionName}
                  </span>
                  <h3 className="prize__title">{prize.title}</h3>
                  <p className="prize__issuer">
                    {prize.issuer}
                    {prize.year && <> · {prize.year}</>}
                  </p>
                  {prize.href ? (
                    <a className="text-btn" href={prize.href} target="_blank" rel="noreferrer">
                      {ui.readTheArticle}
                    </a>
                  ) : (
                    <span className="prize__soon">{ui.articleLinkSoon}</span>
                  )}
                </div>
              </li>
            )
          })}
        </ul>

        <h3 className="mission__subheading" data-reveal>
          {GALLERY_HEADING}
        </h3>
        <ul className="gallery">
          {GALLERY.map((photo) => (
            <li key={photo.src} className="gallery__item" data-reveal>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="gallery__caption">{photo.caption}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
