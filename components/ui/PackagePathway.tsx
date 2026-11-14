"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { PackageOffering } from "@/types/content";

type PackagePathwayProps = {
  items: readonly PackageOffering[];
  className?: string;
  /** When set, steps link to `${basePath}#id` (e.g. home → /packages). */
  basePath?: string;
  /** Highlight the in-view package. Defaults to true when browsing on /packages. */
  trackActive?: boolean;
};

export function PackagePathway({
  items,
  className,
  basePath,
  trackActive = !basePath,
}: PackagePathwayProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (!trackActive || items.length === 0) {
      return;
    }

    const nodes = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-28% 0px -48% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    for (const node of nodes) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [items, trackActive]);

  return (
    <nav aria-label="Package pathway" className={cn("mt-8", className)}>
      <ol className="package-pathway-rail flex items-center gap-x-2 gap-y-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
        {items.map((item, index) => {
          const isActive = trackActive && activeId === item.id;
          const isFeatured = item.tier === "featured";
          const isExecutive = item.tier === "executive";

          return (
            <li
              key={item.id}
              className="flex shrink-0 snap-start items-center gap-2 sm:gap-3"
            >
              <Link
                href={basePath ? `${basePath}#${item.id}` : `#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group inline-flex items-center gap-2 outline-offset-4 motion-safe:transition-colors",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-teal",
                  isActive && "text-brand-teal",
                  !isActive && isFeatured && "text-brand-teal",
                  !isActive && isExecutive && "text-brand-navy",
                )}
              >
                <span
                  className={cn(
                    "gallery-stamp flex size-9 items-center justify-center border font-display text-[0.65rem] font-semibold tracking-[0.12em] motion-safe:transition-colors motion-safe:duration-300",
                    isActive
                      ? "border-brand-teal bg-brand-teal text-white shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-brand-teal)_18%,transparent)]"
                      : trackActive && isFeatured
                        ? "border-brand-orange/70 bg-wash-orange text-brand-orange"
                        : trackActive && isExecutive
                          ? "border-brand-orange bg-brand-orange text-brand-navy"
                          : isFeatured
                            ? "border-brand-orange/70 bg-wash-orange text-brand-orange"
                            : isExecutive
                              ? "border-brand-orange bg-brand-orange text-brand-navy"
                              : "border-brand-navy/25 bg-paper text-brand-navy group-hover:border-brand-teal group-hover:text-brand-teal",
                  )}
                >
                  {String(item.step).padStart(2, "0")}
                </span>
                <span className="font-display text-sm font-medium tracking-tight group-hover:text-brand-teal">
                  {item.name}
                </span>
              </Link>
              {index < items.length - 1 ? (
                <span
                  className="relative flex w-6 shrink-0 items-center sm:w-8"
                  aria-hidden="true"
                >
                  <span
                    className={cn(
                      "h-px w-full border-t border-dashed motion-safe:transition-colors",
                      isActive
                        ? "border-brand-teal/55"
                        : "border-brand-orange/45",
                    )}
                  />
                  <span className="absolute right-0 size-1.5 rotate-45 bg-brand-orange/70" />
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
