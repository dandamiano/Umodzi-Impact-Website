"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ServiceGroup } from "@/data/services";
import { cn } from "@/lib/utils";

type ServicePathwaysProps = {
  groups: readonly ServiceGroup[];
};

export function ServicePathways({ groups }: ServicePathwaysProps) {
  return (
    <div className="flex flex-col">
      {groups.map((group, groupIndex) => (
        <div key={group.id}>
          {groupIndex > 0 ? (
            <div className="py-12 sm:py-14 lg:py-16">
              <PathwaySeparator index={groupIndex} />
            </div>
          ) : null}
          <ServicePathway group={group} groupIndex={groupIndex} />
        </div>
      ))}
    </div>
  );
}

function PathwaySeparator({ index }: { index: number }) {
  return (
    <div className="flex items-center gap-4 sm:gap-5" aria-hidden="true">
      <span className="h-px flex-1 bg-brand-navy/12" />
      <span className="flex items-center gap-2.5">
        <span className="size-1.5 rotate-45 bg-brand-orange" />
        <span className="font-display text-[0.6875rem] font-medium tracking-[0.16em] text-brand-navy/40 uppercase">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="size-1.5 rotate-45 bg-brand-orange" />
      </span>
      <span className="h-px flex-1 bg-brand-navy/12" />
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
        "service-pathway scroll-mt-28 grid items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-12 xl:gap-14",
        enhanced && "is-enhanced",
        visible && "is-visible",
      )}
    >
      <div
        className={cn(
          "service-pathway-lead relative",
          reverse && "lg:order-2",
        )}
      >
        <div className="flex items-baseline gap-3">
          <span
            aria-hidden="true"
            className="font-display text-sm tabular-nums text-brand-orange"
          >
            {String(groupIndex + 1).padStart(2, "0")}
          </span>
          <p className="font-display text-xs font-medium tracking-[0.14em] text-brand-teal uppercase">
            Pathway
          </p>
        </div>
        <h2 className="mt-2.5 font-display text-2xl font-medium tracking-tight sm:text-[1.85rem] sm:leading-tight">
          {group.label}
        </h2>
        <p className="mt-1.5 font-display text-sm text-brand-navy/50">
          <span className="tabular-nums text-brand-navy">{group.items.length}</span>
          {group.items.length === 1 ? " service" : " services"}
        </p>

        {group.photo ? (
          <div className="service-pathway-image relative mt-5 hidden max-w-sm lg:block">
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute top-3 h-[calc(100%-0.75rem)] w-[calc(100%-0.65rem)] rounded-2xl border border-brand-teal/30",
                reverse ? "-right-2.5" : "-left-2.5",
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "absolute z-10 size-2.5 bg-brand-orange",
                reverse ? "-bottom-1 -left-1" : "-right-1 -bottom-1",
              )}
            />
            <div className="group/photo relative overflow-hidden rounded-2xl bg-mist shadow-soft ring-1 ring-brand-navy/10">
              <Image
                src={group.photo.src}
                alt={group.photo.alt}
                width={group.photo.width}
                height={group.photo.height}
                sizes="(min-width: 1024px) 24vw, 0px"
                className="aspect-[16/10] h-auto w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/photo:scale-[1.03]"
              />
            </div>
          </div>
        ) : null}
      </div>

      <div
        className={cn(
          "service-pathway-list relative overflow-hidden rounded-2xl lg:overflow-visible lg:rounded-none",
          reverse && "lg:order-1",
        )}
      >
        {group.photo ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 lg:hidden"
          >
            <Image
              src={group.photo.src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-paper/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-paper/90 via-paper/70 to-paper/45" />
            <div className="absolute inset-0 bg-gradient-to-b from-paper/50 via-transparent to-paper/60" />
          </div>
        ) : null}

        <ol className="relative border-l border-brand-teal/35 py-2 pl-6 max-lg:mx-4 sm:pl-8 lg:border-brand-teal/30 lg:py-0">
          {group.items.map((service, itemIndex) => (
            <li
              key={service.id}
              id={service.id}
              className="service-pathway-item group relative scroll-mt-28 border-b border-brand-navy/12 last:border-b-0"
              style={{
                ["--pathway-item-delay" as string]: `${120 + itemIndex * 70}ms`,
              }}
            >
              <span
                aria-hidden="true"
                className="absolute top-7 -left-6 size-2.5 -translate-x-1/2 rounded-full bg-brand-orange ring-4 ring-paper motion-safe:transition-[background-color,box-shadow] motion-safe:duration-300 group-hover:bg-brand-teal sm:top-8 sm:-left-8 max-lg:ring-paper/95"
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
                    className="mt-3 block h-px max-w-[6.5rem] origin-left scale-x-0 bg-brand-teal/55 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
