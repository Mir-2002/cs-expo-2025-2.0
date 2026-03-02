import Section from "@/components/ui/Section";
import Image from "next/image";

function HeroSection() {
  return (
    <Section className="relative flex flex-col items-center justify-center overflow-hidden">
      {/* High-quality background image using Next.js Image for sharp rendering */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/Gallery.png"
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
        <h1 className="relative z-10 font-audiowide font-bold text-4xl lg:text-6xl xl:text-7xl tracking-wider text-off-white">
          HALL OF FAME
        </h1>
        <p className="font-space-mono max-w-3xl text-xs sm:text-sm lg:text-base text-white leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          The thesis groups and projects that earned their place here represent the pinnacle of brilliance at CS Expo 2025 2.0. These standout teams pushed the limits, delivered impactful solutions, and set the bar for future generations of innovators.
        </p>
      </div>
    </Section>
  );
}

export default function HallOfFamePage() {
  return (
    <div className="min-h-screen bg-primary-black text-off-white">
      <HeroSection />
      {/* Additional content for the Hall of Fame page can be added here */}
    </div>
  );
}