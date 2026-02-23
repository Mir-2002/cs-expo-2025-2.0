"use client";

import { useState } from "react";
import type { PartnerTier } from "./partnerTypes";

const TIER_LABELS: Record<PartnerTier, string> = {
  "media-partners": "Media Partners",
  "community-development": "Community Development Partners",
  "major-partners": "Major Partners",
  "minor-partners": "Minor Partners",
};

const TIER_ORDER: PartnerTier[] = [
  "media-partners",
  "community-development",
  "major-partners",
  "minor-partners",
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-5 h-5 ${direction === "right" ? "rotate-180" : ""}`}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function StarSparkle({ className }: { className?: string }) {
  return (
    <span
      className={`absolute h-0.5 w-0.5 rounded-full bg-light-blue/80 ${className ?? ""}`}
      style={{ boxShadow: "0 0 4px 1px rgba(168,197,224,0.6)" }}
    />
  );
}

export default function PartnerSorter({
  initialTier = "media-partners",
  onTierChange,
}: {
  initialTier?: PartnerTier;
  onTierChange?: (tier: PartnerTier) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(() =>
    TIER_ORDER.indexOf(initialTier)
  );

  const currentTier = TIER_ORDER[currentIndex];

  const goToPrevious = () => {
    const nextIndex =
      currentIndex === 0 ? TIER_ORDER.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
    onTierChange?.(TIER_ORDER[nextIndex]);
  };

  const goToNext = () => {
    const nextIndex =
      currentIndex === TIER_ORDER.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    onTierChange?.(TIER_ORDER[nextIndex]);
  };

  return (
    <div
      className="relative inline-flex items-center gap-2 rounded-2xl px-3 py-2.5 backdrop-blur-md"
      style={{
        background:
          "linear-gradient(135deg, rgba(15,18,25,0.92) 0%, rgba(42,58,78,0.4) 50%, rgba(15,18,25,0.92) 100%)",
        border: "1px solid rgba(168,197,224,0.25)",
        boxShadow:
          "inset 0 1px 0 rgba(168,197,224,0.08), 0 0 24px rgba(42,58,78,0.4)",
      }}
    >
      <StarSparkle className="left-4 top-1/2 -translate-y-1/2" />
      <StarSparkle className="right-4 top-1/2 -translate-y-1/2" />

      <button
        type="button"
        onClick={goToPrevious}
        className="group flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-light-blue/70 transition-all duration-300 hover:text-light-blue hover:scale-105"
        style={{
          background: "rgba(42,58,78,0.3)",
          border: "1px solid rgba(168,197,224,0.15)",
        }}
        aria-label="Previous partner tier"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 16px rgba(168,197,224,0.2), inset 0 0 12px rgba(168,197,224,0.05)";
          e.currentTarget.style.borderColor = "rgba(168,197,224,0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.borderColor = "rgba(168,197,224,0.15)";
        }}
      >
        <ChevronIcon direction="left" />
      </button>

      <div
        className="flex min-w-[200px] sm:min-w-[260px] items-center justify-center gap-2 px-4 py-3"
        style={{
          borderLeft: "1px solid rgba(168,197,224,0.12)",
          borderRight: "1px solid rgba(168,197,224,0.12)",
        }}
      >
        <span
          className="font-poppins text-sm font-medium tracking-wide text-center"
          style={{
            color: "rgba(200,220,240,0.95)",
            textShadow: "0 0 20px rgba(168,197,224,0.15)",
          }}
        >
          {TIER_LABELS[currentTier]}
        </span>
      </div>

      <button
        type="button"
        onClick={goToNext}
        className="group flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-light-blue/70 transition-all duration-300 hover:text-light-blue hover:scale-105"
        style={{
          background: "rgba(42,58,78,0.3)",
          border: "1px solid rgba(168,197,224,0.15)",
        }}
        aria-label="Next partner tier"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 16px rgba(168,197,224,0.2), inset 0 0 12px rgba(168,197,224,0.05)";
          e.currentTarget.style.borderColor = "rgba(168,197,224,0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.borderColor = "rgba(168,197,224,0.15)";
        }}
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}
 
