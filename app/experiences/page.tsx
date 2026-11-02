import type { Metadata } from "next";
import { ExperiencePortfolio } from "@/components/ui/ExperiencePortfolio";
import {
  experiencePortfolioThemes,
  experiencesBackgroundPhoto,
  publishedCaseStudies,
} from "@/data/experiences";
import { galleryHeroCollage } from "@/data/gallery";
import { experiencesPage } from "@/lib/constants";

export const metadata: Metadata = {
  title: experiencesPage.title,
  description:
    "Real team experiences from Umodzi Impact—starting with Lessons in Conservation in Liwonde National Park.",
};

export default function ExperiencesPage() {
  const heroPhotos = [
    publishedCaseStudies[0]?.photos?.lead,
    galleryHeroCollage[0],
  ].filter((photo): photo is NonNullable<typeof photo> => Boolean(photo));

  const closingPhoto =
    publishedCaseStudies[0]?.photos?.supports?.[0] ??
    experiencesBackgroundPhoto ??
    galleryHeroCollage[1];

  return (
    <ExperiencePortfolio
      studies={publishedCaseStudies}
      themes={experiencePortfolioThemes}
      heroPhotos={heroPhotos}
      closingPhoto={closingPhoto}
    />
  );
}
