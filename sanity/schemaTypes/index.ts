import { singletonTypes } from '@/sanity.config';
import type { SchemaPluginOptions } from 'sanity';

import { contactType } from '@/sanity/schemaTypes/contactType';
import { homePageType } from '@/sanity/schemaTypes/homePageType';
import { indexPageType } from '@/sanity/schemaTypes/localized/indexPageType';
import { menuItemsType } from '@/sanity/schemaTypes/localized/menuItemsType';
import { menuItemType } from '@/sanity/schemaTypes/menuItemType';
export const schema: SchemaPluginOptions = {
  types: [
    homePageType,
    contactType,
    indexPageType,
    menuItemsType,
    menuItemType
  ],
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
};
