import type { Metadata } from 'next';
import { allBlogs } from 'contentlayer/generated';
import { H1 } from '@/components';

import ArticleList from './list'

export const metadata: Metadata = {
  title: 'writings',
  description: 'Read my thoughts on software development, design, and more.',
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
