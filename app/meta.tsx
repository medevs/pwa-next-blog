import type { Metadata } from 'next';

const APP_NAME = "Primal Bound";
const APP_CREATOR = APP_NAME;

export const metadata: Metadata = {
  metadataBase: new URL('https://primalbound.com'),
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: '%s | Primal Bound',
  },
  creator: APP_CREATOR,
  publisher: APP_CREATOR,
  description: "Welcome to Primal Bound, a movement dedicated to empowering young people and sharing knowledge on the topics that truly matter. It's not just a blog; it's a transformative journey towards unlocking our full potential. Join me as we delve into the depths of purpose, family, relationships, and well-being, uncovering the primal instincts that guide us. Through captivating articles, interactive discussions, and practical insights, Primal Bound seeks to inspire and ignite the fire within. Together, let's embrace our primal nature and create a community that fosters fulfillment, authenticity, and growth. Welcome to Primal Bound, where knowledge becomes a catalyst for change.",
  keywords: ['purpose', 'family', 'well-being', 'good-habits', 'nature', 'Simplicity', 'primal-life'],
  openGraph: {
    title: APP_CREATOR,
    description: "Welcome to Primal Bound, a movement dedicated to empowering young people and sharing knowledge on the topics that truly matter. It's not just a blog; it's a transformative journey towards unlocking our full potential. Join me as we delve into the depths of purpose, family, relationships, and well-being, uncovering the primal instincts that guide us. Through captivating articles, interactive discussions, and practical insights, Primal Bound seeks to inspire and ignite the fire within. Together, let's embrace our primal nature and create a community that fosters fulfillment, authenticity, and growth. Welcome to Primal Bound, where knowledge becomes a catalyst for change.",
    url: 'https://primalbound.com',
    siteName: APP_CREATOR,
    images: [
      {
        url: '/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: APP_CREATOR,
    card: 'summary_large_image',
    // description: "Welcome to Primal Bound, a movement dedicated to empowering young people and sharing knowledge on the topics that truly matter. It's not just a blog; it's a transformative journey towards unlocking our full potential. Join me as we delve into the depths of purpose, family, relationships, and well-being, uncovering the primal instincts that guide us. Through captivating articles, interactive discussions, and practical insights, Primal Bound seeks to inspire and ignite the fire within. Together, let's embrace our primal nature and create a community that fosters fulfillment, authenticity, and growth. Welcome to Primal Bound, where knowledge becomes a catalyst for change.",
    // siteId: '',
    // creator: '@primalbound',
    // creatorId: '',
    // image: 'https://primalbound.com/og.jpg',
  },
  icons: {
    // icon: '',
    shortcut: '/favicon.ico',
    // apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    // apple: '/apple-touch-icon.png',
    // other: {
    //     rel: 'apple-touch-icon-precomposed',
    //     url: '/apple-touch-icon-precomposed.png',
    // },
  },
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  appleWebApp: {
    title: APP_NAME,
    statusBarStyle: 'black-translucent',
    capable: true,
    // icon: '',
    // iconSize: '',
    // iconPrecomposed: true,
    // iconGloss: 'auto',
    // launchImage: '',
    // launchImageSize: '',
    // launchImagePrecomposed: true,
    // launchImageGloss: 'auto',
  },
  formatDetection: {
    telephone: true,
  },
  verification: {
    google: 'UNbWyO-U7s3oD6AMJmNG1Le3AtSomhPPGeROeBfy0Fs',
    yandex: '0eb557e1e619fca2',
    // bing & yahoo: Yahoo has been using Bing's Webmaster Tools since 2011, it's done automatically through importing from Google.
  },
};