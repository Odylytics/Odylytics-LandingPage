import { CONTACT, FOOTER_GROUPS, FOOTER_NOTE, LEGAL_LINKS, SOCIALS } from '../data/content'
import { useBrandAssets } from '../hooks/useBrandAssets'

export function Footer() {
  const brand = useBrandAssets()
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__note">{FOOTER_NOTE}</p>

        <div className="footer__top">
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
            <h2 className="footer__heading">Contact</h2>
            <ul>
              <li>{CONTACT.address}</li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>
            <h2 className="footer__heading footer__heading--spaced">Follow</h2>
            <ul>
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a href={social.href}>{social.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <a className="footer__brand" href="#home" aria-label="Odylytics, back to top">
            <img src={brand.wordmark} alt="" width="1826" height="565" />
          </a>
          <p>© 2026 Odylytics. All rights reserved.</p>
          <ul className="footer__legal">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
