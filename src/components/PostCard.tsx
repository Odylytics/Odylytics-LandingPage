import type { Post } from '../data/content'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { useUi } from '../hooks/useContent'

export function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  const brand = useBrandAssets()
  const ui = useUi()
  const meta = [post.source, post.date].filter(Boolean).join(' · ')
  const body = (
    <>
      <div className="post-card__media">
        {post.image ? <img src={post.image} alt="" loading="lazy" /> : <img className="post-card__placeholder" src={brand.symbol} alt="" />}
      </div>
      <div className="post-card__body">
        <span className="tag tag--neutral">{ui.categories[post.category] ?? post.category}</span>
        <h3 className="post-card__title">{post.title}</h3>
        <p className="post-card__excerpt">{post.excerpt}</p>
        <p className="post-card__meta">
          {meta && <span>{meta}</span>}
          {post.href ? <span className="post-card__read">{ui.readArticle}</span> : <span className="post-card__soon">{ui.articleSoon}</span>}
        </p>
      </div>
    </>
  )
  const className = `card card--hover post-card${large ? ' post-card--large' : ''}`

  return post.href ? (
    <a className={className} href={post.href} target="_blank" rel="noreferrer" data-reveal>
      {body}
    </a>
  ) : (
    <article className={className} data-reveal>
      {body}
    </article>
  )
}
