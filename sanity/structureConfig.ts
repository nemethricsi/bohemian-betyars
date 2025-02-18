import { HomeIcon, LinkIcon } from '@sanity/icons';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Bohemian Betyars')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .id('indexPage')
        .child(S.document().schemaType('indexPage').documentId('indexPage')),
      S.listItem()
        .title('Menu Items')
        .icon(LinkIcon)
        .id('menuItems')
        .child(S.document().schemaType('menuItems').documentId('menuItems')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['homePage', 'indexPage', 'menuItems'].includes(item.getId()!)
      )
    ]);
