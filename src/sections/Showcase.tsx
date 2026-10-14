import { useEffect, useRef, useState } from 'react'
import { Button } from '../components/Button'
import { SectionHeading } from '../components/SectionHeading'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { useContent, useUi } from '../hooks/useContent'
import { useMediaQuery, usePrefersReducedMotion } from '../hooks/useMediaQuery'

/** Scroll distance, in viewport heights, spent on each product while the stage is pinned. */
const VH_PER_CARD = 55
/** How far before the first and after the last card the centre travels, so the walls fill and empty smoothly. */
const LEAD_IN = 1.4
const LEAD_OUT = 0.7

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

/**
 * Product corridor: while the section is pinned, vertical scroll slides the cards sideways.
 * Cards near the centre sit far away (small, flat); cards near the edges come forward and angle inward.
 * Under reduced motion and on narrow screens the cards become a plain snap-scrolling row.
 */
export function Showcase() {
  const { SOLUTIONS_HEADING, SOLUTIONS } = useContent()
  const ui = useUi()
  const { solutionLogo } = useBrandAssets()
  const reduced = usePrefersReducedMotion()
  const wide = useMediaQuery('(min-width: 821px)')
  const live = wide && !reduced

  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLLIElement | null)[]>([])
  const [active, setActive] = useState(0)
  const count = SOLUTIONS.length

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const cards = cardRefs.current
    if (!live) {
      cards.forEach((card) => card?.style.removeProperty('transform'))
      cards.forEach((card) => card?.style.removeProperty('opacity'))
      cards.forEach((card) => card?.style.removeProperty('z-index'))
      section.style.removeProperty('--showcase-track')
      return
    }
    section.style.setProperty('--showcase-track', `${count * VH_PER_CARD}svh`)

    let frame = 0
    const update = () => {
      frame = 0
      const total = section.offsetHeight - window.innerHeight
      const progress = total > 0 ? clamp(-section.getBoundingClientRect().top / total, 0, 1) : 0
      const centre = -LEAD_IN + progress * (count - 1 + LEAD_IN + LEAD_OUT)
      const step = Math.min(window.innerWidth * 0.13, 250)

      cards.forEach((card, index) => {
        if (!card) return
        const offset = index - centre
        const distance = Math.abs(offset)
        const side = Math.sign(offset)
        const x = side * Math.pow(distance, 1.12) * step
        const turn = -side * Math.min(distance * 38, 68)
        const scale = 0.4 + Math.min(distance, 3.2) * 0.2
        card.style.transform = `translate3d(${x.toFixed(1)}px, 0, 0) rotateY(${turn.toFixed(1)}deg) scale(${scale.toFixed(3)})`
        card.style.opacity = String(clamp(1 - (distance - 3) * 0.6, 0, 1))
        card.style.zIndex = String(Math.round(distance * 10))
      })
      const nearest = clamp(Math.round(centre), 0, count - 1)
      setActive((previous) => (previous === nearest ? previous : nearest))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [live, count])

  const current = SOLUTIONS[active]

  return (
    <section ref={sectionRef} id="solutions" className={`showcase${live ? ' is-live' : ''}`} aria-labelledby="showcase-title">
      <div className="showcase__stage">
        <div className="container">
          <SectionHeading id="showcase-title" center {...SOLUTIONS_HEADING} />
        </div>

        <ul className="showcase__corridor">
          {SOLUTIONS.map((solution, index) => (
            <li
              key={solution.id}
              ref={(node) => {
                cardRefs.current[index] = node
              }}
              className={`showcase-card${solution.image ? '' : ' showcase-card--plain'}`}
            >
              <div className="showcase-card__media">
                {solution.image ? (
                  <>
                    <img className="showcase-card__photo" src={solution.image} alt="" loading="lazy" />
                    {solution.logo && (
                      <span className="showcase-card__chip">
                        <img src={solutionLogo(solution.logo)} alt={solution.name} />
                      </span>
                    )}
                  </>
                ) : (
                  solution.logo && <img className="showcase-card__logo" src={solutionLogo(solution.logo)} alt={solution.name} />
                )}
              </div>
              <div className="showcase-card__body">
                <p className="showcase-card__name">{solution.name}</p>
                <p className="showcase-card__line">{solution.oneLiner || ui.updatingSoon}</p>
              </div>
            </li>
          ))}
        </ul>

        {live && current && (
          <div className="showcase__caption" aria-live="polite">
            <p className="showcase__count">
              {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </p>
            <p className="showcase__name">{current.name}</p>
            <p className="showcase__line">{current.oneLiner || ui.updatingSoon}</p>
            <Button href="#contact" variant="outline" size="sm">
              {ui.getInTouch}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
