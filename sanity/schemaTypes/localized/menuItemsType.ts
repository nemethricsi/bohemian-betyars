import { LinkIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const menuItemsType = defineType({
  name: 'menuItems',
  title: 'Menu Items',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title'
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'aboutUs',
      title: 'About us'
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'shop',
      title: 'Shop'
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'videos',
      title: 'Videos'
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'contact',
      title: 'Contact'
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
});
