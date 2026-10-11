import { BRAND, CONTACT, SOCIALS } from '../data/content'
import { Button } from '../components/Button'
import { useContent, useUi } from '../hooks/useContent'

/** Always dark, whichever theme is chosen: big wordmark, bracketed mono labels and a single orange call to action. */
export function Footer() {
  const { FOOTER_GROUPS, FOOTER_NOTE, LEGAL_LINKS, HERO, CLOSING } = useContent()
  const ui = useUi()
  const groups = [...FOOTER_GROUPS.slice(0, 3), { heading: ui.legal, links: LEGAL_LINKS }]
  return (
    <footer className="footer scope-dark">
      <div className="container footer__grid">
        <div className="footer__lead">
          <p className="footer__tagline">{HERO.note}</p>
          <Button href="#contact" variant="signal" arrow className="btn--mono">
            {CLOSING.cta}
          </Button>
        </div>

        <div className="footer__groups">
          {groups.map((group) => (
            <nav key={group.heading} className="footer__group" aria-label={group.heading}>
              <h2 className="footer__label">[{group.heading}]</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <a className="footer__wordmark" href="#home" aria-label="Odylytics, back to top">
          <img src={BRAND.wordmarkDark} alt="" width="1826" height="565" />
        </a>

        <div className="footer__meta">
          <ul className="footer__social">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <dl className="footer__contact">
            <div>
              <dt>A</dt>
              <dd>{CONTACT.address}</dd>
            </div>
            {CONTACT.phone && (
              <div>
                <dt>P</dt>
                <dd>{CONTACT.phone}</dd>
              </div>
            )}
            <div>
              <dt>E</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </dd>
            </div>
          </dl>
          <p className="footer__note">{FOOTER_NOTE}</p>
          <p className="footer__copy">
            {ui.rights} / <a href="#/cookies">{ui.cookieSettings}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
