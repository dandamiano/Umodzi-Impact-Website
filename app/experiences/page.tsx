import type { Metadata } from "next";
import { ExperiencePortfolio } from "@/components/ui/ExperiencePortfolio";
import {
  experiencePortfolioThemes,
  experiencesBackgroundPhoto,
  experiencesHeroPhoto,
  experiencesSupportPhoto,
  publishedCaseStudies,
} from "@/data/experiences";
import { experiencesPage } from "@/lib/constants";

export const metadata: Metadata = {
  title: experiencesPage.title,
  description:
    "Real team experiences from Umodzi Impact—starting with Lessons in Conservation in Liwonde National Park.",
};

export default function ExperiencesPage() {
  const heroPhotos = [experiencesHeroPhoto, experiencesSupportPhoto].filter(
    (photo): photo is NonNullable<typeof photo> => Boolean(photo),
  );

  const closingPhoto =
    publishedCaseStudies[0]?.photos?.supports?.[0] ?? experiencesBackgroundPhoto;

  return (
    <ExperiencePortfolio
      studies={publishedCaseStudies}
      themes={experiencePortfolioThemes}
      heroPhotos={heroPhotos}
      closingPhoto={closingPhoto}
    />
  );
}
