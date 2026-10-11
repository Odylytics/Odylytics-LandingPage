import { useSyncExternalStore } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'odylytics-theme'
const THEME_COLOR: Record<Theme, string> = { dark: '#0B0A0E', light: '#FAFAFB' }
const listeners = new Set<() => void>()

function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setTheme(theme: Theme) {
  const root = document.documentElement
  // Fade only on an explicit toggle; the initial theme from index.html applies without animating.
  root.classList.add('theme-animate')
  root.dataset.theme = theme
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this visit.
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])
  listeners.forEach((listener) => listener())
}

/** The visitor's chosen theme; applied initially by the inline script in index.html. */
export function useTheme() {
  return useSyncExternalStore(subscribe, getTheme, (): Theme => 'dark')
}
