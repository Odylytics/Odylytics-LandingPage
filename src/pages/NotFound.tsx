import { useEffect } from 'react'
import { StateScreen } from '../components/StateScreen'
import { isUnknownPath } from '../hooks/useRoute'
import { useT } from '../lib/lang'

/** Shown for unknown `#/…` routes, missing profiles and any path other than `/`. */
export function NotFound() {
  const t = useT()
  const requested = isUnknownPath() ? window.location.pathname : window.location.hash.slice(1)

  useEffect(() => {
    const title = document.title
    document.title = 'Page not found - Odylytics'
    return () => {
      document.title = title
    }
  }, [])

  // On a bad path, a `#/…` link would resolve to `/bad-path#/…` and stay on this page.
  useEffect(() => {
    if (!isUnknownPath()) return
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return
      event.preventDefault()
      window.location.assign(`/${link.hash}`)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return (
    <StateScreen
      kind="lost"
      label="Error 404"
      title="This page took a wrong turn."
      text="The link may be broken, or the page may have moved. Head back home, or tell us what you were looking for."
      actions={
        <>
          <a className="btn btn--primary" href="#/">
            {t('Back to home')}
          </a>
          <a className="btn btn--outline" href="#/contact">
            {t('Contact us')}
          </a>
        </>
      }
      note={
        <>
          <ul className="state__links">
            {[
              ['Product', '#/product/climate-tech'],
              ['Research', '#/research'],
              ['Team', '#/team/co-founders'],
              ['Blog', '#/blog'],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href}>{t(label)}</a>
              </li>
            ))}
          </ul>
          {requested && (
            <p className="state__path">
              {t('Requested')} <code>{requested}</code>
            </p>
          )}
        </>
      }
    />
  )
}
