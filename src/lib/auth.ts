import { useSyncExternalStore } from 'react'
import { backendConfigured, demoMode, getClient } from './backend'

export type Member = { email: string }
type AuthState = { member: Member | null; ready: boolean }

const DEMO_KEY = 'odylytics-demo-member'
let state: AuthState = { member: null, ready: !backendConfigured }
const listeners = new Set<() => void>()

function set(next: AuthState) {
  state = next
  listeners.forEach((listener) => listener())
}

function readDemo(): Member | null {
  try {
    const raw = localStorage.getItem(DEMO_KEY)
    return raw ? (JSON.parse(raw) as Member) : null
  } catch {
    return null
  }
}

let started = false
function start() {
  if (started) return
  started = true
  if (demoMode) {
    set({ member: readDemo(), ready: true })
    return
  }
  getClient()?.then(async (supabase) => {
    const { data } = await supabase.auth.getSession()
    set({ member: data.session?.user.email ? { email: data.session.user.email } : null, ready: true })
    supabase.auth.onAuthStateChange((_event, session) => {
      set({ member: session?.user.email ? { email: session.user.email } : null, ready: true })
    })
  })
}

function subscribe(listener: () => void) {
  start()
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useAuth(): AuthState {
  return useSyncExternalStore(subscribe, () => state, () => state)
}

/** Returns an error message, or null on success. */
export async function signIn(email: string, password: string): Promise<string | null> {
  if (demoMode) {
    if (!email || !password) return 'Enter an email and password.'
    try {
      localStorage.setItem(DEMO_KEY, JSON.stringify({ email }))
    } catch {
      /* storage unavailable: demo login only lasts for this tab */
    }
    set({ member: { email }, ready: true })
    return null
  }
  const supabase = await getClient()
  if (!supabase) return 'Member login is not configured yet.'
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  return error ? error.message : null
}

export async function signOut() {
  if (demoMode) {
    try {
      localStorage.removeItem(DEMO_KEY)
    } catch {
      /* ignore */
    }
    set({ member: null, ready: true })
    return
  }
  const supabase = await getClient()
  await supabase?.auth.signOut()
}
