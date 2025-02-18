import { singletonTypes } from '@/sanity.config';
import type { SchemaPluginOptions } from 'sanity';

import { contactType } from '@/sanity/schemaTypes/contactType';
import { indexPageType } from '@/sanity/schemaTypes/indexPageType';
import { menuItemsType } from '@/sanity/schemaTypes/menuItemsType';
import { menuItemType } from '@/sanity/schemaTypes/menuItemType';

export const schema: SchemaPluginOptions = {
  types: [contactType, indexPageType, menuItemsType, menuItemType],
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
};
