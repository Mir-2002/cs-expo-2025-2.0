'use client';

import { useState } from 'react';
import Section from "@/components/ui/Section";
import Image from "next/image";

type RankingCardProps = {
  title: string;
  description: string;
  widthClass?: string;
  heightClass?: string;
  className?: string;
  label?: string;
  labelClassName?: string;
};

function RankingCard({
  title,
  description,
  widthClass = "w-full max-w-[616px]",
  heightClass = "h-[990px]",
  className = "",
  label,
  labelClassName = "bg-[linear-gradient(180deg,#FFFFFF_0%,#F0F8FF_25%,#D6EFFF_50%,#BCE6FF_75%,#0099FF_100%)] bg-clip-text text-transparent",
}: RankingCardProps) {
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    setIsTapped(!isTapped);
  };

  return (
    <div className="relative w-full flex justify-center pt-6">
      {label && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 top-6 -translate-y-1/2 px-4 py-1 rounded-full font-bladerunner text-3xl whitespace-nowrap z-10 ${labelClassName}`}
        >
          {label}
        </div>
      )}
      <div
        onClick={handleTap}
        className={`cursor-pointer bg-linear-to-b ${
          isTapped
            ? 'from-[#36405C80] via-[#0f121980] to-[#08090D80]'
            : 'from-[#6794D180] via-[#4369B580] to-[#2F4E8E80]'
        } hover:from-[#36405C80] hover:via-[#0f121980] hover:to-[#08090D80] p-6 rounded-lg shadow-lg transition-all duration-300 ${widthClass} ${heightClass} ${className}`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <Section className="relative flex flex-col items-center justify-center overflow-hidden">
      {/* High-quality background image using Next.js Image for sharp rendering */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/Hall_of_Fame.png"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
          style={{ imageRendering: "auto" }}
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-primary-black z-1" />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="relative z-10 mb-6 font-stalinist-one font-bold text-4xl lg:text-6xl xl:text-7xl tracking-wider text-off-white">
          HALL OF FAME
        </h1>
        <p className="font-space-mono max-w-3xl text-xs sm:text-sm lg:text-base text-white leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          The thesis groups and projects that earned their place here represent the pinnacle of brilliance at CS Expo 2025 2.0. These standout teams pushed the limits, delivered impactful solutions, and set the bar for future generations of innovators.
        </p>
      </div>
    </Section>  
  );
}

function BestThesisSection() {
  return (
    <Section className="py-16">
        <h1 className="text-center mb-8 relative z-10 font-stalinist-one font-bold text-4xl lg:text-6xl xl:text-7xl tracking-wider text-off-white">
            Best Thesis Overall
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <RankingCard
          label="1st"
          labelClassName="bg-[linear-gradient(180deg,#FFFFFF_0%,#F0F8FF_25%,#D6EFFF_50%,#BCE6FF_75%,#0099FF_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
        <RankingCard
          label="2nd"
          labelClassName="bg-[linear-gradient(180deg,#CCEEFF_0%,#80D4FF_25%,#33BBFF_50%,#00A2FF_75%,#0088DD_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
        <RankingCard
          label="3rd"
          labelClassName="bg-[linear-gradient(180deg,#99CCFF_0%,#4D99FF_25%,#0066FF_50%,#0044CC_75%,#002299_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
      </div>
    </Section>
  );
}

function MostInnovativeSection() {
  return (
    <Section className="py-16">
        <h1 className="text-center mb-8 relative z-10 font-stalinist-one font-bold text-4xl lg:text-6xl xl:text-7xl tracking-wider text-off-white">
            Most Innovative
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <RankingCard
          label="1st"
          labelClassName="bg-[linear-gradient(180deg,#FFFFFF_0%,#F0F8FF_25%,#D6EFFF_50%,#BCE6FF_75%,#0099FF_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
        <RankingCard
          label="2nd"
          labelClassName="bg-[linear-gradient(180deg,#CCEEFF_0%,#80D4FF_25%,#33BBFF_50%,#00A2FF_75%,#0088DD_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
        <RankingCard
          label="3rd"
          labelClassName="bg-[linear-gradient(180deg,#99CCFF_0%,#4D99FF_25%,#0066FF_50%,#0044CC_75%,#002299_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
      </div>
    </Section>
  );
}

function BestPresenterSection() {
  return (
    <Section className="py-16">
        <h1 className="text-center mb-8 relative z-10 font-stalinist-one font-bold text-4xl lg:text-6xl xl:text-7xl tracking-wider text-off-white">
            Best Presenter
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <RankingCard
          label="1st"
          labelClassName="bg-[linear-gradient(180deg,#FFFFFF_0%,#F0F8FF_25%,#D6EFFF_50%,#BCE6FF_75%,#0099FF_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
        <RankingCard
          label="2nd"
          labelClassName="bg-[linear-gradient(180deg,#CCEEFF_0%,#80D4FF_25%,#33BBFF_50%,#00A2FF_75%,#0088DD_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
        <RankingCard
          label="3rd"
          labelClassName="bg-[linear-gradient(180deg,#99CCFF_0%,#4D99FF_25%,#0066FF_50%,#0044CC_75%,#002299_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
      </div>
    </Section>
  );
}

function BestAVPSection() {
  return (
    <Section className="py-16">
        <h1 className="text-center mb-8 relative z-10 font-stalinist-one font-bold text-4xl lg:text-6xl xl:text-7xl tracking-wider text-off-white">
            Best AVP
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <RankingCard
          label="1st"
          labelClassName="bg-[linear-gradient(180deg,#FFFFFF_0%,#F0F8FF_25%,#D6EFFF_50%,#BCE6FF_75%,#0099FF_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
        <RankingCard
          label="2nd"
          labelClassName="bg-[linear-gradient(180deg,#CCEEFF_0%,#80D4FF_25%,#33BBFF_50%,#00A2FF_75%,#0088DD_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
        <RankingCard
          label="3rd"
          labelClassName="bg-[linear-gradient(180deg,#99CCFF_0%,#4D99FF_25%,#0066FF_50%,#0044CC_75%,#002299_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
      </div>
    </Section>
  );
}

function BestPosterSection() {
  return (
    <Section className="py-16">
        <h1 className="text-center mb-8 relative z-10 font-stalinist-one font-bold text-4xl lg:text-6xl xl:text-7xl tracking-wider text-off-white">
            Best Poster
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <RankingCard
          label="1st"
          labelClassName="bg-[linear-gradient(180deg,#FFFFFF_0%,#F0F8FF_25%,#D6EFFF_50%,#BCE6FF_75%,#0099FF_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
        <RankingCard
          label="2nd"
          labelClassName="bg-[linear-gradient(180deg,#CCEEFF_0%,#80D4FF_25%,#33BBFF_50%,#00A2FF_75%,#0088DD_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
        <RankingCard
          label="3rd"
          labelClassName="bg-[linear-gradient(180deg,#99CCFF_0%,#4D99FF_25%,#0066FF_50%,#0044CC_75%,#002299_100%)] bg-clip-text text-transparent"
          title=""
          description=""
        />
      </div>
    </Section>
  );
}

export default function HallOfFamePage() {
  return (
    <main>
      <HeroSection />
      <div
        className="relative"
        style={{
          backgroundImage: "url('/images/backgrounds/EVENT_BG_2.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 15%",
          backgroundAttachment: "scroll",
        }}
      >
        <BestThesisSection />
        <MostInnovativeSection />
        <BestPresenterSection /> 
        <BestAVPSection />
        <BestPosterSection />
      </div>
    </main>
  );
}