"use client";

import { Container } from "@/components/ui/Container";
import { aboutPage } from "@/lib/constants";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
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
  const { ref, enhanced, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby={missionId}
      className={cn(
        "mission-vision relative z-0 isolate -mt-px overflow-x-clip bg-mist pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pb-20",
        enhanced && "is-enhanced",
        visible && "is-visible",
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-dots absolute inset-0 opacity-[0.14]" />
        <span className="absolute top-16 right-[14%] size-2.5 rotate-12 bg-brand-orange/50" />
        <span className="absolute bottom-24 left-[10%] size-8 -rotate-6 rounded-full border border-brand-teal/20" />
      </div>

      <Container className="relative">
        <div className="mission-vision-lead mb-8 max-w-xl sm:mb-10">
          <span
            className="gallery-stamp mb-4 inline-block rotate-[-6deg] border border-brand-orange/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
            aria-hidden="true"
          >
            {aboutPage.purposeStamp}
          </span>
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl">
            {aboutPage.purposeTitle}
          </h2>
          <p className="mt-3 max-w-lg font-serif text-xl leading-snug text-brand-navy/75 sm:text-2xl">
            {aboutPage.purposeLede}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="mission-vision-panel group relative overflow-hidden bg-wash-orange/85 p-6 sm:p-8">
            <span
              className="gallery-tape absolute -top-1 left-[22%] z-10 h-2.5 w-12 -rotate-6"
              aria-hidden="true"
            />
            <span
              className="absolute inset-x-0 top-0 h-1 bg-brand-orange"
              aria-hidden="true"
            />
            <div className="relative">
              <span
                className="gallery-stamp inline-block rotate-[-4deg] border border-brand-orange/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
                aria-hidden="true"
              >
                {aboutPage.missionStamp}
              </span>
              <h3
                id={missionId}
                className="mt-4 scroll-mt-28 font-display text-2xl font-medium tracking-tight text-brand-navy sm:text-3xl"
              >
                Mission
              </h3>
              <p className="mt-4 max-w-md font-serif text-xl leading-relaxed text-brand-navy sm:text-2xl">
                {mission}
              </p>
            </div>
          </article>

          <article className="mission-vision-panel mission-vision-panel-delay group relative overflow-hidden bg-wash-teal/80 p-6 sm:p-8">
            <span
              className="gallery-tape absolute -top-1 right-[18%] z-10 h-2.5 w-12 rotate-[8deg]"
              aria-hidden="true"
            />
            <span
              className="absolute inset-x-0 top-0 h-1 bg-brand-teal"
              aria-hidden="true"
            />
            <div className="relative">
              <span
                className="gallery-stamp inline-block rotate-[4deg] border border-brand-teal/50 px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-teal uppercase"
                aria-hidden="true"
              >
                {aboutPage.visionStamp}
              </span>
              <h3
                id={visionId}
                className="mt-4 scroll-mt-28 font-display text-2xl font-medium tracking-tight text-brand-navy sm:text-3xl"
              >
                Vision
              </h3>
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
