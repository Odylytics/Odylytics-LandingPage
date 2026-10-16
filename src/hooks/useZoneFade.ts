import { useLayoutEffect } from 'react'

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))
/** The swap begins once the incoming section's top passes this fraction of the viewport. */
const LEAD = 0.92
/** …and completes after its top has climbed this fraction of the viewport further. */
const TRAVEL = 0.6

/**
 * Mercury-style background morph, home only: scrubbing `--zone-mix` (0→1, see index.css)
 * from the scroll position blends every colour token from the old near-black palette to
 * the light one as the product section scrolls in, and back as the blog arrives. Scrubbed,
 * so scrolling back reverses it mid-way. The `zone-on` class scopes the blend block in
 * index.css to this route.
 */
export function useZoneFade(route: string) {
  useLayoutEffect(() => {
    if (route !== '/') return
    const root = document.documentElement
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    let raf = 0
    let last = -1

    const apply = (mix: number) => {
      root.style.setProperty('--zone-mix', mix.toFixed(3))
      root.style.colorScheme = mix > 0.5 ? 'light' : 'dark'
      meta?.setAttribute('content', mix > 0.5 ? '#FAFAFB' : '#0B0A0E')
    }

    const update = () => {
      raf = 0
      const product = document.getElementById('product')
      const blog = document.getElementById('blog')
      let mix = 0
      if (product && blog) {
        const vh = window.innerHeight
        const span = vh * TRAVEL
        const into = clamp01((vh * LEAD - product.getBoundingClientRect().top) / span)
        const outof = clamp01((vh * LEAD - blog.getBoundingClientRect().top) / span)
        mix = into * (1 - outof)
      }
      if (Math.abs(mix - last) >= 0.001) {
        last = mix
        apply(mix)
      }
    }

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    root.classList.add('zone-on')
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      root.classList.remove('zone-on')
      root.style.removeProperty('--zone-mix')
      root.style.colorScheme = ''
      meta?.setAttribute('content', '#F3F2EE')
    }
  }, [route])
}
