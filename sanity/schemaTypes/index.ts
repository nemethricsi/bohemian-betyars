import { singletonTypes } from '@/sanity.config';
import type { SchemaPluginOptions } from 'sanity';

import { contactType } from '@/sanity/schemaTypes/contactType';
import { homePageType } from '@/sanity/schemaTypes/homePageType';
import { indexPageType } from '@/sanity/schemaTypes/localized/indexPageType';

export const schema: SchemaPluginOptions = {
  types: [homePageType, contactType, indexPageType],
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
};
