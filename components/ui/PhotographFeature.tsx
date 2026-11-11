"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { homePage } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { FeaturedPhoto } from "@/types/content";

const AUTO_ADVANCE_MS = 3800;
const TILTS = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"] as const;

type PhotographFeatureProps = {
  titleId: string;
  lead?: FeaturedPhoto;
  supports: readonly FeaturedPhoto[];
  cta: {
    href: string;
    label: string;
  };
};

export function PhotographFeature({
  titleId,
  lead,
  supports,
  cta,
}: PhotographFeatureProps) {
  const photos = [...(lead ? [lead] : []), ...supports];
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const labelId = useId();

  const unitPhotos = useMemo(() => {
    if (photos.length === 0) {
      return [];
    }

    // Repeat until the unit is wide enough that two units fill any desktop viewport.
    const copies = Math.max(3, Math.ceil(8 / photos.length));
    return Array.from({ length: copies }, () => photos).flat();
  }, [photos]);

  useEffect(() => {
    if (activeIndex >= photos.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, photos.length]);

  useEffect(() => {
    if (photos.length < 2 || paused) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % photos.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [photos.length, paused]);

  if (photos.length === 0) {
    return null;
  }

  const active = photos[Math.min(activeIndex, photos.length - 1)]!;

  const renderGroup = (keyPrefix: string, decorative: boolean) => (
    <ul
      key={keyPrefix}
      className="photo-strip-group"
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Featured photographs"}
    >
      {unitPhotos.map((photo, index) => {
        const photoIndex = index % photos.length;
        const selected = photoIndex === activeIndex;
        const tilt = TILTS[index % TILTS.length];

        return (
          <li key={`${keyPrefix}-${photo.src}-${index}`} className="photo-strip-item">
            <button
              type="button"
              tabIndex={decorative ? -1 : undefined}
              aria-pressed={decorative ? undefined : selected}
              aria-label={`Show ${photo.caption}`}
              aria-describedby={!decorative && selected ? labelId : undefined}
              onClick={() => setActiveIndex(photoIndex)}
              className={cn(
                "gallery-polaroid group relative w-[10.5rem] border border-brand-navy/10 bg-paper p-2 pb-5 text-left shadow-[0_14px_32px_rgb(49_65_114/0.16)] outline-offset-4 motion-safe:transition-[transform,box-shadow,opacity] motion-safe:duration-500 sm:w-[12.5rem] sm:p-2.5 sm:pb-6 lg:w-[14rem]",
                tilt,
                selected
                  ? "z-10 -translate-y-4 scale-105 rotate-0 shadow-[0_22px_44px_rgb(49_65_114/0.24)]"
                  : "opacity-90 hover:-translate-y-2 hover:opacity-100",
              )}
            >
              <span
                className={cn(
                  "gallery-tape absolute -top-1 z-10 h-2.5 w-9",
                  index % 2 === 0 ? "left-3 -rotate-6" : "right-3 rotate-6",
                )}
                aria-hidden="true"
              />
              <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                <GalleryImage
                  image={photo}
                  priority={!decorative && index < photos.length}
                  sizes="(min-width: 1024px) 14vw, 42vw"
                  className="aspect-[4/5] h-auto w-full object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <span
                className={cn(
                  "mt-2 block text-center font-display text-[0.7rem] font-medium tracking-wide sm:text-xs",
                  selected ? "text-brand-navy" : "text-brand-navy/55",
                )}
              >
                {photo.caption}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section
      aria-labelledby={titleId}
      className="relative isolate overflow-x-clip bg-mist pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,color-mix(in_srgb,var(--color-brand-orange)_14%,transparent),transparent_42%),radial-gradient(ellipse_at_88%_100%,color-mix(in_srgb,var(--color-brand-teal)_12%,transparent),transparent_48%)]" />
        <span className="absolute top-12 right-[10%] size-2.5 rotate-12 bg-brand-orange/55" />
        <span className="absolute bottom-16 left-[8%] hidden size-8 rotate-6 rounded-full border border-dashed border-brand-navy/15 sm:block" />
      </div>

      <Container className="relative">
        <div className="home-rise flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <header className="max-w-2xl">
            <span
              className="gallery-stamp mb-2 inline-block -rotate-2 border border-brand-orange/70 bg-paper px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
              aria-hidden="true"
            >
              {homePage.photographsStamp}
            </span>
            <h2
              id={titleId}
              className="font-display text-3xl font-medium tracking-tight whitespace-nowrap text-brand-navy sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
            >
              <span className="gallery-punch relative inline -rotate-1">
                {homePage.photographsTitleLead} {homePage.photographsTitlePunch}
                <svg
                  className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-brand-orange sm:h-3.5"
                  viewBox="0 0 180 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 6c14-4 28 3 44-1 18-5 34 4 52 0 16-3 30-1 44 2 12 2 22-1 30-1"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="mt-2 max-w-lg font-serif text-lg leading-snug text-brand-navy/75 sm:text-xl">
              {homePage.photographsLede}
            </p>
          </header>

          <ButtonLink href={cta.href} variant="primary" className="shrink-0 self-start sm:self-end">
            {cta.label}
          </ButtonLink>
        </div>
      </Container>

      <div
        className="photo-strip relative mt-8 sm:mt-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="photo-strip-track">
          {renderGroup("a", false)}
          {renderGroup("b", true)}
        </div>
      </div>

      <Container className="relative">
        <p
          id={labelId}
          className="mt-5 text-center font-serif text-lg text-brand-navy/70 sm:mt-6 sm:text-xl"
        >
          <span className="gallery-stamp inline-block rotate-[-2deg] border border-brand-navy/15 bg-paper px-3 py-1.5">
            {active.caption}
          </span>
        </p>
      </Container>
    </section>
  );
}
