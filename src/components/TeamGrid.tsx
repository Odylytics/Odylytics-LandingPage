import type { TeamMember } from '../data/content'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { useUi } from '../hooks/useContent'

/** Portrait cards that link to each member's own profile page. */
export function TeamGrid({ members }: { members: TeamMember[] }) {
  const brand = useBrandAssets()
  const ui = useUi()
  return (
    <ul className="team-grid">
      {members.map((member) => (
        <li key={member.slug} data-reveal="pop">
          <a className="team-card" href={`#/team/${member.slug}`}>
            <span className="team-card__photo">
              {member.photo ? <img src={member.photo} alt={`Portrait of ${member.name}`} loading="lazy" /> : <img className="team-card__placeholder" src={brand.symbol} alt="" />}
            </span>
            <span className="team-card__body">
              <span className="team-card__name">{member.name}</span>
              <span className="team-card__role">{member.role}</span>
              <span className="team-card__bio">{member.bio}</span>
              <span className="team-card__more">{ui.viewProfile}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
