"use client";

import CardDeckCarousel from "@/components/CardDeckCarousel";
import Section from "@/components/ui/Section";
import DarkPlanet from "@/public/svg/dark-planet.svg";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  categories,
  getThesesByCategory,
  type Category,
  type ThesisEntry,
} from "@/lib/theses";

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

function StellarShowcaseSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );

  const thesesForCategory = useMemo(
    () => getThesesByCategory(selectedCategory),
    [selectedCategory]
  );

  const deckItems = useMemo(() => {
    // One card per thesis (use first image as preview)
    return thesesForCategory.map((t) => ({
      id: t.groupName,
      src: t.images?.[0] ?? "/sample picture(event)/sample1.jpg",
      title: t.thesisTitle,
    }));
  }, [thesesForCategory]);

  const [activeThesis, setActiveThesis] = useState<ThesisEntry | null>(
    thesesForCategory[0] ?? null
  );

  return (
    <Section className="relative bg-[url('/images/backgrounds/EVENT_BG_2.jpg')] bg-cover bg-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20">
        <h1 className="text-3xl font-stalinist-one mt-10 mb-20 w-1/2 text-center lg:w-full lg:text-4xl">
          STELLAR SHOWCASE
        </h1>

        {/* Mobile Layout (vertical stack) */}
        <div className="relative flex flex-col items-center justify-center lg:hidden">
          {/* Globe + attached glow wrapper */}
          <div className="relative flex items-center justify-center w-85 h-85">
            {/* Glow: always centered behind the globe */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-105 w-105 rounded-full blur-3xl bg-blue-900/30" />
            </div>

            {/* Globe */}
            <div
              className="globe relative z-10 brightness-75 hover:brightness-90 transition-all duration-300"
              aria-label="Spinning globe"
            />
          </div>

          {/*Ring under the Globe*/}
          <div className="mt-5">
            <Image
              src="/svg/stellar-showcase/globe-underring.svg"
              alt="Globe Ring"
              width={300}
              height={300}
            />
          </div>

          {/*Categories*/}
          <div className="flex flex-col items-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  const next = getThesesByCategory(cat);
                  setActiveThesis(next[0] ?? null);
                }}
                className={`group relative w-full max-w-md px-8 py-4 flex items-center justify-center
                  bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40
                  border-2 border-blue-400/50 rounded-lg
                  hover:scale-105 hover:border-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                  transition-all duration-300
                  ${
                    selectedCategory === cat
                      ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.6)] bg-gradient-to-r from-blue-800/60 via-purple-800/60 to-blue-800/60"
                      : ""
                  }
                  before:absolute before:inset-0 before:rounded-lg before:p-[2px] 
                  before:bg-gradient-to-r before:from-blue-500/20 before:via-purple-500/20 before:to-blue-500/20
                  before:-z-10 before:blur-sm`}
              >
                <h1 className="font-stalinist-one text-lg text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,1)]">
                  {cat}
                </h1>
              </button>
            ))}
          </div>

          {/* Card Deck of Images */}
          <div className="mt-14 w-full px-6">
            <CardDeckCarousel
              items={deckItems}
              initialIndex={0}
              className="mx-auto"
              onActiveItemChangeAction={(item) => {
                if (!item) {
                  setActiveThesis(null);
                  return;
                }
                const found = thesesForCategory.find(
                  (t) => t.thesisTitle === item.title
                );
                setActiveThesis(found ?? null);
              }}
            />
          </div>

          {/* Thesis Details Card*/}
          <div className="relative mt-10 flex flex-col items-center">
            <div className="relative h-96 w-96 flex flex-col items-center">
              <Image
                src="/svg/stellar-showcase/thesis-details.svg"
                alt="Thesis Details Card"
                width={400}
                height={400}
                className="pointer-events-none"
              />

              {/* Details */}
              <div className="absolute top-24 w-[320px] px-4 text-center">
                <p className="font-stalinist-one text-base text-white/90">
                  {activeThesis?.thesisTitle ?? "Select a thesis"}
                </p>
                <p className="mt-2 font-space-mono text-sm text-white/70">
                  <span className="text-white/80">Group:</span>{" "}
                  {activeThesis?.groupName ?? "—"}
                </p>
                <p className="mt-1 font-space-mono text-sm text-white/70">
                  <span className="text-white/80">Mentor:</span>{" "}
                  {activeThesis?.mentor ?? "—"}
                </p>
                <p className="mt-1 font-space-mono text-sm text-white/70">
                  <span className="text-white/80">Members:</span>{" "}
                  {activeThesis?.members?.length
                    ? activeThesis.members.join(", ")
                    : "—"}
                </p>
              </div>
            </div>

            {/* More Details button (below card) */}
            <div className="mt-20">
              {activeThesis?.avp ? (
                <a
                  href={activeThesis.avp}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative px-8 py-4 flex items-center justify-center
                    bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40
                    border-2 border-blue-400/50 rounded-lg
                    hover:scale-105 hover:border-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-lg before:p-[2px] 
                    before:bg-gradient-to-r before:from-blue-500/20 before:via-purple-500/20 before:to-blue-500/20
                    before:-z-10 before:blur-sm"
                >
                  <span className="font-stalinist-one text-base text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,1)]">
                    More Details
                  </span>
                </a>
              ) : (
                <div
                  className="relative px-8 py-4 flex items-center justify-center opacity-50 cursor-not-allowed
                  bg-gradient-to-r from-gray-800/40 via-gray-700/40 to-gray-800/40
                  border-2 border-gray-500/30 rounded-lg"
                >
                  <span className="font-stalinist-one text-base text-white/60">
                    More Details
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg+): 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start lg:max-w-7xl lg:mx-auto">
          {/* LEFT: Thesis Details Card */}
          <div className="flex flex-col items-center">
            <div className="relative h-96 w-96 flex flex-col items-center">
              <Image
                src="/svg/stellar-showcase/thesis-details.svg"
                alt="Thesis Details Card"
                width={400}
                height={400}
                className="pointer-events-none"
              />

              {/* Details */}
              <div className="absolute top-24 w-[320px] px-4 text-center">
                <p className="font-stalinist-one text-base text-white/90">
                  {activeThesis?.thesisTitle ?? "Select a thesis"}
                </p>
                <p className="mt-2 font-space-mono text-sm text-white/70">
                  <span className="text-white/80">Group:</span>{" "}
                  {activeThesis?.groupName ?? "—"}
                </p>
                <p className="mt-1 font-space-mono text-sm text-white/70">
                  <span className="text-white/80">Mentor:</span>{" "}
                  {activeThesis?.mentor ?? "—"}
                </p>
                <p className="mt-1 font-space-mono text-sm text-white/70">
                  <span className="text-white/80">Members:</span>{" "}
                  {activeThesis?.members?.length
                    ? activeThesis.members.join(", ")
                    : "—"}
                </p>
              </div>
            </div>

            {/* More Details button (below card) */}
            <div className="mt-20">
              {activeThesis?.avp ? (
                <a
                  href={activeThesis.avp}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative px-8 py-4 flex items-center justify-center
                    bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40
                    border-2 border-blue-400/50 rounded-lg
                    hover:scale-105 hover:border-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-lg before:p-[2px] 
                    before:bg-gradient-to-r before:from-blue-500/20 before:via-purple-500/20 before:to-blue-500/20
                    before:-z-10 before:blur-sm"
                >
                  <span className="font-stalinist-one text-base text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,1)]">
                    More Details
                  </span>
                </a>
              ) : (
                <div
                  className="relative px-8 py-4 flex items-center justify-center opacity-50 cursor-not-allowed
                  bg-gradient-to-r from-gray-800/40 via-gray-700/40 to-gray-800/40
                  border-2 border-gray-500/30 rounded-lg"
                >
                  <span className="font-stalinist-one text-base text-white/60">
                    More Details
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* CENTER: Globe + Ring */}
          <div className="flex flex-col items-center">
            {/* Globe + attached glow wrapper */}
            <div className="relative flex items-center justify-center w-95 h-95">
              {/* Glow: always centered behind the globe */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-105 w-105 rounded-full blur-3xl bg-blue-900/30" />
              </div>

              {/* Globe */}
              <div
                className="globe relative z-10 brightness-75 hover:brightness-90 transition-all duration-300"
                aria-label="Spinning globe"
              />
            </div>

            {/* Ring under the Globe */}
            <div className="mt-5">
              <Image
                src="/svg/stellar-showcase/globe-underring.svg"
                alt="Globe Ring"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* RIGHT: Categories (2x2 grid + centered 5th) + Card Deck below */}
          <div className="flex flex-col gap-8">
            {/* Categories Grid */}
            <div className="grid grid-cols-2 gap-4">
              {categories.slice(0, 4).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    const next = getThesesByCategory(cat);
                    setActiveThesis(next[0] ?? null);
                  }}
                  className={`group relative px-6 py-3 flex items-center justify-center
                    bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40
                    border-2 border-blue-400/50 rounded-lg
                    hover:scale-105 hover:border-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                    transition-all duration-300
                    ${
                      selectedCategory === cat
                        ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.6)] bg-gradient-to-r from-blue-800/60 via-purple-800/60 to-blue-800/60"
                        : ""
                    }
                    before:absolute before:inset-0 before:rounded-lg before:p-[2px] 
                    before:bg-gradient-to-r before:from-blue-500/20 before:via-purple-500/20 before:to-blue-500/20
                    before:-z-10 before:blur-sm`}
                >
                  <h1 className="font-stalinist-one text-sm text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,1)]">
                    {cat}
                  </h1>
                </button>
              ))}
            </div>
            {/* 5th category centered below */}
            {categories[4] && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory(categories[4]);
                  const next = getThesesByCategory(categories[4]);
                  setActiveThesis(next[0] ?? null);
                }}
                className={`group relative px-6 py-3 flex items-center justify-center mx-auto
                  bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40
                  border-2 border-blue-400/50 rounded-lg
                  hover:scale-105 hover:border-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
                  transition-all duration-300
                  ${
                    selectedCategory === categories[4]
                      ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.6)] bg-gradient-to-r from-blue-800/60 via-purple-800/60 to-blue-800/60"
                      : ""
                  }
                  before:absolute before:inset-0 before:rounded-lg before:p-[2px] 
                  before:bg-gradient-to-r before:from-blue-500/20 before:via-purple-500/20 before:to-blue-500/20
                  before:-z-10 before:blur-sm`}
              >
                <h1 className="font-stalinist-one text-sm text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,1)]">
                  {categories[4]}
                </h1>
              </button>
            )}

            {/* Card Deck Carousel */}
            <div className="w-full">
              <CardDeckCarousel
                items={deckItems}
                initialIndex={0}
                className="mx-auto"
                onActiveItemChangeAction={(item) => {
                  if (!item) {
                    setActiveThesis(null);
                    return;
                  }
                  const found = thesesForCategory.find(
                    (t) => t.thesisTitle === item.title
                  );
                  setActiveThesis(found ?? null);
                }}
              />
            </div>
          </div>
        </div>
      </div>
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
      <div className="absolute bottom-0 h-32 w-full bg-linear-to-t from-black to-transparent bg-clip-border" />
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationSection />
      <EventsSection />
      <StellarShowcaseSection />
    </>
  );
}
