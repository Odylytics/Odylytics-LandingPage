import { useEffect, useRef, useState } from 'react'
import { useUi } from '../hooks/useContent'
import { setTheme, useTheme } from '../hooks/useTheme'
import { LANGUAGES, setLang, useLang } from '../lib/lang'
import { GearIcon } from './Icons'

/** Settings: theme and language. `inline` renders the controls without a popover (mobile menu). */
export function SettingsPanel() {
  const ui = useUi()
  const theme = useTheme()
  const lang = useLang()

  return (
    <div className="settings__panel">
      <div className="settings__group" role="group" aria-label={ui.theme}>
        <span className="label">{ui.theme}</span>
        <div className="segmented">
          {(['light', 'dark'] as const).map((value) => (
            <button key={value} type="button" className={theme === value ? 'is-active' : ''} aria-pressed={theme === value} onClick={() => setTheme(value)}>
              {value === 'light' ? ui.light : ui.dark}
            </button>
          ))}
        </div>
      </div>
      <div className="settings__group" role="group" aria-label={ui.language}>
        <span className="label">{ui.language}</span>
        <div className="segmented">
          {LANGUAGES.map((item) => (
            <button key={item.id} type="button" className={lang === item.id ? 'is-active' : ''} aria-pressed={lang === item.id} onClick={() => setLang(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SettingsMenu() {
  const ui = useUi()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="settings" ref={ref}>
      <button type="button" className="theme-toggle" aria-label={ui.settings} aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((value) => !value)}>
        <GearIcon />
      </button>
      {open && (
        <div className="settings__popover">
          <SettingsPanel />
        </div>
      )}
    </div>
  )
}
