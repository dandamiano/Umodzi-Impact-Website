import { PackageCard } from "@/components/ui/PackageCard";
import type { PackageOffering } from "@/types/content";

type PackageListProps = {
  items: readonly PackageOffering[];
  enquiry?: {
    href: string;
    label: string;
  };
  heading?: "h2" | "h3";
  variant?: "full" | "preview";
};

export function PackageList({
  items,
  enquiry,
  heading = "h3",
  variant = "full",
}: PackageListProps) {
  return (
    <ul className="mt-10 grid gap-6 lg:grid-cols-2">
      {items.map((item) => (
        <li key={item.id} id={item.id} className="scroll-mt-28">
          <PackageCard
            name={item.name}
            duration={item.duration}
            summary={item.summary}
            idealFor={item.idealFor}
            inclusionsLead={item.inclusionsLead}
            inclusions={item.inclusions}
            pricing={item.pricing}
            enquiry={enquiry}
            as={heading}
            variant={variant}
          />
        </li>
      ))}
    </ul>
  );
}
