import Image from 'next/image';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Image src="/images/BB-pressphoto_3.jpeg" alt="concert" width="1920" height="1080" />
      <div className="flex justify-center">
        <Image src="/svg/BB_LOGO.svg" unoptimized alt="logo" width="295" height="251" />
      </div>
    </>
  );
}
