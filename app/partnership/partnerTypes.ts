export type PartnerTier =
  | "media-partners"
  | "community-development"
  | "major-partners"
  | "minor-partners";

export type PartnerCard = {
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

export type PartnerCardsMap = Record<PartnerTier, PartnerCard[]>;
