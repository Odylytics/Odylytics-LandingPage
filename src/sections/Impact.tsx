import { CountUp } from '../components/CountUp'
import { ImpactIcon } from '../components/Icons'
import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../hooks/useContent'

export function Impact() {
  const { IMPACT_HEADING, IMPACT, IMPACT_NOTE } = useContent()
  return (
    <section id="impact" className="section impact" aria-labelledby="impact-title">
      <div className="container">
        <SectionHeading id="impact-title" {...IMPACT_HEADING} />

        <dl className="impact__grid">
          {IMPACT.map((item, index) => (
            <div key={item.icon} className={`impact-card${index === 0 ? ' impact-card--lead' : ''}`} data-reveal="pop">
              <span className="impact-card__icon">
                <ImpactIcon name={item.icon} />
              </span>
              <dd className="impact-card__value stat">
                <CountUp to={item.value} />
                {item.suffix}
              </dd>
              <dt className="impact-card__label">{item.label}</dt>
            </div>
          ))}
        </dl>

        <p className="impact__note" data-reveal>
          {IMPACT_NOTE}
        </p>
      </div>
    </section>
  )
}
