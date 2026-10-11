import { SectionHeading } from '../components/SectionHeading'
import { RECOGNITION, RECOGNITION_HEADING, SOLUTIONS } from '../data/content'
import type { RecognitionType } from '../data/content'
import { useBrandAssets } from '../hooks/useBrandAssets'

const typeClass: Record<RecognitionType, string> = {
  AWARD: 'tag',
  CERTIFICATION: 'tag tag--neutral',
  ACCELERATOR: 'tag tag--signal',
}

export function Recognition() {
  const { solutionLogo } = useBrandAssets()
  return (
    <section id="recognition" className="section" aria-labelledby="recognition-title">
      <div className="container">
        <SectionHeading id="recognition-title" {...RECOGNITION_HEADING} />

        <div className="rec-columns">
          {RECOGNITION.map((group) => {
            const logo = SOLUTIONS.find((solution) => solution.id === group.solutionId)?.logo
            return (
              <div key={group.solutionId} className="card rec-column" data-reveal>
                <h3 className="rec-column__title">
                  {logo && (
                    <span className="logo-chip">
                      <img src={solutionLogo(logo)} alt="" loading="lazy" />
                    </span>
                  )}
                  <span>{group.solutionName}</span>
                </h3>
                <ul>
                  {group.items.map((item, index) => (
                    <li key={index} className="rec-card">
                      <div className="rec-card__logo">
                        {item.issuerLogo ? (
                          <img src={item.issuerLogo} alt={`${item.issuer} logo`} loading="lazy" />
                        ) : item.place ? (
                          <span className={`rec-card__medal${item.place === '1st' ? ' rec-card__medal--first' : ''}`} aria-hidden="true">
                            {item.place}
                          </span>
                        ) : (
                          <span className="logo-placeholder" aria-hidden="true">
                            Logo
                          </span>
                        )}
                      </div>
                      <div className="rec-card__content">
                        <span className={typeClass[item.type]}>{item.type}</span>
                        <h4 className="rec-card__title">{item.title}</h4>
                        <p className="rec-card__meta">
                          {item.issuer}
                          {item.year && (
                            <>
                              {' '}
                              <span aria-hidden="true">·</span> {item.year}
                            </>
                          )}
                        </p>
                        {item.context && <p className="rec-card__context">{item.context}</p>}
                        <div className="rec-card__photo">
                          {item.image ? (
                            <img src={item.image} alt={`${item.title}, ${item.issuer}`} loading="lazy" />
                          ) : (
                            <span className="logo-placeholder">Photo coming soon</span>
                          )}
                        </div>
                        {item.href ? (
                          <a className="text-btn" href={item.href} target="_blank" rel="noreferrer">
                            Read the article ›
                          </a>
                        ) : (
                          <span className="rec-card__soon">Article link coming soon</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
