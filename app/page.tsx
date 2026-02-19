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
    <Section className="relative bg-[url('/images/backgrounds/EVENT_BG_2.jpg')] bg-cover bg-center flex flex-col items-center justify-center lg:h-screen lg:justify-start">
      <h1 className="text-3xl font-stalinist-one my-10 lg:text-4xl">
        DESTINATION
      </h1>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:left-10 lg:top-10">
        <Image
          src="/svg/dark-planet.svg"
          alt="Dark Planet"
          width={400}
          height={400}
        />
        <Link
          href="/event"
          className="text-2xl font-racing-sans-one absolute translate-y-25 right-5"
        >
          EVENTS
        </Link>
        <Image
          src="/svg/star.svg"
          alt="Star"
          width={100}
          height={100}
          className="absolute top-10 right-1/2 animate-pulse"
        />
      </div>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:top-10">
        <Image
          src="/svg/ringed-planet.svg"
          alt="Ringed Planet"
          width={400}
          height={400}
        />
        <Link
          href="/gallery"
          className="text-2xl font-racing-sans-one absolute top-[60%] left-0"
        >
          GALLERY
        </Link>
        <Image
          src="/svg/star.svg"
          alt="Star"
          width={100}
          height={100}
          className="absolute bottom-10 right-1/2 animate-pulse"
        />
      </div>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:top-20 lg:right-10">
        <Image
          src="/svg/purple-planet.svg"
          alt="Earth-like Planet"
          width={400}
          height={400}
        />
        <Link
          href="/hall-of-fame"
          className="text-2xl font-racing-sans-one absolute top-[55%] left-10"
        >
          HALL OF FAME
        </Link>
        <Image
          src="/svg/star.svg"
          alt="Star"
          width={100}
          height={100}
          className="absolute top-22 right-1/2 animate-pulse"
        />
      </div>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:bottom-10 lg:left-10">
        <Image
          src="/svg/spaceship.svg"
          alt="Earth-like Planet"
          width={400}
          height={400}
        />
        <Link
          href="/partners"
          className="text-2xl font-racing-sans-one absolute top-1/2 left-10"
        >
          PARTNERS
        </Link>
        <Image
          src="/svg/star.svg"
          alt="Star"
          width={100}
          height={100}
          className="absolute top-10 left-1/2 animate-pulse"
        />
      </div>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:bottom-5 lg:right-10">
        <Image
          src="/svg/moon.svg"
          alt="Earth-like Planet"
          width={400}
          height={400}
        />
        <Link
          href="/about"
          className="text-2xl font-racing-sans-one absolute top-[63%] right-15"
        >
          ABOUT
        </Link>
        <Image
          src="/svg/star.svg"
          alt="Star"
          width={100}
          height={100}
          className="absolute bottom-10 right-1/2 animate-pulse"
        />
      </div>
      <div className="relative flex justify-center w-auto h-auto hover:scale-105 transition-transform duration-300 lg:absolute lg:bottom-0">
        <Image
          src="/svg/earth.svg"
          alt="Earth-like Planet"
          width={400}
          height={400}
        />
        <Link
          href="/projects"
          className="text-2xl font-racing-sans-one absolute top-1/5 block"
        >
          PROJECTS
        </Link>
      </div>

      <div className="absolute bottom-0 h-16 w-full bg-linear-to-t from-black to-transparent" />
    </Section>
  );
}

function EventsSection() {
  return (
    <Section className="relative bg-[url('/images/backgrounds/EVENT_BG_2.jpg')] bg-cover bg-center flex flex-col items-center gap-10">
      <Image
        src="/svg/tech-bg.svg"
        alt="Tech Background"
        width={400}
        height={400}
        className="absolute right-0 top-24 lg:top-12 z-0 opacity-80"
      />
      <Image
        src="/svg/spaceship-with-moons.svg"
        alt="Tech Background"
        width={800}
        height={800}
        className="absolute left-0 bottom-10 lg:bottom-20 z-0 opacity-80"
      />
      <h1 className="text-3xl font-stalinist-one my-10 lg:text-4xl">EVENTS</h1>
      <div className="flex flex-col w-full h-80 z-10 p-10 gap-5 lg:w-1/2 lg:-translate-x-1/3">
        <h2 className="text-2xl font-stalinist-one">Dev Day</h2>
        <p className="font-space-mono text-sm tracking-wide ">
          Dev Day, held ahead of CS Expo 2026, focuses on real-world
          perspectives from industry speakers as they discuss current
          technologies, evolving trends, and the realities of working in today’s
          tech industry. It also opens conversations on the role of academe,
          industry, and government in supporting growth and innovation in the
          tech sector.
        </p>
      </div>
      <div className="flex flex-col w-full h-80 z-10 p-10 gap-5 lg:w-1/2 lg:translate-x-1/3">
        <h2 className="text-2xl font-stalinist-one text-end">CS Expo</h2>
        <p className="font-space-mono text-sm tracking-wide text-end">
          CS Expo Day showcases student projects evaluated by faculty and
          industry experts, with awards recognizing top innovations. The event
          also includes talks from tech leaders discussing current trends and
          insights in technology.
        </p>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationSection />
      <EventsSection />
    </>
  );
}
