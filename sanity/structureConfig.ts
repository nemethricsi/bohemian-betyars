import { HomeIcon } from '@sanity/icons';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Bohemian Betyars')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .id('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['homePage'].includes(item.getId()!)
      )
    ]);
