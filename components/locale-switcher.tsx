'use client';

import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button, ButtonProps } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { i18n, type Locale } from '@/i18n-config';
import { getLocaleFromPathname } from '@/lib/utils';

const displayLocaleFlags = {
  hu: (
    <span role="img" aria-label="Hungarian" className="text-3xl">
      🇭🇺
    </span>
  ),
  en: (
    <span role="img" aria-label="English" className="text-3xl">
      🇬🇧
    </span>
  )
};

export function LocaleSwitcher({
  buttonVariant = 'ghost'
}: {
  buttonVariant?: ButtonProps['variant'];
}) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={buttonVariant}
          className="flex-shrink-0 hover:bg-bb-purple/75"
        >
          {displayLocaleFlags[currentLocale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-bb-black/75 backdrop-blur-sm"
      >
        {i18n.locales.map((locale) => (
          <MenuItem
            key={locale}
            locale={locale}
            currentLocale={currentLocale}
            href={redirectedPathname(locale)}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const MenuItem = ({
  locale,
  currentLocale,
  href
}: {
  locale: Locale;
  currentLocale: Locale;
  href: string;
}) => {
  const displayLocales = {
    hu: 'Magyar',
    en: 'English'
  };
  return (
    <DropdownMenuItem asChild>
      <Link href={href}>
        <span className="flex items-center gap-2">
          {displayLocaleFlags[locale]} {displayLocales[locale]}
        </span>
        {currentLocale === locale && <CheckIcon className="ml-auto h-4 w-4" />}
      </Link>
    </DropdownMenuItem>
  );
};
