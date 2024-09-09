import { HomeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'youtube',
      type: 'url',
      title: 'Home Page Youtube video URL'
    }),
    defineField({
      name: 'headerImage',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
});
