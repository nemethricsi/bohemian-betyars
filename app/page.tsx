import OnePagerNavbar from 'components/layout/navbar/one-pager';
import Image from 'next/image';

const { COMPANY_NAME, SITE_NAME } = process.env;

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const currentYear = new Date().getFullYear();
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <>
      <OnePagerNavbar />
      <div className="relative">
        <Image src="/images/BB-pressphoto_3.jpeg" alt="concert" width="1920" height="1080" />
        <div className="absolute inset-0 bg-gradient-to-b from-bb-black via-transparent to-bb-black" />
      </div>
      <section id="videos" className="h-96 p-8">
        <h2>VIDEOS</h2>
      </section>
      <section id="about" className="p-8">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa obcaecati odio nesciunt
          placeat quisquam consequuntur ad? Velit reiciendis corrupti fugiat dolorem non doloremque
          mollitia nihil enim voluptatem vero? Eius.
        </p>
      </section>
      <section id="contact" className="p-8">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa obcaecati odio nesciunt
          placeat quisquam consequuntur ad? Velit reiciendis corrupti fugiat dolorem non doloremque
          mollitia nihil enim voluptatem vero? Eius.
        </p>
      </section>
      <div className="relative">
        <Image src="/images/BB-pressphoto_2.jpg" alt="group" width="1920" height="1080" />
        <div className="absolute inset-0 bg-gradient-to-b from-bb-black via-transparent to-bb-black" />
      </div>
      <div className="absolute bottom-0 hidden w-full justify-center p-8 text-sm font-light uppercase md:flex">
        &copy; {copyrightName} {currentYear}
      </div>
      {/* <footer className="flex justify-center p-8 text-white">FOOTER</footer> */}
    </>
  );
}
