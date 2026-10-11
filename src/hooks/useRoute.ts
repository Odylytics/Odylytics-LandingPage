import { useEffect, useSyncExternalStore } from 'react'

export type Route = 'home' | 'blog' | 'privacy' | 'terms' | 'login' | 'admin'

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

function getRoute(): Route {
  const hash = window.location.hash
  if (hash === '#/blog') return 'blog'
  if (hash === '#/privacy') return 'privacy'
  if (hash === '#/terms') return 'terms'
  if (hash === '#/login') return 'login'
  if (hash === '#/admin') return 'admin'
  return 'home'
}

/** Tiny hash router: `#/blog`, `#/privacy`, `#/terms`, `#/login`, `#/admin`; every other hash is a home-page anchor. */
export function useRoute(): Route {
  const route = useSyncExternalStore(subscribe, getRoute, () => 'home' as Route)

  useEffect(() => {
    const hash = window.location.hash
    const target = route === 'home' && hash.length > 1 ? document.querySelector<HTMLElement>(hash) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [route])

  return route
}
