import { Link } from '@/components/link-wrapper';
import { defineQuery } from 'next-sanity';
import { Suspense } from 'react';

import LogoBohemianBetyars from '@/components/icons/logo-bb';
import MobileMenu from '@/components/layout/navbar/mobile-menu';
import { LocaleSwitcher } from '@/components/locale-switcher';
import type { Locale } from '@/i18n-config';
import { client } from '@/sanity/lib/client';
import type { Menu } from 'lib/shopify/types';

type MenuItem = { path: string; title: string };
type Response = {
  aboutUs: MenuItem;
  shop: MenuItem;
  videos: MenuItem;
  contact: MenuItem;
};

const query = defineQuery(`*[_id == "menuItems"][0]{
  aboutUs {
    path,
    "title": title[_key == $locale][0].value
  },
  shop {
    path,
    "title": title[_key == $locale][0].value
  },
  videos {
    path,
    "title": title[_key == $locale][0].value
  },
  contact {
    path,
    "title": title[_key == $locale][0].value
  }
}`);

export default async function OnePagerNavbar({ locale }: { locale: Locale }) {
  const data = await client.fetch<Response>(query, { locale });

  const mobileMenu: Menu[] = [
    { title: data.aboutUs.title, path: data.aboutUs.path },
    { title: data.shop.title, path: data.shop.path },
    { title: data.videos.title, path: data.videos.path },
    { title: data.contact.title, path: data.contact.path }
  ];

  return (
    <>
      <nav className="relative hidden justify-center gap-12 p-8 pt-16 font-kirakat text-xl text-bb-yellow md:flex">
        <div className="relative flex items-center gap-12">
          <div className="absolute -left-20 -top-1">
            <LocaleSwitcher />
          </div>
          <a href={data.aboutUs.path}>{data.aboutUs.title}</a>
          <Link href={data.shop.path}>{data.shop.title}</Link>
        </div>
        <div className="absolute z-10 flex -translate-x-6 -translate-y-6 justify-center">
          <LogoBohemianBetyars className="hidden h-[251px] w-[295px] fill-bb-white md:block" />
        </div>
        <div className="w-[295px]" />
        <a href={data.videos.path}>{data.videos.title}</a>
        <a href={data.contact.path}>{data.contact.title}</a>
      </nav>
      <div className="relative block flex-none md:hidden">
        <LogoBohemianBetyars className="absolute left-1/2 top-5 z-10 h-auto w-40 -translate-x-1/2 fill-bb-white md:hidden" />
        <Suspense fallback={null}>
          <MobileMenu menu={mobileMenu} />
        </Suspense>
      </div>
    </>
  );
}
