// @ts-nocheck

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Mdx, H1 } from '@/components';

import { allBlogs } from 'contentlayer/generated';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = image
    ? `https://primalbound.com${image}`
    : `https://primalbound.com/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://primalbound.com/writings/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className='overflow-x-hidden'>
      <H1>{post.title}</H1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[702px]">
        <time className="bg-base rounded-md px-2 py-1 tracking-tighter font-bold text-base-foreground">
          {post.publishedAt} · {Math.ceil(post.readingTime.minutes)} min read
        </time>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        {/* <ViewCounter slug={post.slug} trackView /> TODO */}
      </div>
      <Mdx code={post.body.code}
      />
    </section>
  )
}