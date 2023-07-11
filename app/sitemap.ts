import { allBlogs } from 'contentlayer/generated'

export default async function sitemap() {
  const routes = [
    '',
    '/about',
    '/writings',
  ].map((route) => ({
    url: `https://primalbound.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const posts = allBlogs.map((post) => ({
    url: `https://primalbound.com/writings/${post.slug}`,
    lastModified: new Date(post.publishedAt).toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
