import { SectionHeading } from '../components/SectionHeading'
import type { Partner } from '../data/content'
import { useContent } from '../hooks/useContent'

function Logo({ partner }: { partner: Partner }) {
  return (
    <li className="partner-logo">
      <img src={partner.logo ?? ''} alt={partner.name} title={partner.name} loading="lazy" />
    </li>
  )
}

/** One row of equal-sized logos: UTS and HCMUT side by side in the centre, the rest split either side. */
export function Partners() {
  const { PARTNERS, PARTNERS_HEADING } = useContent()
  const core = PARTNERS.filter((partner) => partner.featured)
  const rest = PARTNERS.filter((partner) => !partner.featured)
  const left = rest.slice(0, Math.ceil(rest.length / 2))
  const right = rest.slice(left.length)

  return (
    <section id="partners" className="section section--compact" aria-labelledby="partners-title">
      <div className="container">
        <SectionHeading id="partners-title" {...PARTNERS_HEADING} />
        <div className="partner-row" data-reveal>
          <ul className="partner-row__side partner-row__side--left">
            {left.map((partner) => (
              <Logo key={partner.name} partner={partner} />
            ))}
          </ul>
          <ul className="partner-row__core">
            {core.map((partner) => (
              <Logo key={partner.name} partner={partner} />
            ))}
          </ul>
          <ul className="partner-row__side">
            {right.map((partner) => (
              <Logo key={partner.name} partner={partner} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
