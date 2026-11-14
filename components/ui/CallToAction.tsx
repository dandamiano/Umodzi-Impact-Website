import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type CallToActionProps = {
  title: string;
  description: string;
  action?: {
    href: string;
    label: string;
  };
  decorated?: boolean;
  eyebrow?: string;
};

export function CallToAction({
  title,
  description,
  action,
  decorated = false,
  eyebrow = "Next step",
}: CallToActionProps) {
  if (!decorated) {
    return (
      <section className="relative overflow-hidden bg-brand-orange text-white">
        <div aria-hidden="true" className="hero-energy-glow pointer-events-none absolute inset-0" />
        <Container className="relative py-14 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/92 sm:text-lg">
              {description}
            </p>
            {action ? (
              <ButtonLink href={action.href} variant="inverse" className="mt-8">
                {action.label}
              </ButtonLink>
            ) : null}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-brand-orange text-white">
      <div className="h-1 bg-brand-navy/25" aria-hidden="true" />
      <div aria-hidden="true" className="hero-energy-glow pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="hero-energy-dots pointer-events-none absolute inset-0 opacity-[0.2]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/20 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#d97706]/55"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[8%] hidden h-44 w-44 -translate-y-1/2 rounded-full border border-white/25 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[42%] right-[14%] hidden h-28 w-28 -translate-y-1/2 rounded-full border border-brand-navy/25 lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] bottom-16 hidden size-3 bg-brand-navy/70 lg:block"
      />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="home-rise max-w-2xl">
          <span
            className="home-draw mb-4 block h-1 w-12 bg-brand-navy"
            aria-hidden="true"
          />
          <p className="font-display text-xs font-medium tracking-[0.18em] text-white/80 uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {title}
          </h2>
          <p className="mt-4 max-w-xl font-serif text-xl leading-relaxed text-white/92 sm:text-2xl">
            {description}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
            Organisations, schools, NGOs, and community groups — tell us what
            your team needs.
          </p>
          {action ? (
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ButtonLink
                href={action.href}
                variant="inverse"
                size="large"
                className="-rotate-1 motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5 hover:rotate-0"
              >
                {action.label}
                <ArrowRight aria-hidden="true" className="ml-2 size-4" />
              </ButtonLink>
              <p className="font-display text-xs tracking-wide text-white/70">
                We will reply with a clear next step.
              </p>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
