"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
/** Shared card type for sponsor/partner modals */
export type ModalCard = {
  src: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  websiteUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  isPlaceholder?: boolean;
};

interface SponsorModalProps {
  isOpen: boolean;
  onClose: () => void;
  sponsor: ModalCard | null;
}

const MODAL_WIDTH = "max-w-2xl"; // Consistent width
const MODAL_MIN_H = "min-h-[420px]";
const MODAL_MAX_H = "max-h-[85vh]";
const DESC_MAX_H = "max-h-[220px]"; // Scrollable description area

export default function SponsorModal({
  isOpen,
  onClose,
  sponsor,
}: SponsorModalProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsExiting(false);
      // Small delay for open animation to run
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setIsVisible(false);
    setTimeout(() => {
      setIsExiting(false);
      onClose();
    }, 280);
  }, [onClose]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, handleClose]);

  if (!sponsor) return null;

  // Keep mounted during exit animation
  const shouldRender = isOpen || isExiting;
  if (!shouldRender) return null;

  const hasLinks =
    sponsor.websiteUrl || sponsor.facebookUrl || sponsor.instagramUrl;
  const isPlaceholder = sponsor.isPlaceholder ?? false;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background:
          "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(10,15,30,0.4) 0%, rgba(5,8,18,0.55) 100%)",
        backdropFilter: "blur(10px) saturate(1.2)",
        opacity: isVisible ? 1 : 0,
        pointerEvents: shouldRender ? "auto" : "none",
        transition: "opacity 0.25s ease-out",
      }}
      onClick={handleClose}
    >
      <div
        className={`relative w-full ${MODAL_WIDTH} ${MODAL_MIN_H} ${MODAL_MAX_H} flex flex-col rounded-2xl overflow-hidden backdrop-blur-xl backdrop-saturate-150`}
        style={{
          transform: isVisible ? "scale(1)" : "scale(0.94)",
          transition: "transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
          background:
            "linear-gradient(145deg, rgba(15,20,35,0.32) 0%, rgba(25,35,55,0.22) 30%, rgba(40,55,90,0.18) 50%, rgba(25,35,55,0.22) 70%, rgba(15,20,35,0.32) 100%)",
          border: "1px solid rgba(168,197,224,0.4)",
          boxShadow:
            "0 25px 80px rgba(0,0,0,0.35), 0 0 80px rgba(100,150,220,0.06), 0 0 120px rgba(168,197,224,0.04), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 80px rgba(100,130,180,0.03)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cosmic nebula tint - very transparent */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(100,140,220,0.12) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(80,120,200,0.08) 0%, transparent 50%), radial-gradient(ellipse 50% 60% at 20% 70%, rgba(120,150,220,0.06) 0%, transparent 50%)",
          }}
        />
        {/* Subtle starfield overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-60"
          style={{
            backgroundImage: `radial-gradient(1.5px 1.5px at 20px 40px, rgba(255,255,255,0.7), transparent), radial-gradient(1px 1px at 60px 100px, rgba(200,220,255,0.5), transparent), radial-gradient(1.5px 1.5px at 120px 50px, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 180px 140px, rgba(180,200,255,0.4), transparent), radial-gradient(1.5px 1.5px at 250px 80px, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 100px 180px, rgba(200,220,255,0.45), transparent)`,
            backgroundSize: "280px 200px",
          }}
        />
        {/* Inner cosmic glow - soft edge highlight */}
        <div
          className="absolute inset-[1px] pointer-events-none rounded-2xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(168,197,224,0.04) 0%, transparent 15%, transparent 85%, rgba(100,140,200,0.03) 100%)",
          }}
        />
        {/* Close button - fixed top-right */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-light-blue/70 transition-all duration-200 hover:bg-light-blue/15 hover:text-light-blue hover:scale-110 focus:outline-none focus:ring-2 focus:ring-light-blue/40 focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Close modal"
        >
          <span className="text-2xl font-light leading-none">&times;</span>
        </button>

        <div className="relative z-[1] flex flex-1 min-h-0 flex-col overflow-hidden p-8 pt-12">
          {/* Logo - fixed height */}
          <div className="mb-5 flex flex-shrink-0 justify-center">
            <div className="relative h-32 w-56 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                fill
                className="object-contain p-5"
                sizes="224px"
                priority
              />
            </div>
          </div>

          {/* Title & tier badge - fixed */}
          <div className="mb-4 flex-shrink-0 text-center">
            <h2 className="font-poppins text-xl font-semibold text-white">
              {sponsor.title}
            </h2>
            <span
              className={`mt-2 inline-block rounded-full px-4 py-1 font-poppins text-xs font-medium uppercase tracking-wider ${
                isPlaceholder
                  ? "bg-white/10 text-off-white/80"
                  : "bg-light-blue/15 text-light-blue"
              }`}
            >
              {sponsor.label}
            </span>
          </div>

          {/* Scrollable description area */}
          <div
            className={`modal-scroll flex-1 min-h-0 overflow-y-auto overflow-x-hidden pr-1 ${DESC_MAX_H} mb-5`}
            style={{
              scrollbarGutter: "stable",
            }}
          >
            <p className="font-poppins text-[15px] leading-relaxed text-off-white/90 whitespace-pre-line text-justify">
              {sponsor.description}
            </p>
          </div>

          {/* Links - fixed at bottom */}
          {hasLinks && (
            <div className="flex flex-shrink-0 flex-wrap justify-center gap-3 border-t border-white/10 pt-5">
              {sponsor.websiteUrl && (
                <a
                  href={sponsor.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-light-blue/15 px-4 py-2.5 font-poppins text-sm font-medium text-light-blue transition-all hover:bg-light-blue/25 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Visit Website
                </a>
              )}
              {sponsor.facebookUrl && (
                <a
                  href={sponsor.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2]/20 px-4 py-2.5 font-poppins text-sm font-medium text-[#8AB4F8] transition-all hover:bg-[#1877F2]/30"
                >
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              )}
              {sponsor.instagramUrl && (
                <a
                  href={sponsor.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E4405F]/20 px-4 py-2.5 font-poppins text-sm font-medium text-[#F77737] transition-all hover:bg-[#E4405F]/30"
                >
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
