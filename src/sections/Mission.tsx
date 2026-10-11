import { Eyebrow } from '../components/SectionHeading'
import { useContent, useUi } from '../hooks/useContent'

export function Mission() {
  const { MISSION } = useContent()
  const ui = useUi()
  return (
    <section id="mission" className="section" aria-labelledby="mission-title">
      <div className="container split">
        <div className="split__aside" data-reveal>
          <Eyebrow>{MISSION.eyebrow}</Eyebrow>
          <h2 id="mission-title" className="h2-serif">
            {MISSION.lead} <em className="em">{MISSION.main}</em>
          </h2>
          <div className="split__statement">
            <h3 className="label">{ui.mission}</h3>
            <p>{MISSION.mission}</p>
          </div>
          <div className="split__statement">
            <h3 className="label">{ui.vision}</h3>
            <p>{MISSION.vision}</p>
          </div>
        </div>

        <div className="split__main">
          <h3 className="split__heading" data-reveal>
            {MISSION.pillarsHeading}
          </h3>
          <ol className="pillars">
            {MISSION.pillars.map((pillar, index) => (
              <li key={pillar.title} className="card pillar" data-reveal="pop">
                <span className="pillar__index">{String(index + 1).padStart(2, '0')}</span>
                <h4>{pillar.title}</h4>
                <p>{pillar.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
