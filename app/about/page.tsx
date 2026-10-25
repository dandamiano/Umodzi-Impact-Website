import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ValuesList } from "@/components/ui/ValuesList";
import { CallToAction } from "@/components/ui/CallToAction";
import { audiences, site } from "@/lib/constants";
import { enquiryLink } from "@/lib/enquiry";

export const metadata: Metadata = {
  title: "About",
  description: site.mission,
};

export default function AboutPage() {
  return (
    <>
      <PageSection className="pb-0">
        <PageIntro
          title="About Umodzi Impact Hub"
          lede={site.description}
          current="About"
        />
      </PageSection>

      <PageSection labelledBy="mission-heading" className="pt-10 pb-0">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading id="mission-heading" title="Mission" lede={site.mission} />
          <SectionHeading id="vision-heading" title="Vision" lede={site.vision} />
        </div>
      </PageSection>

      <PageSection className="bg-mist" labelledBy="approach-heading">
        <SectionHeading id="approach-heading" title="Approach" lede={site.approach} />
        <h3 className="mt-10 font-display text-lg font-medium">Who the work is for</h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {audiences.map((audience) => (
            <li key={audience} className="text-sm leading-relaxed">
              {audience}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection labelledBy="values-heading">
        <SectionHeading id="values-heading" title="Values" />
        <ValuesList />
      </PageSection>

      <CallToAction
        title="Work with Umodzi Impact Hub"
        description="Enquire about a team-building experience shaped around your group."
        action={enquiryLink}
      />
    </>
  );
}
