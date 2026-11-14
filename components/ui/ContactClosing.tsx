import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { contactPage } from "@/lib/constants";
import type { GalleryItem } from "@/types/content";
import Link from "next/link";

type ContactClosingProps = {
  photo?: GalleryItem;
};

export function ContactClosing({ photo }: ContactClosingProps) {
  return (
    <section
      aria-labelledby="contact-closing-heading"
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
              {contactPage.closingStamp}
            </span>

            <h2
              id="contact-closing-heading"
              className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
            >
              <span className="block">{contactPage.closingTitleLead}</span>
              <span className="gallery-punch relative mt-1 inline-block -rotate-1 font-medium">
                {contactPage.closingTitlePunch}
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
              {contactPage.closingLede}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ButtonLink
                href={contactPage.closingPrimary.href}
                variant="primary"
                size="large"
                className="motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5 hover:rotate-0 -rotate-1"
              >
                {contactPage.closingPrimary.label}
              </ButtonLink>
              <Link
                href={contactPage.closingSecondary.href}
                className="font-display text-sm font-medium text-brand-navy/70 underline decoration-brand-orange/70 underline-offset-4 motion-safe:transition-colors hover:text-brand-navy"
              >
                {contactPage.closingSecondary.label}
              </Link>
            </div>
          </div>

          {photo ? (
            <div
              aria-hidden="true"
              className="gallery-rise relative mx-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:mx-0 lg:max-w-[24rem] lg:justify-self-end"
              style={{ animationDelay: "90ms" }}
            >
              <div className="relative rotate-2">
                <div className="absolute inset-3 -translate-x-2 translate-y-2 -rotate-3 bg-wash-teal/70" />

                <span className="gallery-stamp absolute -top-3 left-1/2 z-20 -translate-x-1/2 rotate-[-6deg] border border-brand-navy/30 bg-paper px-2 py-0.5 font-display text-[0.55rem] font-semibold tracking-[0.14em] text-brand-navy uppercase sm:-top-4 sm:text-[0.65rem]">
                  {contactPage.closingPhotoStamp}
                </span>

                <div className="gallery-polaroid relative border border-brand-navy/10 bg-paper p-2 pb-6 shadow-[0_16px_36px_rgb(49_65_114/0.18)] sm:p-2.5 sm:pb-7">
                  <span className="gallery-tape absolute -top-1.5 left-[20%] z-10 -rotate-6" />
                  <span className="gallery-tape absolute -top-1 right-[18%] z-10 rotate-[8deg] scale-90 opacity-90" />
                  <div className="overflow-hidden bg-mist ring-1 ring-brand-navy/10">
                    <GalleryImage
                      image={photo}
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 34vw, 80vw"
                      className="aspect-[4/3] h-auto w-full object-cover"
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
