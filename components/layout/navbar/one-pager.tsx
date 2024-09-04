import LogoBohemianBetyars from 'components/icons/logo-bb';
import MobileMenu from 'components/layout/navbar/mobile-menu';
import { Menu } from 'lib/shopify/types';
import Image from 'next/image';
import { Link } from 'nextjs13-progress';
import { Suspense } from 'react';

const menu: Menu[] = [
  {
    title: 'About',
    path: '#about'
  },
  {
    title: 'Shop',
    path: '/shop'
  },
  {
    title: 'Videos',
    path: '#videos'
  },
  {
    title: 'Contact',
    path: '#contact'
  }
];

export default function OnePagerNavbar() {
  return (
    <>
      <nav className="relative hidden justify-center gap-12  p-8 pt-16 font-kirakat text-xl text-bb-yellow md:flex">
        <a href="#about">About</a>
        <Link href="/shop">Shop</Link>
        <div className="absolute z-10 flex -translate-x-6 -translate-y-6 justify-center">
          <Image src="/svg/BB_LOGO.svg" unoptimized alt="logo" width="295" height="251" />
        </div>
        <div className="w-[295px]" />
        <a href="#videos">Videos</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="relative block flex-none md:hidden">
        <LogoBohemianBetyars className="absolute left-1/2 top-5 z-10 h-auto w-40 -translate-x-1/2 fill-bb-white md:hidden" />
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
    </>
  );
}
