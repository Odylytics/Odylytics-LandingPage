import { useState } from 'react'
import { PostCard } from '../components/PostCard'
import { POSTS, POST_CATEGORIES } from '../data/content'
import type { PostCategory } from '../data/content'

export function Blog() {
  const [category, setCategory] = useState<'All' | PostCategory>('All')
  const posts = POSTS.filter((post) => category === 'All' || post.category === category)
  const [first, ...rest] = posts

  return (
    <section className="section page" aria-labelledby="blog-title">
      <div className="container">
        <header className="page__head">
          <p className="eyebrow">News</p>
          <h1 id="blog-title" className="display">
            Odylytics <span className="em">news.</span>
          </h1>
          <p className="body-l page__intro">Competition wins, press coverage and milestones from the team.</p>
        </header>

        <div className="filters" role="group" aria-label="Filter by category">
          {POST_CATEGORIES.map((item) => (
            <button key={item} type="button" className={`chip${item === category ? ' is-active' : ''}`} aria-pressed={item === category} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>

        {first ? (
          <>
            <PostCard key={`${category}-${first.slug}`} post={first} large />
            <ul className="post-grid">
              {rest.map((post) => (
                <li key={`${category}-${post.slug}`}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="body-l">Nothing here yet.</p>
        )}
      </div>
    </section>
  )
}
