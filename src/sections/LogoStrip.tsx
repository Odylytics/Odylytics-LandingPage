import { useMemo } from 'react'
import { LogoLoop } from '../components/LogoLoop'
import type { LogoItem } from '../components/LogoLoop'
import { SOLUTIONS } from '../data/content'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { useUi } from '../hooks/useContent'

export function LogoStrip() {
  const { solutionLogo } = useBrandAssets()
  const ui = useUi()
  const logos = useMemo<LogoItem[]>(
    () =>
      SOLUTIONS.map((solution) =>
        solution.logo
          ? { src: solutionLogo(solution.logo), alt: solution.name, title: solution.name }
          : { node: <span className="strip-placeholder">{solution.name}</span>, ariaLabel: solution.name },
      ),
    [solutionLogo],
  )

  return (
    <section className="logo-strip" aria-label="Odylytics solutions">
      <p className="logo-strip__label">{ui.solutionsLabel}</p>
      <LogoLoop
        logos={logos}
        speed={60}
        logoHeight={56}
        gap={56}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        ariaLabel="Odylytics solutions"
      />
    </section>
  )
}
