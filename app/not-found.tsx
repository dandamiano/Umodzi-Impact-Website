import { ButtonLink } from "@/components/ui/Button";
import { PageHeading } from "@/components/ui/PageHeading";
import { PageSection } from "@/components/ui/PageSection";

export default function NotFound() {
  return (
    <PageSection>
      <PageHeading title="Page not found" lede="That page is not available." />
      <ButtonLink href="/" className="mt-8">
        Back to home
      </ButtonLink>
    </PageSection>
  );
}
