import Link from "next/link";
import { AudienceRoster } from "@/components/ui/AudienceRoster";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { PackagePathway } from "@/components/ui/PackagePathway";
import { PhotographFeature } from "@/components/ui/PhotographFeature";
import { approachPillars } from "@/data/approach";
import type { AudienceItem } from "@/data/audiences";
import type { ServiceGroup } from "@/data/services";
import { homePage } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { FeaturedPhoto, GalleryItem, PackageOffering } from "@/types/content";

const serviceBlurb: Record<string, string> = {
  "design-facilitation": "Get people moving",
  logistics: "Make the day run",
  "brand-capture": "Leave with the proof",
};

type HomePortfolioProps = {
  heroPhoto?: GalleryItem;
  supportPhoto?: GalleryItem;
  accentPhoto?: GalleryItem;
  audiencePhoto?: GalleryItem;
  packagesPhoto?: GalleryItem;
  closingPhoto?: GalleryItem;
  audiences: readonly AudienceItem[];
  packages: readonly PackageOffering[];
  featuredPhoto?: FeaturedPhoto;
  featuredSupports: readonly FeaturedPhoto[];
  serviceGroups: readonly ServiceGroup[];
};

export function HomePortfolio({
  heroPhoto,
  supportPhoto,
  accentPhoto,
  audiencePhoto,
  packagesPhoto,
  closingPhoto,
  audiences,
  packages,
  featuredPhoto,
  featuredSupports,
  serviceGroups,
}: HomePortfolioProps) {
  return (
    <>
      <HomeHero
        photo={heroPhoto}
        support={supportPhoto}
        accent={accentPhoto}
      />

      <AudienceRoster
        titleId="audiences-heading"
        items={audiences}
        photo={audiencePhoto}
      />

      <HomePackagesTeaser items={packages} photo={packagesPhoto} />

      <PhotographFeature
        titleId="photographs-heading"
        lead={featuredPhoto}
        supports={featuredSupports}
        cta={{ href: "/gallery", label: homePage.photographsAction }}
      />

      <HomeServicesPeek groups={serviceGroups} />

      <HomeApproach />

      <HomeClosing photo={closingPhoto ?? heroPhoto} />
    </>
  );
}

