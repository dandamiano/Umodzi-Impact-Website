import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GalleryImage } from "@/components/ui/GalleryImage";
import type { CaseStudy } from "@/data/experiences";
import { experiencesPage } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types/content";

type ExperiencePortfolioProps = {
  studies: readonly CaseStudy[];
  themes: readonly string[];
  heroPhotos?: readonly GalleryItem[];
  closingPhoto?: GalleryItem;
};

export function ExperiencePortfolio({
  studies,
  themes,
  heroPhotos = [],
  closingPhoto,
}: ExperiencePortfolioProps) {
  const hasStudies = studies.length > 0;
  const heroPhoto = heroPhotos[0] ?? studies[0]?.photos?.lead;
  const heroSupport = heroPhotos[1];

  return (
    <>
      <ExperiencesHero photo={heroPhoto} support={heroSupport} />

      {hasStudies ? (
        <section
          aria-label="Published experiences"
          className="relative z-0 -mt-px overflow-x-clip bg-paper pt-16 pb-14 sm:pt-20 sm:pb-16"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="home-dots absolute inset-0 opacity-[0.14]" />
            <span className="absolute top-16 right-[12%] size-2.5 rotate-12 bg-brand-orange/55" />
            <span className="absolute bottom-24 left-[8%] size-8 -rotate-6 rounded-full border border-brand-teal/20" />
          </div>

          <Container className="relative">
            <ul className="space-y-16 sm:space-y-20">
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
              className="home-rise mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-brand-navy/10 pt-8"
              style={{ animationDelay: "160ms" }}
            >
              <Link
                href="/gallery"
                className="font-display text-sm font-medium text-brand-navy underline decoration-brand-orange/70 underline-offset-4 motion-safe:transition-colors hover:text-brand-teal"
              >
                {experiencesPage.bridgeGallery}
              </Link>
              <Link
                href="/packages"
                className="font-display text-sm font-medium text-brand-navy/65 underline-offset-4 motion-safe:transition-colors hover:text-brand-navy hover:underline"
              >
                {experiencesPage.bridgePackages}
              </Link>
            </div>
          </Container>
        </section>
      ) : (
        <ExperienceEmpty themes={themes} />
      )}

      <ExperiencesClosing photo={closingPhoto ?? heroPhoto} />
    </>
  );
}

function ExperiencesHero({
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
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-[minmax(0,1.1fr)_minmax(12rem,0.9fr)] sm:items-center sm:gap-4 lg:gap-8">
          <header className="home-rise relative order-1 min-w-0 sm:pt-2 lg:pt-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <p className="font-display text-[0.65rem] font-semibold tracking-[0.2em] text-brand-orange uppercase sm:text-xs sm:tracking-[0.22em]">
                {experiencesPage.brandLabel}
              </p>
              <span
                className="gallery-stamp rotate-[-7deg] border border-brand-orange/80 px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.16em] text-brand-orange uppercase sm:px-2.5 sm:py-1 sm:text-[0.65rem]"
                aria-hidden="true"
              >
                {experiencesPage.stamp}
              </span>
            </div>

            <h1 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-white sm:mt-4 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.02]">
              <span className="block text-white/88">
                {experiencesPage.headlineLead}
              </span>
              <span className="gallery-punch relative mt-1 inline-block -rotate-1 font-medium text-white sm:mt-1.5">
                {experiencesPage.headlinePunch}
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
              {experiencesPage.lede}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-8">
              <ButtonLink
                href={experiencesPage.heroPrimary.href}
                variant="inverse"
                size="large"
                className="-rotate-1 motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5 hover:rotate-0"
              >
                {experiencesPage.heroPrimary.label}
              </ButtonLink>
              <Link
                href={experiencesPage.heroSecondary.href}
                className="font-display text-sm font-medium text-white/80 underline decoration-brand-orange underline-offset-4 motion-safe:transition-colors hover:text-white"
              >
                {experiencesPage.heroSecondary.label}
              </Link>
            </div>
          </header>

          {photo ? (
            <div
              aria-hidden="true"
              className="gallery-rise relative order-2 mx-auto mb-[-3rem] w-[13.5rem] sm:mb-[-5.5rem] sm:w-[16rem] sm:justify-self-center lg:mb-[-7rem] lg:w-[17.5rem]"
            >
              <div className="relative -rotate-2 sm:translate-y-2 lg:translate-y-3">
                <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,var(--color-brand-teal)_40%,transparent),transparent_70%)] opacity-90" />
                <div className="absolute inset-3 translate-x-2.5 translate-y-2.5 rotate-[3deg] bg-wash-teal/65" />

                <span className="gallery-stamp absolute -top-4 left-1/2 z-20 -translate-x-1/2 -rotate-3 border border-brand-orange/80 bg-brand-navy px-2.5 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-orange uppercase sm:-top-5 sm:text-[0.65rem]">
                  {experiencesPage.photoStamp}
                </span>

                <div className="gallery-polaroid relative border border-white/70 bg-paper p-2.5 pb-7 shadow-[0_20px_44px_rgb(0_0_0/0.45)] sm:p-3 sm:pb-8">
                  <span className="gallery-tape absolute -top-1.5 left-[18%] z-10 -rotate-6" />
                  <span className="gallery-tape absolute -top-1 right-[16%] z-10 rotate-[9deg] scale-90 opacity-95" />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      priority
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 26vw, 54vw"
                      className="aspect-[4/5] h-auto w-full object-cover"
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

      {/* Tear sits under the main polaroid; crest + second photo sit above the tear */}
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
                Field stories
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

