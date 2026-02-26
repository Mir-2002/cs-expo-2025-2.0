export type ThesisEntry = {
  groupName: string;
  thesisTitle: string;
  members: string[];
  mentor: string;
  // Display category used by the UI filter/toggler
  category: string;
  avp: string | null;
  images: string[];
  description?: string | null;
  expoCategory?: string[];
};

import thesesRaw from "@/data/theses.json";

type ThesisRaw = {
  thesis_title?: string;
  group_name?: string;
  members?: string[];
  mentor?: string | null;
  category?: string[];
  description?: string | null;
  avp?: string | null;
  poster?: string | null;
  expo_category?: string[];
};

function pickDisplayCategory(raw?: ThesisRaw) {
  // Prefer expo_category (already matches your toggler values like "machine learning", "nlp", etc.)
  const expo = raw?.expo_category?.[0]?.toLowerCase();
  if (expo === "computer vision") return "Computer Vision";
  if (expo === "machine learning") return "Machine Learning";
  if (expo === "nlp") return "NLP";
  if (expo === "education") return "Education";
  if (expo === "agriculture") return "Agriculture";

  // Fallback to first item in category array
  const first = raw?.category?.[0]?.toLowerCase();
  if (!first) return "Machine Learning";
  if (first.includes("vision")) return "Computer Vision";
  if (first.includes("language") || first === "nlp") return "NLP";
  if (first.includes("education")) return "Education";
  if (first.includes("agri")) return "Agriculture";
  if (first.includes("machine")) return "Machine Learning";

  return raw?.category?.[0] ?? "Machine Learning";
}

export const theses: ThesisEntry[] = (thesesRaw as ThesisRaw[])
  .map((t) => {
    const groupName = t.group_name?.trim() ?? "";
    const thesisTitle = t.thesis_title?.trim() ?? "";

    // Use poster (if present) as the first image; otherwise empty array (UI can fallback)
    const images = t.poster ? [t.poster] : [];

    return {
      groupName,
      thesisTitle,
      members: t.members ?? [],
      mentor: t.mentor ?? "",
      category: pickDisplayCategory(t),
      avp: t.avp ?? null,
      images,
      description: t.description ?? null,
      expoCategory: t.expo_category ?? [],
    };
  })
  // Drop incomplete rows (your JSON has some partial/empty objects)
  .filter((t) => t.groupName && t.thesisTitle);

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
