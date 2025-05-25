import { UsersIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contactType',
  title: 'Contacts',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      type: 'internationalizedArrayString',
      name: 'title',
      title: 'Title',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'fullName',
      title: 'Full name',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'email',
      title: 'Email',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'phoneNumber',
      title: 'Phone number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      type: 'number',
      name: 'order',
      title: 'Order',
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'order'
    }
  }
});
