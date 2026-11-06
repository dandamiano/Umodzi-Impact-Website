"use client";

import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { homePage } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { FeaturedPhoto } from "@/types/content";

const AUTO_ADVANCE_MS = 4500;

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
  }, [photos.length, paused, activeIndex]);

  if (photos.length === 0) {
    return null;
  }

  const active = photos[Math.min(activeIndex, photos.length - 1)]!;
  const sideA = photos[(activeIndex + 1) % photos.length];
  const sideB = photos[(activeIndex + 2) % photos.length];

  return (
    <section
      aria-labelledby={titleId}
      className="relative isolate overflow-x-clip bg-paper py-14 sm:py-16 lg:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-dots absolute inset-0 opacity-[0.12]" />
        <span className="absolute top-16 right-[10%] size-2.5 rotate-12 bg-brand-orange/50" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] lg:gap-12 xl:gap-16">
          <header className="home-rise max-w-xl">
            <span
              className="gallery-stamp mb-4 inline-block rotate-[-6deg] border border-brand-orange/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
              aria-hidden="true"
            >
              {homePage.photographsStamp}
            </span>
            <h2
              id={titleId}
              className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
            >
              <span className="block">{homePage.photographsTitleLead}</span>
              <span className="gallery-punch relative mt-1 inline-block -rotate-1">
                {homePage.photographsTitlePunch}
                <svg
                  className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-brand-orange sm:h-3.5"
                  viewBox="0 0 120 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 6c10-4 20 3 32-1 14-5 24 4 38 0 12-3 22-1 34 2"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="mt-4 max-w-md font-serif text-xl leading-snug text-brand-navy/75 sm:text-2xl">
              {homePage.photographsLede}
            </p>
            <div className="mt-7">
              <ButtonLink href={cta.href} variant="primary" size="large">
                {cta.label}
              </ButtonLink>
            </div>
          </header>

          <div
            className="home-rise relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
            style={{ animationDelay: "80ms" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative mx-auto aspect-[5/4] w-full max-w-[22rem] sm:max-w-[26rem] lg:ml-auto lg:max-w-[28rem]">
              {sideB ? (
                <div
                  aria-hidden="true"
                  className="gallery-polaroid absolute top-2 left-0 w-[42%] -rotate-6 border border-brand-navy/10 bg-paper p-1.5 pb-4 shadow-[0_12px_24px_rgb(49_65_114/0.14)] sm:p-2 sm:pb-5"
                >
                  <div className="overflow-hidden bg-mist">
                    <GalleryImage
                      image={sideB}
                      sizes="140px"
                      className="aspect-[4/5] h-auto w-full object-cover"
                    />
                  </div>
                </div>
              ) : null}

              {sideA ? (
                <div
                  aria-hidden="true"
                  className="gallery-polaroid absolute top-6 right-0 w-[42%] rotate-[5deg] border border-brand-navy/10 bg-paper p-1.5 pb-4 shadow-[0_12px_24px_rgb(49_65_114/0.14)] sm:p-2 sm:pb-5"
                >
                  <div className="overflow-hidden bg-mist">
                    <GalleryImage
                      image={sideA}
                      sizes="140px"
                      className="aspect-[4/5] h-auto w-full object-cover"
                    />
                  </div>
                </div>
              ) : null}

              <figure className="gallery-polaroid absolute top-1/2 left-1/2 z-10 w-[58%] -translate-x-1/2 -translate-y-[42%] -rotate-2 border border-brand-navy/10 bg-paper p-2.5 pb-7 shadow-[0_18px_36px_rgb(49_65_114/0.2)] sm:p-3 sm:pb-8">
                <span className="gallery-tape absolute -top-1.5 left-[18%] z-10 -rotate-6" />
                <span className="gallery-tape absolute -top-1 right-[16%] z-10 rotate-[8deg] scale-90" />
                <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                  <GalleryImage
                    image={active}
                    priority={activeIndex === 0}
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="aspect-[4/5] h-auto w-full object-cover"
                  />
                </div>
                <figcaption
                  id={labelId}
                  className="mt-2 text-center font-display text-xs font-medium tracking-wide text-brand-navy/70 sm:text-sm"
                >
                  {active.caption}
                </figcaption>
              </figure>
            </div>

            {photos.length > 1 ? (
              <ul
                className="mt-6 flex justify-center gap-2"
                aria-label="Featured photographs"
              >
                {photos.map((photo, index) => {
                  const selected = index === activeIndex;
                  return (
                    <li key={photo.src}>
                      <button
                        type="button"
                        aria-label={`Show ${photo.caption}`}
                        aria-pressed={selected}
                        aria-describedby={selected ? labelId : undefined}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          "size-2.5 rotate-45 outline-offset-4 motion-safe:transition-colors",
                          selected
                            ? "bg-brand-orange"
                            : "bg-brand-navy/25 hover:bg-brand-teal",
                        )}
                      />
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
