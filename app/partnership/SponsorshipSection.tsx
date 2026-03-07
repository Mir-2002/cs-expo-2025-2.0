"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import SponsorSorter, { type SponsorTier } from "./SponsorSorter";
import SponsorModal from "./SponsorModal";
import type { SponsorCard, SponsorCardsMap } from "./sponsorTypes";

const sponsorCards: SponsorCardsMap = {
  "co-presenter": [
    {
      src: "/sponsor_logo/Co-Presenter/relx.png",
      alt: "RELX | Reed Elsevier Philippines",
      label: "CO-PRESENTER",
      title: "RELX | Reed Elsevier Philippines",
      name: "RELX | Reed Elsevier Philippines",
      description: `RELX | Reed Elsevier Philippines is a global company that creates innovative digital tools, data solutions, and research platforms used by students, professionals, and organizations around the world. Our work helps improve scientific discoveries, support better healthcare, strengthen legal research, and enhance business decision-making.

Here in the Philippines, our teams work in technology, data analytics, content creation, operations, and customer support. We collaborate with colleagues across the globe to build products and solutions that make learning, researching, and problem-solving easier and more effective.

At RELX | Reed Elsevier Philippines, we value curiosity, innovation, teamwork, and continuous learning. We strive to create an environment where students and young professionals can gain skills, build confidence, and start shaping their future careers.`,
      websiteUrl: "https://www.reedelsevier.com.ph/",
      facebookUrl: "https://www.facebook.com/Reed.Elsevier.Philippines",
      instagramUrl: "https://www.instagram.com/reedelsevierphilippines",
      isPlaceholder: false,
    },
  ],

  silver: [
    {
      src: "/sponsor_logo/Silver/silver1.jpg",
      alt: "Love Likha",
      label: "SILVER",
      title: "Love Likha",
      name: "Love Likha",
      description:
        "Love Likha is a community-focused maker collective showcasing creative craftsmanship through workshops and curated merchandise.",
      isPlaceholder: false,
    },
    {
      src: "/sponsor_logo/Silver/silver2.jpg",
      alt: "Zagu",
      label: "SILVER",
      title: "Zagu",
      name: "Zagu",
      description:
        "Zagu is a popular beverage brand known for its chewy pearls and refreshing milk tea offerings.",
      isPlaceholder: false,
    },
    {
      src: "/sponsor_logo/Silver/silver3.jpg",
      alt: "Tomoro Coffee",
      label: "SILVER",
      title: "Tomoro Coffee",
      name: "Tomoro Coffee",
      description:
        "Tomoro Coffee is a specialty coffee brand that celebrates local flavors and community-driven experiences.",
      isPlaceholder: false,
    },
  ],

  gold: [
    {
      src: "/sponsor_logo/Gold/gold1.jpg",
      alt: "Asia Trends Import & Export Corporation",
      label: "GOLD",
      title: "Asia Trends Import & Export Corporation",
      name: "Asia Trends Import & Export Corporation",
      description:
        "Asia Trends Import & Export Corporation is a dynamic trading company specializing in diverse consumer products for the global market.",
      isPlaceholder: false,
    },
    {
      src: "/sponsor_logo/Gold/gold2.png",
      alt: "POSCA",
      label: "GOLD",
      title: "POSCA",
      name: "POSCA",
      description:
        "POSCA is a trusted maker of vibrant paint markers used by artists, students, and designers around the world.",
      isPlaceholder: false,
    },
    {
      src: "/sponsor_logo/Gold/gold3.png",
      alt: "Uniball",
      label: "GOLD",
      title: "Uniball",
      name: "Uniball",
      description:
        "Uniball produces high-quality pens and writing tools designed for precision, comfort, and reliability.",
      isPlaceholder: false,
    },
    {
      src: "/sponsor_logo/Gold/gold4.png",
      alt: "Uni",
      label: "GOLD",
      title: "Uni",
      name: "Uni",
      description:
        "Uni is a leading stationery brand known for innovative writing instruments and creative supplies.",
      isPlaceholder: false,
    },
    {
      src: "/sponsor_logo/Gold/gold5.png",
      alt: "GitHub",
      label: "GOLD",
      title: "GitHub",
      name: "GitHub",
      description:
        "GitHub is a platform for developers to host, review, and collaborate on code, powering teams worldwide.",
      isPlaceholder: false,
    },
  ],

  bronze: [
    {
      src: "/sponsor_logo/Bronze/Dairy_Queen_Trinoma.jpg",
      alt: "Dairy Queen Trinoma",
      label: "BRONZE",
      title: "Dairy Queen Trinoma",
      name: "Dairy Queen Trinoma",
      description:
        "Dairy Queen is a well-known dessert and food brand in the Philippines, offering signature soft-serve treats, Blizzard creations, and quick bites. This sponsor card represents their Trinoma branch.",
      websiteUrl: "http://dairyqueen.com.ph/",
      facebookUrl: "https://www.facebook.com/dairyqueenphilippines/",
      instagramUrl: "https://www.instagram.com/dairyqueenphils/",
      isPlaceholder: false,
    },
    {
      src: "/sponsor_logo/Bronze/District_Takoyaki.jpg",
      alt: "District Takoyaki",
      label: "BRONZE",
      title: "District Takoyaki",
      name: "District Takoyaki",
      description:
        "District Takoyaki is a takoyaki food business that accepts event bookings and serves Japanese-inspired street food.",
      facebookUrl: "https://www.facebook.com/61557970280846",
      isPlaceholder: false,
    },
    {
      src: "/sponsor_logo/Bronze/Genos_ Food_Hub.png",
      alt: "Genos' Food Hub",
      label: "BRONZE",
      title: "Genos' Food Hub",
      name: "Genos' Food Hub",
      description:
        "Genos' Food Hub offers a mix of comfort and snack items such as pasta, pizza, sushi, and more, and is active in campus and event booth sponsorships.",
      facebookUrl: "https://www.facebook.com/GenosPastaHub/",
      isPlaceholder: false,
    },
    {
      src: "/sponsor_logo/Bronze/Kusina_ni_Rosa_Logo.jpg",
      alt: "Kusina Ni Rosa",
      label: "BRONZE",
      title: "Kusina Ni Rosa",
      name: "Kusina Ni Rosa",
      description:
        "Kusina Ni Rosa is a local food brand focused on lutong bahay and event food offerings, with active Facebook and Instagram pages.",
      facebookUrl: "https://www.facebook.com/kusina.nirosa.7/",
      instagramUrl: "https://www.instagram.com/kusinanirosa/",
      isPlaceholder: false,
    },
    {
      src: "/sponsor_logo/Bronze/Tiny_Treasures_Club.png",
      alt: "Tiny Treasures Club",
      label: "BRONZE",
      title: "Tiny Treasures Club",
      name: "Tiny Treasures Club",
      description:
        "Tiny Treasures Club is an anik-anik event booth brand that joins campus events and sells plushies, keychains, and collectible items.",
      facebookUrl:
        "https://www.facebook.com/p/Tiny-Treasures-Club-61556139826508/",
      instagramUrl: "https://www.instagram.com/tinytreasures.club/",
      isPlaceholder: false,
    },
  ],
};

