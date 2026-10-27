export type NavItem = {
  label: string;
  href: string;
  available: boolean;
};

export type ServiceOffering = {
  id: string;
  name: string;
  needsConfirmation?: boolean;
};

export type UnpublishedPricing = {
  approved: false;
  perPerson?: string;
  minimumBooking?: string;
  starting?: string;
  note?: string;
};

export type PublishedPricing = {
  approved: true;
  label: string;
};

export type PackagePricing = UnpublishedPricing | PublishedPricing;

export type PackageTier = "light" | "standard" | "featured" | "executive";

export type PackageOffering = {
  id: string;
  name: string;
  step: number;
  duration: string;
  outcome: string;
  summary?: string;
  idealFor?: string;
  inclusionsLead?: string;
  inclusions: readonly string[];
  pricing: PackagePricing;
  tier: PackageTier;
  badge?: string;
  enquiryLabel: string;
};

export type Value = {
  name: string;
  description: string;
};

export type ContactDetails = {
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
};

export type SocialChannel = {
  id: "facebook" | "tiktok" | "linkedin";
  label: string;
  href?: string;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Homepage editorial feature frame — caption is marketing copy, separate from alt. */
export type FeaturedPhoto = GalleryItem & {
  caption: string;
};
