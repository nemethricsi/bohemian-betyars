import { ensureStartsWith } from 'lib/utils';
import { Oswald } from 'next/font/google';
import localFont from 'next/font/local';
import { Next13NProgress } from 'nextjs13-progress';
import { ReactNode } from 'react';
import './globals.css';

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

const kirakat = localFont({
  src: './kirakat-webfont.woff2',
  display: 'swap',
  weight: '400',
  variable: '--font-kirakat'
});

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR
  ? ensureStartsWith(TWITTER_CREATOR, '@')
  : undefined;
const twitterSite = TWITTER_SITE
  ? ensureStartsWith(TWITTER_SITE, 'https://')
  : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full ${kirakat.variable} ${oswald.variable} scroll-smooth font-sans`}
    >
      <body className="flex h-full flex-col bg-bb-black text-bb-white antialiased selection:bg-bb-purple">
        <main className="relative flex-grow">{children}</main>
        <Next13NProgress color="#EB584B" height={6} />
      </body>
    </html>
  );
}
