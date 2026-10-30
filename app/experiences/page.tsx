import type { Metadata } from "next";
import { CallToAction } from "@/components/ui/CallToAction";
import { ExperiencePortfolio } from "@/components/ui/ExperiencePortfolio";
import {
  experiencePortfolioThemes,
  experiencesBackgroundPhoto,
  publishedCaseStudies,
} from "@/data/experiences";
import { enquiryLink } from "@/lib/enquiry";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Client experiences published with permission.",
};

export default function ExperiencesPage() {
  return (
    <>
      <ExperiencePortfolio
        title="Experiences"
        lede="Client programmes we can share—beginning with Lessons in Conservation in Liwonde."
        studies={publishedCaseStudies}
        themes={experiencePortfolioThemes}
        backgroundPhoto={experiencesBackgroundPhoto}
      />
      <CallToAction
        decorated
        eyebrow="Plan with us"
        title="Plan your own experience"
        description="Enquire about a programme shaped around your group’s goals and size."
        action={{ href: enquiryLink.href, label: "Start an enquiry" }}
      />
    </>
  );
}
