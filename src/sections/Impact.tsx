import { CountUp } from '../components/CountUp'
import { Eyebrow } from '../components/SectionHeading'
import { useContent } from '../hooks/useContent'

export function Impact() {
  const { IMPACT_HEADING, IMPACT, IMPACT_NOTE } = useContent()
  return (
    <section id="impact" className="impact" aria-label={IMPACT_HEADING.eyebrow}>
      <div className="container">
        <Eyebrow>{IMPACT_HEADING.eyebrow}</Eyebrow>
        <dl className="impact__grid">
          {IMPACT.map((item, index) => (
            <div key={item.label} className="impact__item" data-reveal>
              <p className="impact__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <dd className="impact__value stat">
                <CountUp to={item.value} />
                <span className="impact__plus">{item.suffix}</span>
              </dd>
              <dt className="impact__label">{item.label}</dt>
            </div>
          ))}
        </dl>
        <p className="impact__note">{IMPACT_NOTE}</p>
      </div>
    </section>
  )
}
