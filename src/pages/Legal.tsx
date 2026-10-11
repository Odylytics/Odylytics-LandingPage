import type { LegalDoc } from '../data/legal'

export function Legal({ doc }: { doc: LegalDoc }) {
  return (
    <section className="section page" aria-labelledby="legal-title">
      <div className="container legal">
        <header className="page__head">
          <p className="eyebrow">Legal</p>
          <h1 id="legal-title" className="display">
            {doc.title}
          </h1>
          <p className="body-l page__intro">{doc.intro}</p>
          <p className="label">{doc.updated === 'Draft' ? 'Draft, pending legal review' : `Last updated ${doc.updated}`}</p>
        </header>
        {doc.sections.map((section) => (
          <div key={section.heading} className="legal__section">
            <h2 className="h3">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
        <p>
          <a className="text-btn" href="#home">
            ‹ Back to home
          </a>
        </p>
      </div>
    </section>
  )
}
