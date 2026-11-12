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
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Umodzi Impact what you're planning—group size, vibe, and goals for your next team experience.",
};

export default function ContactPage() {
  const links = contactLinks(contactDetails);
  const heroPhotos = [
    galleryItems.find((photo) => photo.src === "/photos/IMG_9558.jpg"),
    galleryItems.find((photo) => photo.src === "/photos/IMG_9628.jpg"),
  ].filter((photo): photo is NonNullable<typeof photo> => Boolean(photo));
  const closingPhoto =
    galleryItems.find((photo) => photo.src === "/photos/IMG_9289.jpg") ??
    heroPhotos[0];

  return (
    <>
      <ContactHero photos={heroPhotos} />
      <ContactBrief enquiryEmail={contactDetails.email} />
      <ContactChannels
        links={links}
        social={publishedSocialChannels}
        address={contactDetails.address}
      />
      <ContactClosing photo={closingPhoto} />
    </>
  );
}
