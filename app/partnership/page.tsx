import Section from "@/components/ui/Section";
import Image from "next/image";
import SponsorshipSection from "./SponsorshipSection";
import PartnershipSection from "./PartnershipSection";

function HeroSection() {
  return (
    <Section className="relative flex flex-col items-center justify-center overflow-hidden">
      {/* High-quality background image using Next.js Image for sharp rendering */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/partnership.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-primary-black z-[1]" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="font-audiowide font-bold text-4xl lg:text-6xl xl:text-7xl tracking-wider text-off-white mb-6">
          PARTNERSHIP
        </h1>
        <p className="max-w-3xl text-xs sm:text-sm lg:text-base text-white leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Those who helped CS Expo 2025 made the event possible through their
          support, collaboration, and commitment to showcasing innovation,
          unlocking the full potential of the event.
        </p>
      </div>
    </Section>
  );
}

function PartnersContentSection() {
  return (
    <Section className="relative flex flex-col items-center gap-16 overflow-hidden py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-t from-transparent to-primary-black z-0" />

      {/* Sponsorship Section */}
      <SponsorshipSection />

      {/* Partnership Section */}
      <PartnershipSection />
    </Section>
  );
}

export default function PartnershipPage() {
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
        <PartnersContentSection />
      </div>
    </main>
  );
}
 
