import type { NavItem } from "@/types/content";

export const primaryNavigation: readonly NavItem[] = [
  { label: "Home", href: "/", available: true },
  { label: "About", href: "/about", available: true },
  { label: "Services", href: "/services", available: true },
  { label: "Packages", href: "/packages", available: true },
  { label: "Experiences", href: "/experiences", available: true },
  { label: "Gallery", href: "/gallery", available: true },
  { label: "Contact", href: "/contact", available: true },
];

export const availableNavigation = primaryNavigation.filter(
  (item) => item.available,
);
