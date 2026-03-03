import committeesData from "@/data/committees.json";

export type CommitteeKey =
  | "Project Head"
  | "Documentations"
  | "Marketing"
  | "Programs"
  | "Finance"
  | "Externals"
  | "Logistics"
  | "Technicals"
  | "Developers"
  | "Sponsorship"
  | "Partnership"
  | "Speakership";

export type CommitteePerson = {
  name: string;
  image?: string | null;
  role?: string | null;
};

export type CommitteeRoster = {
  key: CommitteeKey;
  head?: CommitteePerson | null;
  members?: CommitteePerson[];
};

export const committees = committeesData as CommitteeRoster[];
