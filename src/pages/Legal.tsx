import type { LegalDoc } from '../data/legal'

export function Legal({ doc }: { doc: LegalDoc }) {
  const id = (index: number) => `legal-${index + 1}`
  return (
    <section className="section page" aria-labelledby="legal-title">
      <div className="container legal">
        <header className="page__head">
          <p className="eyebrow">Legal</p>
          <h1 id="legal-title" className="display">
            {doc.title}
          </h1>
          <p className="body-l page__intro">{doc.intro}</p>
          <p className="label">Last updated {doc.updated}</p>
        </header>

        <nav className="legal__toc card" aria-label="Contents">
          <h2 className="label">Contents</h2>
          <ol>
            {doc.sections.map((section, index) => (
              <li key={section.heading}>
                <button type="button" onClick={() => document.getElementById(id(index))?.scrollIntoView({ behavior: 'smooth' })}>
                  {section.heading}
                </button>
              </li>
            ))}
          </ol>
        </nav>

        {doc.sections.map((section, index) => (
          <div key={section.heading} id={id(index)} className="legal__section">
            <h2 className="h3">
              <span className="legal__num">{index + 1}.</span> {section.heading}
            </h2>
            {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.items && (
              <ul className="legal__list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
