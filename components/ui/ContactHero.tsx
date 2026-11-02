import { GalleryImage } from "@/components/ui/GalleryImage";
import { Container } from "@/components/ui/Container";
import { contactPage } from "@/lib/constants";
import type { GalleryItem } from "@/types/content";

type ContactHeroProps = {
  photos?: readonly GalleryItem[];
};

export function ContactHero({ photos = [] }: ContactHeroProps) {
  const photo = photos[0];

  return (
    <section className="relative z-20 isolate overflow-visible bg-brand-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,color-mix(in_srgb,var(--color-brand-teal)_48%,transparent),transparent_52%),radial-gradient(ellipse_at_88%_35%,color-mix(in_srgb,var(--color-brand-orange)_30%,transparent),transparent_48%)]" />
        <div className="home-dots absolute inset-0 opacity-20" />
        <span className="absolute top-[18%] right-[12%] size-2 rotate-12 bg-brand-orange/85" />
        <span className="absolute top-[34%] right-[22%] size-1.5 rounded-full bg-white/55" />
        <span className="absolute top-[22%] left-[5%] hidden size-9 -rotate-12 border border-white/20 sm:block" />
      </div>

      <Container className="relative z-10 pt-12 pb-5 sm:pt-14 sm:pb-6 lg:pt-16 lg:pb-7">
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-[minmax(0,1.05fr)_minmax(14rem,0.95fr)] sm:items-center sm:gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,1fr)] lg:gap-4 xl:gap-6">
          <header className="home-rise relative order-1 min-w-0 pb-0 sm:pb-2 sm:pt-2 lg:pt-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <p className="font-display text-[0.65rem] font-semibold tracking-[0.2em] text-brand-orange uppercase sm:text-xs sm:tracking-[0.22em]">
                {contactPage.brandLabel}
              </p>
              <span
                className="gallery-stamp rotate-[-7deg] border border-brand-orange/80 px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.16em] text-brand-orange uppercase sm:px-2.5 sm:py-1 sm:text-[0.65rem]"
                aria-hidden="true"
              >
                {contactPage.stamp}
              </span>
            </div>

            <h1 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight text-white sm:mt-4 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.02]">
              <span className="block text-white/88">{contactPage.headlineLead}</span>
              <span className="gallery-punch relative mt-1 inline-block -rotate-1 font-medium text-white sm:mt-1.5">
                {contactPage.headlinePunch}
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

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/78 sm:mt-5 sm:text-base">
              {contactPage.lede}
            </p>
          </header>

          {photo ? (
            <div
              aria-hidden="true"
              className="gallery-rise relative order-2 z-30 mx-auto mb-[-3.25rem] w-[14.5rem] sm:mb-[-6rem] sm:w-[17.5rem] sm:justify-self-center sm:-translate-x-2 lg:mb-[-7.5rem] lg:w-[19.5rem] lg:-translate-x-4 xl:w-[21rem] xl:-translate-x-6"
            >
              <div className="relative -rotate-2 sm:translate-y-3 lg:translate-y-4">
                {/* Soft backlight so the frame reads against navy */}
                <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,var(--color-brand-teal)_42%,transparent),transparent_70%)] opacity-90 sm:-inset-5" />

                {/* Offset scrapbook mat */}
                <div className="absolute inset-3 translate-x-2.5 translate-y-2.5 rotate-[3deg] bg-wash-teal/70 sm:inset-3.5 sm:translate-x-3 sm:translate-y-3" />
                <div className="absolute -left-2 top-[20%] bottom-[24%] w-[calc(100%+1rem)] -z-10 rotate-[5deg] border border-dashed border-white/25" />

                <span className="gallery-stamp absolute -top-4 left-1/2 z-20 -translate-x-1/2 -rotate-3 border border-brand-orange/80 bg-brand-navy px-2.5 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-orange uppercase sm:-top-5 sm:px-3 sm:text-[0.65rem]">
                  {contactPage.photoStamp}
                </span>

                <div className="gallery-polaroid relative border border-white/70 bg-paper p-2.5 pb-7 shadow-[0_20px_44px_rgb(0_0_0/0.45)] sm:p-3 sm:pb-8">
                  <span className="gallery-tape absolute -top-1.5 left-[18%] z-10 -rotate-6" />
                  <span className="gallery-tape absolute -top-1 right-[16%] z-10 rotate-[9deg] scale-90 opacity-95" />

                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      priority
                      sizes="(min-width: 1280px) 21vw, (min-width: 1024px) 20vw, (min-width: 640px) 28vw, 58vw"
                      className="aspect-[4/5] h-auto w-full object-cover"
                    />
                  </div>
                </div>

                <span className="absolute -right-2.5 top-[42%] size-2.5 rotate-12 bg-brand-orange/85 sm:-right-3 sm:size-3" />
                <span className="absolute -bottom-1 left-[12%] size-2.5 rounded-full border border-white/55" />
                <span className="absolute top-[12%] -left-2 size-1.5 rounded-full bg-white/50" />
              </div>
            </div>
          ) : null}
        </div>
      </Container>

      <svg
        className="gallery-tear relative z-20 -mb-px block w-full text-paper"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 18c40 12 80-8 120 2s80 14 120 3 80-14 120-3 80 14 120 3 80-12 120-2 80 12 120 2 80-10 120 0 80 14 120 3 80-14 120-3 80 8 120 0v18H0z"
        />
      </svg>
    </section>
  );
}
