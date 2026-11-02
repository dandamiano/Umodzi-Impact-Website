import { PackageCard } from "@/components/ui/PackageCard";
import { PackagePathway } from "@/components/ui/PackagePathway";
import { cn } from "@/lib/utils";
import type { PackageOffering } from "@/types/content";

type PackageListProps = {
  items: readonly PackageOffering[];
  enquiryHref?: string;
  heading?: "h2" | "h3";
  variant?: "full" | "preview";
  showPathway?: boolean;
};

export function PackageList({
  items,
  enquiryHref,
  heading = "h3",
  variant = "full",
  showPathway = true,
}: PackageListProps) {
  return (
    <div>
      {showPathway ? <PackagePathway items={items} trackActive /> : null}
      <ul className="mt-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-7">
        {items.map((item, index) => (
          <li
            key={item.id}
            id={item.id}
            className={cn(
              "home-rise scroll-mt-28",
              item.tier === "featured" && "lg:relative lg:z-10",
            )}
            style={{ animationDelay: `${80 + index * 70}ms` }}
          >
            <PackageCard
              id={item.id}
              name={item.name}
              step={item.step}
              duration={item.duration}
              outcome={item.outcome}
              summary={item.summary}
              idealFor={item.idealFor}
              inclusionsLead={item.inclusionsLead}
              inclusions={item.inclusions}
              pricing={item.pricing}
              tier={item.tier}
              badge={item.badge}
              enquiry={
                variant === "full" && enquiryHref
                  ? { href: enquiryHref, label: item.enquiryLabel }
                  : undefined
              }
              as={heading}
              variant={variant}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
