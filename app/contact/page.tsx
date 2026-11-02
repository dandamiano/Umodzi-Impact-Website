import type { Metadata } from "next";
import { ContactBrief } from "@/components/ui/ContactBrief";
import { ContactChannels } from "@/components/ui/ContactChannels";
import { ContactClosing } from "@/components/ui/ContactClosing";
import { ContactHero } from "@/components/ui/ContactHero";
import {
  contactDetails,
  contactLinks,
  publishedSocialChannels,
} from "@/data/contact";
import { galleryHeroCollage } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Umodzi Impact what you're planning—group size, vibe, and goals for your next team experience.",
};

export default function ContactPage() {
  const links = contactLinks(contactDetails);

  return (
    <>
      <ContactHero photos={galleryHeroCollage} />
      <ContactBrief enquiryEmail={contactDetails.email} />
      <ContactChannels
        links={links}
        social={publishedSocialChannels}
        address={contactDetails.address}
      />
      <ContactClosing photo={galleryHeroCollage[2] ?? galleryHeroCollage[0]} />
    </>
  );
}
