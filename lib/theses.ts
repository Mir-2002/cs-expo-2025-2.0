export type ThesisEntry = {
  groupName: string;
  thesisTitle: string;
  members: string[];
  mentor: string;
  category: string;
  avp: string;
  images: string[];
};

import thesesRaw from "@/data/theses.json";

export const theses = thesesRaw as ThesisEntry[];

export const categories = [
  "Agriculture",
  "Computer Vision",
  "NLP",
  "Education",
  "Machine Learning",
] as const;

export type Category = (typeof categories)[number];

export function getThesesByCategory(category: string) {
  return theses.filter((t) => t.category === category);
}
