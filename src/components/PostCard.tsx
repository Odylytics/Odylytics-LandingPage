import type { Post } from '../data/content'
import { useT } from '../lib/lang'
import { ArrowUpRightIcon } from './Icons'

export function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  const t = useT()
  const meta = [post.source, post.date].filter(Boolean).join(' · ')
  const body = (
    <>
      {post.image && (
        <div className="post-card__media">
          <img src={post.image} alt="" loading="lazy" />
        </div>
      )}
      <div className="post-card__body">
        <p className="post-card__meta">
          <span>{t(post.category)}</span>
          {meta && <span>{meta}</span>}
        </p>
        <h3 className="post-card__title">{t(post.title)}</h3>
        <p className="post-card__excerpt">{t(post.excerpt)}</p>
        {post.href && (
          <span className="post-card__read">
            {t('Read article')} <ArrowUpRightIcon />
          </span>
        )}
      </div>
    </>
  )
  const className = `post-card${large ? ' post-card--large' : ''}`

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
