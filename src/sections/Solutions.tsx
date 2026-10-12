import { SectionHeading } from '../components/SectionHeading'
import { useContent, useUi } from '../hooks/useContent'
import { useBrandAssets } from '../hooks/useBrandAssets'

export function Solutions() {
  const { SOLUTIONS, SOLUTIONS_HEADING } = useContent()
  const ui = useUi()
  const { solutionLogo } = useBrandAssets()
  return (
    <section id="solutions" className="section" aria-labelledby="solutions-title">
      <div className="container">
        <SectionHeading id="solutions-title" {...SOLUTIONS_HEADING} />

        <ul className="sol-grid">
          {SOLUTIONS.map((solution, index) => (
            <li key={solution.id} className="card card--hover sol-card" data-reveal="pop">
              <div className="sol-card__top">
                <span className="logo-chip sol-card__logo">
                  {solution.logo ? (
                    <img src={solutionLogo(solution.logo)} alt="" loading="lazy" />
                  ) : (
                    <span className="logo-placeholder">Logo</span>
                  )}
                </span>
                {solution.flagship ? <span className="tag">Flagship</span> : <span className="label">{String(index + 1).padStart(2, '0')}</span>}
              </div>
              <div>
                <h3 className={solution.logo ? 'sr-only' : 'sol-card__name'}>{solution.name}</h3>
                {solution.category && <p className="sol-card__cat">{solution.category}</p>}
              </div>
              {solution.oneLiner && <p className="sol-card__tagline">{solution.oneLiner}</p>}
              {solution.soon ? (
                <div className="soon-stack" aria-label={ui.updatingSoon}>
                  <span className="soon-line" />
                  <span className="soon-line soon-line--short" />
                  <span className="soon-tag">{ui.updatingSoon}</span>
                </div>
              ) : (
                <p className="sol-card__desc">{solution.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
