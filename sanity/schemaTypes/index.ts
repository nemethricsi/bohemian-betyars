import { singletonTypes } from '@/sanity.config';
import type { SchemaPluginOptions } from 'sanity';

import { contactType } from '@/sanity/schemaTypes/contactType';
import { homePageType } from './homePageType';

export const schema: SchemaPluginOptions = {
  types: [homePageType, contactType],
  templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
};
