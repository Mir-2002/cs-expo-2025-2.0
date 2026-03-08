"use client";

import Link from "next/link";

import Section from "@/components/ui/Section";

export default function ComingSoonPage() {
  return (
    <main>
      <Section className="relative flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-[url('/images/backgrounds/EVENT_BG_2.jpg')] bg-cover bg-center px-6 text-center">
        <div className="rounded-2xl border border-white/10 bg-black/55 p-8 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
          <h1 className="font-stalinist-one text-2xl text-off-white lg:text-3xl">
            Coming Soon
          </h1>
          <p className="mt-3 max-w-xl font-space-mono text-sm text-off-white/80 lg:text-base">
            This page will be available after the event.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-blue-400/50 px-6 py-3
                bg-linear-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40
                font-space-mono text-sm text-off-white transition-all duration-300
                hover:scale-105 hover:border-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Go back home
            </Link>

            <button
              type="button"
              onClick={() => history.back()}
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3
                font-space-mono text-sm text-off-white/90 transition-all duration-300
                hover:border-white/25 hover:bg-white/10"
            >
              Go back
            </button>
          </div>
        </div>
      </Section>
    </main>
  );
}
