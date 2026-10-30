import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/types/content";

export type CaseStudy = {
  id: string;
  approved: boolean;
  /** Short display title for the editorial headline. */
  shortTitle: string;
  /** Full programme name. */
  title: string;
  /** One-line descriptor under the short title. */
  summary: string;
  client: string;
  date: string;
  location: string;
  participants: string;
  themes: readonly string[];
  feedback?: string;
  /** Lead + support photographs for the editorial presentation. */
  photos?: {
    lead: GalleryItem;
    supports: readonly GalleryItem[];
  };
};

/**
 * Programme themes we design around — safe to show without a published case study.
 * Drawn from the implementation guide; not attributed to a specific client.
 */
export const experiencePortfolioThemes = [
  "Communication",
  "Collaboration",
  "Problem-solving",
  "Strengths-based teamwork",
  "Conflict resolution",
  "Reflection",
  "Alignment",
] as const;

function photo(src: string): GalleryItem | undefined {
  return galleryItems.find((item) => item.src === src);
}

function resolvePhotos(
  leadSrc: string,
  supportSrcs: readonly string[],
): CaseStudy["photos"] | undefined {
  const lead = photo(leadSrc);
  if (!lead) {
    return undefined;
  }

  const supports = supportSrcs
    .map((src) => photo(src))
    .filter((item): item is GalleryItem => Boolean(item));

  return { lead, supports };
}

/**
 * Pages may import publishedCaseStudies only.
 * Set approved true only when publication permission and details are verified.
 */
const caseStudies: readonly CaseStudy[] = [
  {
    id: "lessons-in-conservation",
    approved: true,
    shortTitle: "Lessons in Conservation",
    title: "Lessons in Conservation Team-Building Experience",
    summary: "Team-building experience in Liwonde National Park",
    client: "Lessons in Conservation",
    date: "28–30 August 2026",
    location: "Liwonde National Park, Malawi",
    participants: "17 members",
    themes: [
      "Communication",
      "Collaboration",
      "Problem-solving",
      "Strengths-based teamwork",
      "Conflict resolution",
      "Reflection",
      "Alignment",
    ],
    feedback:
      "12 respondents rated the overall experience Excellent or Good, and 11 indicated they would recommend Umodzi.",
    photos: resolvePhotos("/photos/IMG_9765.jpg", [
      "/photos/IMG_9444.jpg",
      "/photos/IMG_9666.jpg",
      "/photos/IMG_9289.jpg",
    ]),
  },
];

export const publishedCaseStudies = caseStudies.filter((study) => study.approved);

export const experiencesBackgroundPhoto: GalleryItem | undefined = photo(
  "/photos/IMG_9482.jpg",
);
