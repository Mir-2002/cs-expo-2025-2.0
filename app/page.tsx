import Section from "@/components/ui/Section";
import DarkPlanet from "@/public/svg/dark-planet.svg";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <Section className="relative bg-[url('/images/backgrounds/Home_BG.png')] bg-cover bg-center flex flex-col items-center justify-center">
      <Image
        src="/logos/Logo.png"
        alt="CS Expo 2025 Logo"
        width={400}
        height={400}
        className="drop-shadow-lg"
      />
      <Image
        src="/logos/Voyager Logo.png"
        alt="Voyager's Odyssey"
        width={400}
        height={100}
        className="drop-shadow-lg mt-4"
      />

      <div className="absolute bottom-0 h-20 w-full bg-linear-to-t from-black to-transparent bg-clip-border" />
    </Section>
  );
}

function DestinationSection() {
  return (
    <Section className="bg-[url('/images/backgrounds/EVENT_BG_2.jpg')] bg-cover bg-center flex flex-col items-center justify-center lg:h-screen lg:relative lg:justify-start">
      <Link href="/event" className="text-3xl font-stalinist-one my-10">DESTINATION</Link>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:left-10 lg:top-10">
        <Image
          src="/svg/dark-planet.svg"
          alt="Dark Planet"
          width={400}
          height={400}
        />
        <Link href="/event" className="text-2xl font-racing-sans-one absolute translate-y-25 right-5">
          EVENTS
        </Link>
      </div>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:top-10">
        <Image
          src="/svg/ringed-planet.svg"
          alt="Ringed Planet"
          width={400}
          height={400}
        />
        <Link href="/gallery" className="text-2xl font-racing-sans-one absolute top-[60%] left-0">
          GALLERY
        </Link>
      </div>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:top-20 lg:right-10">
        <Image
          src="/svg/purple-planet.svg"
          alt="Earth-like Planet"
          width={400}
          height={400}
        />
        <Link href="/hall-of-fame" className="text-2xl font-racing-sans-one absolute top-[55%] left-10">
          HALL OF FAME
        </Link>
      </div>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:bottom-10 lg:left-10">
        <Image
          src="/svg/spaceship.svg"
          alt="Earth-like Planet"
          width={400}
          height={400}
        />
        <Link href="/partners" className="text-2xl font-racing-sans-one absolute top-1/2 left-10">
          PARTNERS
        </Link>
      </div>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:bottom-12 lg:right-10">
        <Image
          src="/svg/moon.svg"
          alt="Earth-like Planet"
          width={400}
          height={400}
        />
        <Link href="/about" className="text-2xl font-racing-sans-one absolute top-[63%] right-15">
          ABOUT
        </Link>
      </div>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:bottom-0">
        <Image
          src="/svg/earth.svg"
          alt="Earth-like Planet"
          width={400}
          height={400}
        />
        <Link href="/projects" className="text-2xl font-racing-sans-one absolute top-1/5 block">
          PROJECTS
        </Link>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationSection />
    </>
  );
}
