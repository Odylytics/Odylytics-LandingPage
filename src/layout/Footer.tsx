import type { ReactNode } from 'react'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '../components/Icons'
import { SOCIALS } from '../data/content'
import { FOOTER_COLUMNS, FOOTER_STATEMENT } from '../data/site'
import { openConsentSettings } from '../lib/consent'
import { useT } from '../lib/lang'

const YEAR = 2026
const SOCIAL_ICONS: Record<string, ReactNode> = {
  LinkedIn: <LinkedInIcon />,
  Facebook: <FacebookIcon />,
  Instagram: <InstagramIcon />,
}

/** Always dark. Wide link columns for product, research, team, company and every legal document. */
export function Footer() {
  const t = useT()
  return (
    <footer className="footer scope-dark">
      <div className="container">
        <div className="footer__top">
          <a className="footer__brand" href="#/" aria-label="Odylytics, home">
            <img src="/assets/brand/odylytics-wordmark-dark.svg" alt="" width="1826" height="565" />
          </a>
          <p className="footer__tagline">{t('One AI firm. Six solutions.')}</p>
          <ul className="footer__social">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer" aria-label={`Odylytics on ${social.label}`} title={social.label}>
                  {SOCIAL_ICONS[social.label]}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--outline" href="#/contact">
            {t('Get in touch')}
          </a>
        </div>

        <div className="footer__cols">
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.heading} className="footer__col" aria-label={column.heading}>
              <h2 className="footer__label">{t(column.heading)}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{t(link.label)}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="footer__statement">{FOOTER_STATEMENT}</p>

        <div className="footer__bar">
          <p>
            © {YEAR} Odylytics. {t('All rights reserved.')}
          </p>
          <ul className="footer__bar-links">
            <li>
              <a href="#/legal/privacy">{t('Privacy')}</a>
            </li>
            <li>
              <a href="#/legal/terms">{t('Terms')}</a>
            </li>
            <li>
              <a href="#/legal/cookies">{t('Cookies')}</a>
            </li>
            <li>
              <button type="button" onClick={openConsentSettings}>
                {t('Cookie settings')}
              </button>
            </li>
            <li>
              <a href="#/legal">{t('All policies')}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
