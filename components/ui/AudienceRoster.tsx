import { Container } from "@/components/ui/Container";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { homePage } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { AudienceItem } from "@/data/audiences";
import type { GalleryItem } from "@/types/content";

type AudienceRosterProps = {
  titleId: string;
  items: readonly AudienceItem[];
  photo?: GalleryItem;
};

const stampTilt = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-2",
  "rotate-1",
] as const;

export function AudienceRoster({ titleId, items, photo }: AudienceRosterProps) {
  if (items.length === 0) {
    return null;
  }

  const loopItems = [...items, ...items];

  return (
    <section
      aria-labelledby={titleId}
      className="relative z-0 -mt-px isolate overflow-x-clip bg-wash-green pt-10 pb-0 sm:pt-12 lg:pt-10 lg:pb-0"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="topo-map absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_8%_18%,color-mix(in_srgb,var(--color-brand-orange)_16%,transparent),transparent_40%),radial-gradient(ellipse_at_92%_12%,color-mix(in_srgb,var(--color-brand-teal)_14%,transparent),transparent_44%),radial-gradient(ellipse_at_70%_78%,color-mix(in_srgb,var(--color-brand-green)_18%,transparent),transparent_48%)]" />

        <span className="absolute top-14 right-[8%] size-3 rotate-12 bg-brand-orange/60" />
        <span className="absolute top-24 right-[18%] size-2 rounded-full bg-brand-navy/25" />
        <span className="absolute top-[42%] left-[4%] size-2.5 rotate-45 bg-brand-orange/50" />
        <span className="absolute top-[28%] left-[9%] hidden size-12 -rotate-[14deg] border-2 border-dashed border-brand-green/30 sm:block" />
        <span className="absolute right-[12%] bottom-[30%] hidden size-9 rotate-6 rounded-full border border-dashed border-brand-navy/20 lg:block" />
        <span className="absolute bottom-28 left-[16%] hidden size-2 rotate-12 bg-brand-green/40 sm:block" />

        <svg
          className="absolute top-[22%] right-[22%] hidden h-9 w-28 -rotate-6 text-brand-orange/45 lg:block"
          viewBox="0 0 140 24"
          fill="none"
        >
          <path
            d="M2 16c20-10 40 8 60-2 18-9 34 6 52 1 10-3 18-1 24 2"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
          />
        </svg>

        <span className="gallery-stamp absolute top-[48%] right-[6%] hidden rotate-[8deg] border border-brand-navy/20 bg-paper/80 px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-navy/55 uppercase xl:inline-block">
          Bring a friend
        </span>
        <span className="gallery-tape absolute top-[18%] left-[22%] hidden h-2.5 w-10 -rotate-12 opacity-70 sm:block" />
      </div>

      <Container className="relative">
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(14rem,0.85fr)] lg:items-center lg:gap-4 xl:gap-5">
          <div className="min-w-0 pb-8 lg:pb-10">
            <header className="home-rise max-w-2xl">
              <div className="mb-2 flex flex-wrap items-center gap-2 lg:mb-1.5">
                <span
                  className="gallery-stamp rotate-[-6deg] border border-brand-orange/70 bg-paper px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
                  aria-hidden="true"
                >
                  {homePage.audienceStamp}
                </span>
                <span
                  className="gallery-stamp rotate-[5deg] border border-brand-navy/20 bg-wash-orange px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-navy uppercase"
                  aria-hidden="true"
                >
                  All welcome
                </span>
              </div>

              <h2
                id={titleId}
                className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl lg:text-[2.45rem] lg:leading-[1.08]"
              >
                <span className="block">{homePage.audienceTitleLead}</span>
                <span className="gallery-punch relative mt-1 inline-block -rotate-1 text-brand-teal lg:mt-0.5">
                  {homePage.audienceTitlePunch}
                  <svg
                    className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-2.5 w-full text-brand-orange sm:h-3"
                    viewBox="0 0 140 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 6c12-4 24 3 38-1 16-5 28 4 42 0 12-3 22-1 34 2"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="mt-2 max-w-lg font-serif text-xl leading-snug text-brand-navy/75 sm:text-2xl lg:mt-1.5 lg:text-xl">
                {homePage.audienceLede}
              </p>
            </header>

            <ul className="sr-only">
              {items.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>

            <div
              className="audience-marquee mt-4 sm:mt-5 lg:mt-3"
              aria-hidden="true"
            >
              <div className="audience-marquee-track">
                {loopItems.map((item, index) => (
                  <span
                    key={`${item.label}-${index}`}
                    className={cn(
                      "gallery-stamp relative inline-flex shrink-0 items-center border-2 border-brand-navy/15 bg-paper px-3.5 py-2.5 font-display text-sm font-medium text-brand-navy shadow-[0_8px_18px_rgb(49_65_114/0.08)] sm:text-base",
                      stampTilt[index % stampTilt.length],
                    )}
                  >
                    <span
                      className={cn(
                        "gallery-tape absolute -top-1 z-10 h-2 w-8",
                        index % 2 === 0
                          ? "left-3 -rotate-6"
                          : "right-3 rotate-6",
                      )}
                    />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {photo ? (
            <div
              aria-hidden="true"
              className="gallery-rise relative -mx-4 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:mx-0 lg:w-full lg:max-w-none lg:justify-self-end"
            >
              {/* Mobile / tablet: landscape band at bottom */}
              <div className="relative lg:hidden">
                <span className="gallery-stamp absolute top-3 left-6 z-20 rotate-[-8deg] border border-brand-orange/80 bg-paper px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.12em] text-brand-orange uppercase">
                  Field crew
                </span>
                <div className="gallery-polaroid relative border-y border-brand-navy/10 bg-paper p-2 pb-4 shadow-[0_12px_28px_rgb(49_65_114/0.14)] sm:p-2.5 sm:pb-5">
                  <span className="gallery-tape absolute -top-1 left-[18%] z-10 -rotate-6" />
                  <span className="gallery-tape absolute -top-1 right-[16%] z-10 rotate-8 scale-90" />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      decorative
                      sizes="100vw"
                      className="aspect-[16/9] h-auto w-full object-cover object-[center_30%]"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop: larger portrait polaroid on the right */}
              <div className="relative mx-auto hidden w-full max-w-[17.5rem] rotate-[2deg] lg:block xl:max-w-[19rem]">
                <div className="absolute inset-3 -translate-x-2 translate-y-2 -rotate-2 bg-brand-green/20" />
                <span className="gallery-stamp absolute -top-2 -left-1 z-20 rotate-[-8deg] border border-brand-orange/80 bg-paper px-2.5 py-0.5 font-display text-[0.6rem] font-semibold tracking-[0.12em] text-brand-orange uppercase">
                  Field crew
                </span>
                <div className="gallery-polaroid relative border border-brand-navy/10 bg-paper p-2 pb-5 shadow-[0_18px_40px_rgb(49_65_114/0.18)]">
                  <span className="gallery-tape absolute -top-1.5 left-[20%] z-10 -rotate-7" />
                  <span className="gallery-tape absolute -top-1 right-[18%] z-10 rotate-8 scale-90" />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      decorative
                      sizes="(min-width: 1280px) 18vw, 22vw"
                      className="aspect-[4/5] h-auto w-full object-cover"
                    />
                  </div>
                </div>
                <span className="absolute -right-2 top-[42%] size-2.5 rotate-12 bg-brand-orange" />
              </div>
            </div>
          ) : null}
        </div>
      </Container>

    </section>
  );
}
