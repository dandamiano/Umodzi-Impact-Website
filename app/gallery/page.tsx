import type { Metadata } from "next";
import { CallToAction } from "@/components/ui/CallToAction";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageSection } from "@/components/ui/PageSection";
import { galleryItems } from "@/data/gallery";
import { enquiryLink } from "@/lib/enquiry";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photographs from Umodzi Impact Hub team experiences.",
};

export default function GalleryPage() {
  return (
    <>
      <PageSection>
        <PageIntro
          title="Gallery"
          lede="Photographs from Umodzi Impact Hub team experiences."
        />
        <div className="mt-10">
          <GalleryGrid images={galleryItems} />
        </div>
      </PageSection>
      <CallToAction
        title="Enquire about a programme"
        description="Ask about a team-building experience for your group."
        action={enquiryLink}
      />
    </>
  );
}
