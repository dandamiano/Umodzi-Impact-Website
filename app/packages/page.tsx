import type { Metadata } from "next";
import Image from "next/image";
import { CallToAction } from "@/components/ui/CallToAction";
import { Container } from "@/components/ui/Container";
import { PackageList } from "@/components/ui/PackageList";
import { PageIntro } from "@/components/ui/PageIntro";
import { packages, packagesBackgroundPhoto } from "@/data/packages";
import { enquiryLink } from "@/lib/enquiry";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Connect, Collaborate, Transform, and the Executive Leadership Forum.",
};

export default function PackagesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-mist py-16 sm:py-20">
        {packagesBackgroundPhoto ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <Image
              src={packagesBackgroundPhoto.src}
              alt=""
              width={packagesBackgroundPhoto.width}
              height={packagesBackgroundPhoto.height}
              sizes="100vw"
              className="h-full w-full object-cover object-[center_35%] opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-mist/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-mist/90 via-mist/70 to-mist" />
          </div>
        ) : null}

        <Container className="relative">
          <PageIntro
            title="Packages"
            lede="Four experiences on one pathway—from a short session to a customised leadership retreat."
          />
          <PackageList items={packages} enquiryHref={enquiryLink.href} heading="h2" />
        </Container>
      </section>
      <CallToAction
        title="Not sure which step fits?"
        description="Tell us about your team and we will recommend the right depth of experience."
        action={enquiryLink}
        decorated
      />
    </>
  );
}
