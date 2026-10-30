import type { Metadata } from "next";
import { CallToAction } from "@/components/ui/CallToAction";
import { ServiceCatalogue } from "@/components/ui/ServiceCatalogue";
import { serviceGroups, servicesHeroPhoto } from "@/data/services";
import { enquiryLink } from "@/lib/enquiry";
import { homePage } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Team-building facilitation and practical support for organisations, schools, and community groups.",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceCatalogue
        title="Services"
        lede={homePage.servicesLede}
        groups={serviceGroups}
        heroPhoto={servicesHeroPhoto}
      />
      <CallToAction
        decorated
        eyebrow="Let's plan it"
        title="Ask about a service"
        description="Tell us which parts of the experience you want help with—we will shape a clear next step."
        action={{ href: enquiryLink.href, label: "Start an enquiry" }}
      />
    </>
  );
}
