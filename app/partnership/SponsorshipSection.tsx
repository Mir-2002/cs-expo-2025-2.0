"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import SponsorSorter, { type SponsorTier } from "./SponsorSorter";
import SponsorModal from "./SponsorModal";
import type { SponsorCard, SponsorCardsMap } from "./sponsorTypes";

const sponsorCards: SponsorCardsMap = {
  "co-presenter": [
    {
      src: "/sponsor_logo/relx.png",
      alt: "RELX | Reed Elsevier Philippines",
      label: "CO-PRESENTER",
      title: "RELX | Reed Elsevier Philippines",
      name: "RELX | Reed Elsevier Philippines",
      description: `RELX | Reed Elsevier Philippines is a global company that creates innovative digital tools, data solutions, and research platforms used by students, professionals, and organizations around the world. Our work helps improve scientific discoveries, support better healthcare, strengthen legal research, and enhance business decision‑making.

Here in the Philippines, our teams work in technology, data analytics, content creation, operations, and customer support. We collaborate with colleagues across the globe to build products and solutions that make learning, researching, and problem‑solving easier and more effective.

At RELX | Reed Elsevier Philippines, we value curiosity, innovation, teamwork, and continuous learning. We strive to create an environment where students and young professionals can gain skills, build confidence, and start shaping their future careers.`,
      websiteUrl: "https://www.reedelsevier.com.ph/",
      facebookUrl: "https://www.facebook.com/Reed.Elsevier.Philippines",
      instagramUrl: "https://www.instagram.com/reedelsevierphilippines",
      isPlaceholder: false,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Co-Presenter",
      label: "CO-PRESENTER",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Co-Presenter",
      label: "CO-PRESENTER",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
  ],
  platinum: [
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Platinum Sponsor",
      label: "PLATINUM",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Platinum Sponsor",
      label: "PLATINUM",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Platinum Sponsor",
      label: "PLATINUM",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Platinum Sponsor",
      label: "PLATINUM",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
  ],
  gold: [
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Gold Sponsor",
      label: "GOLD",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Gold Sponsor",
      label: "GOLD",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Gold Sponsor",
      label: "GOLD",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Gold Sponsor",
      label: "GOLD",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
  ],
  bronze: [
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Bronze Sponsor",
      label: "BRONZE",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Bronze Sponsor",
      label: "BRONZE",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Bronze Sponsor",
      label: "BRONZE",
      title: "Coming Soon",
      name: "Coming Soon",
      description: "This sponsorship slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
  ],
};

const borderByTier: Record<SponsorTier, string> = {
  "co-presenter": "border-secondary-blue/50",
  platinum: "border-off-white/40",
  gold: "border-amber-300/60",
  bronze: "border-amber-700/50",
};

const labelColorByTier: Record<SponsorTier, string> = {
  "co-presenter": "text-secondary-blue",
  platinum: "text-off-white",
  gold: "text-amber-200",
  bronze: "text-amber-100",
};

const glowByTier: Record<SponsorTier, string> = {
  "co-presenter":
    "0 0 40px rgba(135,158,185,0.2), 0 0 80px rgba(168,197,224,0.1)",
  platinum:
    "0 0 40px rgba(200,220,240,0.15), 0 0 80px rgba(168,197,224,0.1)",
  gold: "0 0 40px rgba(251,191,36,0.15), 0 0 80px rgba(245,158,11,0.08)",
  bronze: "0 0 40px rgba(180,140,80,0.15), 0 0 80px rgba(205,127,50,0.08)",
};

const AUTO_ADVANCE_MS = 5000;
const CARD_WIDTH = 320;
const CARD_GAP = 32;

type TransitionDir = "next" | "prev" | null;

export default function SponsorshipSection() {
  const [currentTier, setCurrentTier] = useState<SponsorTier>("co-presenter");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSponsor, setSelectedSponsor] = useState<typeof sponsorCards[SponsorTier][0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<TransitionDir>(null);
  const [animating, setAnimating] = useState(false);
  const prevActiveIndexRef = useRef(0);

  const cards = sponsorCards[currentTier];
  const totalCards = cards.length;
  const borderClass = borderByTier[currentTier];
  const labelColor = labelColorByTier[currentTier];
  const glowStyle = glowByTier[currentTier];

  const goTo = useCallback(
    (index: number, dir: TransitionDir) => {
      const clamped = ((index % totalCards) + totalCards) % totalCards;
      if (dir) {
        prevActiveIndexRef.current = activeIndex;
        setTransitionDirection(dir);
        setAnimating(true);
      }
      setActiveIndex(clamped);
    },
    [activeIndex, totalCards]
  );

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1, "prev");
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1, "next");
  }, [activeIndex, goTo]);

  const handleCardClick = (sponsor: typeof sponsorCards[SponsorTier][0]) => {
    setSelectedSponsor(sponsor);
    setIsModalOpen(true);
  };

  // Auto-advance every 5 seconds
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(activeIndexRef.current + 1, "next");
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [goTo]);

  // Clear transition state after slide animation finishes (parallax: exit 0.6s, enter 0.5s)
  useEffect(() => {
    if (!animating) return;
    const t = setTimeout(() => {
      setAnimating(false);
      setTransitionDirection(null);
    }, 650);
    return () => clearTimeout(t);
  }, [animating, activeIndex]);

  // Reset when tier changes
  useEffect(() => {
    setActiveIndex(0);
  }, [currentTier]);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
      <h2 className="font-audiowide font-bold text-3xl lg:text-4xl text-center tracking-wider text-off-white">
        SPONSORSHIP
      </h2>
      <div className="flex justify-center mt-6 mb-6">
        <SponsorSorter initialTier="co-presenter" onTierChange={setCurrentTier} />
      </div>

      {/* Carousel with seamless navigation zones */}
      <div className="relative w-full">
        {/* Left Navigation Zone - seamless side panel */}
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
          {/* Subtle orb indicator */}
          <div
            className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle, rgba(168,197,224,0.2) 0%, rgba(168,197,224,0.05) 50%, transparent 100%)",
              boxShadow: "0 0 30px rgba(168,197,224,0.2)",
            }}
          />
        </button>
        
        {/* Right Navigation Zone - seamless side panel */}
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
          {/* Subtle orb indicator */}
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle, rgba(168,197,224,0.2) 0%, rgba(168,197,224,0.05) 50%, transparent 100%)",
              boxShadow: "0 0 30px rgba(168,197,224,0.2)",
            }}
          />
        </button>

        {/* Stacked Deck Carousel with Infinite Loop */}
        <div
          className="relative flex items-center justify-center py-10 overflow-hidden"
          style={{ 
            height: "500px", 
            perspective: "1500px",
            minHeight: "500px",
          }}
        >
          {/* Render cards with infinite loop - show cards around activeIndex */}
          {[-2, -1, 0, 1, 2].map((displayOffset) => {
            // Calculate which card index to show at this position (with wraparound for infinite loop)
            const cardIndex = ((activeIndex + displayOffset) % totalCards + totalCards) % totalCards;
            const card = cards[cardIndex];
            const isActive = displayOffset === 0;
            const absOffset = Math.abs(displayOffset);
            
            // Calculate scale - active card is largest, others scale down gently
            const scale = isActive ? 1 : Math.max(0.85, 1 - absOffset * 0.08);
            
            // Calculate z-index - active card is front, others behind
            const zIndex = isActive ? 20 : 10 - absOffset;
            
            // Calculate opacity - back cards are more visible
            const opacity = isActive ? 1 : Math.max(0.7, 1 - absOffset * 0.1);
            
            // Calculate translateX - cards spread out horizontally with generous spacing
            const translateX = displayOffset * 200;
            
            // Calculate translateY - slight vertical offset for back cards (deck effect)
            const translateY = isActive ? 0 : absOffset * 8;
            
            // Calculate rotation - subtle fan effect for back cards
            const rotateY = isActive ? 0 : displayOffset * 5;
            
            // Calculate translateZ for subtle 3D depth effect
            const translateZ = isActive ? 0 : -absOffset * 20;

            const isExiting =
              animating &&
              transitionDirection &&
              cardIndex === prevActiveIndexRef.current &&
              !isActive;

            const enterClass =
              isActive && animating && transitionDirection
                ? transitionDirection === "next"
                  ? "carousel-card-enter-next"
                  : "carousel-card-enter-prev"
                : "";

            const exitClass =
              isExiting && transitionDirection
                ? transitionDirection === "next"
                  ? "carousel-card-exit-next"
                  : "carousel-card-exit-prev"
                : "";

            const innerClass = `flex flex-col items-center w-full ${enterClass} ${exitClass}`.trim();

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
                <div className={innerClass} style={{ transformStyle: "preserve-3d" }}>
                {/* Card Container */}
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
                    if (!isActive) {
                      e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                    } else {
                      e.currentTarget.style.transform = "translateY(-20px) scale(1.05)";
                    }
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

                {/* Sponsor name */}
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

      {/* Sponsor Modal */}
      <SponsorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sponsor={selectedSponsor}
      />
    </div>
  );
}
