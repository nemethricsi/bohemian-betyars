import { getMenu } from 'lib/shopify';
import Image from 'next/image';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2009 + (currentYear > 2009 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer>
      <Image
        src="/svg/divider_desktop_red.svg"
        alt="divider"
        unoptimized
        width={4000}
        height={100}
        className="hidden md:block"
      />
      <Image
        src="/svg/divider_mobile_red.svg"
        alt="divider"
        unoptimized
        width={4000}
        height={100}
        className="md:hidden"
      />
      <div className="flex justify-center bg-bb-red p-4 text-[13px] text-base uppercase text-bb-white">
        &copy; {copyrightName} {currentYear}
      </div>
    </footer>
  );
}
