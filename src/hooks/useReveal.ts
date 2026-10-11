import { useEffect } from 'react'

/**
 * One shared IntersectionObserver that adds `is-visible` to every `[data-reveal]` element.
 * A MutationObserver picks up elements rendered later (filters, async content, route changes),
 * which would otherwise stay invisible. Pass the route so the observer restarts per page.
 */
export function useReveal(route?: string) {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('reveal-ready')

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    const watch = (node: ParentNode) => {
      if (node instanceof HTMLElement && node.matches('[data-reveal]') && !node.classList.contains('is-visible')) observer.observe(node)
      node.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)').forEach((el) => observer.observe(el))
    }

    watch(document)
    const mutations = new MutationObserver((records) => {
      for (const record of records) record.addedNodes.forEach((node) => node instanceof HTMLElement && watch(node))
    })
    mutations.observe(document.getElementById('root') ?? document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [route])
}
