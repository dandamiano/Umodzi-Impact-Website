import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { servicesPage } from "@/lib/constants";

type ServicePackagesBridgeProps = {
  href?: string;
};

export function ServicePackagesBridge({
  href = "/packages",
}: ServicePackagesBridgeProps) {
  return (
    <div className="relative mt-14 overflow-hidden border-t border-brand-navy/10 pt-8 sm:mt-16 sm:pt-10">
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div className="max-w-xl">
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
          className="group inline-flex min-h-11 shrink-0 items-center gap-2 font-display text-sm font-medium text-brand-navy underline decoration-brand-orange/70 underline-offset-4 motion-safe:transition-colors hover:text-brand-teal"
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
