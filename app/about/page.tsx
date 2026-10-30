import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AboutIntro } from "@/components/ui/AboutIntro";
import { CallToAction } from "@/components/ui/CallToAction";
import { MissionVision } from "@/components/ui/MissionVision";
import { PageSection } from "@/components/ui/PageSection";
import { ValuesList } from "@/components/ui/ValuesList";
import { aboutHeroPhoto } from "@/data/gallery";
import { enquiryLink } from "@/lib/enquiry";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: site.mission,
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro
        title={site.name}
        lede={site.description}
        current="About"
        photo={aboutHeroPhoto}
        enquire={enquiryLink}
      />

      <MissionVision
        missionId="mission-heading"
        visionId="vision-heading"
        mission={site.mission}
        vision={site.vision}
      />

      <PageSection className="bg-mist" labelledBy="values-heading">
        <div className="home-rise">
          <span
            className="home-draw mb-4 block h-1 w-12 bg-brand-orange"
            aria-hidden="true"
          />
          <p className="font-display text-xs font-medium tracking-[0.16em] text-brand-teal uppercase">
            What guides us
          </p>
          <h2
            id="values-heading"
            className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Values
          </h2>
        </div>
        <ValuesList />
        <p className="home-rise mt-10">
          <Link
            href="/#approach-heading"
            className="group inline-flex items-center gap-2 font-display text-sm font-medium text-brand-navy motion-safe:transition-colors motion-safe:duration-300 hover:text-brand-teal"
          >
            See how we work
            <ArrowRight
              aria-hidden="true"
              className="size-4 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
            />
          </Link>
        </p>
      </PageSection>

      <CallToAction
        decorated
        eyebrow="Next step"
        title="Work with Umodzi Impact Hub"
        description="Enquire about a team-building experience shaped around your group."
        action={enquiryLink}
      />
    </>
  );
}
