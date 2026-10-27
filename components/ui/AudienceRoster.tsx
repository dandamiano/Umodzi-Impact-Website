"use client";

import Image from "next/image";
import {
  Building2,
  GraduationCap,
  HeartHandshake,
  Home,
  Landmark,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AudienceIconId, AudienceItem } from "@/data/audiences";
import type { GalleryItem } from "@/types/content";

const audienceIcons: Record<AudienceIconId, LucideIcon> = {
  organisations: Building2,
  institutions: Landmark,
  youth: GraduationCap,
  faith: HeartHandshake,
  families: Home,
  other: Users,
};

type AudienceRosterProps = {
  title: string;
  titleId: string;
  lede: string;
  items: readonly AudienceItem[];
  backgroundPhoto?: GalleryItem;
};

function Accent() {
  return (
    <span
      className="home-draw mb-3 block h-1 w-12 bg-brand-orange"
      aria-hidden="true"
    />
  );
}

export function AudienceRoster({
  title,
  titleId,
  lede,
  items,
  backgroundPhoto,
}: AudienceRosterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer || !backgroundPhoto) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      layer.style.transform = "translate3d(0, 0, 0) scale(1.1)";
      return;
    }

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const progress = (view - rect.top) / (view + rect.height);
      const clamped = Math.min(1, Math.max(0, progress));
      const y = (clamped - 0.5) * 180;
      layer.style.transform = `translate3d(0, ${y}px, 0) scale(1.2)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [backgroundPhoto]);

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby={titleId}
      className="audience-section relative isolate overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-12"
    >
      {backgroundPhoto ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div
            ref={layerRef}
            className="audience-parallax absolute inset-x-0 -top-[22%] h-[145%] w-full will-change-transform"
          >
            <Image
              src={backgroundPhoto.src}
              alt=""
              width={backgroundPhoto.width}
              height={backgroundPhoto.height}
              sizes="100vw"
              className="h-full w-full object-cover object-[center_30%]"
            />
          </div>
          {/* Soft brand wash — keeps photo visible */}
          <div className="absolute inset-0 bg-brand-teal/20" />
          {/* Readable left rail; open photo on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-mist/85 via-mist/35 to-transparent sm:from-mist/80 sm:via-mist/25" />
          {/* Handoff into Packages (bg-mist) */}
          {/* <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-mist via-mist/70 to-transparent sm:h-36" /> */}
        </div>
      ) : (
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-mist" />
      )}

      <div
        aria-hidden="true"
        className="audience-orb pointer-events-none absolute -right-10 top-8 size-40 rounded-full border border-brand-orange/40 sm:-right-14 sm:size-52"
      />
      <div
        aria-hidden="true"
        className="audience-orb-delay pointer-events-none absolute right-6 top-24 size-24 rounded-full border border-paper/50 sm:right-16 sm:size-32"
      />

      <Container className="relative">
        <div className="home-rise relative max-w-3xl overflow-hidden rounded-[1.5rem] border border-paper/60 bg-mist/80 p-5 shadow-soft backdrop-blur-md sm:p-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-brand-orange/10"
          />
          <Accent />
          <SectionHeading id={titleId} title={title} lede={lede} />

          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-brand-navy/10 pt-5 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = audienceIcons[item.icon];

              return (
                <li
                  key={item.label}
                  className="audience-item home-rise group flex items-center gap-3"
                  style={{ animationDelay: `${90 + index * 70}ms` }}
                >
                  <span className="audience-icon inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-paper shadow-[0_8px_18px_rgb(241_139_5_/_0.28)] motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-110">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={2.25} />
                  </span>
                  <span className="relative min-w-0 font-display text-base font-medium leading-snug text-brand-navy sm:text-lg">
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brand-orange motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-x-100"
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      {/* <svg
        aria-hidden="true"
        viewBox="0 0 1440 88"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 z-[1] block h-12 w-full sm:h-16"
      >
        <path
          d="M0 40C220 72 460 8 740 36C1020 64 1240 12 1440 44V88H0Z"
          className="fill-mist"
        />
        <path
          d="M0 48C240 78 480 18 760 42C1040 66 1260 22 1440 50"
          fill="none"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="stroke-brand-orange/70"
        />
      </svg> */}
    </section>
  );
}
