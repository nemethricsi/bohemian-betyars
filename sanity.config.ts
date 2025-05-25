'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { internationalizedArray } from 'sanity-plugin-internationalized-array';
import { structureTool } from 'sanity/structure';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schema } from '@/sanity/schemaTypes';
import { structure } from '@/sanity/structureConfig';
import { apiVersion, dataset, projectId } from './sanity/env';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

export const singletonTypes = new Set(['homePage', 'indexPage']);

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    internationalizedArray({
      languages: [
        { id: 'hu', title: 'Magyar' },
        { id: 'en', title: 'English' },
        { id: 'de', title: 'Deutsch' },
        { id: 'fr', title: 'Français' }
      ],
      fieldTypes: ['string', 'text'],
      defaultLanguages: ['hu']
    })
  ],
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input
  }
});
