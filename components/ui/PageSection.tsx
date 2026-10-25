import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type PageSectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  labelledBy?: string;
};

export function PageSection({
  children,
  id,
  className,
  labelledBy,
}: PageSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-16 sm:py-20", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
