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
              {member.photo ? <img src={member.photo} alt={member.name} loading="lazy" /> : <img className="teaser__placeholder" src={brand.symbol} alt="" />}
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
