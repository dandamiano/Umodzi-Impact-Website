"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { servicesPage } from "@/lib/constants";
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
        "service-packages-bridge relative mt-14 overflow-hidden bg-wash-orange/80 p-6 sm:mt-16 sm:p-8",
        enhanced && "is-enhanced",
        visible && "is-visible",
      )}
    >
      <span
        className="gallery-tape absolute -top-1 left-[20%] z-10 h-2.5 w-12 -rotate-6"
        aria-hidden="true"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-dots absolute inset-0 opacity-[0.18]" />
        <span className="absolute top-5 right-[12%] size-2 rotate-12 bg-brand-navy/20" />
      </div>

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="service-packages-bridge-copy max-w-xl">
          <span
            className="gallery-stamp mb-3 inline-block rotate-[-5deg] border border-brand-navy/25 bg-paper px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-navy uppercase"
            aria-hidden="true"
          >
            {servicesPage.bridgeStamp}
          </span>
          <p className="font-display text-lg font-medium tracking-tight text-brand-navy sm:text-xl">
            {servicesPage.bridgeTitle}
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-brand-navy/70">
            {servicesPage.bridgeLede}
          </p>
        </div>
        <Link
          href={href}
          className="service-packages-bridge-action group inline-flex min-h-11 shrink-0 items-center gap-2 font-display text-sm font-medium text-brand-navy underline decoration-brand-orange/70 underline-offset-4 motion-safe:transition-colors hover:text-brand-teal"
        >
          {servicesPage.bridgeAction}
          <ArrowRight
            aria-hidden="true"
            className="size-4 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}
