"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { theses, type ThesisEntry } from "@/lib/theses";

// --- Committees data (fill in head/members when available) ---

type CommitteeKey =
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

type CommitteePerson = {
  name: string;
  image?: string | null;
  role?: string | null;
};

type CommitteeRoster = {
  key: CommitteeKey;
  head?: CommitteePerson | null;
  members?: CommitteePerson[];
};

const COMMITTEES: CommitteeRoster[] = [
  {
    key: "Project Head",
    head: {
      name: "Camposano, Shane Therize F.",
      image: "/images/1.png",
      role: "Project Head",
    },
    members: [],
  },
  { key: "Documentations", head: null, members: [] },
  { key: "Marketing", head: null, members: [] },
  { key: "Programs", head: null, members: [] },
  { key: "Finance", head: null, members: [] },
  { key: "Externals", head: null, members: [] },
  { key: "Logistics", head: null, members: [] },
  { key: "Technicals", head: null, members: [] },
  { key: "Developers", head: null, members: [] },
  { key: "Sponsorship", head: null, members: [] },
  { key: "Partnership", head: null, members: [] },
  { key: "Speakership", head: null, members: [] },
];

function PersonCard({
  person,
  variant,
}: {
  person: CommitteePerson;
  variant?: "head" | "member";
}) {
  const imageSrc = person.image ?? "/images/1.png";

  return (
    <div
      className={
        "relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 " +
        "shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
      }
    >
      <div
        className={
          "relative shrink-0 overflow-hidden rounded-lg border border-white/10 bg-primary-black/30 " +
          // Portrait-friendly sizing (taller than wide)
          (variant === "head"
            ? "h-24 w-20 sm:h-28 sm:w-20"
            : "h-20 w-16 sm:h-24 sm:w-20")
        }
      >
        <Image
          src={imageSrc}
          alt={person.name}
          fill
          className="object-cover object-top"
          onError={(e) => {
            const target = e.currentTarget as unknown as HTMLElement;
            target.style.opacity = "0";
          }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-space-mono text-[10px] text-off-white/60">
            IMG
          </span>
        </div>
      </div>

      <div className="min-w-0">
        <p className="font-space-mono text-sm text-off-white truncate">
          {person.name}
        </p>
        {person.role ? (
          <p className="mt-0.5 font-space-mono text-[11px] text-off-white/60 truncate">
            {person.role}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function CommitteesSection() {
  const [activeKey, setActiveKey] = useState<CommitteeKey>("Project Head");

  const active = useMemo(
    () => COMMITTEES.find((c) => c.key === activeKey) ?? COMMITTEES[0],
    [activeKey]
  );

  const head = active?.head ?? null;
  const members = (active?.members ?? []).filter((m) => m?.name?.trim());

  return (
    <Section className="w-full bg-[url('/images/backgrounds/EVENT_BG_2.jpg')] bg-cover bg-center">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <h2 className="text-center font-stalinist-one text-2xl lg:text-3xl text-off-white">
          COMMITTEES
        </h2>
        <p className="mt-3 text-center font-space-mono text-sm text-secondary-blue lg:mx-auto lg:max-w-2xl">
          The Crew of CS Expo 2025 2.0
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[360px_1fr]">
          {/* Committee list */}
          <div className="rounded-2xl border border-white/10 bg-primary-black/35 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <p className="mb-3 font-audiowide text-xs tracking-widest text-off-white/80">
              COMMITTEES
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
              {COMMITTEES.map((c) => {
                const isActive = c.key === activeKey;
                return (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setActiveKey(c.key)}
                    className={
                      "min-w-0 rounded-xl border px-3 py-2 text-left transition-all " +
                      (isActive
                        ? "border-light-blue/55 bg-linear-to-r from-blue-900/45 via-purple-900/35 to-blue-900/45 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                        : "border-white/10 bg-white/5 hover:border-light-blue/30 hover:bg-white/7")
                    }
                    aria-pressed={isActive}
                  >
                    <span className="block font-space-mono text-xs text-off-white line-clamp-2">
                      {c.key}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Committee details */}
          <div className="rounded-2xl border border-white/10 bg-primary-black/35 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col gap-1">
              <h3 className="font-stalinist-one text-lg lg:text-xl text-off-white wrap-break-word">
                {active.key}
              </h3>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-audiowide text-[11px] tracking-widest text-off-white/70">
                  COMMITTEE HEAD
                </p>
                <div className="mt-2">
                  {head?.name ? (
                    <PersonCard person={head} variant="head" />
                  ) : (
                    <p className="font-space-mono text-sm text-off-white/60">
                      Head not added yet.
                    </p>
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-audiowide text-[11px] tracking-widest text-off-white/70">
                  MEMBERS
                </p>
                {members.length ? (
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {members.map((m) => (
                      <PersonCard key={m.name} person={m} variant="member" />
                    ))}
                  </div>
                ) : (
                  <p className="mt-2 font-space-mono text-sm text-off-white/60">
                    Members not added yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ThesisCard({ thesis }: { thesis: ThesisEntry }) {
  const cover = thesis.images?.[0] ?? "/sample picture(event)/sample1.jpg";
  const href = `/projects/${encodeURIComponent(thesis.groupName)}`;

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl border border-white/10
        bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)]
        shadow-[0_8px_32px_rgba(0,0,0,0.28)]
        transition-all duration-300 hover:-translate-y-0.5 hover:border-light-blue/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
    >
      <div className="flex flex-row lg:flex-col">
        {/* Media */}
        <div className="relative h-28 w-28 shrink-0 lg:h-44 lg:w-full">
          <Image
            src={cover}
            alt={thesis.thesisTitle}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-primary-black/65" />
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 p-3 lg:p-4">
          <p className="font-audiowide text-[11px] text-light-blue truncate">
            {thesis.groupName}
          </p>
          <p className="font-stalinist-one text-xs lg:text-sm text-off-white leading-snug line-clamp-2">
            {thesis.thesisTitle}
          </p>
          {thesis.description ? (
            <p className="mt-1 font-space-mono text-[11px] text-off-white/70 line-clamp-2">
              {thesis.description}
            </p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

function TheVoyagersSection() {
  const PAGE_SIZE = 5;
  const validTheses = useMemo(
    () => theses.filter((t) => t?.groupName && t?.thesisTitle),
    []
  );

  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(validTheses.length / PAGE_SIZE));

  const pageItems = useMemo(() => {
    const start = page * PAGE_SIZE;
    return validTheses.slice(start, start + PAGE_SIZE);
  }, [page, validTheses]);

  const featuredIndex = useMemo(
    () => (page * PAGE_SIZE + 2) % validTheses.length,
    [page, validTheses.length]
  );
  const featured = validTheses[featuredIndex];

  const sideIndices = useMemo(() => {
    if (!validTheses.length) return { left: [], right: [] } as const;

    // 2 items before and 2 items after the featured item (wrapping)
    const idx = featuredIndex;
    const pick = (offset: number) =>
      validTheses[(idx + offset + validTheses.length) % validTheses.length];

    return {
      left: [pick(-2), pick(-1)] as const,
      right: [pick(1), pick(2)] as const,
    } as const;
  }, [featuredIndex, validTheses]);

  return (
    <Section className="w-full bg-[url('/images/backgrounds/EVENT_BG_2.jpg')] bg-cover bg-center">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <h2 className="text-center font-stalinist-one text-2xl lg:text-3xl text-off-white">
          THE VOYAGERS
        </h2>
        <p className="mt-3 text-center font-space-mono text-sm text-secondary-blue lg:mx-auto lg:max-w-2xl">
          Nineteen teams proudly presented projects that reflected their
          creativity and commitment to solving practical problems.
        </p>

        {/* Mobile: stacked horizontal cards + page controls */}
        <div className="mt-8 lg:hidden">
          <div className="space-y-4">
            {pageItems.map((t) => (
              <ThesisCard key={t.groupName} thesis={t} />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
              className="inline-flex items-center justify-center rounded-md border border-blue-400/45 px-4 py-2
                bg-linear-to-r from-blue-900/35 via-purple-900/35 to-blue-900/35
                font-space-mono text-xs text-off-white hover:border-blue-300"
            >
              Prev
            </button>
            <p className="font-space-mono text-xs text-off-white/70">
              Page {page + 1} / {pageCount}
            </p>
            <button
              type="button"
              onClick={() => setPage((p) => (p + 1) % pageCount)}
              className="inline-flex items-center justify-center rounded-md border border-blue-400/45 px-4 py-2
                bg-linear-to-r from-blue-900/35 via-purple-900/35 to-blue-900/35
                font-space-mono text-xs text-off-white hover:border-blue-300"
            >
              Next
            </button>
          </div>
        </div>

        {/* lg+: 3 columns, 2 rows; center thesis vertically centered */}
        <div className="mt-10 hidden lg:block">
          <div className="grid grid-cols-3 gap-6">
            {/* Left column: 2 theses */}
            <div className="grid grid-rows-2 gap-6">
              {sideIndices.left.map((t) => (
                <ThesisCard key={t.groupName} thesis={t} />
              ))}
            </div>

            {/* Center column: featured / vertically centered by filling available height */}
            <div className="flex">
              <div className="flex w-full flex-col justify-center">
                {featured ? (
                  <div className="mx-auto w-full max-w-sm">
                    <ThesisCard thesis={featured} />
                  </div>
                ) : null}
              </div>
            </div>

            {/* Right column: 2 theses */}
            <div className="grid grid-rows-2 gap-6">
              {sideIndices.right.map((t) => (
                <ThesisCard key={t.groupName} thesis={t} />
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}
              className="inline-flex items-center justify-center rounded-md border border-blue-400/45 px-4 py-2
                bg-linear-to-r from-blue-900/35 via-purple-900/35 to-blue-900/35
                font-space-mono text-xs text-off-white hover:border-blue-300"
            >
              Shuffle
            </button>
            <p className="font-space-mono text-xs text-off-white/70">
              Showing featured team {featured?.groupName ?? ""}
            </p>
            <button
              type="button"
              onClick={() => setPage((p) => (p + 1) % pageCount)}
              className="inline-flex items-center justify-center rounded-md border border-blue-400/45 px-4 py-2
                bg-linear-to-r from-blue-900/35 via-purple-900/35 to-blue-900/35
                font-space-mono text-xs text-off-white hover:border-blue-300"
            >
              Shuffle
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function About() {
  return (
    <>
      <Section className="flex flex-col items-center justify-center gap-4 bg-[url('/images/backgrounds/EVENT_BG_2.jpg')] bg-cover bg-center">
        <h1 className="text-2xl lg:text-3xl font-stalinist-one my-20">
          About CS Expo
        </h1>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:w-1/2 lg:gap-10">
          <Image
            src="/images/1.png"
            alt="CS Expo 2025.2.0: Voyager’s Odyssey"
            width={300}
            height={300}
          />
          <div>
            <p className="px-12 lg:p-0 text-center text-xs lg:text-sm font-space-mono mb-3">
              CS Expo 2025.2.0: Voyager’s Odyssey is a celebration of innovation
              and creativity within FEU Institute of Technology. It serves as
              the premier platform for Computer Science students from Software
              Engineering and Data Science to present their thesis projects,
              demonstrating technical expertise and delivering solutions that
              address real-world challenges.
            </p>
            <p className="px-12 lg:p-0 text-center text-xs lg:text-sm font-space-mono">
              Bringing together students, faculty, industry partners, and
              guests, this immersive event showcases the power of young minds in
              a rapidly evolving technological landscape. Digital Reverie
              invites visionaries and innovators alike to imagine, create, and
              build solutions that transform the world.
            </p>
          </div>
        </div>
      </Section>

      <TheVoyagersSection />
      <CommitteesSection />
    </>
  );
}
