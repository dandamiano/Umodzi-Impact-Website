import Link from "next/link";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  name: string;
  href?: string;
  id?: string;
  as?: "h2" | "h3";
};

const cardClassName =
  "block h-full scroll-mt-28 rounded-lg border border-brand-navy/15 bg-paper p-5 shadow-soft";

export function ServiceCard({ name, href, id, as = "h3" }: ServiceCardProps) {
  const Title = as;
  const title = <Title className="font-display text-lg font-medium">{name}</Title>;

  if (!href) {
    return (
      <article id={id} className={cardClassName}>
        {title}
      </article>
    );
  }

  return (
    <article id={id} className="h-full scroll-mt-28">
      <Link
        href={href}
        className={cn(
          cardClassName,
          "motion-safe:transition-colors hover:border-brand-teal",
        )}
      >
        {title}
      </Link>
    </article>
  );
}
