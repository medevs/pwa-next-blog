'use client';

import Link from 'next/link';

export function BlogCard({ post }: { post: any }) {
  return (
    <li>
      <Link
        key={post.slug}
        className="flex flex-col no-underline rounded-md p-4]"
        href={`/writings/${post.slug}`}
      >
        <span className="relative">
          <div className="w-full flex flex-col">
            <p>{post.title}</p>
            <time className="font-mono text-sm tracking-tighter text-neutral-400">{post.publishedAt} · {Math.ceil(post.readingTime.minutes)} min read</time>
            {/* <ViewCounter slug={post.slug} trackView={false} /> */}
          </div>
        </span>
      </Link>
    </li>
  )
}