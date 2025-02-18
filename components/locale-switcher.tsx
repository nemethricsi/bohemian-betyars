'use client';

import { i18n, type Locale } from '@/i18n-config';
import { getLocaleFromPathname } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function LocaleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const displayLocales = {
    hu: 'Magyar',
    en: 'English'
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathname(locale)}
          className={locale === currentLocale ? 'underline' : ''}
        >
          {displayLocales[locale]}
        </Link>
      ))}
    </div>
  );
}
