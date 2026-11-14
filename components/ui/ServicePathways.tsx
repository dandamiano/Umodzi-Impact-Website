"use client";

import { useEffect, useRef, useState } from "react";
import { GalleryImage } from "@/components/ui/GalleryImage";
import type { ServiceGroup } from "@/data/services";
import { cn } from "@/lib/utils";

type ServicePathwaysProps = {
  groups: readonly ServiceGroup[];
};

const groupWash = [
  "bg-wash-teal/70",
  "bg-wash-orange/75",
  "bg-wash-green/70",
] as const;

export function ServicePathways({ groups }: ServicePathwaysProps) {
  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      {groups.map((group, groupIndex) => (
        <div key={group.id}>
          {groupIndex > 0 ? <PathwaySeparator index={groupIndex} /> : null}
          <ServicePathway group={group} groupIndex={groupIndex} />
        </div>
      ))}
    </div>
  );
}

function PathwaySeparator({ index }: { index: number }) {
  return (
    <div className="mb-10 flex items-center gap-4 sm:mb-12 sm:gap-5" aria-hidden="true">
      <span className="h-px flex-1 border-t border-dashed border-brand-orange/40" />
      <div className="relative -rotate-2">
        <span className="gallery-tape absolute -top-1 left-1/2 z-10 h-2 w-8 -translate-x-1/2 rotate-[-4deg]" />
        <span className="gallery-stamp border border-brand-navy/20 bg-paper px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-navy uppercase">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <span className="h-px flex-1 border-t border-dashed border-brand-orange/40" />
    </div>
  );
}

type ServicePathwayProps = {
  group: ServiceGroup;
  groupIndex: number;
};

function ServicePathway({ group, groupIndex }: ServicePathwayProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);
  const reverse = groupIndex % 2 === 1;
  const wash = groupWash[groupIndex % groupWash.length];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    let frame = 0;
    const reveal = (enhance: boolean) => {
      frame = requestAnimationFrame(() => {
        if (enhance) {
          setEnhanced(true);
        }
        setVisible(true);
      });
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      reveal(false);
      return () => cancelAnimationFrame(frame);
    }

    const alreadyInView =
      section.getBoundingClientRect().top < window.innerHeight * 0.88;
    if (alreadyInView) {
      reveal(true);
      return () => cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(() => setEnhanced(true));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(section);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id={group.id}
      className={cn(
        "service-pathway relative scroll-mt-28 overflow-hidden p-5 sm:p-7 lg:p-8",
        wash,
        enhanced && "is-enhanced",
        visible && "is-visible",
      )}
    >
      <span
        className={cn(
          "gallery-tape absolute -top-1 z-20 h-2.5 w-12",
          reverse ? "right-[18%] rotate-[8deg]" : "left-[22%] -rotate-6",
        )}
        aria-hidden="true"
      />

      <div
        className={cn(
          "grid items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-12 xl:gap-14",
        )}
      >
        <div
          className={cn(
            "service-pathway-lead relative",
            reverse && "lg:order-2",
          )}
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span
              className="gallery-stamp rotate-[-5deg] border border-brand-orange/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
              aria-hidden="true"
            >
              Pathway {String(groupIndex + 1).padStart(2, "0")}
            </span>
            <p className="font-display text-xs tabular-nums text-brand-navy/45">
              <span className="text-brand-navy">{group.items.length}</span>
              {group.items.length === 1 ? " service" : " services"}
            </p>
          </div>

          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-brand-navy sm:text-[1.85rem] sm:leading-tight">
            {group.label}
          </h2>

          {group.photo ? (
            <div className="service-pathway-image relative mt-5 w-full max-w-[22rem] sm:max-w-[24rem]">
              <div
                className={cn(
                  "relative",
                  reverse ? "rotate-2" : "-rotate-2",
                )}
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-3 bg-paper/80",
                    reverse
                      ? "-translate-x-2 translate-y-2 -rotate-3"
                      : "translate-x-2 translate-y-2 rotate-3",
                  )}
                />
                <div className="gallery-polaroid relative border border-brand-navy/10 bg-paper p-2 pb-5 shadow-[0_14px_28px_rgb(49_65_114/0.16)] sm:p-2.5 sm:pb-6">
                  <span
                    className={cn(
                      "gallery-tape absolute -top-1 z-10 scale-90",
                      reverse ? "right-3 rotate-6" : "left-3 -rotate-6",
                    )}
                  />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={group.photo}
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 85vw"
                      className="aspect-[3/2] h-auto w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div
          className={cn(
            "service-pathway-list relative",
            reverse && "lg:order-1",
          )}
        >
          <ol className="relative border-l border-dashed border-brand-navy/25 py-1 pl-6 sm:pl-8">
            {group.items.map((service, itemIndex) => (
              <li
                key={service.id}
                id={service.id}
                className="service-pathway-item group relative scroll-mt-28 border-b border-brand-navy/10 last:border-b-0"
                style={{
                  ["--pathway-item-delay" as string]: `${120 + itemIndex * 70}ms`,
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-7 -left-6 size-2.5 -translate-x-1/2 rotate-45 bg-brand-orange ring-4 ring-white/70 motion-safe:transition-[background-color,transform] motion-safe:duration-300 group-hover:rotate-0 group-hover:bg-brand-teal sm:top-8 sm:-left-8"
                />
                <div className="flex gap-4 py-5 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 sm:gap-5 sm:py-6">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 font-display text-sm tabular-nums text-brand-orange motion-safe:transition-colors motion-safe:duration-300 group-hover:text-brand-teal"
                  >
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-brand-navy motion-safe:transition-colors motion-safe:duration-300 group-hover:text-brand-teal sm:text-xl">
                      {service.name}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-3 block h-px max-w-[6.5rem] origin-left scale-x-0 bg-brand-orange/70 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
