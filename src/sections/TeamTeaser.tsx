import { SectionHeading } from '../components/SectionHeading'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { useContent, useUi } from '../hooks/useContent'

/** Home-page entry to the team page: five portraits and a link. */
export function TeamTeaser() {
  const { TEAM, TEAM_TEASER } = useContent()
  const ui = useUi()
  const brand = useBrandAssets()
  return (
    <section id="team" className="section" aria-labelledby="team-teaser-title">
      <div className="container">
        <SectionHeading id="team-teaser-title" {...TEAM_TEASER} />
        <ul className="teaser" data-reveal>
          {TEAM.map((member, index) => (
            <li key={index} className="teaser__item">
              <span className="teaser__photo">
                {member.photo ? <img src={member.photo} alt={member.name} loading="lazy" /> : <img className="teaser__placeholder" src={brand.symbol} alt="" />}
              </span>
              <span className="teaser__name">{member.name}</span>
              <span className="teaser__role">{member.shortRole}</span>
            </li>
          ))}
        </ul>
        <p className="news__more" data-reveal>
          <a className="text-btn" href="#/team">
            {ui.teamCta}
          </a>
        </p>
      </div>
    </section>
  )
}
