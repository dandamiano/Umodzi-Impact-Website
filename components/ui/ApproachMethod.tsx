import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import type { ApproachPillar } from "@/data/approach";

type ApproachMethodProps = {
  titleId: string;
  title: string;
  lede: string;
  pillars: readonly ApproachPillar[];
  cta?: { href: string; label: string };
};

export function ApproachMethod({
  titleId,
  title,
  lede,
  pillars,
  cta = { href: "/about", label: "About Umodzi Impact Hub" },
}: ApproachMethodProps) {
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
          How we work
        </p>
        <h2
          id={titleId}
          className="mt-3 max-w-[12ch] text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
        >
          {title}
        </h2>
        <p className="mt-4 max-w-sm font-serif text-xl leading-relaxed text-brand-teal sm:text-2xl">
          {lede}
        </p>
        <p className="mt-5 font-display text-sm text-brand-navy/55">
          <span className="tabular-nums text-brand-navy">{pillars.length}</span>{" "}
          pillars
          <span aria-hidden="true" className="mx-2 text-brand-orange">
            ·
          </span>
          beyond games
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href={cta.href} variant="secondary" className="group">
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
          <p className="max-w-[11rem] text-sm leading-snug text-brand-teal/80">
            Mission, vision, and values on the about page
          </p>
        </div>
      </div>

      <ol className="relative border-l border-brand-green/35 pl-6 sm:pl-8">
        {pillars.map((pillar, index) => (
          <li
            key={pillar.id}
            className="home-rise group relative border-b border-brand-navy/12 py-5 last:border-b-0 sm:py-6"
            style={{ animationDelay: `${80 + index * 70}ms` }}
          >
            <span
              aria-hidden="true"
              className="absolute -left-[1.625rem] top-7 size-2.5 rounded-full bg-brand-green ring-4 ring-paper sm:-left-[2.125rem] sm:top-8"
            />
            <div className="flex gap-4 sm:gap-5">
              <span
                aria-hidden="true"
                className="mt-0.5 font-display text-sm tabular-nums text-brand-green motion-safe:transition-colors motion-safe:duration-300 group-hover:text-brand-orange"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                <h3 className="font-display text-lg font-medium tracking-tight sm:text-xl">
                  {pillar.name}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-brand-teal sm:text-[0.9375rem]">
                  {pillar.summary}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
