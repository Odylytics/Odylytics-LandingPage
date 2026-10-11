import { PostCard } from '../components/PostCard'
import { SectionHeading } from '../components/SectionHeading'
import { NEWS_HEADING } from '../data/content'
import { postsStore } from '../lib/stores'

export function News() {
  const latest = postsStore.useItems().slice(0, 3)
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
            View all news ›
          </a>
        </p>
      </div>
    </section>
  )
}
