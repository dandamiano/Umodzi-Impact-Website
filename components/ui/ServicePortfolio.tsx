import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { ServicePackagesBridge } from "@/components/ui/ServicePackagesBridge";
import { ServicePathwayNav } from "@/components/ui/ServicePathwayNav";
import { ServicePathways } from "@/components/ui/ServicePathways";
import type { ServiceGroup } from "@/data/services";
import { servicesPage } from "@/lib/constants";
import type { GalleryItem } from "@/types/content";

type ServicePortfolioProps = {
  groups: readonly ServiceGroup[];
  heroPhoto?: GalleryItem;
  supportPhoto?: GalleryItem;
  closingPhoto?: GalleryItem;
  packagesHref?: string;
};

export function ServicePortfolio({
  groups,
  heroPhoto,
  supportPhoto,
  closingPhoto,
  packagesHref = "/packages",
}: ServicePortfolioProps) {
  return (
    <>
      <ServicesHero photo={heroPhoto} support={supportPhoto} />

      <section
        id="pathways"
        aria-labelledby="services-pathways-heading"
        className="relative z-0 -mt-px overflow-x-clip bg-paper pt-20 pb-14 sm:pt-24 sm:pb-16"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="home-dots absolute inset-0 opacity-[0.14]" />
          <span className="absolute top-16 right-[12%] size-2.5 rotate-12 bg-brand-orange/55" />
          <span className="absolute bottom-28 left-[8%] size-8 -rotate-6 rounded-full border border-brand-teal/20" />
          <span className="absolute top-[40%] left-[6%] hidden size-2 rounded-full bg-brand-green/35 sm:block" />
        </div>

        <Container className="relative">
          <header className="home-rise max-w-2xl">
            <span
              className="gallery-stamp mb-4 inline-block rotate-[-6deg] border border-brand-orange/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
              aria-hidden="true"
            >
              {servicesPage.pathwayStamp}
            </span>
            <h2
              id="services-pathways-heading"
              className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl"
            >
              {servicesPage.pathwayTitle}
            </h2>
            <p className="mt-3 max-w-lg font-serif text-xl leading-snug text-brand-navy/75 sm:text-2xl">
              {servicesPage.pathwayLede}
            </p>
          </header>

          <ServicePathwayNav groups={groups} />

          <div className="mt-10 sm:mt-12">
            <ServicePathways groups={groups} />
          </div>

          <ServicePackagesBridge href={packagesHref} />
        </Container>
      </section>

      <ServicesClosing photo={closingPhoto ?? heroPhoto} />
    </>
  );
}

