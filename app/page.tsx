import FacebookIcon from 'components/icons/facebook';
import InstagramIcon from 'components/icons/instagram';
import LogoChickenLegIcon from 'components/icons/logo-chicken-leg';
import SpotifyIcon from 'components/icons/spotify';
import YouTubeIcon from 'components/icons/youtube';
import OnePagerNavbar from 'components/layout/navbar/one-pager';
import VideoPlayer from 'components/video-player';
import Image from 'next/image';

const { COMPANY_NAME, SITE_NAME } = process.env;

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const currentYear = new Date().getFullYear();
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <>
      <OnePagerNavbar />
      <div className="relative">
        <Image src="/images/BB-pressphoto_3.jpeg" alt="concert" width="1920" height="1080" />
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
        </div>
        <h2 className="mb-3 text-center font-kirakat text-lg text-bb-yellow md:text-xl">
          !!! NEW SONG + VIDEO OUT NOW !!!
        </h2>
        <VideoPlayer url="https://www.youtube.com/watch?v=4CLVXnOIWCk" controls light />
      </section>
      <section
        id="about"
        className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-8 py-4 text-bb-yellow md:items-start md:py-8"
      >
        <h2 className="font-kirakat">Rólunk</h2>
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-32">
          <p>
            Evés, ivás, duhajkodás, szerelem és sírva vigadás. A Bohemian Betyars 2009-es működése
            óta nem csak ország, de világszerte belopta magát egy tekintélyes méretű közönség
            szívébe speed-folk-freak-punkos, magával ragadó, energikus formációjával. A koncertjeik
            közvetlen, ösztönből áradó, életigenlő hangulata felszabadítja a közönség érzelmeit, az
            ember zsigerébe hatol, és minden lábat táncra bír.
          </p>
          <LogoChickenLegIcon className="flex-shrink-0 fill-bb-white" />
          <p>
            Kezdetekben igazi csavargók módjára járták körül utcazenélve Európát, mára a hazai és
            európai klubbok és fesztiválok visszajáró vendégei, de megjárták már Kínát, Japánt,
            Dél-Koreát és az Egyesült Államokat is. Legyen utcán, klubban vagy fesztiválon a
            Bohemian Betyars örömzenéje, magával ragadó ritmusai kizökkentenek a hétköznapokból, és
            beledobnak az önkívület mélyvizébe, pont úgy, ahogy ezt kitervelték.
          </p>
        </div>
      </section>
      <section id="contact" className="p-8">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa obcaecati odio nesciunt
          placeat quisquam consequuntur ad? Velit reiciendis corrupti fugiat dolorem non doloremque
          mollitia nihil enim voluptatem vero? Eius.
        </p>
      </section>
      <div className="relative">
        <Image src="/images/BB-pressphoto_2.jpg" alt="group" width="1920" height="1080" />
        <div className="absolute inset-0 bg-gradient-to-b from-bb-black via-transparent to-bb-black" />
      </div>
      <div className="absolute bottom-0 hidden w-full justify-center p-8 text-sm font-light uppercase md:flex">
        &copy; {copyrightName} {currentYear}
      </div>
      {/* <footer className="flex justify-center p-8 text-white">FOOTER</footer> */}
    </>
  );
}
