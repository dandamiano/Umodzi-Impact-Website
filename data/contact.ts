import type { ContactDetails, SocialChannel } from "@/types/content";

export type ContactLink = {
  label: string;
  href: string;
};

export function contactLinks(details: ContactDetails): ContactLink[] {
  const links: ContactLink[] = [];

  if (details.phone) {
    links.push({
      label: details.phone,
      href: `tel:${details.phone.replace(/\s/g, "")}`,
    });
  }

  if (details.whatsapp) {
    links.push({ label: "WhatsApp", href: details.whatsapp });
  }

  if (details.email) {
    links.push({ label: details.email, href: `mailto:${details.email}` });
  }

  return links;
}

/** Replace sample values with confirmed contact details before launch. */
export const contactDetails: ContactDetails = {
  phone: "+265 888 000 000",
  email: "hello@umodziimpact.mw",
};

/**
 * Platforms shown in the branding guideline. Replace sample hrefs with real profile URLs.
 */
export const socialChannels: readonly SocialChannel[] = [
  { id: "facebook", label: "Facebook", href: "https://facebook.com/" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export const publishedSocialChannels = socialChannels.filter(
  (channel): channel is SocialChannel & { href: string } =>
    typeof channel.href === "string" && channel.href.length > 0,
);
