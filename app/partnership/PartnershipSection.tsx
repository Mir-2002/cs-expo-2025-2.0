"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import PartnerSorter from "./PartnerSorter";
import SponsorModal from "./SponsorModal";
import type { PartnerCard, PartnerCardsMap, PartnerTier } from "./partnerTypes";

const partnerCards: PartnerCardsMap = {
  "media-partners": [
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Media Partner",
      label: "MEDIA PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Media Partner",
      label: "MEDIA PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Media Partner",
      label: "MEDIA PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
  ],
  "community-development": [
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Community Development Partner",
      label: "COMMUNITY DEVELOPMENT PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Community Development Partner",
      label: "COMMUNITY DEVELOPMENT PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Community Development Partner",
      label: "COMMUNITY DEVELOPMENT PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
  ],
  "major-partners": [
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Major Partner",
      label: "MAJOR PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Major Partner",
      label: "MAJOR PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Major Partner",
      label: "MAJOR PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
  ],
  "minor-partners": [
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Minor Partner",
      label: "MINOR PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Minor Partner",
      label: "MINOR PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
    {
      src: "/sponsor_logo/sponsor_sample.png",
      alt: "Upcoming Minor Partner",
      label: "MINOR PARTNERS",
      title: "Coming Soon",
      name: "Coming Soon",
      description:
        "This partnership slot is available. Be part of CS Expo 2025 and reach future tech leaders.",
      isPlaceholder: true,
    },
  ],
};

const borderByTier: Record<PartnerTier, string> = {
  "media-partners": "border-amber-400/50",
  "community-development": "border-emerald-400/50",
  "major-partners": "border-off-white/40",
  "minor-partners": "border-secondary-blue/50",
};

const labelColorByTier: Record<PartnerTier, string> = {
  "media-partners": "text-amber-200",
  "community-development": "text-emerald-200",
  "major-partners": "text-off-white",
  "minor-partners": "text-secondary-blue",
};

const glowByTier: Record<PartnerTier, string> = {
  "media-partners":
    "0 0 40px rgba(251,191,36,0.15), 0 0 80px rgba(245,158,11,0.08)",
  "community-development":
    "0 0 40px rgba(52,211,153,0.15), 0 0 80px rgba(16,185,129,0.1)",
  "major-partners":
    "0 0 40px rgba(200,220,240,0.15), 0 0 80px rgba(168,197,224,0.1)",
  "minor-partners":
    "0 0 40px rgba(135,158,185,0.2), 0 0 80px rgba(168,197,224,0.1)",
};

const AUTO_ADVANCE_MS = 5000;
const CARD_WIDTH = 320;

type TransitionDir = "next" | "prev" | null;

export default function PartnershipSection() {
  const [currentTier, setCurrentTier] = useState<PartnerTier>("media-partners");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPartner, setSelectedPartner] = useState<PartnerCard | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transitionDirection, setTransitionDirection] =
    useState<TransitionDir>(null);
  const [animating, setAnimating] = useState(false);
  const prevActiveIndexRef = useRef(0);

  const cards = partnerCards[currentTier];
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

  const handleCardClick = (partner: PartnerCard) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(activeIndexRef.current + 1, "next");
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [goTo]);

  useEffect(() => {
    if (!animating) return;
    const t = setTimeout(() => {
      setAnimating(false);
      setTransitionDirection(null);
    }, 650);
    return () => clearTimeout(t);
  }, [animating, activeIndex]);

  useEffect(() => {
    setActiveIndex(0);
  }, [currentTier]);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
      <h2 className="font-audiowide font-bold text-3xl lg:text-4xl text-center tracking-wider text-off-white">
        PARTNERSHIP
      </h2>
      <div className="flex justify-center mt-6 mb-6">
        <PartnerSorter
          initialTier="media-partners"
          onTierChange={setCurrentTier}
        />
      </div>

      <div className="relative w-full">
        <button
          type="button"
          onClick={goPrev}
          className="group absolute left-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer"
          aria-label="Previous partner"
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
          aria-label="Next partner"
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

        <div
          className="relative flex items-center justify-center py-10 overflow-hidden"
          style={{
            height: "500px",
            perspective: "1500px",
            minHeight: "500px",
          }}
        >
          {[-2, -1, 0, 1, 2].map((displayOffset) => {
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
                <div
                  className={innerClass}
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
                      if (!isActive) {
                        e.currentTarget.style.transform =
                          "translateY(-10px) scale(1.02)";
                      } else {
                        e.currentTarget.style.transform =
                          "translateY(-20px) scale(1.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
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
        sponsor={selectedPartner}
      />
    </div>
  );
}
