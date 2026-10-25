export type CaseStudy = {
  id: string;
  approved: boolean;
  title: string;
  client: string;
  date: string;
  location: string;
  participants: string;
  themes: readonly string[];
  feedback?: string;
};

/**
 * approved must stay false until publication permission and the details are verified.
 * Pages may import publishedCaseStudies only.
 */
const caseStudies: readonly CaseStudy[] = [
  {
    id: "lessons-in-conservation",
    approved: false,
    title: "Lessons in Conservation Team-Building Experience",
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
  },
];

export const publishedCaseStudies = caseStudies.filter((study) => study.approved);
