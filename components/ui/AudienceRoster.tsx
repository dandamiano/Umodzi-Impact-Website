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
  "-rotate-3",
  "rotate-2",
  "-rotate-1",
  "rotate-3",
  "-rotate-2",
  "rotate-1",
] as const;

export function AudienceRoster({ titleId, items, photo }: AudienceRosterProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby={titleId}
      className="relative z-0 -mt-px isolate overflow-x-clip bg-wash-green pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-dots absolute inset-0 opacity-[0.2]" />
        <span className="absolute top-16 right-[8%] size-3 rotate-12 bg-brand-orange/60" />
        <span className="absolute top-[42%] left-[4%] size-10 -rotate-12 rounded-full border-2 border-dashed border-brand-green/35" />
        <span className="absolute right-[18%] bottom-28 size-2 rotate-45 bg-brand-navy/25" />
        <span className="absolute bottom-16 left-[22%] hidden size-2.5 rounded-full border border-brand-orange/50 sm:block" />
        <svg
          className="absolute top-24 left-[12%] hidden h-8 w-28 -rotate-6 text-brand-orange/50 sm:block"
          viewBox="0 0 120 20"
          fill="none"
        >
          <path
            d="M2 14c18-8 36 6 54-2 16-7 30 4 46 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(10rem,0.75fr)] lg:gap-12">
          <div>
            <header className="home-rise max-w-2xl">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span
                  className="gallery-stamp rotate-[-8deg] border border-brand-orange/70 bg-paper px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
                  aria-hidden="true"
                >
                  {homePage.audienceStamp}
                </span>
                <span
                  className="gallery-stamp rotate-[6deg] border border-brand-navy/20 bg-wash-orange px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-navy uppercase"
                  aria-hidden="true"
                >
                  All welcome
                </span>
              </div>

              <h2
                id={titleId}
                className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
              >
                <span className="block">{homePage.audienceTitleLead}</span>
                <span className="gallery-punch relative mt-1 inline-block -rotate-2 text-brand-teal">
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
              <p className="mt-4 max-w-lg font-serif text-xl leading-snug text-brand-navy/75 sm:text-2xl">
                {homePage.audienceLede}
              </p>
            </header>

            <ul className="mt-9 flex flex-wrap gap-3 sm:gap-3.5">
              {items.map((item, index) => (
                <li
                  key={item.label}
                  className="home-rise"
                  style={{ animationDelay: `${70 + index * 55}ms` }}
                >
                  <span
                    className={cn(
                      "gallery-stamp relative inline-block border-2 border-brand-navy/15 bg-paper px-3.5 py-2.5 font-display text-sm font-medium text-brand-navy shadow-[0_8px_18px_rgb(49_65_114/0.08)] sm:text-base",
                      "motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:rotate-0 motion-safe:hover:-translate-y-0.5",
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
                      aria-hidden="true"
                    />
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {photo ? (
            <div
              aria-hidden="true"
              className="gallery-rise relative mx-auto w-[11.5rem] sm:w-[13rem] lg:mx-0 lg:mt-6 lg:w-[14.5rem] lg:justify-self-end"
              style={{ animationDelay: "120ms" }}
            >
              <div className="relative rotate-[4deg]">
                <div className="absolute inset-3 -translate-x-2.5 translate-y-2.5 -rotate-3 bg-wash-orange/80" />
                <span className="gallery-stamp absolute -top-3 -left-2 z-20 rotate-[-12deg] border border-brand-orange/80 bg-paper px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.12em] text-brand-orange uppercase">
                  Field crew
                </span>
                <div className="gallery-polaroid relative border border-brand-navy/10 bg-paper p-2 pb-6 shadow-[0_16px_34px_rgb(49_65_114/0.16)] sm:p-2.5 sm:pb-7">
                  <span className="gallery-tape absolute -top-1.5 left-[22%] z-10 -rotate-7" />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      decorative
                      sizes="(min-width: 1024px) 16vw, 40vw"
                      className="aspect-[4/5] h-auto w-full object-cover"
                    />
                  </div>
                </div>
                <span className="absolute -right-2 top-[40%] size-2.5 rotate-12 bg-brand-orange" />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
