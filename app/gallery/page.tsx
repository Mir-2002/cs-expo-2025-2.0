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

      <h1 className="relative z-10 font-audiowide font-bold text-4xl lg:text-6xl xl:text-7xl tracking-wider text-off-white">
        GALLERY
      </h1>
    </Section>
  );
}

function UpperGallerySection() {
  const images = Array.from({ length: 8 }, () => '/images/gallery/placeholder.png');
  return (
    <Section>
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-12">
        <div className="flex-shrink-0 flex flex-col items-center gap-4">
          <div className="w-[530px] h-[530px]">
            <Image
              src="/images/gallery/MAN.svg"
              alt="Upper Gallery Section"
              width={500}
              height={500}
              className="w-full h-auto rotate-180 scale-x-[-1]"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-white text-5xl font-bold font-stalinist-one">Dev Day</p>
          </div>
        </div>
        
        {/* Mobile Carousel */}
        <div className="block md:hidden w-full overflow-x-auto">
          <div className="flex gap-4 pb-4">
            {images.map((src, i) => (
              <div key={i} className="relative flex-shrink-0 w-64 h-64">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid flex-1 grid-cols-12 auto-rows-[80px] gap-4">
          <div className="relative col-span-3 row-span-3 ">
          <Image
          src="/images/gallery/placeholder.png"   
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-6 row-span-3">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-3 row-span-6">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-5 row-span-3">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-4 row-span-3">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-3 row-span-5">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-9 row-span-3">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-9 row-span-2">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
}

function LowerGallerySection() {
  const images = Array.from({ length: 8 }, () => '/images/gallery/placeholder.png');
  return (
    <Section>
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-12">
        {/* MAN.svg - Shows first on mobile, last on desktop */}
        <div className="flex-shrink-0 flex flex-col items-center gap-4 order-1 md:order-3">
          <div className="w-[530px] h-[530px]">
            <Image
              src="/images/gallery/MAN.svg"
              alt="Upper Gallery Section"
              width={500}
              height={500}
              className="w-full h-auto rotate-180 scale-x-[-1]"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-white text-5xl font-bold font-stalinist-one">CS Expo</p>
          </div>
        </div>

        {/* Mobile Carousel - Shows second on mobile */}
        <div className="block md:hidden w-full overflow-x-auto order-2">
          <div className="flex gap-4 pb-4">
            {images.map((src, i) => (
              <div key={i} className="relative flex-shrink-0 w-64 h-64">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid flex-1 grid-cols-12 auto-rows-[80px] gap-4 md:order-1">
          <div className="relative col-span-3 row-span-3 ">
          <Image
          src="/images/gallery/placeholder.png"   
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-6 row-span-3">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-3 row-span-6">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-5 row-span-3">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-4 row-span-3">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-3 row-span-5">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-9 row-span-3">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
          <div className="relative col-span-9 row-span-2">
          <Image
          src="/images/gallery/placeholder.png"
          alt="Gallery Placeholder Image"
          fill
          className="object-cover rounded-xl"
          />
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
}


export default function GalleryPage() {
  return (
    <main>
      <HeroSection />
        <div
          className="relative bg-primary-black"
        >
        <UpperGallerySection />
        <LowerGallerySection />
        </div>
    </main>
  );
}