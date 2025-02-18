import { defineField } from 'sanity';

export const menuItemType = defineField({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'internationalizedArrayString' }),
    defineField({ name: 'path', type: 'string' })
  ]
});
