import { SectionHeading } from '../components/SectionHeading'
import { TeamGrid } from '../components/TeamGrid'
import { ADVISORS, MEMBERS } from '../data/content'
import type { TeamMember } from '../data/content'
import { useContent, useUi } from '../hooks/useContent'

function Group({ id, heading, intro, members }: { id: string; heading: string; intro: string; members: TeamMember[] }) {
  const ui = useUi()
  return (
    <div className="team-group" aria-labelledby={id}>
      <header className="team-group__head" data-reveal>
        <h2 id={id} className="team-group__title">
          {heading}
        </h2>
        <p>{intro}</p>
      </header>
      {members.length > 0 ? (
        <TeamGrid members={members} />
      ) : (
        <ul className="team-grid">
          {[0, 1, 2].map((slot) => (
            <li key={slot} className="team-card team-card--soon" data-reveal="pop" aria-hidden={slot > 0}>
              <span className="team-card__photo" />
              <span className="team-card__body">
                <span className="soon-line soon-line--title" />
                <span className="soon-line" />
                <span className="soon-tag">{ui.updatingSoon}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function TeamPage() {
  const { TEAM, TEAM_HEADING, TEAM_GROUPS } = useContent()
  return (
    <section className="section page" aria-labelledby="team-title">
      <div className="container">
        <SectionHeading id="team-title" {...TEAM_HEADING} />
        <Group id="team-cofounders" {...TEAM_GROUPS.cofounders} members={TEAM} />
        <Group id="team-advisors" {...TEAM_GROUPS.advisors} members={ADVISORS} />
        <Group id="team-members" {...TEAM_GROUPS.members} members={MEMBERS} />
      </div>
    </section>
  )
}
