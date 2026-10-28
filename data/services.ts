import type { ServiceOffering } from "@/types/content";

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
};

const serviceById = new Map(services.map((service) => [service.id, service]));

function resolveGroup(
  id: string,
  label: string,
  serviceIds: readonly string[],
): ServiceGroup {
  const items = serviceIds
    .map((serviceId) => serviceById.get(serviceId))
    .filter((service): service is ServiceOffering => Boolean(service))
    .filter((service) => !service.needsConfirmation);

  return { id, label, items };
}

/** Homepage editorial grouping — published services only. */
export const homepageServiceGroups: readonly ServiceGroup[] = [
  resolveGroup("design-facilitation", "Design & facilitation", [
    "team-building",
    "team-dynamics",
    "leadership-retreats",
    "customised-experiences",
  ]),
  resolveGroup("logistics", "Logistics", [
    "retreat-planning",
    "venue-sourcing",
    "transport",
    "catering",
  ]),
  resolveGroup("brand-capture", "Brand & capture", [
    "event-branding",
    "merchandise",
    "photography",
  ]),
].filter((group) => group.items.length > 0);
