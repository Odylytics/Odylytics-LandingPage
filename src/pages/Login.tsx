import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../components/Button'
import { backendConfigured, demoMode } from '../lib/backend'
import { signIn, useAuth } from '../lib/auth'

export function Login() {
  const { member } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const available = backendConfigured || demoMode

  useEffect(() => {
    if (member) window.location.hash = '#/admin'
  }, [member])
  if (member) return null

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setBusy(true)
    setError(await signIn(String(form.get('email')), String(form.get('password'))))
    setBusy(false)
  }

  return (
    <section className="section page" aria-labelledby="login-title">
      <div className="container auth">
        <header className="page__head">
          <p className="eyebrow">Members</p>
          <h1 id="login-title" className="display">
            Member <span className="em">login.</span>
          </h1>
          <p className="body-l page__intro">Sign in to edit news and testimonials.</p>
        </header>

        {demoMode && <p className="notice">Demo mode: no Supabase project is connected, so any email and password works and edits stay in this browser.</p>}
        {!available && <p className="notice">Member login is not set up on this site yet.</p>}

        <form className="card auth__form" onSubmit={onSubmit}>
          <label className="field">
            <span className="label">Email</span>
            <input name="email" type="email" autoComplete="email" required disabled={!available} />
          </label>
          <label className="field">
            <span className="label">Password</span>
            <input name="password" type="password" autoComplete="current-password" required disabled={!available} />
          </label>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <Button type="submit" arrow={false} variant="primary">
            {busy ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>
      </div>
    </section>
  )
}
