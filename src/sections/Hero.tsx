import { Suspense, lazy, useState } from 'react'
import HoldButton from '../components/HoldButton'
import type { HoldButtonPhase } from '../components/HoldButton'
import { HERO } from '../data/content'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'
import { useRotatingWord } from '../hooks/useRotatingWord'
import { scrollToSection } from '../hooks/useSmoothScroll'
import { useTheme } from '../hooks/useTheme'
import { playPop, startCharge, stopCharge } from '../lib/holdSfx'

const Hyperspeed = lazy(() => import('../components/Hyperspeed'))

const LIGHT_COLORS = ['#AE0BFF', '#FF8C00', '#AE0BFF']
const POLE_COLORS = ['#AE0BFF']
const HOLD_MS = 1000

function supportsWebgl() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl'))
  } catch {
    return false
  }
}

export function Hero() {
  const brand = useBrandAssets()
  const theme = useTheme()
  const reducedMotion = usePrefersReducedMotion()
  const [webgl] = useState(supportsWebgl)
  const dark = theme !== 'light'
  const [holdPhase, setHoldPhase] = useState<HoldButtonPhase>('idle')
  const wordIndex = useRotatingWord(HERO.rotatingWords.length, 2500, !reducedMotion)
  const previousIndex = (wordIndex - 1 + HERO.rotatingWords.length) % HERO.rotatingWords.length

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      {webgl ? (
        <Suspense fallback={null}>
          <Hyperspeed
            className="hero__road"
            theme={dark ? 'dark' : 'light'}
            curve="gentle"
            curvature={0.55}
            speed={reducedMotion ? 0 : 1.05}
            boost={3}
            fov={81}
            boostFov={160}
            lanes={6}
            roadWidth={20}
            medianWidth={2.5}
            density={40}
            trailLength={0.9}
            lightSize={1}
            poles={15}
            dust={1500}
            glow={0.6}
            reflections={0.5}
            roadOpacity={0.25}
            steer={0.25}
            tailColors={LIGHT_COLORS}
            headColors={LIGHT_COLORS}
            poleColors={POLE_COLORS}
            interactive={!reducedMotion}
            boosting={holdPhase !== 'idle'}
            roadColor={dark ? '#000000' : undefined}
            lineColor={dark ? '#2d2d2d' : undefined}
          />
        </Suspense>
      ) : (
        <div className="aurora" aria-hidden="true" />
      )}

      <div className="container hero__content">
        <img className="hero__logo" src={brand.wordmark} alt="Odylytics" width="1826" height="565" />
        <p className="eyebrow">{HERO.eyebrow}</p>

        <h1 id="hero-title" className="sr-only">
          {HERO.srHeadline}
        </h1>
        <div className="display hero__headline" aria-hidden="true">
          <span className="hero__line">{HERO.headlineTop}</span>
          <span className="hero__line">
            {HERO.headlineBottom}{' '}
            <span className="rotator" aria-live="off">
              {HERO.rotatingWords.map((word, index) => (
                <span
                  key={word}
                  className={`rotator__word${index === wordIndex ? ' is-active' : ''}${index === previousIndex && !reducedMotion ? ' is-prev' : ''}`}
                >
                  {word}.
                </span>
              ))}
            </span>
          </span>
        </div>

        <p className="body-l hero__sub">{HERO.subheadline}</p>

        <div className="hero__ctas">
          <HoldButton
            doneLabel={HERO.holdCta.doneLabel}
            backgroundColor="var(--surface-2)"
            fillColor="#AE0BFF"
            textColor="var(--text)"
            fillTextColor="#ffffff"
            size="lg"
            radius={999}
            fillDirection="right"
            holdTime={HOLD_MS}
            releaseTime={200}
            pressScale={0.97}
            wave
            waveAmplitude={6}
            glow
            resetAfter={1200}
            onPhaseChange={(phase) => {
              if (phase === 'holding') startCharge(HOLD_MS)
              else if (phase === 'done') {
                stopCharge(60)
                playPop()
              } else stopCharge()
              setHoldPhase(phase)
            }}
            onHold={() => {
              const next = document.querySelector<HTMLElement>(HERO.holdCta.target)
              if (next) scrollToSection(next)
            }}
          >
            {HERO.holdCta.label}
          </HoldButton>
        </div>

        <p className="hero__note">
          <img src={brand.symbol} alt="" />
          Engineering Safer Communities.
        </p>
      </div>
    </section>
  )
}