function ExperienceEmpty({ themes }: { themes: readonly string[] }) {
  return (
    <section className="relative z-0 -mt-px overflow-x-clip bg-wash-teal pt-14 pb-14 sm:pt-16 sm:pb-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-dots absolute inset-0 opacity-[0.2]" />
        <span className="absolute top-12 right-[14%] size-2.5 rotate-12 bg-brand-orange/60" />
      </div>

      <Container className="relative">
        <div className="home-rise max-w-2xl">
          <span
            className="gallery-stamp mb-4 inline-block rotate-[4deg] border border-brand-navy/20 bg-paper px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-navy uppercase"
            aria-hidden="true"
          >
            {experiencesPage.emptyStamp}
          </span>
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl">
            {experiencesPage.emptyTitle}
          </h2>
          <p className="mt-3 max-w-lg font-serif text-xl leading-snug text-brand-navy/75 sm:text-2xl">
            {experiencesPage.emptyLede}
          </p>

          <div className="mt-8">
            <p className="font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase">
              {experiencesPage.themesLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {themes.map((theme) => (
                <li
                  key={theme}
                  className="border-2 border-brand-navy/15 bg-paper px-3 py-1.5 font-display text-sm font-medium text-brand-navy"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/gallery"
              className="font-display text-sm font-medium text-brand-navy underline decoration-brand-orange/70 underline-offset-4"
            >
              {experiencesPage.bridgeGallery}
            </Link>
            <Link
              href="/packages"
              className="font-display text-sm font-medium text-brand-navy/65"
            >
              {experiencesPage.bridgePackages}
            </Link>
          </div>
        </div>
      </Container>
    </section>
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
    { label: "When", value: study.date },
    { label: "Where", value: study.location },
    { label: "Crew", value: study.participants },
  ] as const;

  const lead = study.photos?.lead;
  const supports = study.photos?.supports ?? [];
  const flip = index % 2 === 1;

  return (
    <article className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-14">
      <div className={cn(flip && "lg:order-2")}>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span
            className="gallery-stamp rotate-[-5deg] border border-brand-orange/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
            aria-hidden="true"
          >
            {experiencesPage.caseStamp}
          </span>
          <span className="font-display text-xs tabular-nums text-brand-navy/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h2 className="mt-4 max-w-lg font-display text-2xl font-medium tracking-tight text-brand-navy sm:text-3xl lg:text-[2.15rem] lg:leading-[1.12]">
          <span className="sr-only">{study.title}. </span>
          {study.shortTitle}
        </h2>

        <p className="mt-3 max-w-md font-serif text-xl leading-snug text-brand-navy/75 sm:text-[1.35rem]">
          {study.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {facts.map((fact) => (
            <li
              key={fact.label}
              className="border-2 border-brand-navy/10 bg-wash-teal/50 px-3 py-2"
            >
              <p className="font-display text-[0.65rem] font-semibold tracking-[0.14em] text-brand-navy/45 uppercase">
                {fact.label}
              </p>
              <p className="mt-0.5 font-display text-sm font-medium text-brand-navy">
                {fact.value}
              </p>
            </li>
          ))}
        </ul>

        {study.themes.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {study.themes.map((theme) => (
              <li
                key={theme}
                className="border border-brand-navy/12 bg-mist/80 px-2.5 py-1 font-display text-xs font-medium text-brand-navy/80"
              >
                {theme}
              </li>
            ))}
          </ul>
        ) : null}

        {study.feedback ? (
          <blockquote className="relative mt-8 max-w-md">
            <span
              className="gallery-stamp mb-3 inline-block rotate-[-4deg] border border-brand-navy/20 bg-wash-orange px-2 py-0.5 font-display text-[0.6rem] font-semibold tracking-[0.14em] text-brand-navy uppercase"
              aria-hidden="true"
            >
              Field feedback
            </span>
            <p className="font-serif text-xl leading-snug text-brand-navy/80 sm:text-[1.3rem]">
              {study.feedback}
            </p>
          </blockquote>
        ) : null}
      </div>

      {lead ? (
        <div className={cn("relative min-w-0", flip && "lg:order-1")}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-4 translate-x-2 translate-y-2 rotate-2 bg-wash-teal/55" />

            <div className="gallery-polaroid relative -rotate-1 border border-brand-navy/10 bg-paper p-2.5 pb-6 shadow-[0_16px_36px_rgb(49_65_114/0.16)] sm:p-3 sm:pb-7">
              <span className="gallery-tape absolute -top-1.5 left-[16%] z-10 -rotate-6" />
              <span className="gallery-tape absolute -top-1 right-[14%] z-10 rotate-[8deg] scale-90" />
              <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                <GalleryImage
                  image={lead}
                  priority={index === 0}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="aspect-[16/10] h-auto w-full object-cover object-[center_35%]"
                />
              </div>
            </div>

            {supports.length > 0 ? (
              <ul className="relative z-10 mt-[-0.75rem] flex justify-center gap-3 px-2 sm:mt-[-1rem] sm:gap-4">
                {supports.slice(0, 3).map((support, supportIndex) => (
                  <li
                    key={support.src}
                    className={cn(
                      "gallery-polaroid w-[30%] border border-brand-navy/10 bg-paper p-1.5 pb-3 shadow-soft sm:p-2 sm:pb-4",
                      supportIndex === 0 && "-rotate-3",
                      supportIndex === 1 && "rotate-1 translate-y-1",
                      supportIndex === 2 && "rotate-3",
                    )}
                  >
                    <span
                      className={cn(
                        "gallery-tape absolute -top-1 z-10 scale-75",
                        supportIndex % 2 === 0 ? "left-1 -rotate-6" : "right-1 rotate-6",
                      )}
                    />
                    <div className="overflow-hidden bg-mist">
                      <GalleryImage
                        image={support}
                        sizes="(min-width: 1024px) 12vw, 28vw"
                        className="aspect-[4/3] h-auto w-full object-cover"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <p className="mt-5 text-center font-display text-xs tracking-wide text-brand-navy/45 lg:text-left">
            Field photography ·{" "}
            <Link
              href="/gallery"
              className="underline-offset-2 hover:text-brand-teal hover:underline"
            >
              View gallery
            </Link>
          </p>
        </div>
      ) : null}
    </article>
  );
}

function ExperiencesClosing({ photo }: { photo?: GalleryItem }) {
  return (
    <section
      aria-labelledby="experiences-closing-heading"
      className="relative isolate overflow-hidden bg-wash-orange"
    >
      <div className="h-1 bg-brand-orange" aria-hidden="true" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-dots absolute inset-0 opacity-[0.22]" />
        <span className="absolute top-14 left-[8%] size-2.5 rotate-12 bg-brand-navy/25" />
        <span className="absolute top-24 right-[18%] size-9 rotate-6 rounded-full border border-dashed border-brand-navy/20" />
        <span className="absolute bottom-16 left-[14%] size-3 rounded-full border border-brand-green/40" />
      </div>

      <Container className="relative py-12 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(10rem,0.75fr)] lg:gap-14">
          <div className="home-rise max-w-xl">
            <span
              className="gallery-stamp mb-4 inline-block rotate-[-5deg] border border-brand-navy/25 bg-paper px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-navy uppercase"
              aria-hidden="true"
            >
              {experiencesPage.closingStamp}
            </span>

            <h2
              id="experiences-closing-heading"
              className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
            >
              <span className="block">{experiencesPage.closingTitleLead}</span>
              <span className="gallery-punch relative mt-1 inline-block -rotate-1 font-medium">
                {experiencesPage.closingTitlePunch}
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
              {experiencesPage.closingLede}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ButtonLink
                href={experiencesPage.closingPrimary.href}
                variant="primary"
                size="large"
                className="-rotate-1 motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5 hover:rotate-0"
              >
                {experiencesPage.closingPrimary.label}
              </ButtonLink>
              <Link
                href={experiencesPage.closingSecondary.href}
                className="font-display text-sm font-medium text-brand-navy/70 underline decoration-brand-orange/70 underline-offset-4 hover:text-brand-navy"
              >
                {experiencesPage.closingSecondary.label}
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
                <span className="gallery-stamp absolute -top-3 left-1/2 z-20 -translate-x-1/2 rotate-[-6deg] border border-brand-navy/30 bg-paper px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-navy uppercase sm:text-[0.65rem]">
                  {experiencesPage.closingPhotoStamp}
                </span>
                <div className="gallery-polaroid relative border border-brand-navy/10 bg-paper p-2 pb-6 shadow-[0_16px_36px_rgb(49_65_114/0.18)] sm:p-2.5 sm:pb-7">
                  <span className="gallery-tape absolute -top-1.5 left-[20%] z-10 -rotate-6" />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      sizes="(min-width: 1024px) 16vw, 50vw"
                      className="aspect-[4/5] h-auto w-full object-cover"
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
