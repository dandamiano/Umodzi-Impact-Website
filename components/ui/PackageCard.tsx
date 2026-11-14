import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { PackagePricing, PackageTier } from "@/types/content";

type PackageCardProps = {
  id?: string;
  name: string;
  step: number;
  duration: string;
  outcome: string;
  summary?: string;
  idealFor?: string;
  inclusionsLead?: string;
  inclusions: readonly string[];
  pricing?: PackagePricing;
  tier: PackageTier;
  badge?: string;
  enquiry?: {
    href: string;
    label: string;
  };
  detailsHref?: string;
  as?: "h2" | "h3";
  variant?: "full" | "preview";
  className?: string;
};

const tierShell: Record<PackageTier, string> = {
  light: "bg-paper ring-1 ring-brand-navy/12",
  standard: "bg-wash-teal/55 ring-1 ring-brand-teal/20",
  featured: "bg-wash-orange/80 ring-1 ring-brand-orange/35 sm:p-8",
  executive: "bg-brand-orange text-brand-navy ring-1 ring-brand-orange",
};

const tierTilt: Record<PackageTier, string> = {
  light: "motion-safe:hover:-rotate-1",
  standard: "motion-safe:hover:rotate-1",
  featured: "motion-safe:hover:-rotate-1",
  executive: "motion-safe:hover:rotate-1",
};

function ctaVariant(tier: PackageTier): "primary" | "secondary" | "inverse" {
  if (tier === "executive") return "inverse";
  if (tier === "featured") return "primary";
  return "secondary";
}

export function PackageCard({
  id,
  name,
  step,
  duration,
  outcome,
  summary,
  idealFor,
  inclusionsLead,
  inclusions,
  pricing,
  tier,
  badge,
  enquiry,
  detailsHref,
  as = "h3",
  variant = "full",
  className,
}: PackageCardProps) {
  const Title = as;
  const isExecutive = tier === "executive";
  const isFeatured = tier === "featured";
  const muted = isExecutive ? "text-brand-navy/75" : "text-brand-navy/65";
  const body = "text-brand-navy";
  const resolvedDetails =
    detailsHref ?? (id && variant === "preview" ? `/packages#${id}` : undefined);

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden p-6 sm:p-7",
        "motion-safe:transition-transform motion-safe:duration-300",
        tierShell[tier],
        tierTilt[tier],
        isFeatured && "lg:-translate-y-1",
        className,
      )}
    >
      <span
        className={cn(
          "gallery-tape absolute -top-1 z-20 h-2.5 w-12",
          isFeatured || isExecutive ? "left-[22%] -rotate-6" : "right-[18%] rotate-[8deg]",
        )}
        aria-hidden="true"
      />

      <span
        className={cn(
          "absolute inset-x-0 top-0 z-[1] h-1",
          isExecutive ? "bg-brand-navy" : "bg-brand-orange/90",
        )}
        aria-hidden="true"
      />

      {isExecutive ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-16 size-56 rounded-full bg-white/25"
          />
          <div
            aria-hidden="true"
            className="hero-energy-dots pointer-events-none absolute inset-0 opacity-[0.18]"
          />
        </>
      ) : null}

      {isFeatured ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-brand-orange/15"
        />
      ) : null}

      <div className="relative z-[1] flex items-start justify-between gap-3">
        <span
          className={cn(
            "gallery-stamp inline-flex items-center border px-2 py-0.5 font-display text-[0.65rem] font-semibold tracking-[0.18em] uppercase",
            "border-brand-navy/35 text-brand-navy",
          )}
        >
          Step {String(step).padStart(2, "0")}
        </span>
        {badge ? (
          <span
            className={cn(
              "gallery-stamp rotate-[4deg] border px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase",
              isExecutive
                ? "border-brand-navy/30 bg-paper/80 text-brand-navy"
                : "border-brand-navy/20 bg-paper text-brand-navy",
            )}
          >
            {badge}
          </span>
        ) : null}
      </div>

      <Title className="relative z-[1] mt-4 font-display text-2xl font-medium tracking-tight text-brand-navy">
        {name}
      </Title>

      <p
        className={cn(
          "relative z-[1] mt-3 inline-flex w-fit border border-dashed px-2.5 py-1 text-xs font-medium",
          isExecutive
            ? "border-brand-navy/35 text-brand-navy"
            : "border-brand-teal/35 text-brand-teal",
        )}
      >
        {duration}
      </p>

      <p className={cn("relative z-[1] mt-4 text-base font-medium leading-snug", body)}>
        {outcome}
      </p>

      {summary && (variant === "full" || variant === "preview") ? (
        <p
          className={cn(
            "relative z-[1] mt-3 text-sm leading-relaxed",
            variant === "preview" && "line-clamp-3",
            muted,
          )}
        >
          {summary}
        </p>
      ) : null}

      {idealFor ? (
        <p className={cn("relative z-[1] mt-4 text-sm leading-relaxed", muted)}>
          <span className={cn("font-medium", body)}>Ideal for </span>
          {idealFor}
        </p>
      ) : null}

      {variant === "full" && inclusionsLead ? (
        <p className={cn("relative z-[1] mt-5 text-sm font-medium", body)}>
          {inclusionsLead}
        </p>
      ) : null}

      {variant === "full" ? (
        <ul className="relative z-[1] mt-3 flex-1 space-y-2.5 text-sm leading-relaxed">
          {inclusions.map((item) => (
            <li key={item} className="flex gap-2.5">
              <Check
                className={cn(
                  "mt-0.5 size-4 shrink-0",
                  isExecutive ? "text-brand-orange" : "text-brand-teal",
                )}
                aria-hidden="true"
                strokeWidth={2.25}
              />
              <span className={body}>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative z-[1] flex-1" />
      )}

      {variant === "full" && pricing?.approved ? (
        <p className={cn("relative z-[1] mt-5 text-sm font-medium", body)}>
          {pricing.label}
        </p>
      ) : null}
      {variant === "full" && pricing && !pricing.approved && pricing.note ? (
        <p className={cn("relative z-[1] mt-5 text-sm leading-relaxed", muted)}>
          {pricing.note}
        </p>
      ) : null}

      {enquiry ? (
        <ButtonLink
          href={enquiry.href}
          variant={ctaVariant(tier)}
          className="relative z-[1] mt-6"
        >
          {enquiry.label}
        </ButtonLink>
      ) : null}

      {variant === "preview" && resolvedDetails ? (
        <Link
          href={resolvedDetails}
          className={cn(
            "relative z-[1] mt-6 inline-flex items-center gap-1.5 text-sm font-medium motion-safe:transition-colors",
            isExecutive
              ? "text-brand-navy hover:text-brand-navy/70"
              : "text-brand-teal hover:text-brand-navy",
          )}
        >
          View details
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : null}
    </article>
  );
}
