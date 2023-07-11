import { name, about, bio } from '@/lib/info';
import { Icon } from '@/components';
import ArticleList from './writings/list';
import { allBlogs } from 'contentlayer/generated';

export default function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-5xl">{name}</h1>
      <p className="my-4 max-w-[702px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>

      <p className="my-4 max-w-[702px] text-neutral-800 dark:text-neutral-200" >
        {bio()}
      </p>

      <ul className="my-4 flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center no-underline transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/primalbound"
          >
            <Icon name='arrow' width={12} height={12} className="mr-2" />
            <p className="h-7">follow us on twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center no-underline transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://primalbound.substack.com"
          >
            <Icon name='arrow' width={12} height={12} className="mr-2" />
            <p className="h-7">get email updates</p>
          </a>
        </li>
      </ul>
      <ArticleList items={allBlogs} />
    </section >
  );
}
