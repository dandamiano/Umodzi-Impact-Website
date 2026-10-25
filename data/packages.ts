import type { PackageOffering } from "@/types/content";

/**
 * Indicative prices are stored with approved: false.
 * Package cards must not render pricing until approved is true.
 */
export const packages: readonly PackageOffering[] = [
  {
    id: "connect",
    name: "Connect",
    duration: "Approximately 2–3 hours",
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
    pricing: {
      approved: false,
      perPerson: "MWK 10,000",
      minimumBooking: "MWK 200,000, up to 20 participants",
    },
  },
  {
    id: "collaborate",
    name: "Collaborate",
    duration: "Approximately 4–5 hours",
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
    pricing: {
      approved: false,
      perPerson: "MWK 30,000",
      minimumBooking: "MWK 600,000",
    },
  },
  {
    id: "transform",
    name: "Transform",
    duration: "Approximately 8 hours",
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
    pricing: {
      approved: false,
      perPerson: "MWK 50,000",
      minimumBooking: "MWK 1,000,000",
    },
  },
  {
    id: "executive-leadership-forum",
    name: "Executive Leadership Forum",
    duration: "A customised 1–2 day retreat",
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
    pricing: {
      approved: false,
      starting: "MWK 2,500,000",
      note: "Accommodation is excluded from the supplied package information.",
    },
  },
];
