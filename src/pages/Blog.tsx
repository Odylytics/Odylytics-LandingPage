import { useState } from 'react'
import { PostCard } from '../components/PostCard'
import { POST_CATEGORIES } from '../data/content'
import { useContent, useUi } from '../hooks/useContent'
import type { PostCategory } from '../data/content'
import { postsStore } from '../lib/stores'

export function Blog() {
  const { POSTS, NEWS_HEADING } = useContent()
  const ui = useUi()
  const stored = postsStore.useItems()
  const allPosts = postsStore.isSeeded() ? POSTS : stored
  const [category, setCategory] = useState<'All' | PostCategory>('All')
  const posts = allPosts.filter((post) => category === 'All' || post.category === category)
  const [first, ...rest] = posts

  return (
    <section className="section page" aria-labelledby="blog-title">
      <div className="container">
        <header className="page__head">
          <p className="eyebrow">{NEWS_HEADING.eyebrow}</p>
          <h1 id="blog-title" className="display">
            {ui.newsTitle}
          </h1>
          <p className="body-l page__intro">{ui.newsIntro}</p>
        </header>

        <div className="filters" role="group" aria-label="Filter by category">
          {POST_CATEGORIES.map((item) => (
            <button key={item} type="button" className={`chip${item === category ? ' is-active' : ''}`} aria-pressed={item === category} onClick={() => setCategory(item)}>
              {ui.categories[item] ?? item}
            </button>
          ))}
        </div>

        {first ? (
          <>
            <PostCard key={`${category}-${first.id}`} post={first} large />
            <ul className="post-grid">
              {rest.map((post) => (
                <li key={`${category}-${post.id}`}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="body-l">{ui.nothing}</p>
        )}
      </div>
    </section>
  )
}
