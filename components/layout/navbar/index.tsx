import { Link } from '@/components/link-wrapper';
import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import DividerDesktop from 'components/icons/divider-desktop';
import DividerMobile from 'components/icons/divider-mobile';
import LogoChickenLegIcon from 'components/icons/logo-chicken-leg';
import { Menu } from 'lib/shopify/types';
import { Suspense } from 'react';
// import Search, { SearchSkeleton } from './search';

export default async function Navbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');
  const menu: Menu[] = [
    {
      title: 'Webshop',
      path: '/webshop'
    }
  ];

  return (
    <nav className="relative">
      <DividerDesktop className="absolute bottom-0 left-0 hidden w-full translate-y-[calc(100%-1px)] rotate-180 fill-bb-yellow md:block" />
      <DividerMobile className="absolute bottom-0 left-0 translate-y-[calc(100%-1px)] rotate-180 fill-bb-yellow md:hidden" />
      <div className="flex items-center justify-between bg-bb-yellow p-4 text-bb-black lg:px-6">
        {/* <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
        <MobileMenu menu={menu} />
        </Suspense>
      </div> */}
        <div className="flex w-full items-center justify-center ">
          <div className="flex w-full flex-col items-center justify-center gap-5 md:w-1/2 md:flex-row">
            <Link href="/" className="hidden md:inline">
              <h2 className="font-kirakat text-xl uppercase">Főoldal</h2>
            </Link>
            <LogoChickenLegIcon className="h-[72px] w-[72px] flex-shrink-0 fill-bb-black md:h-28 md:w-28" />
            <div className="flex items-center gap-8">
              <Link href="/" className="md:hidden">
                <h2 className="font-kirakat text-xl uppercase">Főoldal</h2>
              </Link>
              <Link
                href="/shop"
                className="flex w-full items-center justify-center gap-4 md:w-auto md:gap-5 lg:mr-6"
              >
                <h2 className="font-kirakat text-xl uppercase">Webshop</h2>
              </Link>
            </div>
            {/* {menu.length ? (
              <ul className="hidden gap-6 text-sm md:flex md:items-center">
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="text-bb-black underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null} */}
          </div>
          {/* <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
          <Search />
          </Suspense>
        </div> */}
          <div className="absolute right-9 top-6 md:top-auto">
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </div>
    </nav>
  );
}
