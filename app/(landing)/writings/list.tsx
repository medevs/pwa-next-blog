'use client'

import * as React from 'react'
import { usePathname, useRouter } from 'next/navigation';

import type { Blog } from 'contentlayer/generated';
import { BlogCard, Tag } from '@/components';

export default function ArticleList({ items }: { items: Blog[] }) {
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname(); // use useRouter hook to get router object

  const allTags = Array.from(
    new Set(items.flatMap((post) => post.tags?.split(', ').filter(Boolean) || []))
  );

  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);

    // Update the URL parameter
    if (tag) {
      router.push(`${pathname}?tag=${tag}`);
    } else {
      router.push(pathname);
    }
  };

  React.useEffect(() => {
    // Check if 'tag' parameter exists in the URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('tag')) {
      setSelectedTag(urlParams.get('tag'));
    }
  }, [pathname]);


  return (
    <>
      <section>
        <h2 className="font-bold mb-4">Tags</h2>
        <div className="flex flex-wrap">
          <div key='all' className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
            <Tag onClick={() => handleTagChange(null)}>~All</Tag>
          </div>
          {allTags.map((tag) =>
            <div key={tag} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <Tag onClick={() => handleTagChange(tag)}>#{tag}</Tag>
            </div>
          )}
        </div>
      </section>

      <br />

      <section>
        <h2 className='font-bold mb-4'>Latest Posts</h2>
        <ul className={`space-y-6`}>

          {items
            .filter((post) => selectedTag ? post.tags?.includes(selectedTag) : true)
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((post) => <BlogCard key={post.slug} post={post} />)}
        </ul>
      </section>
    </>
  )
}