const borderByTier: Record<SponsorTier, string> = {
  "co-presenter": "border-secondary-blue/50",
  gold: "border-amber-300/60",
  silver: "border-slate-200/60",
  bronze: "border-amber-700/50",
};

const labelColorByTier: Record<SponsorTier, string> = {
  "co-presenter": "text-secondary-blue",
  gold: "text-amber-200",
  silver: "text-slate-200",
  bronze: "text-amber-100",
};

const glowByTier: Record<SponsorTier, string> = {
  "co-presenter":
    "0 0 40px rgba(135,158,185,0.2), 0 0 80px rgba(168,197,224,0.1)",
  gold: "0 0 40px rgba(251,191,36,0.15), 0 0 80px rgba(245,158,11,0.08)",
  silver:
    "0 0 40px rgba(226,232,240,0.15), 0 0 80px rgba(168,197,224,0.08)",
  bronze: "0 0 40px rgba(180,140,80,0.15), 0 0 80px rgba(205,127,50,0.08)",
};

const AUTO_ADVANCE_MS = 5000;
const CARD_WIDTH = 320;

type SlideDirection = "next" | "prev" | null;

export default function SponsorshipSection() {
  const [currentTier, setCurrentTier] = useState<SponsorTier>("co-presenter");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSponsor, setSelectedSponsor] = useState<SponsorCard | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>(null);

  const cards = sponsorCards[currentTier];
  const totalCards = cards.length;
  const borderClass = borderByTier[currentTier];
  const labelColor = labelColorByTier[currentTier];
  const glowStyle = glowByTier[currentTier];

  const goTo = useCallback(
    (index: number, dir: SlideDirection) => {
      const clamped = ((index % totalCards) + totalCards) % totalCards;
      if (dir) setSlideDirection(dir);
      setActiveIndex(clamped);
    },
    [totalCards]
  );

  const goPrev = useCallback(() => {
    if (totalCards <= 1) return;
    goTo(activeIndex - 1, "prev");
  }, [activeIndex, goTo, totalCards]);

  const goNext = useCallback(() => {
    if (totalCards <= 1) return;
    goTo(activeIndex + 1, "next");
  }, [activeIndex, goTo, totalCards]);

  const handleCardClick = (sponsor: SponsorCard) => {
    setSelectedSponsor(sponsor);
    setIsModalOpen(true);
  };

  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  useEffect(() => {
    if (totalCards <= 1) return;

    const timer = setInterval(() => {
      goTo(activeIndexRef.current + 1, "next");
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [goTo, totalCards]);

  useEffect(() => {
    setActiveIndex(0);
  }, [currentTier]);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
      <h2 className="font-audiowide font-bold text-3xl lg:text-4xl text-center tracking-wider text-off-white">
        SPONSORSHIP
      </h2>

      <div className="flex justify-center mt-6 mb-6">
        <SponsorSorter
          initialTier="co-presenter"
          onTierChange={setCurrentTier}
        />
      </div>

      <div className="relative w-full">
        {totalCards > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="group absolute left-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer"
              aria-label="Previous sponsor"
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, rgba(168,197,224,0.08) 0%, transparent 100%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <div
                className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(168,197,224,0.2) 0%, rgba(168,197,224,0.05) 50%, transparent 100%)",
                  boxShadow: "0 0 30px rgba(168,197,224,0.2)",
                }}
              />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="group absolute right-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer"
              aria-label="Next sponsor"
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(270deg, rgba(168,197,224,0.08) 0%, transparent 100%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <div
                className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(168,197,224,0.2) 0%, rgba(168,197,224,0.05) 50%, transparent 100%)",
                  boxShadow: "0 0 30px rgba(168,197,224,0.2)",
                }}
              />
            </button>
          </>
        )}

        <div
          className="relative flex items-center justify-center py-10 overflow-hidden"
          style={{
            height: "500px",
            perspective: "1500px",
            minHeight: "500px",
          }}
        >
          {(totalCards === 1 ? [0] : [-2, -1, 0, 1, 2]).map((displayOffset) => {
            const cardIndex =
              ((activeIndex + displayOffset) % totalCards + totalCards) %
              totalCards;
            const card = cards[cardIndex];
            const isActive = displayOffset === 0;
            const absOffset = Math.abs(displayOffset);

            const scale = isActive ? 1 : Math.max(0.85, 1 - absOffset * 0.08);
            const zIndex = isActive ? 20 : 10 - absOffset;
            const opacity = isActive ? 1 : Math.max(0.7, 1 - absOffset * 0.1);
            const translateX = displayOffset * 200;
            const translateY = isActive ? 0 : absOffset * 8;
            const rotateY = isActive ? 0 : displayOffset * 5;
            const translateZ = isActive ? 0 : -absOffset * 20;

            return (
              <div
                key={`${currentTier}-${cardIndex}-offset-${displayOffset}`}
                className="group absolute flex flex-col items-center cursor-pointer transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  transformStyle: "preserve-3d",
                }}
                onClick={() => handleCardClick(card)}
              >
                <div
                  className={`flex flex-col items-center w-full ${
                    isActive && slideDirection === "next"
                      ? "carousel-slide-next"
                      : isActive && slideDirection === "prev"
                      ? "carousel-slide-prev"
                      : ""
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className={`relative w-full overflow-hidden rounded-xl border transition-all duration-500 ${borderClass} bg-white/5`}
                    style={{
                      width: CARD_WIDTH,
                      height: "400px",
                      boxShadow: isActive
                        ? `${glowStyle}, 0 25px 50px rgba(0,0,0,0.5)`
                        : "0 10px 30px rgba(0,0,0,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = isActive
                        ? "translateY(-20px) scale(1.05)"
                        : "translateY(-10px) scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                    }}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                      sizes="320px"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 60%, rgba(15,18,25,0.4) 100%)",
                      }}
                    />
                  </div>

                  <p
                    className={`mt-4 font-poppins text-sm font-medium tracking-wider text-center max-w-[280px] line-clamp-2 transition-all duration-300 ${labelColor}`}
                    style={{
                      textShadow: isActive
                        ? "0 0 20px rgba(168,197,224,0.3)"
                        : "none",
                      opacity: isActive ? 1 : 0.7,
                    }}
                  >
                    {card.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SponsorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sponsor={selectedSponsor}
      />
    </div>
  );
}