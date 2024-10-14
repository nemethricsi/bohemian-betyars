import TikTokIcon from '@/components/icons/tiktok';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import FacebookIcon from 'components/icons/facebook';
import FeatherIllu from 'components/icons/feather';
import InstagramIcon from 'components/icons/instagram';
import LogoChickenLegIcon from 'components/icons/logo-chicken-leg';
import SpotifyIcon from 'components/icons/spotify';
import YouTubeIcon from 'components/icons/youtube';
import OnePagerNavbar from 'components/layout/navbar/one-pager';
import SpotifyEmbedPlayer from 'components/spotify-embed-player';
import VideoPlayer from 'components/video-player';
import Image from 'next/image';

export const revalidate = 60;

const { COMPANY_NAME, SITE_NAME } = process.env;

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const homePageData = await client.fetch(
    `*[_id == "homePage"][0]{
      headerImage, 
      footerImage, 
      videoSectionTitle, 
      youtube, 
      aboutFirstPart, 
      aboutSecondPart, 
      aboutTitle,
      contactTitle,
      contacts[]-> {  
        _id,
        title,
        fullName,
        phoneNumber,
      }
    }`
  );
  const currentYear = new Date().getFullYear();
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  console.log({ homePageData });

  return (
    <>
      <OnePagerNavbar />
      <div className="relative">
        <Image
          src={urlFor(homePageData.headerImage).url()}
          alt="concert"
          width="3840"
          height="2160"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bb-black via-transparent to-bb-black" />
      </div>
      <section id="videos" className="relative z-10 p-8 md:-mt-72">
        <div className="mb-44 hidden justify-center gap-24 self-stretch md:flex">
          <a
            href="https://www.instagram.com/bohemianbetyars"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center"
          >
            <InstagramIcon className="h-10 w-10 stroke-bb-yellow" />
          </a>
          <a
            href="https://www.facebook.com/bohemianbetyars"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center"
          >
            <FacebookIcon className="h-10 w-10 stroke-bb-yellow" />
          </a>
          <a
            href="https://www.youtube.com/@BohemianBetyarsHungary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center"
          >
            <YouTubeIcon className="h-10 w-10 stroke-bb-yellow" />
          </a>
          <a
            href="https://open.spotify.com/artist/2ezYPSKWBfnFTobN9puCow?si=jxLEJAiPRte-yw2vY1QVwg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center"
          >
            <SpotifyIcon className="h-10 w-10 stroke-bb-yellow" lineFill="#1A1E1E" />
          </a>
          <a
            href="https://www.tiktok.com/@bohemianbetyars"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center"
          >
            <TikTokIcon className="h-10 w-10 stroke-bb-yellow" />
          </a>
        </div>
        <h2 className="mb-3 text-center font-kirakat text-lg text-bb-yellow md:text-xl">
          {homePageData.videoSectionTitle}
        </h2>
        <VideoPlayer url={homePageData.youtube} controls light />
      </section>
      <section
        id="about"
        className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-8 py-4 text-bb-yellow md:items-start md:py-8"
      >
        <h2 className="font-kirakat">{homePageData.aboutTitle}</h2>
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-32">
          <p className="font-light">{homePageData.aboutFirstPart}</p>
          <LogoChickenLegIcon className="flex-shrink-0 fill-bb-white" />
          <p className="font-light">{homePageData.aboutSecondPart}</p>
        </div>
      </section>
      <section
        id="contact"
        className="mx-auto flex max-w-7xl flex-col items-start gap-4 p-8 text-bb-yellow"
      >
        <h2 className="font-kirakat">{homePageData.contactTitle}</h2>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <p>{homePageData.contacts[0].title}</p>
              <p className="font-light">{homePageData.contacts[0].fullName}</p>
              <a href={`tel:${homePageData.contacts[0].phoneNumber}`} className="font-light">
                {homePageData.contacts[0].phoneNumber}
              </a>
            </div>
            <div className="flex flex-col">
              <p>{homePageData.contacts[1].title}</p>
              <p className="font-light">{homePageData.contacts[1].fullName}</p>
              <a href={`tel:${homePageData.contacts[1].phoneNumber}`} className="font-light">
                {homePageData.contacts[1].phoneNumber}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between">
            <a
              href="https://www.instagram.com/bohemianbetyars"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <InstagramIcon className="h-6 w-6 stroke-bb-yellow" />
              <span className="hidden md:flex">instagram.com/bohemianbetyars</span>
            </a>
            <a
              href="https://www.facebook.com/bohemianbetyars"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <FacebookIcon className="h-6 w-6 stroke-bb-yellow" />
              <span className="hidden md:flex">facebook.com/bohemianbetyars</span>
            </a>
            <a
              href="https://www.youtube.com/@BohemianBetyarsHungary"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <YouTubeIcon className="h-6 w-6 stroke-bb-yellow" />
              <span className="hidden md:flex">youtube.com/bohemianbetyarshungary</span>
            </a>
            <a
              href="https://open.spotify.com/artist/2ezYPSKWBfnFTobN9puCow?si=jxLEJAiPRte-yw2vY1QVwg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <SpotifyIcon className="h-6 w-6 stroke-bb-yellow" />
              <span className="hidden md:flex">spotify.com/bohemianbetyars</span>
            </a>
            <a
              href="https://www.tiktok.com/@bohemianbetyars"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <TikTokIcon className="h-6 w-6 stroke-bb-yellow" />
              <span className="hidden md:flex">tiktok.com/@bohemianbetyars</span>
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
          src={urlFor(homePageData.footerImage).url()}
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
