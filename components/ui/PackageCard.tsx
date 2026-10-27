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
  light: "border border-dashed border-brand-navy/25 bg-paper",
  standard: "border border-brand-navy/15 bg-paper shadow-soft",
  featured:
    "border border-brand-teal/40 bg-paper shadow-soft ring-1 ring-brand-teal/20 sm:p-8",
  executive: "border border-brand-navy bg-brand-navy text-white shadow-soft",
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
  const muted = isExecutive ? "text-white/75" : "text-brand-teal";
  const body = isExecutive ? "text-white/90" : "text-brand-navy";
  const resolvedDetails =
    detailsHref ?? (id && variant === "preview" ? `/packages#${id}` : undefined);

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7",
        tierShell[tier],
        isFeatured && "lg:-translate-y-1",
        className,
      )}
    >
      <span
        className="absolute inset-x-0 top-0 z-[1] h-1 bg-brand-orange"
        aria-hidden="true"
      />

      {isExecutive ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-16 size-56 rounded-full bg-brand-teal/35"
          />
          <div
            aria-hidden="true"
            className="home-dots pointer-events-none absolute inset-0 opacity-[0.22]"
          />
        </>
      ) : null}

      {isFeatured ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-brand-teal/8"
        />
      ) : null}

      <div className="relative z-[1] flex items-start justify-between gap-3">
        <span className="font-display text-xs font-semibold tracking-[0.22em] text-brand-orange">
          {String(step).padStart(2, "0")}
        </span>
        {badge ? (
          <span
            className={cn(
              "rounded-md px-2.5 py-1 text-[0.7rem] font-medium tracking-wide uppercase",
              isExecutive
                ? "bg-white/10 text-white"
                : "bg-brand-teal/10 text-brand-teal",
            )}
          >
            {badge}
          </span>
        ) : null}
      </div>

      <Title className="relative z-[1] mt-4 font-display text-2xl font-medium tracking-tight">
        {name}
      </Title>

      <p
        className={cn(
          "relative z-[1] mt-3 inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-medium",
          isExecutive ? "bg-white/10 text-white" : "bg-brand-teal/8 text-brand-teal",
        )}
      >
        {duration}
      </p>

      <p className={cn("relative z-[1] mt-4 text-base font-medium leading-snug", body)}>
        {outcome}
      </p>

      {variant === "preview" && summary ? (
        <p className={cn("relative z-[1] mt-3 line-clamp-3 text-sm leading-relaxed", muted)}>
          {summary}
        </p>
      ) : null}

      {variant === "preview" && idealFor ? (
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
              ? "text-white hover:text-brand-orange"
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
