import DividerDesktop from 'components/icons/divider-desktop';
import DividerMobile from 'components/icons/divider-mobile';
import { getMenu } from 'lib/shopify';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2009 + (currentYear > 2009 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="relative">
      <DividerDesktop className="hidden translate-y-1 fill-bb-red md:block" />
      <DividerMobile className="translate-y-1 fill-bb-red md:hidden" />
      <div className="flex justify-center bg-bb-red p-6 text-[13px] text-base uppercase text-bb-white">
        &copy; {copyrightName} {currentYear}
      </div>
    </footer>
  );
}
