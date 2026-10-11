import { Button } from '../components/Button'
import { GALLERY, TEAM } from '../data/content'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { useContent } from '../hooks/useContent'

type Card = { key: string; src: string; kind: 'photo' | 'portrait' | 'logo' }

/** Scattered photos, portraits and product logos around one big call to action. */
export function Closing() {
  const { CLOSING } = useContent()
  const { solutionLogo } = useBrandAssets()
  const cards: Card[] = [
    { key: 'g0', src: GALLERY[0].src, kind: 'photo' },
    { key: 'p0', src: TEAM[0].photo ?? '', kind: 'portrait' },
    { key: 'l0', src: solutionLogo('/assets/solutions/aquaguard.png'), kind: 'logo' },
    { key: 'g1', src: '/assets/gallery/epics-first-place.jpg', kind: 'photo' },
    { key: 'p1', src: TEAM[1].photo ?? '', kind: 'portrait' },
    { key: 'g2', src: GALLERY[2].src, kind: 'photo' },
    { key: 'l1', src: solutionLogo('/assets/solutions/enablecode.png'), kind: 'logo' },
    { key: 'p2', src: TEAM[2].photo ?? '', kind: 'portrait' },
    { key: 'g3', src: GALLERY[1].src, kind: 'photo' },
    { key: 'l2', src: solutionLogo('/assets/solutions/includio.png'), kind: 'logo' },
    { key: 'p3', src: TEAM[4].photo ?? '', kind: 'portrait' },
    { key: 'p4', src: TEAM[3].photo ?? '', kind: 'portrait' },
  ]
  return (
    <section className="closing" aria-labelledby="closing-title">
      <ul className="closing__scatter" aria-hidden="true">
        {cards.map((card) => (
          <li key={card.key} className={`closing__card closing__card--${card.kind}`}>
            <img src={card.src} alt="" loading="lazy" />
          </li>
        ))}
      </ul>
      <div className="closing__center" data-reveal>
        <h2 id="closing-title" className="display">
          {CLOSING.lead} <em className="em">{CLOSING.main}</em>
        </h2>
        <Button href="#contact" variant="primary" arrow={false} className="closing__cta">
          {CLOSING.cta}
        </Button>
      </div>
    </section>
  )
}
