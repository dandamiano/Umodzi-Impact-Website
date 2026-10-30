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
      className="home-rise mt-12 lg:mt-14"
      style={{ animationDelay: "160ms" }}
    >
      <ul className="flex flex-wrap gap-x-6 gap-y-3 border-t border-brand-navy/15 pt-6">
        {groups.map((group, index) => {
          const isActive = activeId === group.id;

          return (
            <li key={group.id}>
              <a
                href={`#${group.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative inline-flex items-baseline gap-2 pb-1 font-display text-sm font-medium tracking-tight motion-safe:transition-colors motion-safe:duration-300",
                  isActive
                    ? "text-brand-teal"
                    : "text-brand-navy hover:text-brand-teal",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "tabular-nums motion-safe:transition-colors motion-safe:duration-300",
                    isActive
                      ? "text-brand-orange"
                      : "text-brand-orange/80 group-hover:text-brand-orange",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative">
                  {group.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brand-teal motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
