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
      name: 'videoOneSectionTitle',
      title: 'Video 1 section title'
    }),
    defineField({
      name: 'youtube',
      type: 'url',
      title: 'Youtube video 1 URL'
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'videoTwoSectionTitle',
      title: 'Video 2 section title'
    }),
    defineField({
      name: 'youtubeTwo',
      type: 'url',
      title: 'Youtube video 2 URL'
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'aboutTitle',
      title: 'About title'
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'tourTitle',
      title: 'Tour title'
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'ticketsButtonLabel',
      title: 'Tickets button label'
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'showMoreDatesLabel',
      title: 'Show more dates label'
    }),
    defineField({
      type: 'internationalizedArrayString',
      name: 'showLessDatesLabel',
      title: 'Show less dates label'
    }),
    defineField({
      type: 'number',
      name: 'tourDatesToShow',
      title: 'Tour dates to show initally'
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
