"use client";

import { useEffect, useState } from "react";
import type { ServiceGroup } from "@/data/services";
import { cn } from "@/lib/utils";

type ServicePathwayNavProps = {
  groups: readonly ServiceGroup[];
};

export function ServicePathwayNav({ groups }: ServicePathwayNavProps) {
  const [activeId, setActiveId] = useState<string | null>(groups[0]?.id ?? null);

  useEffect(() => {
    if (groups.length === 0) {
      return;
    }

    const nodes = groups
      .map((group) => document.getElementById(group.id))
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
  }, [groups]);

  return (
    <nav
      aria-label="Service pathways"
      className="home-rise mt-8"
      style={{ animationDelay: "80ms" }}
    >
      <ol className="flex items-center gap-x-2 gap-y-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
        {groups.map((group, index) => {
          const isActive = activeId === group.id;

          return (
            <li
              key={group.id}
              className="flex shrink-0 snap-start items-center gap-2 sm:gap-3"
            >
              <a
                href={`#${group.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group inline-flex items-center gap-2 outline-offset-4 motion-safe:transition-colors",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-teal",
                  isActive ? "text-brand-teal" : "text-brand-navy",
                )}
              >
                <span
                  className={cn(
                    "gallery-stamp flex size-9 items-center justify-center border font-display text-[0.65rem] font-semibold tracking-[0.12em] motion-safe:transition-colors motion-safe:duration-300",
                    isActive
                      ? "border-brand-teal bg-brand-teal text-white shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-brand-teal)_18%,transparent)]"
                      : "border-brand-navy/25 bg-paper text-brand-navy group-hover:border-brand-teal group-hover:text-brand-teal",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-sm font-medium tracking-tight group-hover:text-brand-teal">
                  {group.label}
                </span>
              </a>
              {index < groups.length - 1 ? (
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
