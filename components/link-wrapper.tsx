'use client';

import { usePathname } from 'next/navigation';
import { Link as NextProgressLink } from 'nextjs13-progress';

import { getLocaleFromPathname } from '@/lib/utils';

export function Link({
  children,
  href,
  className,
  onClick,
  scroll = true,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
  scroll?: boolean;
}) {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  return (
    <NextProgressLink
      href={`/${currentLocale}${href}`}
      className={className}
      onClick={onClick}
      scroll={scroll}
      {...props}
    >
      {children}
    </NextProgressLink>
  );
}
