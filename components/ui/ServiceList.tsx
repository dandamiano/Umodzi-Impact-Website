import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";
import type { ServiceOffering } from "@/types/content";

type ServiceListProps = {
  items: readonly ServiceOffering[];
  linked?: boolean;
  variant?: "cards" | "links";
};

export function ServiceList({
  items,
  linked = false,
  variant = "cards",
}: ServiceListProps) {
  if (variant === "links") {
    return (
      <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {items.map((service) => (
          <li key={service.id}>
            <Link
              href={`/services/#${service.id}`}
              className="font-medium underline-offset-4 hover:text-brand-teal hover:underline"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service) => (
        <li key={service.id}>
          <ServiceCard
            id={linked ? undefined : service.id}
            name={service.name}
            href={linked ? `/services/#${service.id}` : undefined}
            as={linked ? "h3" : "h2"}
          />
        </li>
      ))}
    </ul>
  );
}