function ServicesHero({
  photo,
  support,
}: {
  photo?: GalleryItem;
  support?: GalleryItem;
}) {
  return (
    <section className="motion-enter relative z-20 isolate overflow-visible bg-brand-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_14%_0%,color-mix(in_srgb,var(--color-brand-teal)_46%,transparent),transparent_52%),radial-gradient(ellipse_at_90%_40%,color-mix(in_srgb,var(--color-brand-orange)_32%,transparent),transparent_48%)]" />
        <div className="home-dots absolute inset-0 opacity-20" />
        <span className="absolute top-[18%] right-[12%] size-2 rotate-12 bg-brand-orange/85" />
        <span className="absolute top-[34%] right-[22%] size-1.5 rounded-full bg-white/55" />
        <span className="absolute top-[22%] left-[5%] hidden size-9 -rotate-12 border border-white/20 sm:block" />
      </div>

      <Container className="relative z-40 pt-12 pb-5 sm:pt-14 sm:pb-6 lg:pt-16 lg:pb-7">
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-[minmax(0,1.05fr)_minmax(16rem,1fr)] sm:items-center sm:gap-5 lg:gap-8">
          <header className="home-rise relative order-1 min-w-0 sm:pt-2 lg:pt-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <p className="font-display text-[0.65rem] font-semibold tracking-[0.2em] text-brand-orange uppercase sm:text-xs sm:tracking-[0.22em]">
                {servicesPage.brandLabel}
              </p>
              <span
                className="gallery-stamp rotate-[-7deg] border border-brand-orange/80 px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.16em] text-brand-orange uppercase sm:px-2.5 sm:py-1 sm:text-[0.65rem]"
                aria-hidden="true"
              >
                {servicesPage.stamp}
              </span>
            </div>

            <h1 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-white sm:mt-4 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.02]">
              <span className="block text-white/88">
                {servicesPage.headlineLead}
              </span>
              <span className="gallery-punch relative mt-1 inline-block -rotate-1 font-medium text-white sm:mt-1.5">
                {servicesPage.headlinePunch}
                <svg
                  className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-brand-orange sm:h-3.5"
                  viewBox="0 0 200 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 6c14-4 28 3 44-1 18-5 34 4 52 0 16-3 32-2 48 2 14 3 26-1 40-2"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-4 max-w-md font-serif text-lg leading-snug text-white/88 sm:mt-5 sm:text-xl">
              {servicesPage.lede}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-7">
              <ButtonLink
                href={servicesPage.heroPrimary.href}
                variant="inverse"
                size="large"
                className="-rotate-1 motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5 hover:rotate-0"
              >
                {servicesPage.heroPrimary.label}
              </ButtonLink>
              <Link
                href={servicesPage.heroSecondary.href}
                className="font-display text-sm font-medium text-white/75 underline decoration-brand-orange/80 underline-offset-4 motion-safe:transition-colors hover:text-white"
              >
                {servicesPage.heroSecondary.label}
              </Link>
            </div>
          </header>

          {photo ? (
            <div
              aria-hidden="true"
              className="gallery-rise relative order-2 mx-auto mb-[-2.5rem] w-full max-w-[19rem] sm:mb-[-4.5rem] sm:max-w-[22rem] sm:justify-self-end lg:mb-[-5.5rem] lg:max-w-[26rem]"
            >
              <div className="relative -rotate-2 sm:translate-y-2 lg:translate-y-3">
                <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,var(--color-brand-teal)_40%,transparent),transparent_70%)] opacity-90" />
                <div className="absolute inset-3 translate-x-2.5 translate-y-2.5 rotate-[3deg] bg-wash-green/65" />

                <span className="gallery-stamp absolute -top-4 left-1/2 z-20 -translate-x-1/2 -rotate-3 border border-brand-orange/80 bg-brand-navy px-2.5 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-orange uppercase sm:-top-5 sm:text-[0.65rem]">
                  {servicesPage.photoStamp}
                </span>

                <div className="gallery-polaroid relative border border-white/70 bg-paper p-2 pb-5 shadow-[0_20px_44px_rgb(0_0_0/0.45)] sm:p-2.5 sm:pb-6">
                  <span className="gallery-tape absolute -top-1.5 left-[14%] z-10 -rotate-6" />
                  <span className="gallery-tape absolute -top-1 right-[12%] z-10 rotate-[9deg] scale-90 opacity-95" />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      priority
                      sizes="(min-width: 1024px) 26vw, (min-width: 640px) 36vw, 80vw"
                      className="aspect-[3/2] h-auto w-full object-cover object-[center_35%]"
                    />
                  </div>
                </div>

                <span className="absolute -right-2.5 top-[42%] size-2.5 rotate-12 bg-brand-orange/85" />
                <span className="absolute -bottom-1 left-[12%] size-2.5 rounded-full border border-white/55" />
              </div>
            </div>
          ) : null}
        </div>
      </Container>

      <div className="relative z-20 -mb-px" aria-hidden="true">
        <div className="absolute inset-x-0 bottom-0 h-2 bg-brand-orange" />

        <svg
          className="gallery-tear relative block h-10 w-full text-paper sm:h-12"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0 22c36 14 72-10 108 2s72 16 108 4 72-14 108-4 72 14 108 4 72-12 108-2 72 12 108 2 72-10 108 0 72 14 108 4 72-14 108-4 72 8 108 0v20H0z"
          />
        </svg>

        <div className="pointer-events-none absolute bottom-0 left-[12%] z-30 translate-y-[35%] sm:left-[18%] lg:left-[42%] lg:translate-y-[42%]">
          <div className="relative -rotate-2">
            <span className="gallery-tape absolute -top-1 left-1/2 z-10 h-2.5 w-10 -translate-x-1/2 rotate-[-4deg]" />
            <div className="relative border-2 border-brand-navy bg-paper px-3.5 py-2 shadow-[0_12px_28px_rgb(49_65_114/0.2)] sm:px-4 sm:py-2.5">
              <span className="absolute inset-1 border border-dashed border-brand-orange/55" />
              <p className="relative font-display text-[0.6rem] font-semibold tracking-[0.18em] text-brand-navy uppercase sm:text-[0.65rem]">
                {servicesPage.stamp}
              </p>
            </div>
            <span className="absolute -right-1.5 -bottom-1.5 size-2 rotate-12 bg-brand-orange" />
          </div>
        </div>
      </div>

      {support ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] bottom-0 z-50 w-[6.5rem] translate-y-[45%] sm:right-[10%] sm:w-[7.75rem] lg:right-[12%] lg:w-[8.5rem] lg:translate-y-[48%]"
        >
          <div className="gallery-polaroid relative rotate-3 border border-brand-navy/10 bg-paper p-1.5 pb-4 shadow-[0_16px_32px_rgb(0_0_0/0.28)] sm:p-2 sm:pb-5">
            <span className="gallery-tape absolute -top-1 left-2 z-10 -rotate-6 scale-90" />
            <span className="gallery-tape absolute -top-0.5 right-2 z-10 rotate-6 scale-75 opacity-90" />
            <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
              <GalleryImage
                image={support}
                sizes="(min-width: 1024px) 10vw, 22vw"
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ServicesClosing({ photo }: { photo?: GalleryItem }) {
  return (
    <section
      aria-labelledby="services-closing-heading"
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
              {servicesPage.closingStamp}
            </span>

            <h2
              id="services-closing-heading"
              className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
            >
              <span className="block">{servicesPage.closingTitleLead}</span>
              <span className="gallery-punch relative mt-1 inline-block -rotate-1 font-medium">
                {servicesPage.closingTitlePunch}
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
              {servicesPage.closingLede}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ButtonLink
                href={servicesPage.closingPrimary.href}
                variant="primary"
                size="large"
                className="-rotate-1 motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5 hover:rotate-0"
              >
                {servicesPage.closingPrimary.label}
              </ButtonLink>
              <Link
                href={servicesPage.closingSecondary.href}
                className="font-display text-sm font-medium text-brand-navy/70 underline decoration-brand-orange/70 underline-offset-4 motion-safe:transition-colors hover:text-brand-navy"
              >
                {servicesPage.closingSecondary.label}
              </Link>
            </div>
          </div>

          {photo ? (
            <div
              aria-hidden="true"
              className="gallery-rise relative mx-auto w-[12.5rem] sm:w-[14rem] lg:mx-0 lg:w-[15.5rem] lg:justify-self-end"
              style={{ animationDelay: "90ms" }}
            >
              <div className="relative rotate-2">
                <div className="absolute inset-3 -translate-x-2 translate-y-2 -rotate-3 bg-wash-teal/70" />

                <span className="gallery-stamp absolute -top-3 left-1/2 z-20 -translate-x-1/2 rotate-[-6deg] border border-brand-navy/30 bg-paper px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-navy uppercase sm:-top-4 sm:text-[0.65rem]">
                  {servicesPage.closingPhotoStamp}
                </span>

                <div className="gallery-polaroid relative border border-brand-navy/10 bg-paper p-2 pb-6 shadow-[0_16px_36px_rgb(49_65_114/0.18)] sm:p-2.5 sm:pb-7">
                  <span className="gallery-tape absolute -top-1.5 left-[20%] z-10 -rotate-6" />
                  <span className="gallery-tape absolute -top-1 right-[18%] z-10 rotate-[8deg] scale-90 opacity-90" />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 22vw, 50vw"
                      className="aspect-[4/5] h-auto w-full object-cover"
                    />
                  </div>
                </div>

                <span className="absolute -right-2 top-[38%] size-2.5 rotate-12 bg-brand-navy/70" />
                <span className="absolute -bottom-1 left-[14%] size-2 rounded-full border border-brand-navy/30" />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
