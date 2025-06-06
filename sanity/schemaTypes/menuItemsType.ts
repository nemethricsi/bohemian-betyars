import { LinkIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const menuItemsType = defineType({
  name: 'menuItems',
  title: 'Menu Items',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      type: 'menuItem',
      name: 'aboutUs',
      title: 'About us'
    }),
    defineField({
      type: 'menuItem',
      name: 'shop',
      title: 'Shop'
    }),
    defineField({
      type: 'menuItem',
      name: 'tour',
      title: 'Tour'
    }),
    defineField({
      type: 'menuItem',
      name: 'videos',
      title: 'Videos'
    }),
    defineField({
      type: 'menuItem',
      name: 'contact',
      title: 'Contact'
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items'
      };
    }
  }
});
