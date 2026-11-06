import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { PrimaryNavigation } from "@/components/layout/PrimaryNavigation";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { TopBar } from "@/components/layout/TopBar";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-navy/10 bg-paper">
      <TopBar />
      <div className="h-1 bg-brand-orange" aria-hidden="true" />

      {/* Slim app bar; logo hangs below the bottom border only. */}
      <div className="relative overflow-visible">
        <Container className="relative z-50 flex h-12 items-center justify-end gap-4 overflow-visible sm:h-14 sm:gap-6">
          <div
            className="mr-auto w-[4rem] shrink-0 sm:w-[5rem] lg:w-[5.75rem]"
            aria-hidden="true"
          />
          <div className="hidden min-w-0 md:block">
            <PrimaryNavigation />
          </div>
          <MobileNavigation />

          <SiteLogo
            plate
            priority
            className="absolute top-1 left-4 z-50 sm:left-6 lg:left-10 xl:left-12"
          />
        </Container>
      </div>
    </header>
  );
}
