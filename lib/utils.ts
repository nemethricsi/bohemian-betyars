import type { Locale } from '@/i18n-config';
import { clsx, type ClassValue } from 'clsx';
import { format } from 'date-fns';
import { de, enUS, es, fr, hu, ja, ko, zhCN } from 'date-fns/locale';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;

export const validateEnvironmentVariables = () => {
  const requiredEnvironmentVariables = [
    'SHOPIFY_STORE_DOMAIN',
    'SHOPIFY_STOREFRONT_ACCESS_TOKEN'
  ];
  const missingEnvironmentVariables = [] as string[];

  requiredEnvironmentVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      missingEnvironmentVariables.push(envVar);
    }
  });

  if (missingEnvironmentVariables.length) {
    throw new Error(
      `The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n${missingEnvironmentVariables.join(
        '\n'
      )}\n`
    );
  }

  if (
    process.env.SHOPIFY_STORE_DOMAIN?.includes('[') ||
    process.env.SHOPIFY_STORE_DOMAIN?.includes(']')
  ) {
    throw new Error(
      'Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.'
    );
  }
};

export function getLocaleFromPathname(pathname: string) {
  const pathnameParts = pathname.split('/');
  return pathnameParts[1] as Locale;
}

export function formatTourDate(datetime: string, locale: Locale) {
  const date = new Date(datetime);
  const day = format(date, 'dd');
  const month = format(date, 'MMM', { locale: localeMap[locale] });
  const year = format(date, 'yyyy');

  return { day, month, year };
}

const localeMap = {
  hu: hu,
  en: enUS,
  de: de,
  fr: fr,
  zh: zhCN,
  es: es,
  ja: ja,
  ko: ko
};
