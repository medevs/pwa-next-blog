import type { Metadata } from 'next';
import { allBlogs } from 'contentlayer/generated';
import { H1 } from '@/components';

import ArticleList from './list'

export const metadata: Metadata = {
  title: 'writings',
  description: "Welcome to Primal Bound, a movement dedicated to empowering young people and sharing knowledge on the topics that truly matter. It's not just a blog; it's a transformative journey towards unlocking our full potential. Join me as we delve into the depths of purpose, family, relationships, and well-being, uncovering the primal instincts that guide us. Through captivating articles, interactive discussions, and practical insights, Primal Bound seeks to inspire and ignite the fire within. Together, let's embrace our primal nature and create a community that fosters fulfillment, authenticity, and growth. Welcome to Primal Bound, where knowledge becomes a catalyst for change.",
};

export default function WritingPage() {

  return (
    <>
      <section className='max-w-[702px]'>
        <H1 className='my-4'>writings</H1>
      </section>
      <ArticleList items={allBlogs} />
    </>
  )
}
