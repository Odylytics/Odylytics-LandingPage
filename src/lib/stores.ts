import { POSTS, TESTIMONIALS } from '../data/content'
import type { Post, Testimonial } from '../data/content'
import { createCollection } from './collection'

export const postsStore = createCollection<Post>('posts', POSTS)
export const testimonialsStore = createCollection<Testimonial>('testimonials', TESTIMONIALS)
