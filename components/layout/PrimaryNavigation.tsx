"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { availableNavigation } from "@/data/navigation";
import { cn, isCurrentPath } from "@/lib/utils";

type PrimaryNavigationProps = {
  id?: string;
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function PrimaryNavigation({
  id,
  variant = "desktop",
  onNavigate,
}: PrimaryNavigationProps) {
  const pathname = usePathname();

  return (
    <nav id={id} aria-label="Primary">
      <ul
        className={cn(
          "flex",
          variant === "desktop" && "items-center gap-1.5 lg:gap-2",
          variant === "mobile" && "flex-col gap-1",
        )}
      >
        {availableNavigation.map((item) => {
          const current = isCurrentPath(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                onClick={onNavigate}
                className={cn(
                  "inline-flex items-center rounded-md font-medium text-brand-navy motion-safe:transition-colors hover:bg-mist hover:text-brand-teal",
                  variant === "desktop" &&
                    "min-h-11 px-3.5 text-[0.9375rem] lg:min-h-12 lg:px-4 lg:text-base",
                  variant === "mobile" && "min-h-12 w-full px-3 text-base",
                  current &&
                    "bg-mist underline decoration-brand-teal decoration-2 underline-offset-4",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
