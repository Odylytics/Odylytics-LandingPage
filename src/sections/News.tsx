import { PostCard } from '../components/PostCard'
import { SectionHeading } from '../components/SectionHeading'
import { useContent, useUi } from '../hooks/useContent'
import { postsStore } from '../lib/stores'

export function News() {
  const { NEWS_HEADING, POSTS } = useContent()
  const ui = useUi()
  const stored = postsStore.useItems()
  const latest = (postsStore.isSeeded() ? POSTS : stored).slice(0, 3)
  return (
    <section id="news" className="section" aria-labelledby="news-title">
      <div className="container">
        <SectionHeading id="news-title" {...NEWS_HEADING} />
        <ul className="post-grid">
          {latest.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
        <p className="news__more" data-reveal>
          <a className="text-btn" href="#/blog">
            {ui.viewAllNews}
          </a>
        </p>
      </div>
    </section>
  )
}
