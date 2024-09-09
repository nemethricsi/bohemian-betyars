import { singletonTypes } from '@/sanity.config';
import type { SchemaPluginOptions } from 'sanity';

import { homePageType } from './homePageType';

export const schema: SchemaPluginOptions = {
  types: [homePageType],
  templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
};
