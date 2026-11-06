import { useEffect } from 'react'
import type { RefObject } from 'react'
import { glideTo } from './useSmoothScroll'

const DURATION = 4.0
const KEYS = new Set(['ArrowDown', 'PageDown', ' ', 'Spacebar'])

/**
 * Home only: the first downward scroll from the very top glides past the pinned hero
 * intro to `target`, docked under the fixed nav. Re-arms whenever the page is back at 0.
 */
export function useIntroGlide(target: RefObject<HTMLElement | null>) {
  useEffect(() => {
    let armed = window.scrollY <= 1
    let gliding = false
    let touchY = 0

    const trigger = (event: Event) => {
      const el = target.current
      if (!armed || gliding || !el) return
      event.preventDefault()
      armed = false
      gliding = true
      const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 0
      const top = el.getBoundingClientRect().top + window.scrollY - navH
      glideTo(top, { duration: DURATION, onComplete: () => (gliding = false) })
    }

    const onWheel = (event: WheelEvent) => event.deltaY > 0 && trigger(event)
    const onTouchStart = (event: TouchEvent) => (touchY = event.touches[0]?.clientY ?? 0)
    const onTouchMove = (event: TouchEvent) => touchY - (event.touches[0]?.clientY ?? touchY) > 6 && trigger(event)
    const onKey = (event: KeyboardEvent) => {
      const field = (event.target as HTMLElement | null)?.closest('input, textarea, select, [contenteditable="true"]')
      if (!field && !event.shiftKey && KEYS.has(event.key)) trigger(event)
    }
    const onScroll = () => {
      if (!gliding && window.scrollY <= 1) armed = true
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
    }
  }, [target])
}
