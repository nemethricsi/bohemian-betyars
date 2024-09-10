import { UsersIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contactType',
  title: 'Contacts',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title'
    }),
    defineField({
      type: 'string',
      name: 'fullName',
      title: 'Full name'
    }),
    defineField({
      type: 'string',
      name: 'phoneNumber',
      title: 'Phone number'
    })
  ],
  preview: {
    select: {
      title: 'fullName'
    }
  }
});
