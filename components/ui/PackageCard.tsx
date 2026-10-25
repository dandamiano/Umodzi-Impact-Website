import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { PackagePricing } from "@/types/content";

type PackageCardProps = {
  name: string;
  duration: string;
  summary?: string;
  idealFor?: string;
  inclusionsLead?: string;
  inclusions: readonly string[];
  pricing?: PackagePricing;
  enquiry?: {
    href: string;
    label: string;
  };
  as?: "h2" | "h3";
  variant?: "full" | "preview";
  className?: string;
};

export function PackageCard({
  name,
  duration,
  summary,
  idealFor,
  inclusionsLead,
  inclusions,
  pricing,
  enquiry,
  as = "h3",
  variant = "full",
  className,
}: PackageCardProps) {
  const Title = as;

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-lg border border-brand-navy/15 bg-paper p-6 shadow-soft",
        className,
      )}
    >
      <Title className="font-display text-2xl font-medium">{name}</Title>
      <p className="mt-2 text-sm font-medium text-brand-teal">{duration}</p>
      {variant === "preview" && summary ? (
        <p className="mt-5 text-sm leading-relaxed">{summary}</p>
      ) : null}
      {variant === "preview" && idealFor ? (
        <p className="mt-4 text-sm leading-relaxed">
          <span className="font-medium">Ideal for </span>
          {idealFor}
        </p>
      ) : null}
      {variant === "full" && inclusionsLead ? (
        <p className="mt-5 text-sm leading-relaxed">{inclusionsLead}</p>
      ) : null}
      {variant === "full" ? (
        <ul className="mt-3 flex-1 list-disc space-y-2 pl-5 text-sm leading-relaxed">
          {inclusions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {variant === "full" && pricing?.approved ? (
        <p className="mt-5 text-sm font-medium">{pricing.label}</p>
      ) : null}
      {variant === "full" && pricing && !pricing.approved && pricing.note ? (
        <p className="mt-5 text-sm leading-relaxed">{pricing.note}</p>
      ) : null}
      {enquiry ? (
        <ButtonLink
          href={enquiry.href}
          variant="secondary"
          className={variant === "preview" ? "mt-auto pt-6" : "mt-6"}
        >
          {enquiry.label}
        </ButtonLink>
      ) : null}
    </article>
  );
}
