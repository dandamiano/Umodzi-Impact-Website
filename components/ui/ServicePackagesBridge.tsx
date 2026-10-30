"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ServicePackagesBridgeProps = {
  href?: string;
};

export function ServicePackagesBridge({
  href = "/packages",
}: ServicePackagesBridgeProps) {
  const bridgeRef = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const bridge = bridgeRef.current;
    if (!bridge) {
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
      bridge.getBoundingClientRect().top < window.innerHeight * 0.9;
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
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(bridge);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={bridgeRef}
      className={cn(
        "service-packages-bridge mt-16 border-t border-brand-navy/15 pt-10 sm:mt-20",
        enhanced && "is-enhanced",
        visible && "is-visible",
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="service-packages-bridge-copy">
          <span
            className="service-packages-bridge-draw mb-3 block h-1 w-10 bg-brand-orange"
            aria-hidden="true"
          />
          <p className="font-display text-lg font-medium tracking-tight sm:text-xl">
            Prefer a ready-made pathway?
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-brand-navy/70">
            Packages combine these services into a clear sequence—from a short
            session to a leadership retreat.
          </p>
        </div>
        <Link
          href={href}
          className="service-packages-bridge-action group inline-flex min-h-11 shrink-0 items-center gap-2 font-display text-sm font-medium text-brand-navy motion-safe:transition-colors hover:text-brand-teal"
        >
          View packages
          <ArrowRight
            aria-hidden="true"
            className="size-4 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}
