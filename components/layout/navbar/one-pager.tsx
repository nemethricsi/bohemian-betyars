import { groq } from 'next-sanity';
import Image from 'next/image';
import { Link } from 'nextjs13-progress';
import { Suspense } from 'react';

import { client } from '@/sanity/lib/client';
import LogoBohemianBetyars from 'components/icons/logo-bb';
import MobileMenu from 'components/layout/navbar/mobile-menu';
import { Menu } from 'lib/shopify/types';

const menu: Menu[] = [
  {
    title: 'Rólunk',
    path: '#about'
  },
  {
    title: 'Shop',
    path: '/shop'
  },
  {
    title: 'Videók',
    path: '#videos'
  },
  {
    title: 'Kapcsolat',
    path: '#contact'
  }
];

export default async function OnePagerNavbar() {
  const data = await client.fetch(
    groq`*[_id == "menuItems"][0]{
    "aboutUs": aboutUs[_key == $locale][0].value,
    "shop": shop[_key == $locale][0].value,
    "videos": videos[_key == $locale][0].value,
    "contact": contact[_key == $locale][0].value
  }`,
    { locale: 'hu' }
  );

  return (
    <>
      <nav className="relative hidden justify-center gap-12  p-8 pt-16 font-kirakat text-xl text-bb-yellow md:flex">
        <a href="#about">{data.aboutUs}</a>
        <Link href="/shop">{data.shop}</Link>
        <div className="absolute z-10 flex -translate-x-6 -translate-y-6 justify-center">
          <Image
            src="/svg/BB_LOGO.svg"
            unoptimized
            alt="logo"
            width="295"
            height="251"
          />
        </div>
        <div className="w-[295px]" />
        <a href="#videos">{data.videos}</a>
        <a href="#contact">{data.contact}</a>
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
