import DividerDesktop from 'components/icons/divider-desktop';
import DividerMobile from 'components/icons/divider-mobile';
import FacebookIcon from 'components/icons/facebook';
import FeatherIllu from 'components/icons/feather';
import InstagramIcon from 'components/icons/instagram';
import LogoBohemianBetyars from 'components/icons/logo-bb';
import SpotifyIcon from 'components/icons/spotify';
import YouTubeIcon from 'components/icons/youtube';
import { getMenu } from 'lib/shopify';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2009 + (currentYear > 2009 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="relative bg-bb-red">
      <FeatherIllu className="absolute right-6 top-32 h-auto w-48 -rotate-[140deg] md:right-64 md:top-16 md:hidden md:-rotate-180 lg:block" />
      <div className="flex flex-col items-center justify-center p-6 text-bb-black md:p-12">
        <div className="flex gap-5 self-stretch md:pb-6">
          <LogoBohemianBetyars className="hidden h-auto w-48 fill-bb-white md:block" />
          <div className="flex flex-1 flex-col-reverse gap-8 md:flex-row md:gap-28">
            <div className="flex flex-col gap-1">
              <p className="font-base font-kirakat uppercase text-bb-black">Információk</p>
              <a href="#0" className="text-[13px] text-bb-white">
                Főoldal
              </a>
              <a href="#0" className="text-[13px] text-bb-white">
                Felhasználói feltételek
              </a>
              <a href="#0" className="text-[13px] text-bb-white">
                Kapcsolat
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-base font-kirakat uppercase text-bb-black">Rendelés</p>
              <a href="#0" className="text-[13px] text-bb-white">
                Adatvédelmi szabályzat
              </a>
              <a href="#0" className="text-[13px] text-bb-white">
                Fizetés, szállítás
              </a>
            </div>
            <div className="flex flex-col gap-1 md:ml-auto md:text-right">
              <p className="font-base font-kirakat uppercase text-bb-black">Bohemian Betyars</p>
              <a
                href="mailto:info@bohemianbetyars.hu?subject=customer%20help"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-bb-white"
              >
                info@bohemianbetyars.hu
              </a>
              <a href="tel:+36305745787" className="text-[13px] text-bb-white">
                +36 30 574 57 87
              </a>
              <SocialIconsSmall />
            </div>
          </div>
        </div>
        <div className="mb-5 mt-12 flex justify-center gap-14 self-stretch md:hidden">
          <a
            href="https://www.instagram.com/bohemianbetyars"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center"
          >
            <InstagramIcon className="h-6 w-6 stroke-bb-black" />
          </a>
          <a
            href="https://www.facebook.com/bohemianbetyars"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center"
          >
            <FacebookIcon className="h-6 w-6 stroke-bb-black" />
          </a>
          <a
            href="https://www.youtube.com/@BohemianBetyarsHungary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center"
          >
            <YouTubeIcon className="h-6 w-6 stroke-bb-black" />
          </a>
          <a
            href="https://open.spotify.com/artist/2ezYPSKWBfnFTobN9puCow?si=jxLEJAiPRte-yw2vY1QVwg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center"
          >
            <SpotifyIcon className="h-6 w-6 stroke-bb-black" lineFill="#1A1E1E" />
          </a>
        </div>
        <div className="text-sm font-light uppercase">
          &copy; {copyrightName} {currentYear}
        </div>
      </div>
      <DividerDesktop className="absolute left-0 top-0 hidden w-full -translate-y-[calc(100%-1px)] fill-bb-red md:block" />
      <DividerMobile className="absolute left-0 top-0 -translate-y-[calc(100%-1px)] fill-bb-red md:hidden" />
    </footer>
  );
}

const SocialIconsSmall = () => {
  return (
    <div className="hidden justify-end gap-2 md:flex">
      <a
        href="https://www.instagram.com/bohemianbetyars"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center"
      >
        <InstagramIcon className="h-6 w-6 stroke-bb-white" />
      </a>
      <a
        href="https://www.facebook.com/bohemianbetyars"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center"
      >
        <FacebookIcon className="h-6 w-6 stroke-bb-white" />
      </a>
      <a
        href="https://www.youtube.com/@BohemianBetyarsHungary"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center"
      >
        <YouTubeIcon className="h-6 w-6 stroke-bb-white" />
      </a>
      <a
        href="https://open.spotify.com/artist/2ezYPSKWBfnFTobN9puCow?si=jxLEJAiPRte-yw2vY1QVwg"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center"
      >
        <SpotifyIcon className="h-6 w-6 stroke-bb-white" lineFill="#fff" />
      </a>
    </div>
  );
};
