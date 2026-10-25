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
};

export function CallToAction({
  title,
  description,
  action,
  decorated = false,
}: CallToActionProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {decorated ? (
        <>
          <div className="h-1 bg-brand-orange" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand-teal/35"
            aria-hidden="true"
          />
        </>
      ) : null}
      <Container className={cn("relative py-14 sm:py-16", decorated && "sm:py-20")}>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white sm:text-lg">
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
