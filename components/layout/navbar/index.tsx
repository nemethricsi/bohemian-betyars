import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoChickenLegIcon from 'components/icons/logo-chicken-leg';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
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
    <nav className="flex items-center justify-between bg-bb-yellow p-4 text-bb-black lg:px-6">
      {/* <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div> */}
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/2">
          <Link
            href="/"
            className="mr-2 flex w-full flex-col items-center justify-center gap-4 md:w-auto md:flex-row md:gap-5 lg:mr-6"
          >
            <LogoChickenLegIcon className="h-[72px] w-[72px] md:h-[88px] md:w-[88px]" />
            <h1 className="font-kirakat text-xl uppercase">Bohemian Betyars webshop</h1>
          </Link>
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
    </nav>
  );
}
