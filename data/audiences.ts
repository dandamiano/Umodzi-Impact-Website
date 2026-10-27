import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/types/content";

export type AudienceIconId =
  | "organisations"
  | "institutions"
  | "youth"
  | "faith"
  | "families"
  | "other";

export type AudienceItem = {
  label: string;
  icon: AudienceIconId;
};

export const audienceItems: readonly AudienceItem[] = [
  { label: "Organisations", icon: "organisations" },
  { label: "Institutions", icon: "institutions" },
  { label: "Youth and student groups", icon: "youth" },
  { label: "Faith communities", icon: "faith" },
  { label: "Families", icon: "families" },
  { label: "Other groups", icon: "other" },
] as const;

export const audienceBackgroundPhoto: GalleryItem | undefined =
  galleryItems.find((photo) => photo.src === "/photos/IMG_9762.jpg");
