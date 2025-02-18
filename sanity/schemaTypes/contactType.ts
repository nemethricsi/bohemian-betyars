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
      type: 'string',
      name: 'phoneNumber',
      title: 'Phone number'
    })
  ],
  preview: {
    select: {
      title: 'fullName.0.value'
    }
  }
});
