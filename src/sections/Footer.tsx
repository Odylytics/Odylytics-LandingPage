import { BRAND, CONTACT, SOCIALS } from '../data/content'
import { Button } from '../components/Button'
import { useContent, useUi } from '../hooks/useContent'

/** Always dark, whichever theme is chosen: a dim giant wordmark half-covered by a rounded panel with the links. */
export function Footer() {
  const { FOOTER_GROUPS, FOOTER_NOTE, LEGAL_LINKS, HERO, CLOSING } = useContent()
  const ui = useUi()
  const groups = [...FOOTER_GROUPS.slice(0, 3), { heading: ui.legal, links: LEGAL_LINKS }]
  return (
    <footer className="footer scope-dark">
      <div className="container">
        <a className="footer__wordmark" href="#home" aria-label="Odylytics, back to top">
          <img src={BRAND.wordmarkDark} alt="" width="1826" height="565" />
        </a>
      </div>

      <div className="footer__panel">
        <div className="container footer__grid">
          <div className="footer__lead">
            <p className="footer__tagline">{HERO.note}</p>
            <Button href="#contact" variant="primary" arrow>
              {CLOSING.cta}
            </Button>
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
          </div>

          <div className="footer__groups">
            {groups.map((group) => (
              <nav key={group.heading} className="footer__group" aria-label={group.heading}>
                <h2 className="footer__label">{group.heading}</h2>
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
        </div>

        <div className="container footer__bar">
          <p className="footer__note">{FOOTER_NOTE}</p>
          <div className="footer__bar-row">
            <p className="footer__copy">
              {ui.rights} / <a href="#/cookies">{ui.cookieSettings}</a>
            </p>
            <ul className="footer__social">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
