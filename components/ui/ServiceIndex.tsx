import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import type { ServiceGroup } from "@/data/services";

type ServiceIndexProps = {
  titleId: string;
  title: string;
  lede: string;
  groups: readonly ServiceGroup[];
  cta?: { href: string; label: string };
};

export function ServiceIndex({
  titleId,
  title,
  lede,
  groups,
  cta = { href: "/services", label: "View all services" },
}: ServiceIndexProps) {
  const serviceCount = groups.reduce((total, group) => total + group.items.length, 0);

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.55fr)] lg:gap-12 xl:gap-16">
      <div className="home-rise relative lg:sticky lg:top-28">
        <div
          aria-hidden="true"
          className="home-dots pointer-events-none absolute -top-2 right-0 hidden h-20 w-24 opacity-40 lg:block"
        />
        <span
          className="home-draw mb-4 block h-1 w-12 bg-brand-orange"
          aria-hidden="true"
        />
        <p className="font-display text-xs font-medium tracking-[0.16em] text-brand-teal uppercase">
          What we deliver
        </p>
        <h2
          id={titleId}
          className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
        >
          {title}
        </h2>
        <p className="mt-4 max-w-sm font-serif text-xl leading-relaxed text-brand-teal sm:text-2xl">
          {lede}
        </p>
        <p className="mt-5 font-display text-sm text-brand-navy/55">
          <span className="tabular-nums text-brand-navy">{serviceCount}</span> services
          <span aria-hidden="true" className="mx-2 text-brand-orange">
            ·
          </span>
          <span className="tabular-nums text-brand-navy">{groups.length}</span> pathways
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href={cta.href} variant="primary" size="large" className="group">
            {cta.label}
            <ArrowRight
              aria-hidden="true"
              className="ml-2 size-4 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
            />
          </ButtonLink>
          <span
            aria-hidden="true"
            className="hidden h-px w-10 bg-brand-navy/20 sm:block"
          />
          <p className="max-w-[12rem] text-sm leading-snug text-brand-teal/80">
            Full list on the services page
          </p>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
        {groups.map((group, groupIndex) => (
          <div
            key={group.id}
            className="home-rise"
            style={{ animationDelay: `${80 + groupIndex * 70}ms` }}
          >
            <div className="flex items-baseline gap-3">
              <span
                aria-hidden="true"
                className="font-display text-sm tabular-nums text-brand-orange"
              >
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xs font-medium tracking-[0.14em] text-brand-teal uppercase">
                {group.label}
              </h3>
            </div>
            <ul className="mt-4 border-t border-brand-navy/15">
              {group.items.map((service, itemIndex) => (
                <li key={service.id}>
                  <Link
                    href={`/services/#${service.id}`}
                    className="group relative flex gap-3 border-b border-brand-navy/15 py-3.5 motion-safe:transition-colors hover:text-brand-teal"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 font-display text-xs tabular-nums text-brand-navy/30 motion-safe:transition-colors group-hover:text-brand-orange"
                    >
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 font-display text-sm font-medium leading-snug tracking-tight sm:text-[0.9375rem]">
                      {service.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand-teal motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
