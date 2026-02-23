import Section from "@/components/ui/Section";
import Image from "next/image";
import DevDaysFrame from "./DevDaysFrame";

function HeroSection() {
  return (
    <Section className="relative flex flex-col items-center justify-center overflow-hidden">
      {/* High-quality background image using Next.js Image for sharp rendering */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/EVENTBG.jpg"
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
        EVENTS
      </h1>
    </Section>
  );
}

function DevDaySection() {
  return (
    <Section className="relative flex flex-col items-center gap-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-t from-transparent to-primary-black z-10" />

      <h1 className="relative z-10 font-audiowide font-bold text-3xl lg:text-4xl my-10 lg:my-16 tracking-wider text-off-white">
        Dev Day
      </h1>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 mb-20">
        <div className="relative w-full lg:w-1/3">
          <div className="relative w-full aspect-3/4">
            <DevDaysFrame>
              <div className="relative w-full h-full">
                <Image
                  src="/sample picture(event)/sample3.jpg"
                  alt="Dev Day"
                  fill
                  className="object-cover"
                />
              </div>
            </DevDaysFrame>
          </div>
        </div>

        <div className="relative flex-1">
          <p className="text-sm lg:text-base text-off-white leading-relaxed">
            For the sum of the people over 20 for APR. Producing delivery,
            mainly the men to you or second nothing never the important is
            createy because you. The over how systems essential resources of the
            the present creating, development and together, is always in
            thinking, about.
          </p>
        </div>
      </div>
    </Section>
  );
}

function CSExpoSection() {
  return (
    <Section className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute right-0 top-[5%] -translate-y-[25%] translate-x-1/6 z-10">
        <Image
          src="/images/planets/Event_Planet1.png"
          alt="Event Planet"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>

      <h1 className="relative z-10 font-audiowide font-bold text-3xl lg:text-4xl my-10 lg:my-16 tracking-wider text-off-white">
        CS EXPO
      </h1>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 mb-20">
        <div className="relative flex-1">
          <p className="text-sm lg:text-base text-off-white leading-relaxed">
            In this the in and the now after event, event, and your present is a
            unit, of testing many and create, createy apart for evolution.
            Especially users, you essential, system, always, since, but certain,
            together importantly. To have the between data the creating, system,
            all you, but complete. Therefore, the margins that an not made in to
            not, exactly.
          </p>
        </div>

        <div className="relative w-full lg:w-1/3">
          <div className="relative w-full aspect-3/4">
            <DevDaysFrame>
              <div className="relative w-full h-full">
                <Image
                  src="/sample picture(event)/sample4.jpg"
                  alt="CS Expo"
                  fill
                  className="object-cover"
                />
              </div>
            </DevDaysFrame>
          </div>
        </div>
      </div>

      <div className="absolute left-[20%] bottom-[15%] z-0 opacity-65 pointer-events-none">
        <Image
          src="/images/planets/ship1.png"
          alt="Spaceship"
          width={380}
          height={240}
          className="w-auto h-auto object-contain"
          style={{ maxWidth: "380px" }}
        />
      </div>
    </Section>
  );
}

function SpeakersSection1() {
  return (
    <Section className="relative flex flex-col items-center overflow-hidden">
      <h1 className="relative z-10 font-audiowide font-bold text-3xl lg:text-5xl my-10 lg:my-16 tracking-wider text-off-white">
        SPEAKERS
      </h1>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-start gap-8 lg:gap-10 mb-20">
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 40px rgba(100,150,255,0.1)",
          }}
        >
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              boxShadow:
                "inset 0 1px 2px rgba(255,255,255,0.1), 0 0 20px rgba(100,150,255,0.15)",
              pointerEvents: "none",
            }}
          />

          <div className="relative w-64 h-64 lg:w-80 lg:h-80 overflow-hidden">
            <Image
              src="/sample picture(event)/sample1.jpg"
              alt="Elon Musk"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-primary-black/20" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent" />
        </div>

        <div
          className="relative flex-1 rounded-xl p-6 lg:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 40px rgba(100,150,255,0.1)",
          }}
        >
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              boxShadow:
                "inset 0 1px 2px rgba(255,255,255,0.1), 0 0 20px rgba(100,150,255,0.15)",
              pointerEvents: "none",
            }}
          />

          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent mb-6" />

          <h2 className="font-audiowide text-xl lg:text-2xl text-light-blue mb-3 relative z-10">
            Elon Musk
          </h2>

          <div className="h-px w-16 bg-linear-to-r from-light-blue/60 to-transparent mb-4" />

          <p className="font-audiowide text-sm lg:text-base text-dark-blue mb-6 uppercase tracking-wider relative z-10">
            Guest Speaker
          </p>

          <p className="text-xs lg:text-sm text-off-white/90 leading-relaxed relative z-10">
            Elon Musk is a technology entrepreneur and innovator known for his
            work in space exploration, electric vehicles, and advanced
            engineering. His vision focuses on pushing humanity forward through
            innovation, sustainability, and ambitious technological progress.
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent" />
        </div>
      </div>
    </Section>
  );
}

