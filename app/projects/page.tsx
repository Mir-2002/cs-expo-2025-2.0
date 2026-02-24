"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
  categories,
  getThesesByCategory,
  type Category,
  type ThesisEntry,
} from "@/lib/theses";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );

  const projects = useMemo(
    () => getThesesByCategory(selectedCategory),
    [selectedCategory]
  );

  return (
    <div className="w-full min-h-screen flex flex-col bg-[url('/images/backgrounds/EVENT_BG_2.jpg')] bg-cover bg-center">
      <Section className="flex flex-col px-6 py-8 lg:px-10 lg:py-10 items-center justify-center gap-4">
        <h1 className="text-3xl font-stalinist-one lg:text-4xl">PROJECTS</h1>
        <p className="text-center font-space-mono text-sm lg:w-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id totam eos
          sint accusantium perspiciatis inventore beatae dignissimos maxime
          similique molestiae ducimus voluptate, minus a architecto! Doloribus.
        </p>

        {/* Category toggler */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-xl pt-2">
          {categories.slice(0, 4).map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setSelectedCategory(label)}
              className={`group relative w-full px-4 py-3 flex items-center justify-center
                bg-linear-to-r from-blue-900/35 via-purple-900/35 to-blue-900/35
                border rounded-md
                hover:scale-[1.03] hover:border-blue-300 hover:shadow-[0_0_14px_rgba(59,130,246,0.45)]
                transition-all duration-300
                before:absolute before:inset-0 before:rounded-md before:p-px
                before:bg-linear-to-r before:from-blue-500/15 before:via-purple-500/15 before:to-blue-500/15
                before:-z-10 before:blur-sm
                ${
                  selectedCategory === label
                    ? "border-cyan-300/80 shadow-[0_0_16px_rgba(34,211,238,0.35)]"
                    : "border-blue-400/45"
                }`}
            >
              <span className="font-stalinist-one text-sm lg:text-base text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.75)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.95)]">
                {label}
              </span>
            </button>
          ))}

          {/* Last row centered */}
          <button
            type="button"
            onClick={() => setSelectedCategory(categories[4])}
            className={`group relative col-span-2 justify-self-center w-full max-w-sm px-4 py-3 flex items-center justify-center
              bg-linear-to-r from-blue-900/35 via-purple-900/35 to-blue-900/35
              border rounded-md
              hover:scale-[1.03] hover:border-blue-300 hover:shadow-[0_0_14px_rgba(59,130,246,0.45)]
              transition-all duration-300
              before:absolute before:inset-0 before:rounded-md before:p-px
              before:bg-linear-to-r before:from-blue-500/15 before:via-purple-500/15 before:to-blue-500/15
              before:-z-10 before:blur-sm
              ${
                selectedCategory === categories[4]
                  ? "border-cyan-300/80 shadow-[0_0_16px_rgba(34,211,238,0.35)]"
                  : "border-blue-400/45"
              }`}
          >
            <span className="font-stalinist-one text-sm lg:text-base text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.75)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.95)]">
              {categories[4]}
            </span>
          </button>
        </div>
      </Section>

      {/* Projects grid (layout changes on lg) */}
      <Section className="px-6 pb-16 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-audiowide text-off-white text-xl lg:text-2xl tracking-wider">
              {selectedCategory}
            </h2>
            <p className="font-space-mono text-xs lg:text-sm text-off-white/70">
              {projects.length} project{projects.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {projects.map((t: ThesisEntry) => {
              const encoded = encodeURIComponent(t.groupName);
              const cover =
                t.images?.[0] ?? "/sample picture(event)/sample1.jpg";

              return (
                <Link
                  key={t.groupName}
                  href={{ pathname: `/projects/${encoded}` }}
                  className="group relative overflow-hidden rounded-xl border border-white/10
                    bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)]
                    shadow-[0_8px_32px_rgba(0,0,0,0.28)]
                    transition-all duration-300 hover:-translate-y-1 hover:border-light-blue/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full lg:h-56">
                    <Image
                      src={cover}
                      alt={t.thesisTitle}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-primary-black/60" />

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-stalinist-one text-sm lg:text-base text-off-white drop-shadow-[0_0_10px_rgba(59,130,246,0.55)]">
                        {t.thesisTitle}
                      </p>
                      <p className="mt-1 font-space-mono text-xs text-off-white/75">
                        {t.groupName}
                      </p>
                    </div>
                  </div>

                  {/* Hover details (desktop-first) */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-primary-black/80" />
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent" />

                    <div className="relative p-4 lg:p-5">
                      <p className="font-audiowide text-sm lg:text-base text-light-blue">
                        {t.groupName}
                      </p>
                      <p className="mt-2 font-space-mono text-xs lg:text-sm text-off-white/90 line-clamp-2">
                        {t.thesisTitle}
                      </p>

                      <div className="mt-3 space-y-1.5 font-space-mono text-[11px] lg:text-xs text-off-white/80">
                        <p>
                          <span className="text-off-white/70">Mentor:</span>{" "}
                          {t.mentor}
                        </p>
                        <p>
                          <span className="text-off-white/70">Category:</span>{" "}
                          {t.category}
                        </p>
                        <p className="line-clamp-2">
                          <span className="text-off-white/70">Members:</span>{" "}
                          {t.members?.length ? t.members.join(", ") : "—"}
                        </p>
                      </div>

                      <div className="mt-4 inline-flex items-center gap-2 text-xs text-off-white/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                        <span className="font-space-mono">View details</span>
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
