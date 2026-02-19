"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useMemo, useState } from "react";

type DeckItem = {
  id: string;
  src: string | StaticImageData;
  title: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function CardDeckCarousel({
  items,
  className = "",
  initialIndex = 0,
  onActiveItemChangeAction,
}: {
  items: DeckItem[];
  className?: string;
  initialIndex?: number;
  onActiveItemChangeAction?: (
    item: DeckItem | null,
    activeIndex: number
  ) => void;
}) {
  const [active, setActive] = useState(initialIndex);

  useEffect(() => {
    setActive(initialIndex);
  }, [initialIndex, items]);

  const total = items.length;

  useEffect(() => {
    if (!onActiveItemChangeAction) return;
    if (total === 0) {
      onActiveItemChangeAction(null, 0);
      return;
    }
    onActiveItemChangeAction(items[active], active);
  }, [active, items, onActiveItemChangeAction, total]);

  const visible = useMemo(() => {
    if (total === 0) return [];
    const maxCards = 5;
    const slice: DeckItem[] = [];
    for (let i = 0; i < Math.min(maxCards, total); i++) {
      slice.push(items[(active + i) % total]);
    }
    return slice;
  }, [active, total, items]);

  const goPrev = () => {
    if (total === 0) return;
    setActive((a) => (a - 1 + total) % total);
  };

  const goNext = () => {
    if (total === 0) return;
    setActive((a) => (a + 1) % total);
  };

  return (
    <div className={`relative w-full max-w-230 ${className}`}>
      {/* Arrows */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous"
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 px-4 py-3 backdrop-blur-md ring-1 ring-white/10 hover:bg-black/55 transition-colors"
        disabled={total === 0}
      >
        <span className="text-white text-2xl leading-none select-none">‹</span>
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Next"
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 px-4 py-3 backdrop-blur-md ring-1 ring-white/10 hover:bg-black/55 transition-colors"
        disabled={total === 0}
      >
        <span className="text-white text-2xl leading-none select-none">›</span>
      </button>

      {/* Stage */}
      <div className="relative mx-auto h-85 sm:h-95 w-full">
        <div className="absolute inset-0 perspective-distant">
          {visible
            .map((item, i) => {
              const depth = i;
              const behind = depth > 0;

              // Rear cards go down + left
              const x = depth * -26;
              const y = depth * 14;

              // Front card straight; rear cards tilt back (top goes away from viewer)
              const rotZ = depth * 3.5;
              const rotX = behind ? -(10 + depth * 2) : 0;

              const scale = 1 - depth * 0.045;
              const opacity = clamp(1 - depth * 0.12, 0, 1);
              const z = 30 - depth * 10;

              return (
                <div
                  key={item.id}
                  className="absolute left-1/2 top-1/2 w-65 sm:w-80 md:w-90"
                  style={{
                    zIndex: z,
                    opacity,
                    transform:
                      `translate(-50%, -50%) translateX(${x}px) translateY(${y}px)` +
                      ` rotateZ(${rotZ}deg) rotateX(${rotX}deg) scale(${scale})`,
                    transformStyle: "preserve-3d",
                    transition:
                      "transform 520ms cubic-bezier(.2,.9,.2,1), opacity 520ms cubic-bezier(.2,.9,.2,1)",
                  }}
                >
                  {/* Card */}
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
                    <div className="relative h-65 sm:h-75">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 320px, 360px"
                        priority={i === 0}
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/70 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-stalinist-one text-white text-sm sm:text-base drop-shadow">
                        {item.title}
                      </p>
                    </div>

                    <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_45%)]" />
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((it, idx) => (
          <button
            key={it.id}
            type="button"
            onClick={() => setActive(idx)}
            aria-label={`Go to ${it.title}`}
            className={`h-2 w-2 rounded-full transition-all ${
              idx === active
                ? "bg-blue-400 w-6"
                : "bg-white/30 hover:bg-white/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
