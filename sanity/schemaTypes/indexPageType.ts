import { defineField, defineType } from 'sanity';

export const indexPageType = defineType({
  name: 'indexPage',
  title: 'Index Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headerImage',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'videoSectionTitle',
      title: 'Video section title'
    }),
    defineField({
      name: 'youtube',
      type: 'url',
      title: 'Home Page Youtube video URL'
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'aboutTitle',
      title: 'About title'
    }),
    defineField({
      type: 'internationalizedArrayText',
      name: 'aboutFirstPart',
      title: 'About first part'
    }),
    defineField({
      type: 'internationalizedArrayText',
      name: 'aboutSecondPart',
      title: 'About second part'
    }),
    defineField({
      type: 'internationalizedArrayString',
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
      validation: (Rule) =>
        Rule.required().length(2).error('You must select exactly 2 contacts')
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
    prepare() {
      return {
        title: 'Home Page'
      };
    }
  }
});
