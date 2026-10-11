import { CONTACT, SOCIALS } from '../data/content'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { useContent, useUi } from '../hooks/useContent'

export function Footer() {
  const brand = useBrandAssets()
  const { FOOTER_GROUPS, FOOTER_NOTE, LEGAL_LINKS, HERO } = useContent()
  const ui = useUi()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <p className="footer__tagline">{HERO.note}</p>
          <div className="footer__cols">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.heading} className="footer__col">
                <h2 className="footer__heading">{group.heading}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer__col">
              <h2 className="footer__heading">{ui.contact}</h2>
              <ul>
                <li>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
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

        <p className="footer__note">{FOOTER_NOTE}</p>

        <div className="footer__bottom">
          <p>{ui.rights}</p>
          <ul className="footer__legal">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img className="footer__mark" src={brand.wordmark} alt="" aria-hidden="true" width="1826" height="565" />
    </footer>
  )
}
