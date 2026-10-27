"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { PageSection } from "@/components/ui/PageSection";
import { cn } from "@/lib/utils";
import type { FeaturedPhoto } from "@/types/content";

const AUTO_ADVANCE_MS = 4500;

type PhotographFeatureProps = {
  title: string;
  titleId: string;
  lede: string;
  lead?: FeaturedPhoto;
  supports: readonly FeaturedPhoto[];
  cta: {
    href: string;
    label: string;
  };
};

export function PhotographFeature({
  title,
  titleId,
  lede,
  lead,
  supports,
  cta,
}: PhotographFeatureProps) {
  const photos = [...(lead ? [lead] : []), ...supports];
  const [activeIndex, setActiveIndex] = useState(0);
  const [swapKey, setSwapKey] = useState(0);
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
      setSwapKey((key) => key + 1);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [photos.length, paused, activeIndex]);

  if (photos.length === 0) {
    return null;
  }

  const active = photos[Math.min(activeIndex, photos.length - 1)]!;

  const selectPhoto = (index: number) => {
    if (index === activeIndex) {
      return;
    }
    setActiveIndex(index);
    setSwapKey((key) => key + 1);
  };

  return (
    <PageSection labelledBy={titleId}>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.45fr)] lg:gap-12 xl:gap-16">
        <div className="home-rise relative lg:sticky lg:top-28">
          <div
            aria-hidden="true"
            className="home-dots pointer-events-none absolute -top-2 left-0 h-20 w-24 opacity-45"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-3 top-16 hidden h-28 w-28 rounded-full border border-brand-teal/25 lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-28 left-10 hidden size-3 bg-brand-orange lg:block"
          />

          <div className="relative">
            <span
              className="home-draw mb-4 block h-1 w-12 bg-brand-orange"
              aria-hidden="true"
            />
            <p className="font-display text-xs font-medium tracking-[0.18em] text-brand-teal uppercase">
              From the field
            </p>
            <h2
              id={titleId}
              className="mt-3 max-w-md text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
            >
              {title}
            </h2>
            <p className="mt-4 max-w-md font-serif text-xl leading-relaxed text-brand-teal sm:text-2xl">
              {lede}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={cta.href} variant="primary" size="large">
                {cta.label}
                <ArrowRight aria-hidden="true" className="ml-2 size-4" />
              </ButtonLink>
              <span
                aria-hidden="true"
                className="hidden h-px w-10 bg-brand-navy/20 sm:block"
              />
              <p className="text-sm text-brand-teal/80">
                Real moments from the work
              </p>
            </div>
          </div>
        </div>

        <div
          className="home-rise relative min-w-0"
          style={{ animationDelay: "80ms" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-3 -right-3 hidden h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] rounded-[1.75rem] border border-brand-teal/35 lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute -right-1 -bottom-1 z-20 hidden size-3 bg-brand-orange sm:block"
          />

          <figure
            className="relative overflow-hidden rounded-3xl bg-brand-navy shadow-soft ring-1 ring-brand-navy/10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setPaused(false);
              }
            }}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9]">
              <div
                key={`${active.src}-${swapKey}`}
                className="photo-feature-stage absolute inset-0"
              >
                <GalleryImage
                  image={active}
                  priority={activeIndex === 0}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-navy/90 via-brand-navy/45 to-transparent"
              />

              <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 lg:p-6">
                <p
                  key={`caption-${active.src}-${swapKey}`}
                  id={labelId}
                  className="photo-feature-caption max-w-xl font-display text-2xl font-medium tracking-tight text-paper sm:text-3xl lg:text-[2.125rem] lg:leading-tight"
                >
                  {active.caption}
                </p>

                <ul
                  className="mt-3 flex gap-2 sm:mt-4"
                  aria-label="Featured photographs"
                >
                  {photos.map((photo, index) => {
                    const selected = index === activeIndex;

                    return (
                      <li key={photo.src} className="shrink-0">
                        <button
                          type="button"
                          aria-label={`Show ${photo.caption}`}
                          aria-pressed={selected}
                          aria-describedby={selected ? labelId : undefined}
                          onClick={() => selectPhoto(index)}
                          className={cn(
                            "group relative block w-12 overflow-hidden rounded-md bg-mist/20 outline-none sm:w-14",
                            "ring-2 ring-offset-1 ring-offset-brand-navy/80 motion-safe:transition motion-safe:duration-300",
                            selected
                              ? "ring-brand-orange"
                              : "ring-transparent hover:ring-paper/50 focus-visible:ring-paper",
                          )}
                        >
                          <GalleryImage
                            image={photo}
                            sizes="56px"
                            className={cn(
                              "aspect-[3/2] h-auto w-full object-cover motion-safe:transition motion-safe:duration-500",
                              selected
                                ? "opacity-100"
                                : "opacity-70 group-hover:opacity-100 group-hover:scale-105",
                            )}
                          />
                          {selected ? (
                            <span
                              aria-hidden="true"
                              className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-orange"
                            />
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </PageSection>
  );
}
