import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { notFoundPage } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="motion-enter relative isolate overflow-hidden bg-wash-orange">
      <div className="h-1 bg-brand-orange" aria-hidden="true" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-dots absolute inset-0 opacity-[0.22]" />
        <span className="absolute top-16 left-[10%] size-2.5 rotate-12 bg-brand-navy/25" />
        <span className="absolute top-28 right-[16%] size-10 rotate-6 rounded-full border border-dashed border-brand-navy/20" />
        <span className="absolute bottom-20 left-[18%] size-3 rounded-full border border-brand-green/40" />
        <span className="absolute right-[12%] bottom-28 size-2 bg-brand-orange" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="home-rise max-w-xl">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <p className="font-display text-[0.65rem] font-semibold tracking-[0.2em] text-brand-orange uppercase sm:text-xs sm:tracking-[0.22em]">
              {notFoundPage.brandLabel}
            </p>
            <span
              className="gallery-stamp rotate-[-8deg] border border-brand-navy/25 bg-paper px-2.5 py-1 font-display text-[0.55rem] font-semibold tracking-[0.16em] text-brand-navy uppercase sm:text-[0.65rem]"
              aria-hidden="true"
            >
              {notFoundPage.stamp}
            </span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-brand-navy sm:mt-5 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.02]">
            <span className="block">{notFoundPage.headlineLead}</span>
            <span className="gallery-punch relative mt-1 inline-block -rotate-2 font-medium text-brand-navy sm:mt-1.5">
              {notFoundPage.headlinePunch}
              <svg
                className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-3 w-full text-brand-orange sm:h-4"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 8c16-5 32 4 50-1 20-6 38 5 58 0 18-4 34-2 52 2 16 3 30-2 38-1"
                  stroke="currentColor"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-5 max-w-md font-serif text-xl leading-snug text-brand-navy/75 sm:mt-6 sm:text-2xl">
            {notFoundPage.lede}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ButtonLink
              href={notFoundPage.primary.href}
              variant="primary"
              size="large"
              className="-rotate-1 motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5 hover:rotate-0"
            >
              {notFoundPage.primary.label}
            </ButtonLink>
            <Link
              href={notFoundPage.secondary.href}
              className="font-display text-sm font-medium text-brand-navy/70 underline decoration-brand-orange/70 underline-offset-4 hover:text-brand-navy"
            >
              {notFoundPage.secondary.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
