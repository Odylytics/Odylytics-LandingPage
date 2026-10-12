import { Button } from '../components/Button'
import { CheckIcon } from '../components/Icons'
import { SectionHeading } from '../components/SectionHeading'
import { useContent, useUi } from '../hooks/useContent'
import { useBrandAssets } from '../hooks/useBrandAssets'

export function Featured() {
  const { FEATURED, FEATURED_HEADING } = useContent()
  const ui = useUi()
  const { solutionLogo } = useBrandAssets()
  return (
    <section id="featured" className="section" aria-labelledby="featured-title">
      <div className="container">
        <SectionHeading id="featured-title" {...FEATURED_HEADING} />

        <div className="feat-grid">
          {FEATURED.map((item) => (
            <article key={item.id} className="card feat-card" aria-labelledby={`feat-${item.id}`} data-reveal>
              <div className="feat-card__head">
                <span className="logo-chip feat-card__logo">
                  <img src={solutionLogo(item.logo)} alt="" loading="lazy" />
                </span>
                <span className="tag">{item.badge}</span>
              </div>

              <h3 id={`feat-${item.id}`} className={item.logo ? 'sr-only' : 'feat-card__name'}>
                {item.name}
              </h3>
              {item.soon ? (
                <>
                  <div className="feat-card__soon" aria-label={ui.updatingSoon}>
                    <span className="soon-line soon-line--title" />
                    <span className="soon-line" />
                    <span className="soon-line soon-line--short" />
                    <span className="soon-tag">{ui.updatingSoon}</span>
                  </div>
                  <div className="feat-card__soon feat-card__soon--features" aria-hidden="true">
                    {[0, 1, 2, 3].map((slot) => (
                      <span key={slot} className="soon-line" />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="feat-card__tagline">{item.tagline}</p>

                  <p className="feat-card__problem">{item.problem}</p>

                  <ul className="feat-card__features" aria-label={`${item.name} features`}>
                    {item.features.map((feature) => (
                      <li key={feature.title} className="feat-card__feature">
                        <CheckIcon />
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <dl className="feat-card__metrics">
                    {item.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="metric">
                        <dt>{metric.label}</dt>
                        <dd className="stat">{metric.value}</dd>
                      </div>
                    ))}
                  </dl>
                </>
              )}

              {/* TODO(content): link each flagship to its product page or demo request. */}
              <Button href="#contact" variant="outline">
                {item.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
