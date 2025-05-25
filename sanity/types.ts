import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface HomePageData {
  aboutFirstPart: string;
  aboutSecondPart: string;
  aboutTitle: string;
  contactTitle: string;
  contacts: Contact[];
  footerImage: SanityImageSource;
  headerImage: SanityImageSource;
  showLessDatesLabel: string;
  showMoreDatesLabel: string;
  ticketsButtonLabel: string;
  tourDatesToShow: number;
  tourTitle: string;
  videoOneSectionTitle: string;
  videoTwoSectionTitle: string;
  youtube: string;
  youtubeTwo: string;
}

interface Contact {
  _id: string;
  fullName: string;
  order: number;
  phoneNumber: string;
  email: string;
  title: string;
}
