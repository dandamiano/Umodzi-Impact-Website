export const site = {
  name: "Umodzi Impact Hub",
  wordmark: "Umodzi Impact",
  description:
    "A Malawi-based team-building and experiential learning provider serving organisations, companies, NGOs, schools, youth groups, faith communities, leadership teams and other groups.",
  approach:
    "Combine connection, collaboration, fun, reflection and purposeful learning to help teams improve communication, trust, leadership and teamwork.",
  mission:
    "Deliver customised team-building experiences that strengthen collaboration, leadership, trust and organisational culture.",
  vision:
    "A Malawi where strong, connected and collaborative teams drive positive change in organisations and communities.",
  locale: "en",
} as const;

export const homePage = {
  headline: "More than a day of games.",
  lede:
    "Umodzi Impact is a Malawi-based professional team-building service provider offering tailored experiences for organisations, institutions, youth and student groups, faith communities, families and other groups.",
  audienceTitle: "Who the work is for",
  audiences: [
    "Organisations",
    "Institutions",
    "Youth and student groups",
    "Faith communities",
    "Families",
    "Other groups",
  ],
  packagesLede: "Four ways to spend time together, from a short session to a leadership retreat.",
  servicesLede: "Book a complete retreat, or choose the parts you need.",
  approach:
    "Meaningful team building goes beyond games. We combine connection, collaboration, fun, reflection, and purposeful learning to create experiences that teams can carry beyond the event.",
  photographsLede: "Scenes from team experiences.",
} as const;

export const audiences = [
  "Organisations",
  "Companies",
  "NGOs",
  "Schools",
  "Youth groups",
  "Faith communities",
  "Leadership teams",
  "Other groups",
] as const;

/**
 * Facts that are still missing. Keep them here until they are confirmed.
 * Do not publish invented contact details, prices, testimonials, or case studies.
 */
export const pendingContent = {
  tradingName:
    "The project brief uses “Umodzi Impact Hub”. The supplied logo wordmark reads “Umodzi Impact”.",
  contactDetails: "Email, phone, and address are not confirmed.",
  socialProfiles:
    "The branding guideline shows Facebook, TikTok, and LinkedIn icons. Profile URLs are not confirmed.",
  prices: "Package prices are stored in data/packages.ts and are not approved for publication.",
  testimonials: "Client testimonials are not confirmed.",
  caseStudies: "Case studies are not confirmed.",
  serviceDescriptions: "Detailed service descriptions are not confirmed.",
} as const;
