"use client";

import Image from "next/image";

export default function TierTogglePatch({
  initialTier = "platinum",
}: {
  initialTier?: "platinum" | "gold";
}) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={initialTier === "gold" ? "/patch/gold.png" : "/patch/platinum.png"}
        alt={`${initialTier} tier`}
        width={320}
        height={60}
        className="object-contain"
      />
    </div>
  );
}
