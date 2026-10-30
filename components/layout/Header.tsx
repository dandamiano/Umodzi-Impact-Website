import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { PrimaryNavigation } from "@/components/layout/PrimaryNavigation";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-navy/10 bg-paper">
      <div className="h-1 bg-brand-orange" aria-hidden="true" />
      <Container className="relative z-50 flex items-center justify-between gap-6 py-3.5 sm:py-4">
        <SiteLogo priority />
        <div className="hidden md:block">
          <PrimaryNavigation />
        </div>
        <MobileNavigation />
      </Container>
    </header>
  );
}
