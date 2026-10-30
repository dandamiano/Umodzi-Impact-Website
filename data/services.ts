import { galleryItems } from "@/data/gallery";
import type { GalleryItem, ServiceOffering } from "@/types/content";

/**
 * Proposed services from the implementation guide.
 * needsConfirmation is internal. Do not show that flag to visitors.
 * Descriptions are not confirmed, so they are not invented here.
 */
export const services: readonly ServiceOffering[] = [
  { id: "team-building", name: "Team Building and Facilitation" },
  { id: "retreat-planning", name: "Team Retreat Planning and Coordination" },
  { id: "venue-sourcing", name: "Venue Sourcing and Booking" },
  { id: "transport", name: "Transport Coordination" },
  { id: "catering", name: "Catering and Refreshments" },
  { id: "event-branding", name: "Event Branding and Setup" },
  { id: "merchandise", name: "Team T-Shirts and Merchandise" },
  { id: "photography", name: "Photography and Event Documentation" },
  { id: "team-dynamics", name: "Team Dynamics Assessment" },
  {
    id: "strategy",
    name: "Strategy and Action Planning",
    needsConfirmation: true,
  },
  { id: "leadership-retreats", name: "Leadership and Executive Retreats" },
  { id: "customised-experiences", name: "Customised Team Experiences" },
];

export type ServiceGroup = {
  id: string;
  label: string;
  items: readonly ServiceOffering[];
  photo?: GalleryItem;
};

const serviceById = new Map(services.map((service) => [service.id, service]));

function resolveGroup(
  id: string,
  label: string,
  serviceIds: readonly string[],
  photoSrc?: string,
): ServiceGroup {
  const items = serviceIds
    .map((serviceId) => serviceById.get(serviceId))
    .filter((service): service is ServiceOffering => Boolean(service))
    .filter((service) => !service.needsConfirmation);

  const photo = photoSrc
    ? galleryItems.find((item) => item.src === photoSrc)
    : undefined;

  return { id, label, items, photo };
}

/** Editorial grouping — published services only (excludes needsConfirmation). */
export const serviceGroups: readonly ServiceGroup[] = [
  resolveGroup(
    "design-facilitation",
    "Design & facilitation",
    [
      "team-building",
      "team-dynamics",
      "leadership-retreats",
      "customised-experiences",
    ],
    "/photos/IMG_2553.jpg",
  ),
  resolveGroup(
    "logistics",
    "Logistics",
    ["retreat-planning", "venue-sourcing", "transport", "catering"],
    "/photos/IMG_9457.jpg",
  ),
  resolveGroup(
    "brand-capture",
    "Brand & capture",
    ["event-branding", "merchandise", "photography"],
    "/photos/IMG_9769.jpg",
  ),
].filter((group) => group.items.length > 0);

/** Alias used by the homepage services section. */
export const homepageServiceGroups = serviceGroups;

/** Facilitation in progress — strong delivery signal for the services hero. */
export const servicesHeroPhoto: GalleryItem | undefined = galleryItems.find(
  (photo) => photo.src === "/photos/IMG_2536.jpg",
);
