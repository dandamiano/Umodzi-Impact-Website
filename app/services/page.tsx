import type { Metadata } from "next";
import { CallToAction } from "@/components/ui/CallToAction";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageSection } from "@/components/ui/PageSection";
import { ServiceList } from "@/components/ui/ServiceList";
import { services } from "@/data/services";
import { enquiryLink } from "@/lib/enquiry";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Team-building facilitation and practical support for organisations, schools, and community groups.",
};

export default function ServicesPage() {
  return (
    <>
      <PageSection>
        <PageIntro
          title="Services"
          lede="Facilitation and the practical support that sits around a team-building experience."
        />
        <ServiceList items={services} />
      </PageSection>
      <CallToAction
        title="Ask about a service"
        description="Tell us which parts of the experience you want help with."
        action={enquiryLink}
      />
    </>
  );
}