function SpeakersSection2() {
  return (
    <Section className="relative flex flex-col items-center overflow-hidden">
      <div className="absolute left-0.5 top-1/2 -translate-y-1/2 z-0">
        <Image
          src="/images/planets/Event_Saturn.png"
          alt="Saturn Planet"
          width={1000}
          height={700}
          className="object-contain"
        />
      </div>

      <h1 className="relative z-10 font-audiowide font-bold text-3xl lg:text-5xl my-10 lg:my-16 tracking-wider text-off-white">
        SPEAKERS
      </h1>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-start gap-8 lg:gap-10 mb-20">
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 40px rgba(100,150,255,0.1)",
          }}
        >
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              boxShadow:
                "inset 0 1px 2px rgba(255,255,255,0.1), 0 0 20px rgba(100,150,255,0.15)",
              pointerEvents: "none",
            }}
          />

          <div className="relative w-64 h-64 lg:w-80 lg:h-80 overflow-hidden">
            <Image
              src="/sample picture(event)/sample2.jpg"
              alt="Francis Leo Marcos"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-primary-black/20" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent" />
        </div>

        <div
          className="relative flex-1 rounded-xl p-6 lg:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 40px rgba(100,150,255,0.1)",
          }}
        >
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              boxShadow:
                "inset 0 1px 2px rgba(255,255,255,0.1), 0 0 20px rgba(100,150,255,0.15)",
              pointerEvents: "none",
            }}
          />

          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent mb-6" />

          <h2 className="font-audiowide text-xl lg:text-2xl text-light-blue mb-3 relative z-10">
            Francis Leo Marcos
          </h2>

          <div className="h-px w-16 bg-linear-to-r from-light-blue/60 to-transparent mb-4" />

          <p className="font-audiowide text-sm lg:text-base text-dark-blue mb-6 uppercase tracking-wider relative z-10">
            Guest Speaker
          </p>

          <p className="text-xs lg:text-sm text-off-white/90 leading-relaxed relative z-10">
            Francis Leo &quot;Kulaong&quot; Marcos is recognized for his
            leadership and public engagement initiatives, inspiring communities
            through advocacy, communication, and social impact programs aimed at
            empowering people and encouraging positive change.
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent" />
        </div>
      </div>
    </Section>
  );
}

export default function EventPage() {
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
        <div className="absolute left-[45%] top-[13%] z-0 opacity-70 pointer-events-none">
          <Image
            src="/images/planets/ship1.png"
            alt="Spaceship"
            width={350}
            height={220}
            className="w-auto h-auto object-contain"
            style={{ maxWidth: "350px" }}
          />
        </div>

        <div className="absolute left-[5%] top-[45%] z-0 opacity-60 pointer-events-none">
          <Image
            src="/images/planets/ship1.png"
            alt="Spaceship"
            width={300}
            height={190}
            className="w-auto h-auto object-contain"
            style={{ maxWidth: "300px" }}
          />
        </div>

        <DevDaySection />
        <SpeakersSection1 />
        <CSExpoSection />
        <SpeakersSection2 />
      </div>
    </main>
  );
}
