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
  hu: <span className="fi fi-hu text-2xl" role="img" aria-label="Hungarian" />,
  en: <span className="fi fi-gb text-2xl" role="img" aria-label="English" />,
  de: <span className="fi fi-de text-2xl" role="img" aria-label="German" />,
  fr: <span className="fi fi-fr text-2xl" role="img" aria-label="French" />,
  zh: <span className="fi fi-cn text-2xl" role="img" aria-label="Chinese" />,
  es: <span className="fi fi-es text-2xl" role="img" aria-label="Spanish" />,
  ja: <span className="fi fi-jp text-2xl" role="img" aria-label="Japanese" />
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
          className="flex-shrink-0 hover:bg-gray-500/50"
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
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    zh: '中文',
    es: 'Español',
    ja: '日本語'
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
