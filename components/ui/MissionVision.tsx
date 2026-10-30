"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type MissionVisionProps = {
  missionId: string;
  visionId: string;
  mission: string;
  vision: string;
};

export function MissionVision({
  missionId,
  visionId,
  mission,
  vision,
}: MissionVisionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const alreadyInView =
      section.getBoundingClientRect().top < window.innerHeight * 0.85;
    if (alreadyInView) {
      setEnhanced(true);
      setVisible(true);
      return;
    }

    setEnhanced(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby={missionId}
      data-enhanced={enhanced ? "true" : "false"}
      data-visible={visible ? "true" : "false"}
      className={cn(
        "mission-vision relative isolate overflow-hidden bg-mist py-16 sm:py-20 lg:py-24",
        enhanced && "is-enhanced",
        visible && "is-visible",
      )}
    >
      <div
        aria-hidden="true"
        className="home-dots pointer-events-none absolute top-8 right-6 hidden h-28 w-32 opacity-30 sm:block"
      />
      <div
        aria-hidden="true"
        className="mission-vision-orb pointer-events-none absolute -right-10 top-12 size-40 rounded-full border border-brand-teal/20 sm:size-52"
      />
      <div
        aria-hidden="true"
        className="mission-vision-orb-delay pointer-events-none absolute right-16 top-28 size-24 rounded-full border border-brand-orange/30 sm:size-28"
      />

      <Container className="relative">
        <div className="mission-vision-lead mb-10 max-w-xl sm:mb-12">
          <span
            className="mission-vision-draw mb-4 block h-1 w-12 bg-brand-orange"
            aria-hidden="true"
          />
          <p className="font-display text-xs font-medium tracking-[0.18em] text-brand-teal uppercase">
            Purpose and ambition
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="mission-vision-panel group relative overflow-hidden rounded-[1.5rem] border border-brand-navy/10 bg-paper p-6 shadow-soft sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 -right-8 size-28 rounded-full bg-brand-orange/10"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 bg-brand-orange"
            />
            <div className="relative pl-2">
              <p className="font-display text-xs font-medium tracking-[0.16em] text-brand-teal uppercase">
                <span className="tabular-nums text-brand-orange" aria-hidden="true">
                  01
                </span>
                <span aria-hidden="true" className="mx-2 text-brand-navy/25">
                  ·
                </span>
                Purpose
              </p>
              <h2
                id={missionId}
                className="mt-3 font-display text-2xl font-medium tracking-tight text-brand-navy sm:text-3xl"
              >
                Mission
              </h2>
              <p className="mt-4 max-w-md font-serif text-xl leading-relaxed text-brand-navy sm:text-2xl">
                {mission}
              </p>
            </div>
          </article>

          <article className="mission-vision-panel mission-vision-panel-delay group relative overflow-hidden rounded-[1.5rem] border border-brand-teal/15 bg-brand-teal/[0.06] p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-12 -left-10 size-32 rounded-full bg-brand-teal/10"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 bg-brand-teal"
            />
            <div className="relative pl-2">
              <p className="font-display text-xs font-medium tracking-[0.16em] text-brand-teal uppercase">
                <span className="tabular-nums text-brand-orange" aria-hidden="true">
                  02
                </span>
                <span aria-hidden="true" className="mx-2 text-brand-navy/25">
                  ·
                </span>
                Ambition
              </p>
              <h2
                id={visionId}
                className="mt-3 font-display text-2xl font-medium tracking-tight text-brand-navy sm:text-3xl"
              >
                Vision
              </h2>
              <p className="mt-4 max-w-md font-serif text-xl leading-relaxed text-brand-navy sm:text-2xl">
                {vision}
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
