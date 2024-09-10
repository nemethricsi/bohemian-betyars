import { defineField, defineType } from 'sanity';

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'pageTitle',
      title: 'Page title'
    }),
    defineField({
      name: 'headerImage',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      type: 'string',
      name: 'videoSectionTitle',
      title: 'Video section title'
    }),
    defineField({
      name: 'youtube',
      type: 'url',
      title: 'Home Page Youtube video URL'
    }),
    defineField({
      type: 'string',
      name: 'aboutTitle',
      title: 'About title'
    }),
    defineField({
      type: 'text',
      name: 'aboutFirstPart',
      title: 'About first part'
    }),
    defineField({
      type: 'text',
      name: 'aboutSecondPart',
      title: 'About second part'
    }),
    defineField({
      type: 'string',
      name: 'contactTitle',
      title: 'Contact title'
    }),
    defineField({
      type: 'array',
      name: 'contacts',
      of: [
        {
          type: 'reference',
          to: [{ type: 'contactType' }]
        }
      ],
      validation: (Rule) => Rule.required().length(2).error('You must select exactly 2 contacts')
    }),
    defineField({
      name: 'footerImage',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ],
  preview: {
    select: {
      title: 'pageTitle'
    }
  }
});
