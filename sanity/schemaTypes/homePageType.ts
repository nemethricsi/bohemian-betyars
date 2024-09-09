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
      name: 'youtube',
      type: 'url',
      title: 'Home Page Youtube video URL'
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
