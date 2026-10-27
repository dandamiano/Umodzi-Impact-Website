import { galleryItems } from "@/data/gallery";
import type { GalleryItem, PackageOffering } from "@/types/content";

/**
 * Indicative prices are stored with approved: false.
 * Package cards must not render pricing until approved is true.
 */
export const packages: readonly PackageOffering[] = [
  {
    id: "connect",
    name: "Connect",
    step: 1,
    duration: "2–3 hours",
    outcome: "Trust and first-team chemistry",
    summary:
      "A fun and engaging introductory team-building experience designed to help teams connect, communicate, build trust, and enjoy working together.",
    idealFor: "Small businesses, NGOs, schools, and teams looking to strengthen relationships.",
    inclusionsLead: "Activities include",
    inclusions: [
      "Icebreakers",
      "Communication activities",
      "Team challenges",
      "Guided reflection",
    ],
    tier: "light",
    enquiryLabel: "Enquire about Connect",
    pricing: {
      approved: false,
      perPerson: "MWK 10,000",
      minimumBooking: "MWK 200,000, up to 20 participants",
    },
  },
  {
    id: "collaborate",
    name: "Collaborate",
    step: 2,
    duration: "4–5 hours",
    outcome: "Stronger collaboration and healthy dynamics",
    summary:
      "A deeper team-building experience focused on collaboration, problem-solving, leadership, and healthy team dynamics.",
    idealFor: "Corporate departments, organisations, NGOs, and established teams.",
    inclusionsLead: "Includes Connect activities plus",
    inclusions: [
      "Problem-solving",
      "Leadership",
      "Conflict resolution",
      "Goal alignment",
      "Facilitation",
      "Certificates",
    ],
    tier: "standard",
    enquiryLabel: "Enquire about Collaborate",
    pricing: {
      approved: false,
      perPerson: "MWK 30,000",
      minimumBooking: "MWK 600,000",
    },
  },
  {
    id: "transform",
    name: "Transform",
    step: 3,
    duration: "Full day · 8 hours",
    outcome: "Leadership, strategy, and lasting alignment",
    summary:
      "A full-day immersive team experience designed to strengthen teamwork, leadership, strategic thinking, and organisational alignment.",
    idealFor:
      "Annual staff retreats, leadership teams, organisations, and teams seeking a deeper transformation experience.",
    inclusionsLead: "Includes",
    inclusions: [
      "Customised leadership simulations",
      "Team challenges",
      "Strategy workshops",
      "Action planning",
      "Selected photography",
      "Awards",
      "A final report",
    ],
    tier: "featured",
    badge: "Most immersive",
    enquiryLabel: "Plan Transform",
    pricing: {
      approved: false,
      perPerson: "MWK 50,000",
      minimumBooking: "MWK 1,000,000",
    },
  },
  {
    id: "executive-leadership-forum",
    name: "Executive Leadership Forum",
    step: 4,
    duration: "1–2 day retreat",
    outcome: "Board-level clarity and organisational performance",
    summary:
      "A customised retreat designed to strengthen leadership, strategic alignment, team dynamics, and organisational performance.",
    idealFor: "CEOs, senior management, boards, and leadership teams.",
    inclusionsLead: "May include",
    inclusions: [
      "Leadership coaches or speakers",
      "Executive strategy sessions",
      "Team dynamics assessment",
      "Facilitation",
      "Action planning",
    ],
    tier: "executive",
    enquiryLabel: "Book a forum",
    pricing: {
      approved: false,
      starting: "MWK 2,500,000",
      note: "Accommodation is excluded from the supplied package information.",
    },
  },
];

export const packagesBackgroundPhoto: GalleryItem | undefined =
  galleryItems.find((photo) => photo.src === "/photos/IMG_9645.jpg");
