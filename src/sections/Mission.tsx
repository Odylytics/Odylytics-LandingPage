import { SectionHeading } from '../components/SectionHeading'
import { MISSION } from '../data/content'

export function Mission() {
  return (
    <section id="mission" className="section" aria-labelledby="mission-title">
      <div className="container">
        <SectionHeading id="mission-title" eyebrow={MISSION.eyebrow} lead={MISSION.lead} main={MISSION.main} />

        <div className="mission__statements">
          <div className="card mission__statement" data-reveal>
            <h3 className="label">Mission</h3>
            <p>{MISSION.mission}</p>
          </div>
          <div className="card mission__statement" data-reveal>
            <h3 className="label">Vision</h3>
            <p>{MISSION.vision}</p>
          </div>
        </div>

        <h3 className="mission__subheading" data-reveal>
          {MISSION.pillarsHeading}
        </h3>
        <ol className="mission__pillars">
          {MISSION.pillars.map((pillar, index) => (
            <li key={pillar.title} className="mission__pillar" data-reveal>
              <span className="mission__index">{String(index + 1).padStart(2, '0')}</span>
              <h4>{pillar.title}</h4>
              <p>{pillar.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
