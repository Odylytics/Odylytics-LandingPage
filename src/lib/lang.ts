import { useSyncExternalStore } from 'react'

export type Lang = 'en' | 'vi'

export const LANGUAGES: { id: Lang; label: string }[] = [
  { id: 'en', label: 'English' },
  { id: 'vi', label: 'Tiếng Việt' },
]

const STORAGE_KEY = 'odylytics-lang'
const listeners = new Set<() => void>()

function getLang(): Lang {
  return document.documentElement.lang === 'vi' ? 'vi' : 'en'
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setLang(lang: Lang) {
  document.documentElement.lang = lang
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // Storage can be unavailable; the language still applies for this visit.
  }
  listeners.forEach((listener) => listener())
}

/** Restores the saved language before first render (called from main.tsx). */
export function initLang() {
  try {
    if (localStorage.getItem(STORAGE_KEY) === 'vi') document.documentElement.lang = 'vi'
  } catch {
    // ignore
  }
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribe, getLang, (): Lang => 'en')
}
