import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import type { CaseStudy } from "@/data/experiences";
import type { GalleryItem } from "@/types/content";
import { cn } from "@/lib/utils";

type ExperiencePortfolioProps = {
  title: string;
  lede: string;
  studies: readonly CaseStudy[];
  themes: readonly string[];
  backgroundPhoto?: GalleryItem;
};

export function ExperiencePortfolio({
  title,
  lede,
  studies,
  themes,
  backgroundPhoto,
}: ExperiencePortfolioProps) {
  const hasStudies = studies.length > 0;

  return (
    <>
      <section
        className={cn(
          "relative isolate overflow-hidden bg-mist",
          hasStudies ? "pt-12 pb-10 sm:pt-14 sm:pb-12" : "py-16 sm:py-20",
        )}
      >
        {backgroundPhoto ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <Image
              src={backgroundPhoto.src}
              alt=""
              width={backgroundPhoto.width}
              height={backgroundPhoto.height}
              sizes="100vw"
              className="h-full w-full object-cover object-[center_40%] opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-mist/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-mist/90 via-mist/70 to-mist" />
          </div>
        ) : null}

        <div
          aria-hidden="true"
          className="home-dots pointer-events-none absolute top-10 right-8 hidden h-24 w-28 opacity-35 sm:block"
        />

        <Container className="relative">
          <div className="home-rise">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Experiences" },
              ]}
            />
          </div>

          <header
            className={cn(
              "home-rise mt-2 max-w-2xl",
              hasStudies ? "max-w-xl" : "max-w-2xl",
            )}
            style={{ animationDelay: "60ms" }}
          >
            <span
              className="home-draw mb-4 block h-1 w-12 bg-brand-orange"
              aria-hidden="true"
            />
            <p className="font-display text-xs font-medium tracking-[0.16em] text-brand-teal uppercase">
              Client portfolio
            </p>
            <h1
              className={cn(
                "mt-3 font-medium tracking-tight",
                hasStudies
                  ? "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
                  : "text-4xl sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]",
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "mt-4 max-w-xl font-serif leading-relaxed text-brand-teal",
                hasStudies ? "text-lg sm:text-xl" : "text-xl sm:text-2xl",
              )}
            >
              {lede}
            </p>
          </header>

          {hasStudies ? null : <ExperienceEmpty themes={themes} />}
        </Container>
      </section>

      {hasStudies ? (
        <section className="relative bg-paper pt-8 pb-16 sm:pt-10 sm:pb-20">
          <Container>
            <ul className="grid gap-16 lg:gap-24">
              {studies.map((study, index) => (
                <li
                  key={study.id}
                  id={study.id}
                  className="home-rise scroll-mt-28"
                  style={{ animationDelay: `${80 + index * 90}ms` }}
                >
                  <CaseStudyFeature study={study} index={index} />
                </li>
              ))}
            </ul>

            <div
              className="home-rise mt-14 flex flex-col gap-4 border-t border-brand-navy/15 pt-10 sm:mt-16 sm:flex-row sm:items-center sm:gap-8"
              style={{ animationDelay: "160ms" }}
            >
              <Link
                href="/gallery"
                className="group inline-flex min-h-11 items-center gap-2 font-display text-sm font-medium text-brand-navy motion-safe:transition-colors hover:text-brand-teal"
              >
                Browse the gallery
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
                />
              </Link>
              <span
                aria-hidden="true"
                className="hidden h-px w-8 bg-brand-navy/20 sm:block"
              />
              <Link
                href="/packages"
                className="group inline-flex min-h-11 items-center gap-2 font-display text-sm font-medium text-brand-navy motion-safe:transition-colors hover:text-brand-teal"
              >
                Explore packages
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}

function ExperienceEmpty({ themes }: { themes: readonly string[] }) {
  return (
    <div className="home-rise mt-12" style={{ animationDelay: "120ms" }}>
      <div className="relative overflow-hidden rounded-[1.5rem] border border-brand-navy/10 bg-paper/80 p-6 shadow-soft sm:p-8 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-10 hidden size-40 rounded-full border border-brand-teal/15 sm:block"
        />
        <span
          className="home-draw mb-4 block h-1 w-10 bg-brand-orange"
          aria-hidden="true"
        />
        <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Portfolio in preparation
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-navy/75 sm:text-lg">
          Approved client experiences will appear here once permission and the
          details have been confirmed. Until then, explore how we work and the
          moments we capture.
        </p>

        <div className="mt-8">
          <p className="font-display text-xs font-medium tracking-[0.14em] text-brand-teal uppercase">
            Programme themes
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
            {themes.map((theme) => (
              <li
                key={theme}
                className="border border-brand-navy/12 bg-mist/80 px-3 py-1.5 font-display text-sm font-medium text-brand-navy"
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-brand-navy/12 pt-8 sm:flex-row sm:items-center sm:gap-8">
          <Link
            href="/gallery"
            className="group inline-flex min-h-11 items-center gap-2 font-display text-sm font-medium text-brand-navy motion-safe:transition-colors hover:text-brand-teal"
          >
            View gallery
            <ArrowRight
              aria-hidden="true"
              className="size-4 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
            />
          </Link>
          <span
            aria-hidden="true"
            className="hidden h-px w-8 bg-brand-navy/20 sm:block"
          />
          <Link
            href="/packages"
            className="group inline-flex min-h-11 items-center gap-2 font-display text-sm font-medium text-brand-navy motion-safe:transition-colors hover:text-brand-teal"
          >
            Explore packages
            <ArrowRight
              aria-hidden="true"
              className="size-4 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

function CaseStudyFeature({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const facts = [
    { label: "Date", value: study.date },
    { label: "Location", value: study.location },
    { label: "Participants", value: study.participants },
  ] as const;

  const lead = study.photos?.lead;
  const supports = study.photos?.supports ?? [];

  return (
    <article className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-12 xl:gap-16">
      <div className={cn(index % 2 === 1 && "lg:order-2")}>
        <div className="flex items-baseline gap-3">
          <span
            aria-hidden="true"
            className="font-display text-sm tabular-nums text-brand-orange"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="font-display text-xs font-medium tracking-[0.14em] text-brand-teal uppercase">
            Case study
          </p>
        </div>

        <h2 className="mt-3 max-w-lg font-display text-2xl font-medium tracking-tight sm:text-3xl lg:text-[2.15rem] lg:leading-[1.15]">
          <span className="sr-only">{study.title}. </span>
          {study.shortTitle}
        </h2>

        <p className="mt-3 max-w-md font-serif text-xl leading-snug text-brand-teal sm:text-[1.35rem]">
          {study.summary}
        </p>

        <dl className="mt-8 grid gap-4 border-y border-brand-navy/12 py-5 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-display text-[0.6875rem] font-medium tracking-[0.14em] text-brand-navy/45 uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1.5 font-display text-sm font-medium leading-snug sm:text-[0.9375rem]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        {study.feedback ? (
          <blockquote className="relative mt-8">
            <span
              aria-hidden="true"
              className="home-draw mb-4 block h-1 w-10 bg-brand-orange"
            />
            <p className="max-w-md font-serif text-xl leading-relaxed text-brand-teal sm:text-[1.35rem] sm:leading-snug">
              {study.feedback}
            </p>
          </blockquote>
        ) : null}
      </div>

      {lead ? (
        <div className={cn("relative min-w-0", index % 2 === 1 && "lg:order-1")}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-6 top-6 hidden h-40 w-40 rounded-full border border-brand-teal/20 lg:block"
          />
          <div className="relative lg:pt-4 lg:pl-4">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 hidden h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-[1.75rem] border border-brand-teal/40 lg:block"
            />
            <span
              aria-hidden="true"
              className="absolute -right-1.5 -bottom-1.5 z-10 hidden size-3 bg-brand-orange sm:block"
            />
            <div className="group/photo relative overflow-hidden rounded-[1.5rem] bg-mist shadow-soft ring-1 ring-brand-navy/10">
              <Image
                src={lead.src}
                alt={lead.alt}
                width={lead.width}
                height={lead.height}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="aspect-[16/10] h-auto w-full object-cover object-[center_35%] motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/photo:scale-[1.03]"
                priority={index === 0}
              />
            </div>
          </div>

          {supports.length > 0 ? (
            <ul className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
              {supports.slice(0, 3).map((support) => (
                <li key={support.src}>
                  <div className="group/support relative overflow-hidden rounded-xl bg-mist ring-1 ring-brand-navy/10">
                    <Image
                      src={support.src}
                      alt={support.alt}
                      width={support.width}
                      height={support.height}
                      sizes="(min-width: 1024px) 14vw, 30vw"
                      className="aspect-[4/3] h-auto w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/support:scale-[1.04]"
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : null}

          <p className="mt-3 font-display text-xs tracking-wide text-brand-navy/45">
            Field photography from Umodzi experiences ·{" "}
            <Link
              href="/gallery"
              className="underline-offset-2 motion-safe:transition-colors hover:text-brand-teal hover:underline"
            >
              View gallery
            </Link>
          </p>
        </div>
      ) : null}
    </article>
  );
}
