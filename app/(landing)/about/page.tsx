import type { Metadata } from 'next';
import { H1, Timeline } from '@/components';
import timeline from './timeline';
import Logo from '@/components/logo';

export const metadata: Metadata = {
  title: 'Primal Bound',
  description: "Welcome to Primal Bound, a movement dedicated to empowering young people and sharing knowledge on the topics that truly matter. It's not just a blog; it's a transformative journey towards unlocking our full potential. Join me as we delve into the depths of purpose, family, relationships, and well-being, uncovering the primal instincts that guide us. Through captivating articles, interactive discussions, and practical insights, Primal Bound seeks to inspire and ignite the fire within. Together, let's embrace our primal nature and create a community that fosters fulfillment, authenticity, and growth. Welcome to Primal Bound, where knowledge becomes a catalyst for change.",
};

export default function About() {
  return (
    <>
      <section className="max-w-[702px]">
        <h1 className="text-4xl font-bold my-6">Welcome to Primal Bound</h1>
        <p className="text-2xl mb-10">A Captivating Journey of Transformation</p>
        <div className="text-lg leading-relaxed mb-10">
          <p>
            Primal Bound takes you on a transformative journey, delving into the intricacies of modern life while reconnecting
            with the timeless wisdom of our primal past. We are more than just a blog; we are a movement dedicated to empowering
            the young generation with knowledge, inspiration, and practical guidance to navigate the complexities of contemporary
            life and unleash their true potential.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Discover a World of Captivating Topics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-2">Purpose and Meaning</h3>
            <p>Uncover your unique calling and embrace a life rich with meaning and authenticity.</p>
          </div>

          <div className="p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-2">Self-Discovery and Personal Growth</h3>
            <p>Embark on a journey of self-discovery and unlock your true potential.</p>
          </div>

          <div className="p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-2">Mind, Body, and Soul</h3>
            <p>Nurture your holistic well-being through self-care rituals and mindful living.</p>
          </div>

          <div className="p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-2">Resilience and Overcoming Adversity</h3>
            <p>Develop resilience and thrive in the face of challenges.</p>
          </div>

          <div className="p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-2">Creativity and Expression</h3>
            <p>Unleash your creative potential and experience the joy of self-expression.</p>
          </div>

          <div className="p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold mb-2">Nature and Connection to the Earth</h3>
            <p>Cultivate a deep connection with nature and foster a sustainable relationship with the earth.</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-8">
          <h3 className="my-1 max-w-[702px] font-extrabold text-xl md:text-2xl text-neutral-800 dark:text-neutral-200">A Brief History Timeline...</h3>
        </div>

        <Timeline timeline={timeline} />
      </section>
    </>
  )
}
