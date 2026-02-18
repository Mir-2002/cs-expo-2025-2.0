import Section from "@/components/ui/Section";
import Image from "next/image";

function HeroSection() {
  return (
    <Section className="bg-[url('/images/backgrounds/Home_BG.png')] bg-cover bg-center flex flex-col items-center justify-center">
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
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <h1 className="font-racing-sans-one">CS EXPO</h1>
      <HeroSection />
    </>
  );
}
