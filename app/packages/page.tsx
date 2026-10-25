import type { Metadata } from "next";
import { CallToAction } from "@/components/ui/CallToAction";
import { PackageList } from "@/components/ui/PackageList";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageSection } from "@/components/ui/PageSection";
import { packages } from "@/data/packages";
import { enquiryLink } from "@/lib/enquiry";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Connect, Collaborate, Transform, and the Executive Leadership Forum.",
};

export default function PackagesPage() {
  return (
    <>
      <PageSection>
        <PageIntro
          title="Packages"
          lede="Four experiences, from a short session to a customised leadership retreat."
        />
        <PackageList items={packages} enquiry={enquiryLink} heading="h2" />
      </PageSection>
      <CallToAction
        title="Choose a package"
        description="Enquire and we can talk through which experience fits your group."
        action={enquiryLink}
      />
    </>
  );
}
