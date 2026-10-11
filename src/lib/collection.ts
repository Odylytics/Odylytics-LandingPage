import { useEffect, useSyncExternalStore } from 'react'
import { backendConfigured, demoMode, getClient } from './backend'

export type Collection<T extends { id: string }> = {
  /** Backing store: a Supabase table (`id`, `data` jsonb), or localStorage in demo mode. */
  useItems: () => T[]
  /** True when items come from the seed because nothing has been saved yet. */
  isSeeded: () => boolean
  save: (item: T) => Promise<string | null>
  remove: (id: string) => Promise<string | null>
  /** Writes the seed content into the store (for first-time setup). */
  importSeed: () => Promise<string | null>
}

/**
 * Editable content. Starts from `seed` so the site renders instantly, then swaps in the saved
 * rows. Public visitors only read; writes need a signed-in member (enforced by row-level security).
 */
export function createCollection<T extends { id: string }>(table: string, seed: T[]): Collection<T> {
  const lsKey = `odylytics-${table}`
  let items = seed
  let seeded = true
  let loaded = false
  const listeners = new Set<() => void>()

  const publish = (next: T[], fromSeed = false) => {
    items = next
    seeded = fromSeed
    listeners.forEach((listener) => listener())
  }

  async function load() {
    if (loaded) return
    loaded = true
    if (demoMode) {
      try {
        const raw = localStorage.getItem(lsKey)
        if (raw) publish(JSON.parse(raw) as T[])
      } catch {
        /* keep seed */
      }
      return
    }
    const supabase = await getClient()
    if (!supabase) return
    const { data, error } = await supabase.from(table).select('id, data').order('sort', { ascending: true })
    if (!error && data && data.length > 0) publish(data.map((row) => ({ ...(row.data as T), id: row.id as string })))
  }

  const subscribe = (listener: () => void) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  async function persist(next: T[]): Promise<string | null> {
    if (demoMode) {
      try {
        localStorage.setItem(lsKey, JSON.stringify(next))
      } catch {
        return 'Could not save to this browser.'
      }
      publish(next)
      return null
    }
    const supabase = await getClient()
    if (!supabase) return 'Content editing is not configured yet.'
    const rows = next.map((item, index) => ({ id: item.id, data: item, sort: index }))
    const { error: upsertError } = await supabase.from(table).upsert(rows)
    if (upsertError) return upsertError.message
    const keep = new Set(next.map((item) => item.id))
    const existing = await supabase.from(table).select('id')
    const stale = (existing.data ?? []).map((row) => row.id as string).filter((id) => !keep.has(id))
    if (stale.length > 0) {
      const { error } = await supabase.from(table).delete().in('id', stale)
      if (error) return error.message
    }
    publish(next)
    return null
  }

  return {
    useItems() {
      useEffect(() => {
        if (backendConfigured || demoMode) void load()
      }, [])
      return useSyncExternalStore(subscribe, () => items, () => seed)
    },
    isSeeded: () => seeded,
    save: (item) => {
      const exists = items.some((current) => current.id === item.id)
      return persist(exists ? items.map((current) => (current.id === item.id ? item : current)) : [item, ...items])
    },
    remove: (id) => persist(items.filter((item) => item.id !== id)),
    importSeed: () => persist(seed),
  }
}
