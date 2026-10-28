import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

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
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <Container className="relative py-14 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
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
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <div className="h-1 bg-brand-orange" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-teal/30 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brand-teal/40"
      />
      <div
        aria-hidden="true"
        className="home-dots pointer-events-none absolute top-10 right-8 hidden h-28 w-36 opacity-30 sm:block"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, white 55%, transparent) 1.15px, transparent 1.15px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[8%] hidden h-44 w-44 -translate-y-1/2 rounded-full border border-white/15 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[42%] right-[14%] hidden h-28 w-28 -translate-y-1/2 rounded-full border border-brand-orange/45 lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] bottom-16 hidden size-3 bg-brand-orange lg:block"
      />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <div className="home-rise max-w-2xl">
            <span
              className="home-draw mb-4 block h-1 w-12 bg-brand-orange"
              aria-hidden="true"
            />
            <p className="font-display text-xs font-medium tracking-[0.18em] text-white/70 uppercase">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-4 max-w-xl font-serif text-xl leading-relaxed text-white/85 sm:text-2xl">
              {description}
            </p>
          </div>

          <div
            className="home-rise relative"
            style={{ animationDelay: "90ms" }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 shadow-soft backdrop-blur-sm sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 -right-8 size-28 rounded-full bg-brand-orange/15"
              />
              <p className="max-w-xs text-sm leading-relaxed text-white/75">
                Organisations, schools, NGOs, and community groups — tell us what
                your team needs.
              </p>
              {action ? (
                <ButtonLink
                  href={action.href}
                  variant="inverse"
                  size="large"
                  className={cn("mt-6 w-full sm:w-auto")}
                >
                  {action.label}
                  <ArrowRight aria-hidden="true" className="ml-2 size-4" />
                </ButtonLink>
              ) : null}
              <p className="mt-4 text-xs tracking-wide text-white/55">
                We will reply with a clear next step.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
