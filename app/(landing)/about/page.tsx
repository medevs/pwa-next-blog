import type { Metadata } from 'next';
import { H1, Timeline } from '@/components';
import timeline from './timeline';

export const metadata: Metadata = {
	title: 'Primal Bound',
  description: "Welcome to Primal Bound, a movement dedicated to empowering young people and sharing knowledge on the topics that truly matter. It's not just a blog; it's a transformative journey towards unlocking our full potential. Join me as we delve into the depths of purpose, family, relationships, and well-being, uncovering the primal instincts that guide us. Through captivating articles, interactive discussions, and practical insights, Primal Bound seeks to inspire and ignite the fire within. Together, let's embrace our primal nature and create a community that fosters fulfillment, authenticity, and growth. Welcome to Primal Bound, where knowledge becomes a catalyst for change.",
};

export default function About() {
	return (
		<>
			<section className="max-w-[702px]">
				<H1>About</H1>
				<p className="my-5 text-neutral-800 dark:text-neutral-200">
					Primal Bound is a captivating blog that invites you to explore the intricacies of modern life while reconnecting with the timeless wisdom of our primal past. Here, we dive deep into the realms of purpose, family dynamics, relationships, love, social connections, and the transformative power of cultivating good habits and well-being.
				</p>

				<p className="my-5 text-neutral-800 dark:text-neutral-200">
					In a world that often feels disconnected and overwhelming, Primal Bound serves as a guiding light, illuminating the path towards a more fulfilling existence. Through insightful articles, relatable anecdotes, and practical advice, we strive to empower you to navigate the challenges of today while embracing the enduring values that have sustained humanity for centuries.
				</p>

				<p className="my-5 text-neutral-800 dark:text-neutral-200">
					In a world that often feels disconnected and overwhelming, Primal Bound serves as a guiding light, illuminating the path towards a more fulfilling existence. Through insightful articles, relatable anecdotes, and practical advice, we strive to empower you to navigate the challenges of today while embracing the enduring values that have sustained humanity for centuries.
				</p>

				<p className="my-5 text-neutral-800 dark:text-neutral-200">
					Join us as we delve into the depths of purpose, helping you uncover your unique calling and guiding you towards a life rich with meaning and fulfillment. Explore the profound dynamics of family and the boundless joys and complexities of fatherhood, as we delve into the profound impact these relationships have on our well-being.
				</p>

				<p className="my-5 text-neutral-800 dark:text-neutral-200">
					Discover the intricate dance of relationships, where we unravel the mysteries of love, communication, and emotional connections. From nurturing romantic partnerships to fostering strong friendships, we provide tools and insights to help you cultivate deeper, more authentic relationships in your life.
				</p>

				<p className="my-5 text-neutral-800 dark:text-neutral-200">
					At Primal Bound, we recognize the profound impact social connections have on our overall well-being. We explore the importance of community, the power of genuine human connection, and the beauty of forging bonds that transcend time and distance. Join our vibrant community, where you can engage, share, and connect with like-minded individuals who are also on their own journey of growth and self-discovery.
				</p>

				<p className="my-5 text-neutral-800 dark:text-neutral-200">
					Additionally, we believe that true well-being encompasses not only our physical health but also our mental and emotional states. Dive into the realm of good habits, where we explore strategies and practices that nourish every aspect of your being. From self-care rituals to mindfulness techniques, we provide practical guidance to help you cultivate balance, resilience, and a sense of inner harmony.
				</p>

				<p className="my-5 text-neutral-800 dark:text-neutral-200">
					Welcome to Primal Bound, a sanctuary of wisdom, inspiration, and relatability. We invite you to embark on this transformative journey with us, where you'll find a treasure trove of articles that resonate with your interests and aspirations. Rediscover the timeless truths that lie at the heart of our existence and unlock the keys to a more fulfilling, purpose-driven life. Embrace the boundless possibilities that await you at Primal Bound.
				</p>

				<div className="flex flex-col space-y-4 mt-8">
					<h3 className="my-1 max-w-[702px] font-extrabold text-xl md:text-2xl text-neutral-800 dark:text-neutral-200">A Brief History Timeline...</h3>
				</div>

				<Timeline timeline={timeline} />
			</section>
		</>
	)
}
