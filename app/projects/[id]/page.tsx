"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import { theses, type ThesisEntry } from "@/lib/theses";
import { useMemo, useState } from "react";
import React from "react";

function normalizeGroupName(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function toDriveEmbedUrl(url: string) {
  // Supports:
  // - https://drive.google.com/file/d/<id>/view
  // - https://drive.google.com/open?id=<id>
  // - https://drive.google.com/uc?id=<id>
  const directMatch = url.match(/\/file\/d\/([^/]+)/);
  const idMatch = url.match(/[?&]id=([^&]+)/);

  const fileId = directMatch?.[1] ?? idMatch?.[1];
  if (!fileId) return null;

  return `https://drive.google.com/file/d/${fileId}/preview`;
}

function normalizeUrl(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function MediaFallback({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-white/10 bg-primary-black/35 p-6 text-center">
      <p className="font-space-mono text-xs text-off-white/75">{label}</p>
    </div>
  );
}

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  // Decode URL-encoded route segments (e.g. "AgriTech%20Pioneers" -> "AgriTech Pioneers")
  const groupName = decodeURIComponent(id);
  const normalized = normalizeGroupName(groupName);

  const resolved: ThesisEntry | undefined = useMemo(() => {
    return normalized
      ? theses.find((t) => normalizeGroupName(t.groupName) === normalized)
      : undefined;
  }, [normalized]);

  const avpUrl = normalizeUrl(resolved?.avp);
  const driveEmbed = avpUrl ? toDriveEmbedUrl(avpUrl) : null;

  const [mainImageFailed, setMainImageFailed] = useState(false);
  const [thumbFailed, setThumbFailed] = useState<Record<number, boolean>>({});
  const [videoFailed, setVideoFailed] = useState(false);

  if (!resolved) {
    return (
      <div className="w-full min-h-screen flex flex-col bg-[url('/images/backgrounds/EVENT_BG_2.jpg')] bg-cover bg-center">
        <Section className="px-6 py-10 lg:px-10">
          <h1 className="font-stalinist-one text-2xl text-off-white">
            Project not found
          </h1>
          <p className="mt-3 font-space-mono text-sm text-off-white/75">
            The project you are looking for may have been removed or the link is
            invalid.
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center justify-center rounded-md border border-blue-400/45 px-4 py-2
              bg-linear-to-r from-blue-900/35 via-purple-900/35 to-blue-900/35
              font-space-mono text-sm text-off-white hover:border-blue-300"
          >
            Back to Projects
          </Link>
        </Section>
      </div>
    );
  }

  const images = resolved.images?.length
    ? resolved.images
    : ["/sample picture(event)/sample1.jpg"];

  const showMainImage = !mainImageFailed && Boolean(images[0]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[url('/images/backgrounds/EVENT_BG_2.jpg')] bg-cover bg-center">
      <Section className="px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/projects"
            className="font-space-mono text-sm text-off-white/75 hover:text-off-white"
          >
            ← Back
          </Link>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left: media */}
            <div className="space-y-5">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <div className="relative h-72 w-full lg:h-105">
                  {showMainImage ? (
                    <>
                      <Image
                        src={images[0]}
                        alt={resolved.thesisTitle}
                        fill
                        className="object-cover"
                        onError={() => setMainImageFailed(true)}
                      />
                      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-primary-black/60" />
                    </>
                  ) : (
                    <div className="absolute inset-0 p-4">
                      <MediaFallback label="Image unavailable." />
                    </div>
                  )}
                </div>
              </div>

              {/* Image strip (show all images) */}
              {images.length > 1 ? (
                <div className="grid grid-cols-4 gap-3">
                  {images.slice(0, 8).map((src, idx) => {
                    const failed = Boolean(thumbFailed[idx]);
                    return (
                      <div
                        key={`${src}-${idx}`}
                        className="relative overflow-hidden rounded-lg border border-white/10"
                      >
                        <div className="relative aspect-square">
                          {!failed ? (
                            <Image
                              src={src}
                              alt={`${resolved.thesisTitle} image ${idx + 1}`}
                              fill
                              className="object-cover"
                              onError={() =>
                                setThumbFailed((prev) => ({ ...prev, [idx]: true }))
                              }
                            />
                          ) : (
                            <div className="absolute inset-0 p-2">
                              <MediaFallback label="Image unavailable." />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}

              {/* AVP embed / link */}
              <div
                className="relative overflow-hidden rounded-xl p-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 40px rgba(100,150,255,0.1)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent" />

                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-audiowide text-off-white text-sm tracking-wider">
                    AVP
                  </h2>
                  {avpUrl ? (
                    <a
                      href={avpUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-md border border-blue-400/45 px-3 py-1.5
                        bg-linear-to-r from-blue-900/35 via-purple-900/35 to-blue-900/35
                        font-space-mono text-xs text-off-white hover:border-blue-300"
                    >
                      Open in new tab
                    </a>
                  ) : null}
                </div>

                {!avpUrl ? (
                  <div className="mt-3 rounded-lg border border-white/10 bg-primary-black/30 p-3">
                    <p className="font-space-mono text-xs text-off-white/75">
                      Video unavailable.
                    </p>
                  </div>
                ) : driveEmbed ? (
                  videoFailed ? (
                    <div className="mt-3 rounded-lg border border-white/10 bg-primary-black/30 p-3">
                      <p className="font-space-mono text-xs text-off-white/75">
                        Video failed to load.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-3 relative w-full overflow-hidden rounded-lg border border-white/10">
                      <div className="relative aspect-video">
                        <iframe
                          src={driveEmbed}
                          className="absolute inset-0 h-full w-full"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title={`${resolved.groupName} AVP`}
                          onError={() => setVideoFailed(true)}
                        />
                      </div>
                    </div>
                  )
                ) : (
                  <div className="mt-3 rounded-lg border border-white/10 bg-primary-black/30 p-3">
                    <p className="font-space-mono text-xs text-off-white/75">
                      Video unavailable.
                    </p>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent" />
              </div>
            </div>

            {/* Right: details */}
            <div
              className="relative overflow-hidden rounded-xl p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 40px rgba(100,150,255,0.1)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent" />

              <h1 className="font-stalinist-one text-xl lg:text-2xl text-off-white leading-snug">
                {resolved.thesisTitle}
              </h1>
              <p className="mt-2 font-audiowide text-light-blue text-base">
                {resolved.groupName}
              </p>

              <div className="mt-5 space-y-2 font-space-mono text-sm text-off-white/85">
                <p>
                  <span className="text-off-white/70">Category:</span>{" "}
                  {resolved.category}
                </p>
                <p>
                  <span className="text-off-white/70">Mentor:</span>{" "}
                  {resolved.mentor}
                </p>
                <p>
                  <span className="text-off-white/70">Members:</span>{" "}
                  {resolved.members?.length ? resolved.members.join(", ") : "—"}
                </p>
              </div>

              {resolved.description ? (
                <div className="mt-5">
                  <h2 className="font-audiowide text-off-white text-sm tracking-wider">
                    Description
                  </h2>
                  <p className="mt-2 font-space-mono text-xs lg:text-sm text-off-white/80 leading-relaxed">
                    {resolved.description}
                  </p>
                </div>
              ) : null}

              <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-light-blue/40 to-transparent" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
