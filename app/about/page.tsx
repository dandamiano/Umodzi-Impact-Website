import type { Metadata } from "next";
import { AboutPortfolio } from "@/components/ui/AboutPortfolio";
import {
  aboutClosingPhoto,
  aboutHeroPhoto,
  aboutSupportPhoto,
} from "@/data/gallery";
import { aboutPage, site } from "@/lib/constants";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: site.mission,
};

export default function AboutPage() {
  return (
    <AboutPortfolio
      heroPhoto={aboutHeroPhoto}
      supportPhoto={aboutSupportPhoto}
      closingPhoto={aboutClosingPhoto}
    />
  );
}
