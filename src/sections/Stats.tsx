import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'
import { useContent } from '../hooks/useContent'

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = usePrefersReducedMotion()
  const [value, setValue] = useState(reduced ? to : 0)

  useEffect(() => {
    if (reduced) return
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 1400)
          setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to, reduced])

  return <span ref={ref}>{reduced ? to : value}</span>
}

export function Stats() {
  const { STATS } = useContent()
  return (
    <section className="stats" aria-label="Odylytics in numbers">
      <dl className="container stats__grid">
        {STATS.map((stat, index) => (
          <div key={index} className="stats__item" data-reveal>
            <dd className="stat">
              <CountUp to={stat.value} />
              {stat.suffix}
            </dd>
            <dt>{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
