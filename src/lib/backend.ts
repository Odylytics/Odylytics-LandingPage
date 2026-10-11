import type { SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

/** True when a Supabase project is wired up through env vars. */
export const backendConfigured = Boolean(url && key)

/** Local-only demo mode: dev builds without Supabase fall back to localStorage and a fake login. */
export const demoMode = !backendConfigured && import.meta.env.DEV

let client: Promise<SupabaseClient> | null = null

/** Lazy so the Supabase SDK stays out of the main bundle until it is needed. */
export function getClient(): Promise<SupabaseClient> | null {
  if (!backendConfigured) return null
  client ??= import('@supabase/supabase-js').then((module) => module.createClient(url as string, key as string))
  return client
}
