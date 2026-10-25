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

/** Add a value only after that contact detail is confirmed. */
export const contactDetails: ContactDetails = {};

/**
 * Platforms shown in the branding guideline. href stays unset until a real profile URL is supplied.
 */
export const socialChannels: readonly SocialChannel[] = [
  { id: "facebook", label: "Facebook" },
  { id: "tiktok", label: "TikTok" },
  { id: "linkedin", label: "LinkedIn" },
];

export const publishedSocialChannels = socialChannels.filter(
  (channel): channel is SocialChannel & { href: string } =>
    typeof channel.href === "string" && channel.href.length > 0,
);
