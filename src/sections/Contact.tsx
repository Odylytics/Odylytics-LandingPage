import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../components/Button'
import { SOCIALS } from '../data/content'
import { useContent, useUi } from '../hooks/useContent'

export function Contact() {
  const { CONTACT } = useContent()
  const ui = useUi()
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const field = (name: string) => String(data.get(name) ?? '').trim()

    const organisation = field('organisation')
    const subject = `Enquiry from ${field('name')}${organisation ? ` (${organisation})` : ''}`
    const body = `${field('message')}\n\n— ${field('name')}\n${field('email')}${organisation ? `\n${organisation}` : ''}`

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro" data-reveal>
          <p className="eyebrow">{CONTACT.eyebrow}</p>
          <h2 id="contact-title" className="h2-serif">
            {CONTACT.lead} <em className="em">{CONTACT.main}</em>
          </h2>
          <p className="body-l">{CONTACT.subcopy}</p>

          <dl className="contact__details">
            <div>
              <dt>{ui.email}</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </dd>
            </div>
            {SOCIALS.map((social) => (
              <div key={social.label}>
                <dt>{social.label}</dt>
                <dd>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    odylytics
                  </a>
                </dd>
              </div>
            ))}
            <div>
              <dt>{ui.address}</dt>
              <dd className="contact__soon">{CONTACT.address}</dd>
            </div>
          </dl>
        </div>

        <form className="form" onSubmit={onSubmit} data-reveal>
          <div className="form__row">
            <label className="field">
              <span className="label">{ui.name}</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label className="field">
              <span className="label">{ui.email}</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <label className="field">
            <span className="label">{ui.organisation}</span>
            <input name="organisation" type="text" autoComplete="organization" />
          </label>
          <label className="field">
            <span className="label">{ui.message}</span>
            <textarea name="message" rows={5} required />
          </label>
          <div className="form__actions">
            <Button type="submit" arrow={false}>
              {ui.send}
            </Button>
            <p className="form__status" role="status">
              {sent ? ui.sent : ''}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
