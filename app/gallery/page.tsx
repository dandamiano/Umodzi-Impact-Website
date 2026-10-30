import type { Metadata } from "next";
import { CallToAction } from "@/components/ui/CallToAction";
import { GalleryScrapbook } from "@/components/ui/GalleryScrapbook";
import {
  galleryHeroCollage,
  galleryItems,
  gallerySpotlight,
} from "@/data/gallery";
import { galleryPage } from "@/lib/constants";
import { enquiryLink } from "@/lib/enquiry";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Proof we had fun — photographs from Umodzi Impact Hub team experiences across Malawi.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryScrapbook
        collage={galleryHeroCollage}
        spotlight={gallerySpotlight}
        wall={galleryItems}
      />
      <CallToAction
        decorated
        eyebrow={galleryPage.ctaEyebrow}
        title={galleryPage.ctaTitle}
        description={galleryPage.ctaDescription}
        action={{
          href: enquiryLink.href,
          label: enquiryLink.label,
        }}
      />
    </>
  );
}
