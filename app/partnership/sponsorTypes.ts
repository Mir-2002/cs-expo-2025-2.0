import type { SponsorTier } from "./SponsorSorter";

export type SponsorCard = {
  src: string;
  alt: string;
  label: string;
  title: string;
  name: string;
  description: string;
  websiteUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  isPlaceholder?: boolean;
};

export type SponsorCardsMap = Record<SponsorTier, SponsorCard[]>;
