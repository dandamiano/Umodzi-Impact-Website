import { GalleryImage } from "@/components/ui/GalleryImage";
import { GalleryWall } from "@/components/ui/GalleryWall";
import { Container } from "@/components/ui/Container";
import { galleryPage } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { FeaturedPhoto, GalleryItem } from "@/types/content";

const HERO_TILTS = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "-rotate-1"] as const;

type GalleryScrapbookProps = {
  collage: readonly GalleryItem[];
  spotlight: readonly FeaturedPhoto[];
  wall: readonly GalleryItem[];
};

export function GalleryScrapbook({
  collage,
  spotlight,
  wall,
}: GalleryScrapbookProps) {
  const heroPhotos = collage.slice(0, 5);
  const sideStack = heroPhotos.slice(0, 3);
  const railPhotos = heroPhotos;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,color-mix(in_srgb,var(--color-brand-teal)_50%,transparent),transparent_50%),radial-gradient(ellipse_at_95%_30%,color-mix(in_srgb,var(--color-brand-orange)_36%,transparent),transparent_42%)]" />
          <div className="home-dots absolute inset-0 opacity-20" />
          <span className="absolute top-[14%] right-[18%] size-2.5 rotate-12 bg-brand-orange/85" />
          <span className="absolute top-[22%] right-[28%] size-1.5 rounded-full bg-white/55" />
          <span className="absolute top-[36%] right-[10%] size-3.5 rounded-full border border-brand-orange/70" />
          <span className="absolute top-[48%] right-[22%] size-2 rotate-45 bg-white/35" />
          <span className="absolute top-[18%] left-[5%] hidden size-10 -rotate-12 border border-white/20 sm:block" />
          <span className="absolute right-[8%] bottom-[38%] hidden h-16 w-16 rotate-6 rounded-full border border-dashed border-brand-orange/40 lg:block" />
        </div>

        <Container className="relative pt-10 pb-2 sm:pt-12 lg:pt-14">
          <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(7.5rem,0.85fr)] items-start gap-3 sm:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] sm:items-end sm:gap-8 lg:gap-10 xl:gap-14">
            <header className="home-rise relative min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <p className="font-display text-[0.65rem] font-semibold tracking-[0.2em] text-brand-orange uppercase sm:text-xs sm:tracking-[0.22em]">
                  Umodzi Impact
                </p>
                <span
                  className="gallery-stamp rotate-[-8deg] border border-brand-orange/80 px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.16em] text-brand-orange uppercase sm:px-2.5 sm:py-1 sm:text-[0.65rem] sm:tracking-[0.18em]"
                  aria-hidden="true"
                >
                  {galleryPage.stamp}
                </span>
              </div>

              <h1 className="relative mt-3 w-fit font-display text-4xl font-medium tracking-tight text-white sm:mt-4 sm:text-6xl lg:text-[4.75rem] lg:leading-[0.92]">
                {galleryPage.title}
                <svg
                  className="gallery-scribble pointer-events-none absolute -right-2 -bottom-1 h-3 w-[72%] text-brand-orange sm:-right-5 sm:h-5"
                  viewBox="0 0 120 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8c18-6 36 4 54-2s34-3 52 3"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </h1>

              <p className="mt-4 max-w-xl font-serif text-2xl leading-snug text-white sm:mt-6 sm:text-3xl lg:text-[2.5rem] lg:leading-tight">
                <span className="text-white/85">{galleryPage.headlineLead} </span>
                <span className="gallery-punch relative inline-block -rotate-2 font-medium text-white">
                  {galleryPage.headlinePunch}
                  <svg
                    className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-brand-orange sm:h-3.5"
                    viewBox="0 0 160 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 6c12-4 24 3 38-1 16-5 28 4 44 0 14-3 28-2 42 2 12 3 22-1 34-2"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </p>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base lg:text-lg">
                {galleryPage.lede}
              </p>
            </header>

            {/* Fills the empty right side of the hero copy band on every breakpoint */}
            <div
              aria-hidden="true"
              className="gallery-rise relative h-[11.5rem] w-full sm:h-[19rem] lg:h-[22rem] xl:h-[24rem]"
            >
              {sideStack.map((photo, index) => {
                const placements = [
                  "left-0 top-[4%] w-[78%] -rotate-6 sm:left-[4%] sm:top-[8%] sm:w-[58%]",
                  "right-0 top-[22%] w-[72%] rotate-3 sm:right-[2%] sm:top-[18%] sm:w-[54%]",
                  "left-[8%] bottom-[-6%] hidden w-[70%] -rotate-2 sm:block sm:left-[18%] sm:bottom-[-4%] sm:w-[62%]",
                ] as const;
                return (
                  <div
                    key={photo.src}
                    className={cn(
                      "gallery-polaroid absolute bg-paper p-1 pb-3 shadow-[0_14px_32px_rgb(0_0_0/0.35)] sm:p-1.5 sm:pb-5",
                      placements[index],
                    )}
                    style={{ zIndex: index + 1 }}
                  >
                    <span
                      className={cn(
                        "gallery-tape absolute -top-1 z-10 scale-75 sm:scale-100",
                        index % 2 === 0 ? "left-2 -rotate-6" : "right-2 rotate-6",
                      )}
                    />
                    <div className="overflow-hidden bg-mist">
                      <GalleryImage
                        image={photo}
                        priority
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 38vw"
                        className="aspect-[4/5] h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
              <span className="absolute top-1 right-1 size-2 rotate-12 bg-brand-orange sm:top-2 sm:right-6 sm:size-2.5" />
              <span className="absolute bottom-4 left-0 size-2.5 rounded-full border-2 border-white/50 sm:bottom-8 sm:left-2 sm:size-3" />
            </div>
          </div>
        </Container>

        <div className="relative mt-4 sm:mt-6">
          <ul className="flex min-h-[10rem] items-end gap-0 overflow-hidden px-1 pb-0 sm:min-h-[12rem] sm:px-3 lg:min-h-[14rem] lg:px-5">
            {railPhotos.map((photo, index) => {
              const isTall = index % 2 === 1;
              return (
                <li
                  key={`rail-${photo.src}`}
                  className={cn(
                    "gallery-rise relative min-w-0 flex-1",
                    index >= 2 && "max-sm:hidden",
                    index > 0 && "-ml-4 sm:-ml-6 lg:-ml-8",
                    isTall ? "mb-0 translate-y-1" : "mb-3 sm:mb-4",
                  )}
                  style={{
                    animationDelay: `${100 + index * 60}ms`,
                    zIndex: isTall ? 5 : index + 1,
                  }}
                >
                  <div
                    className={cn(
                      "gallery-polaroid bg-paper p-1 pb-4 shadow-[0_16px_36px_rgb(0_0_0/0.3)] sm:p-1.5 sm:pb-5",
                      HERO_TILTS[index % HERO_TILTS.length],
                    )}
                  >
                    <span
                      className={cn(
                        "gallery-tape absolute -top-1 z-10",
                        index % 2 === 0 ? "left-3 -rotate-6" : "right-3 rotate-6",
                      )}
                    />
                    <div className="relative overflow-hidden bg-mist">
                      <GalleryImage
                        image={photo}
                        priority={index < 2}
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 26vw, 45vw"
                        className={cn(
                          "home-settle h-auto w-full object-cover",
                          isTall ? "aspect-[3/4]" : "aspect-[4/5]",
                        )}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Tear matches the next section wash so the join feels continuous */}
          <svg
            className="gallery-tear relative z-20 -mb-px block w-full text-wash-orange"
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M0 22c40 14 80-10 120 2s80 16 120 4 80-16 120-4 80 16 120 4 80-14 120-2 80 14 120 2 80-12 120 0 80 16 120 4 80-16 120-4 80 10 120 0v22H0z"
            />
          </svg>
        </div>
      </section>

      {spotlight.length > 0 ? (
        <section
          id="gallery-spotlight"
          aria-labelledby="gallery-spotlight-heading"
          className="relative -mt-px overflow-hidden bg-wash-orange pt-10 pb-14 sm:pt-12 sm:pb-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="home-dots absolute inset-0 opacity-[0.28]" />
            <span className="absolute top-16 right-[8%] size-3 rotate-12 bg-brand-orange/70" />
            <span className="absolute top-28 left-[6%] size-8 -rotate-6 rounded-full border border-brand-green/25" />
            <span className="absolute right-[18%] bottom-20 size-2 rounded-full bg-brand-teal/50" />
            <span className="absolute bottom-24 left-[12%] size-4 rotate-12 bg-brand-green/25" />
          </div>

          <Container className="relative">
            <header className="home-rise relative max-w-2xl">
              <span
                className="gallery-stamp mb-4 inline-block rotate-[-6deg] border border-brand-orange/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
                aria-hidden="true"
              >
                Top picks
              </span>
              <h2
                id="gallery-spotlight-heading"
                className="relative w-fit font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem]"
              >
                {galleryPage.spotlightTitle}
                <svg
                  className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-3 w-[85%] text-brand-orange"
                  viewBox="0 0 200 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6c20-4 40 3 60-1s40-3 60 2 40 1 58-2"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
              <p className="mt-4 max-w-lg font-serif text-xl leading-snug text-brand-navy/80 sm:text-2xl">
                {galleryPage.spotlightLede}
              </p>
            </header>

            <GalleryWall
              images={spotlight}
              sectionId="gallery-spotlight"
              layout="spotlight"
              showCaptions
            />
          </Container>
        </section>
      ) : null}

      <section
        id="gallery-wall"
        aria-labelledby="gallery-wall-heading"
        className="relative scroll-mt-24 overflow-hidden bg-wash-teal py-14 sm:py-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <span className="absolute top-12 left-[10%] size-2 rotate-12 bg-brand-orange/60" />
          <span className="absolute top-24 right-[12%] size-10 rotate-6 rounded-full border border-dashed border-brand-teal/30" />
          <span className="absolute bottom-16 left-[20%] size-3 rounded-full border border-brand-green/40" />
          <span className="absolute top-1/2 right-[6%] size-3 rotate-45 bg-brand-orange/35" />
        </div>

        <Container className="relative">
          <header className="home-rise relative max-w-2xl">
            <span
              className="gallery-stamp mb-4 inline-block rotate-[5deg] border border-brand-navy/30 bg-paper px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-navy uppercase"
              aria-hidden="true"
            >
              Keep flipping
            </span>
            <h2
              id="gallery-wall-heading"
              className="relative w-fit font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem]"
            >
              {galleryPage.wallTitle}
              <svg
                className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-3 w-[70%] text-brand-orange"
                viewBox="0 0 220 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7c24-5 48 3 72-1 26-4 50 4 74 0 22-3 44-2 68 2"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-navy/75 sm:text-lg">
              {galleryPage.wallLede}
            </p>
          </header>

          <GalleryWall images={wall} sectionId="gallery-wall" />
        </Container>
      </section>
    </>
  );
}
