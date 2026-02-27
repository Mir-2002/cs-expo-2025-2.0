import Section from "@/components/ui/Section";
import Image from "next/image";
import { galleryImages } from "@/data/galleryImages";

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

      <h1 className="relative z-10 font-audiowide font-bold text-4xl lg:text-6xl xl:text-7xl tracking-wider text-off-white">
        GALLERY
      </h1>
    </Section>
  );
}

function UpperGallerySection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Image
        src="/images/gallery/MAN.svg"
        alt="Upper Gallery Section"
        width={500}
        height={500}
        className="w-full h-auto rotate-180"
      />
    </div>
  );
}

function LowerGallerySection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Image
        src="/images/gallery/MAN.svg"
        alt="Lower Gallery Section"
        width={500}
        height={500}
        className="w-full h-auto"
      />
    </div>
  );
}


export default function GalleryPage() {
  return (
    <main>
      <HeroSection />
        <div
          className="relative"
          style={{
            backgroundColor: "#000",
          }}
        >
        <UpperGallerySection />
        <LowerGallerySection />
        </div>
    </main>
  );
}