function HomeHero({
  photo,
  support,
  accent,
}: {
  photo?: GalleryItem;
  support?: GalleryItem;
  accent?: GalleryItem;
}) {
  return (
    <section className="motion-enter relative z-20 isolate overflow-visible bg-brand-orange text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="hero-energy-glow absolute inset-0" />
        <div className="hero-energy-dots absolute inset-0 opacity-[0.22]" />
        <span className="absolute top-[14%] right-[10%] size-3 rotate-12 bg-white/85" />
        <span className="absolute top-[28%] right-[20%] size-2 rounded-full bg-white/55" />
        <span className="absolute top-[48%] left-[6%] size-2 rotate-45 bg-white/70" />
        <span className="absolute top-[18%] left-[8%] hidden size-12 -rotate-[18deg] border-2 border-dashed border-white/35 sm:block" />
        <span className="absolute bottom-[28%] left-[14%] hidden size-8 rotate-12 rounded-full border border-white/30 lg:block" />
        <svg
          className="absolute top-[42%] left-[4%] hidden h-10 w-32 -rotate-12 text-white/75 sm:block"
          viewBox="0 0 140 24"
          fill="none"
        >
          <path
            d="M2 16c20-10 40 8 60-2 18-9 34 6 52 1 10-3 18-1 24 2"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <Container className="relative z-40 pt-12 pb-6 sm:pt-14 sm:pb-8 lg:pt-16 lg:pb-10">
        <div className="flex flex-col gap-10 sm:grid sm:grid-cols-[minmax(0,1.05fr)_minmax(14rem,1fr)] sm:items-center sm:gap-6 lg:gap-10">
          <header className="home-rise relative order-1 min-w-0 sm:pt-2 lg:pt-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <p className="font-display text-[0.65rem] font-semibold tracking-[0.2em] text-white uppercase sm:text-xs sm:tracking-[0.22em]">
                {homePage.brandLabel}
              </p>
              <span
                className="gallery-stamp rotate-[-9deg] border border-white/85 bg-brand-navy/55 px-2.5 py-1 font-display text-[0.55rem] font-semibold tracking-[0.16em] text-white uppercase sm:text-[0.65rem]"
                aria-hidden="true"
              >
                {homePage.stamp}
              </span>
            </div>

            <h1 className="mt-4 max-w-xl font-display text-4xl font-medium tracking-tight text-white sm:mt-5 sm:text-5xl lg:text-[3.6rem] lg:leading-[1.02]">
              <span className="block text-white">{homePage.headlineLead}</span>
              <span className="gallery-punch relative mt-2 inline-block -rotate-2 font-medium text-brand-navy sm:mt-2.5">
                {homePage.headlinePunch}
                <svg
                  className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-3 w-full text-brand-navy sm:h-4"
                  viewBox="0 0 220 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 8c16-5 32 4 50-1 20-6 38 5 58 0 18-4 34-2 52 2 16 3 30-2 44-1"
                    stroke="currentColor"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-5 max-w-md font-serif text-lg leading-snug text-white/92 sm:mt-6 sm:text-xl">
              {homePage.lede}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-8">
              <ButtonLink
                href={homePage.heroPrimary.href}
                variant="inverse"
                size="large"
                className="-rotate-2 motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-1 hover:rotate-0"
              >
                {homePage.heroPrimary.label}
              </ButtonLink>
              <Link
                href={homePage.heroSecondary.href}
                className="font-display text-sm font-medium text-white/90 underline decoration-white/80 underline-offset-4 motion-safe:transition-colors hover:text-white"
              >
                {homePage.heroSecondary.label}
              </Link>
            </div>
          </header>

          {photo ? (
            <div
              aria-hidden="true"
              className="gallery-rise relative order-2 mx-auto mb-[-4rem] h-[19rem] w-[17rem] sm:mb-[-7rem] sm:h-[22rem] sm:w-[20rem] sm:justify-self-center lg:mb-[-8.5rem] lg:h-[24rem] lg:w-[22rem]"
            >
              {accent ? (
                <div className="absolute top-2 left-0 w-[46%] -rotate-[14deg]">
                  <div className="gallery-polaroid border border-white/50 bg-paper p-1.5 pb-4 shadow-[0_14px_28px_rgb(0_0_0/0.35)] sm:p-2 sm:pb-5">
                    <span className="gallery-tape absolute -top-1 left-2 z-10 -rotate-8 scale-75" />
                    <div className="overflow-hidden bg-mist">
                      <GalleryImage
                        image={accent}
                        decorative
                        priority
                        sizes="140px"
                        className="aspect-[4/5] h-auto w-full object-cover object-[center_15%]"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="absolute top-6 right-0 z-10 w-[72%] rotate-[-4deg] sm:top-4">
                <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,var(--color-brand-orange)_48%,transparent),transparent_70%)]" />
                <div className="absolute inset-2 translate-x-2.5 translate-y-2.5 rotate-[5deg] bg-wash-orange/75" />

                <span className="gallery-stamp absolute -top-4 left-1/2 z-20 -translate-x-1/2 rotate-[-10deg] border border-brand-orange bg-brand-navy px-2.5 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-orange uppercase sm:-top-5 sm:text-[0.65rem]">
                  {homePage.photoStamp}
                </span>

                <div className="gallery-polaroid relative border border-white/85 bg-paper p-2.5 pb-7 shadow-[0_24px_50px_rgb(0_0_0/0.5)] sm:p-3 sm:pb-8">
                  <span className="gallery-tape absolute -top-1.5 left-[14%] z-10 -rotate-10" />
                  <span className="gallery-tape absolute -top-1 right-[12%] z-10 rotate-[12deg] scale-90" />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      decorative
                      priority
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 34vw, 60vw"
                      className="aspect-[4/5] h-auto w-full object-cover object-[center_25%]"
                    />
                  </div>
                </div>

                <span className="absolute -right-3 top-[36%] size-3 rotate-12 bg-brand-orange" />
                <span className="absolute -bottom-1 left-[8%] size-2.5 rounded-full border-2 border-white/75" />
                <span className="absolute -left-2 top-[14%] size-2 rotate-45 bg-white/75" />
              </div>
            </div>
          ) : null}
        </div>
      </Container>

      <div className="relative z-20 -mb-px" aria-hidden="true">
        <div className="gallery-tear relative h-11 w-full sm:h-14">
          <div className="hero-tear-fill absolute inset-0 bg-wash-green">
            <div className="topo-map absolute inset-0" />
          </div>
        </div>

      </div>

      {support ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[4%] bottom-0 z-50 w-[7.5rem] translate-y-[50%] sm:right-[8%] sm:w-[9rem] lg:right-[10%] lg:w-[9.75rem] lg:translate-y-[54%]"
        >
          <div className="gallery-polaroid relative rotate-[8deg] border border-brand-navy/10 bg-paper p-1.5 pb-4 shadow-[0_18px_34px_rgb(0_0_0/0.3)] sm:p-2 sm:pb-5">
            <span className="gallery-tape absolute -top-1 left-2 z-10 -rotate-8 scale-90" />
            <span className="gallery-tape absolute -top-0.5 right-2 z-10 rotate-8 scale-75 opacity-90" />
            <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
              <GalleryImage
                image={support}
                decorative
                sizes="(min-width: 1024px) 12vw, 26vw"
                className="aspect-[4/5] h-auto w-full object-cover object-[center_18%]"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function HomePackagesTeaser({
  items,
  photo,
}: {
  items: readonly PackageOffering[];
  photo?: GalleryItem;
}) {
  return (
    <section
      aria-labelledby="packages-heading"
      className="relative isolate overflow-x-clip bg-wash-orange py-14 sm:py-16 lg:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_92%_8%,color-mix(in_srgb,var(--color-brand-orange)_18%,transparent),transparent_42%),radial-gradient(ellipse_at_8%_90%,color-mix(in_srgb,var(--color-brand-navy)_6%,transparent),transparent_48%)]" />
        <span className="absolute top-14 left-[10%] size-2 rotate-12 bg-brand-orange/55" />
        <span className="absolute right-[14%] bottom-24 size-8 rounded-full border border-dashed border-brand-orange/40" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(14rem,0.8fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <header className="home-rise max-w-2xl">
              <span
                className="gallery-stamp mb-4 inline-block rotate-[-6deg] border border-brand-navy/25 bg-paper px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-navy uppercase"
                aria-hidden="true"
              >
                {homePage.packagesStamp}
              </span>
              <h2
                id="packages-heading"
                className="font-display text-[clamp(1.2rem,5.2vw,1.55rem)] font-medium tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
              >
                <span className="whitespace-nowrap">
                  {homePage.packagesTitleLead}{" "}
                  <span className="gallery-punch relative inline-block -rotate-1">
                    {homePage.packagesTitlePunch}
                    <svg
                      className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-brand-orange sm:h-3.5"
                      viewBox="0 0 220 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 6c16-4 34 3 52-1 20-5 38 4 58 0 16-3 32-1 48 2 14 3 28-2 40-1"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
              </h2>
              <p className="mt-3 max-w-lg font-serif text-xl leading-snug text-brand-navy/75 sm:text-2xl">
                {homePage.packagesLede}
              </p>
            </header>

            <PackagePathway
              items={items}
              basePath="/packages"
              className="home-rise"
            />

            <div className="home-rise mt-8">
              <ButtonLink href="/packages" variant="primary" size="large">
                {homePage.packagesAction}
              </ButtonLink>
            </div>
          </div>

          {photo ? (
            <div
              aria-hidden="true"
              className="gallery-rise relative mx-auto w-full max-w-[22rem] sm:max-w-[18rem] lg:mx-0 lg:w-[17rem] lg:max-w-none lg:justify-self-end"
            >
              <div className="relative rotate-1 sm:rotate-2">
                <div className="absolute inset-3 -translate-x-2.5 translate-y-2.5 -rotate-3 bg-wash-teal/70" />
                <span className="gallery-stamp absolute -top-3 left-1/2 z-20 -translate-x-1/2 rotate-[-7deg] border border-brand-navy/25 bg-paper px-2.5 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-navy uppercase sm:text-[0.65rem]">
                  {homePage.packagesPhotoStamp}
                </span>
                <div className="gallery-polaroid relative border border-brand-navy/10 bg-paper p-2.5 pb-5 shadow-[0_18px_40px_rgb(49_65_114/0.18)] sm:p-3 sm:pb-8">
                  <span className="gallery-tape absolute -top-1.5 left-[18%] z-10 -rotate-8" />
                  <span className="gallery-tape absolute -top-1 right-[14%] z-10 rotate-[10deg] scale-90" />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      decorative
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 85vw"
                      className="aspect-[3/2] h-auto w-full object-cover object-center lg:aspect-[4/5]"
                    />
                  </div>
                </div>
                <span className="absolute -right-2 top-[38%] size-2.5 rotate-12 bg-brand-orange" />
                <span className="absolute -bottom-1 left-[12%] size-2.5 rounded-full border-2 border-brand-navy/25" />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

function HomeServicesPeek({ groups }: { groups: readonly ServiceGroup[] }) {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative isolate overflow-x-clip bg-wash-green py-14 sm:py-16 lg:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-dots absolute inset-0 opacity-[0.16]" />
        <span className="absolute top-16 right-[12%] size-2.5 rotate-12 bg-brand-orange/50" />
      </div>

      <Container className="relative">
        <header className="home-rise max-w-2xl">
          <span
            className="gallery-stamp mb-4 inline-block rotate-[-6deg] border border-brand-orange/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
            aria-hidden="true"
          >
            {homePage.servicesStamp}
          </span>
          <h2
            id="services-heading"
            className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl"
          >
            {homePage.servicesTitle}
          </h2>
          <p className="mt-3 max-w-lg font-serif text-xl leading-snug text-brand-navy/75 sm:text-2xl">
            {homePage.servicesLede}
          </p>
        </header>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {groups.map((group, index) => (
            <li
              key={group.id}
              className="home-rise"
              style={{ animationDelay: `${80 + index * 70}ms` }}
            >
              <Link
                href={`/services#${group.id}`}
                className={cn(
                  "group relative block h-full overflow-hidden bg-paper p-5 sm:p-6",
                  "motion-safe:transition-transform motion-safe:duration-300",
                  index % 2 === 0
                    ? "-rotate-1 hover:rotate-0"
                    : "rotate-1 hover:rotate-0",
                )}
              >
                <span
                  className={cn(
                    "gallery-tape absolute -top-1 z-10 h-2.5 w-10",
                    index % 2 === 0 ? "left-[20%] -rotate-6" : "right-[16%] rotate-6",
                  )}
                  aria-hidden="true"
                />
                <span
                  className="absolute inset-x-0 top-0 h-1 bg-brand-orange"
                  aria-hidden="true"
                />
                <p className="font-display text-xs tabular-nums text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-brand-navy group-hover:text-brand-teal sm:text-xl">
                  {group.label}
                </h3>
                <p className="mt-2 text-sm text-brand-navy/65">
                  {serviceBlurb[group.id] ??
                    `${group.items.length} ${group.items.length === 1 ? "piece" : "pieces"}`}
                </p>
                <p className="mt-4 font-display text-xs text-brand-navy/45">
                  <span className="tabular-nums text-brand-navy">
                    {group.items.length}
                  </span>{" "}
                  {group.items.length === 1 ? "service" : "services"}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="home-rise mt-8">
          <ButtonLink href="/services" variant="secondary" size="large">
            {homePage.servicesAction}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function HomeApproach() {
  return (
    <section
      id="approach-heading"
      aria-labelledby="approach-title"
      className="relative isolate overflow-x-clip bg-paper py-14 sm:py-16 lg:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-dots absolute inset-0 opacity-[0.12]" />
      </div>

      <Container className="relative">
        <header className="home-rise max-w-2xl">
          <span
            className="gallery-stamp mb-4 inline-block rotate-[-6deg] border border-brand-orange/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
            aria-hidden="true"
          >
            {homePage.approachStamp}
          </span>
          <h2
            id="approach-title"
            className="scroll-mt-28 font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl"
          >
            {homePage.approachTitle}
          </h2>
          <p className="mt-3 max-w-lg font-serif text-xl leading-snug text-brand-navy/75 sm:text-2xl">
            {homePage.approachLede}
          </p>
        </header>

        <ul className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
          {approachPillars.map((pillar, index) => (
            <li
              key={pillar.id}
              className="home-rise"
              style={{ animationDelay: `${60 + index * 50}ms` }}
              title={pillar.summary}
            >
              <span
                className={cn(
                  "gallery-stamp inline-block border border-brand-navy/15 bg-wash-green/80 px-3.5 py-2 font-display text-sm font-medium text-brand-navy sm:text-base",
                  index % 2 === 0 ? "-rotate-1" : "rotate-1",
                )}
              >
                {pillar.name}
              </span>
            </li>
          ))}
        </ul>

        <p className="home-rise mt-8">
          <Link
            href={homePage.approachAction.href}
            className="font-display text-sm font-medium text-brand-navy underline decoration-brand-orange/70 underline-offset-4 hover:text-brand-teal"
          >
            {homePage.approachAction.label}
          </Link>
        </p>
      </Container>
    </section>
  );
}

function HomeClosing({ photo }: { photo?: GalleryItem }) {
  return (
    <section
      aria-labelledby="home-closing-heading"
      className="relative isolate overflow-hidden bg-wash-orange"
    >
      <div className="h-1 bg-brand-orange" aria-hidden="true" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-dots absolute inset-0 opacity-[0.22]" />
        <span className="absolute top-14 left-[8%] size-2.5 rotate-12 bg-brand-navy/25" />
        <span className="absolute top-24 right-[18%] size-9 rotate-6 rounded-full border border-dashed border-brand-navy/20" />
        <span className="absolute bottom-16 left-[14%] size-3 rounded-full border border-brand-green/40" />
        <span className="absolute right-[10%] bottom-20 hidden size-2 bg-brand-orange sm:block" />
      </div>

      <Container className="relative py-12 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(10rem,0.75fr)] lg:gap-14">
          <div className="home-rise max-w-xl">
            <span
              className="gallery-stamp mb-4 inline-block rotate-[-5deg] border border-brand-navy/25 bg-paper px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-navy uppercase"
              aria-hidden="true"
            >
              {homePage.closingStamp}
            </span>

            <h2
              id="home-closing-heading"
              className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
            >
              <span className="block">{homePage.closingTitleLead}</span>
              <span className="gallery-punch relative mt-1 inline-block -rotate-1 font-medium">
                {homePage.closingTitlePunch}
                <svg
                  className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-brand-orange sm:h-3.5"
                  viewBox="0 0 120 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 6c10-4 20 3 32-1 14-5 24 4 38 0 12-3 22-1 34 2"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-4 max-w-md font-serif text-xl leading-snug text-brand-navy/75 sm:text-2xl">
              {homePage.closingLede}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ButtonLink
                href={homePage.closingPrimary.href}
                variant="primary"
                size="large"
                className="-rotate-1 motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5 hover:rotate-0"
              >
                {homePage.closingPrimary.label}
              </ButtonLink>
              <Link
                href={homePage.closingSecondary.href}
                className="font-display text-sm font-medium text-brand-navy/70 underline decoration-brand-orange/70 underline-offset-4 hover:text-brand-navy"
              >
                {homePage.closingSecondary.label}
              </Link>
            </div>
          </div>

          {photo ? (
            <div
              aria-hidden="true"
              className="gallery-rise relative mx-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:mx-0 lg:max-w-[24rem] lg:justify-self-end"
              style={{ animationDelay: "90ms" }}
            >
              <div className="relative rotate-1 sm:rotate-2">
                <div className="absolute inset-3 -translate-x-2 translate-y-2 -rotate-3 bg-wash-teal/70" />
                <span className="gallery-stamp absolute -top-3 left-1/2 z-20 -translate-x-1/2 rotate-[-6deg] border border-brand-navy/30 bg-paper px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-navy uppercase sm:text-[0.65rem]">
                  {homePage.closingPhotoStamp}
                </span>
                <div className="gallery-polaroid relative border border-brand-navy/10 bg-paper p-2 pb-5 shadow-[0_16px_36px_rgb(49_65_114/0.18)] sm:p-2.5 sm:pb-6">
                  <span className="gallery-tape absolute -top-1.5 left-[20%] z-10 -rotate-6" />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 34vw, 80vw"
                      className="aspect-[4/3] h-auto w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
