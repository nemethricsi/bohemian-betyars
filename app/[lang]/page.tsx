import FacebookIcon from '@/components/icons/facebook';
import FeatherIllu from '@/components/icons/feather';
import InstagramIcon from '@/components/icons/instagram';
import LogoChickenLegIcon from '@/components/icons/logo-chicken-leg';
import SpotifyIcon from '@/components/icons/spotify';
import TikTokIcon from '@/components/icons/tiktok';
import YouTubeIcon from '@/components/icons/youtube';
import OnePagerNavbar from '@/components/layout/navbar/one-pager';
import SpotifyEmbedPlayer from '@/components/spotify-embed-player';
import { TourDatesList } from '@/components/tour-dates-list';
import VideoPlayer from '@/components/video-player';
import { BitEvent } from '@/lib/bit';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { HomePageData } from '@/sanity/types';
import { groq } from 'next-sanity';
import Image from 'next/image';

export const revalidate = 60;

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function IndexPage({
  params
}: {
  params: Promise<{ lang: 'hu' | 'en' }>;
}) {
  const { lang } = await params;
  const pageData = await client.fetch<HomePageData>(
    groq`*[_id == "indexPage"][0]{
      headerImage,
      footerImage,
      youtube,
      youtubeTwo,
      tourDatesToShow,
      "videoOneSectionTitle": videoOneSectionTitle[_key == $locale][0].value,
      "videoTwoSectionTitle": videoTwoSectionTitle[_key == $locale][0].value,
      "aboutFirstPart": aboutFirstPart[_key == $locale][0].value,
      "aboutSecondPart": aboutSecondPart[_key == $locale][0].value,
      "aboutTitle": aboutTitle[_key == $locale][0].value,
      "tourTitle": tourTitle[_key == $locale][0].value,
      "ticketsButtonLabel": ticketsButtonLabel[_key == $locale][0].value,
      "showMoreDatesLabel": showMoreDatesLabel[_key == $locale][0].value,
      "showLessDatesLabel": showLessDatesLabel[_key == $locale][0].value,
      "contactTitle": contactTitle[_key == $locale][0].value,
      "contacts": contacts[]-> {
        _id,
        order,
        "title": title[_key == $locale][0].value,
        "fullName": fullName[_key == $locale][0].value,
        "phoneNumber": phoneNumber[_key == $locale][0].value,
        "email": email[_key == $locale][0].value,
      }
    }`,
    {
      locale: lang
    }
  );

  const fetchBandsInTownConcerts = async (): Promise<BitEvent[]> => {
    const response = await fetch(
      `https://rest.bandsintown.com/artists/Bohemian%20Betyars/events/?app_id=${process.env.BANDSINTOWN_API_KEY}`
    );
    const data = await response.json();
    return data;
  };

  const concerts = await fetchBandsInTownConcerts();

  const currentYear = new Date().getFullYear();
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  const firstContactPerson = pageData.contacts.find(
    (contact) => contact.order === 1
  );
  const secondContactPerson = pageData.contacts.find(
    (contact) => contact.order === 2
  );

  return (
    <>
      <OnePagerNavbar locale={lang} />
      <div className="relative">
        <Image
          src={urlFor(pageData.headerImage).url()}
          alt="concert"
          width="3840"
          height="2160"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bb-black via-transparent to-bb-black" />
      </div>
      <section
        id="videos"
        className="relative z-10 mx-auto max-w-7xl p-8 md:-mt-72"
      >
        <div className="mb-44 hidden justify-center gap-24 self-stretch md:flex">
          <a
            href="https://www.instagram.com/bohemianbetyars"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center transition-transform hover:rotate-12"
          >
            <InstagramIcon className="h-10 w-10 stroke-bb-yellow" />
          </a>
          <a
            href="https://www.facebook.com/bohemianbetyars"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center transition-transform hover:rotate-12"
          >
            <FacebookIcon className="h-10 w-10 stroke-bb-yellow" />
          </a>
          <a
            href="https://www.youtube.com/@BohemianBetyarsHungary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center transition-transform hover:rotate-12"
          >
            <YouTubeIcon className="h-10 w-10 stroke-bb-yellow" />
          </a>
          <a
            href="https://open.spotify.com/artist/2ezYPSKWBfnFTobN9puCow?si=jxLEJAiPRte-yw2vY1QVwg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center transition-transform hover:rotate-12"
          >
            <SpotifyIcon
              className="h-10 w-10 stroke-bb-yellow"
              lineFill="#1A1E1E"
            />
          </a>
          <a
            href="https://www.tiktok.com/@bohemianbetyars"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center transition-transform hover:rotate-12"
          >
            <TikTokIcon className="h-10 w-10 stroke-bb-yellow" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-14 sm:flex-row">
          <div className="w-full">
            <h2 className="mb-3 text-center font-kirakat text-lg text-bb-yellow sm:line-clamp-1 md:text-xl">
              {pageData.videoOneSectionTitle}
            </h2>
            <VideoPlayer url={pageData.youtube} controls light />
          </div>
          <div className="w-full">
            <h2 className="mb-3 text-center font-kirakat text-lg text-bb-yellow sm:line-clamp-1 md:text-xl">
              {pageData.videoTwoSectionTitle}
            </h2>
            <VideoPlayer url={pageData.youtubeTwo} controls light />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-8 py-4 text-bb-yellow md:items-start md:py-8"
      >
        <h2 className="font-kirakat">{pageData.aboutTitle}</h2>
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-32">
          <p className="font-light">{pageData.aboutFirstPart}</p>
          <LogoChickenLegIcon className="flex-shrink-0 fill-bb-white" />
          <p className="font-light">{pageData.aboutSecondPart}</p>
        </div>
      </section>
      <section id="tour">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-8 py-4 text-bb-yellow md:items-start md:py-8">
          <h2 className="font-kirakat">{pageData.tourTitle}</h2>
          <div className="w-full">
            <TourDatesList
              concerts={concerts}
              locale={lang}
              ticketsButtonLabel={pageData.ticketsButtonLabel}
              showMoreDatesLabel={pageData.showMoreDatesLabel}
              showLessDatesLabel={pageData.showLessDatesLabel}
              tourDatesToShow={pageData.tourDatesToShow}
            />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="mx-auto flex max-w-7xl flex-col items-start gap-4 p-8 text-bb-yellow"
      >
        <h2 className="font-kirakat">{pageData.contactTitle}</h2>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-8">
            {firstContactPerson && (
              <div className="flex flex-col">
                <p>{firstContactPerson.title}</p>
                <p className="font-light">{firstContactPerson.fullName}</p>
                <a
                  href={`mailto:${firstContactPerson.email}`}
                  className="font-light underline underline-offset-4"
                >
                  {firstContactPerson.email}
                </a>
                <a
                  href={`tel:${firstContactPerson.phoneNumber}`}
                  className="font-light"
                >
                  {firstContactPerson.phoneNumber}
                </a>
              </div>
            )}
            {secondContactPerson && (
              <div className="flex flex-col">
                <p>{secondContactPerson.title}</p>
                <p className="font-light">{secondContactPerson.fullName}</p>
                <a
                  href={`mailto:${secondContactPerson.email}`}
                  className="font-light underline underline-offset-4"
                >
                  {secondContactPerson.email}
                </a>
                <a
                  href={`tel:${secondContactPerson.phoneNumber}`}
                  className="font-light"
                >
                  {secondContactPerson.phoneNumber}
                </a>
              </div>
            )}
          </div>
          <div className="flex flex-col items-start justify-between">
            <a
              href="https://www.instagram.com/bohemianbetyars"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <InstagramIcon className="h-6 w-6 stroke-bb-yellow" />
              <span className="hidden md:flex">
                instagram.com/bohemianbetyars
              </span>
            </a>
            <a
              href="https://www.facebook.com/bohemianbetyars"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <FacebookIcon className="h-6 w-6 stroke-bb-yellow" />
              <span className="hidden md:flex">
                facebook.com/bohemianbetyars
              </span>
            </a>
            <a
              href="https://www.youtube.com/@BohemianBetyarsHungary"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <YouTubeIcon className="h-6 w-6 stroke-bb-yellow" />
              <span className="hidden md:flex">
                youtube.com/bohemianbetyarshungary
              </span>
            </a>
            <a
              href="https://open.spotify.com/artist/2ezYPSKWBfnFTobN9puCow?si=jxLEJAiPRte-yw2vY1QVwg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <SpotifyIcon className="h-6 w-6 stroke-bb-yellow" />
              <span className="hidden md:flex">
                spotify.com/bohemianbetyars
              </span>
            </a>
            <a
              href="https://www.tiktok.com/@bohemianbetyars"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <TikTokIcon className="h-6 w-6 stroke-bb-yellow" />
              <span className="hidden md:flex">
                tiktok.com/@bohemianbetyars
              </span>
            </a>
          </div>
          <div className="hidden md:flex">
            <FeatherIllu className="w-40" />
          </div>
          <div className="hidden md:flex">
            <SpotifyEmbedPlayer height={152} />
          </div>
        </div>
        <div className="mt-14 w-full md:hidden">
          <SpotifyEmbedPlayer />
        </div>
      </section>
      <div className="relative">
        <Image
          src={urlFor(pageData.footerImage).url()}
          alt="group"
          width="3840"
          height="2160"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bb-black via-transparent to-bb-black" />
      </div>
      <div className="absolute bottom-0 hidden w-full justify-center p-8 text-sm font-light uppercase md:flex">
        &copy; {copyrightName} {currentYear}
      </div>
      {/* <footer className="flex justify-center p-8 text-white">FOOTER</footer> */}
    </>
  );
}
