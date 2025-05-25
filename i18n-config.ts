export const i18n = {
  defaultLocale: 'hu',
  locales: ['en', 'hu', 'de', 'fr', 'zh', 'es']
} as const;

export type Locale = (typeof i18n)['locales'][number];
