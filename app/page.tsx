import type { Metadata } from "next";
import { HomePortfolio } from "@/components/ui/HomePortfolio";
import { audienceItems } from "@/data/audiences";
import {
  featuredPhotograph,
  featuredPhotographSupports,
  heroAccentPhoto,
  heroPhoto,
  heroSupportPhoto,
  homeAudiencePhoto,
  homeClosingPhoto,
} from "@/data/gallery";
import { packages } from "@/data/packages";
import { homepageServiceGroups } from "@/data/services";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  description: site.description,
};

export default function HomePage() {
  return (
    <HomePortfolio
      heroPhoto={heroPhoto}
      supportPhoto={heroSupportPhoto}
      accentPhoto={heroAccentPhoto}
      audiencePhoto={homeAudiencePhoto}
      closingPhoto={homeClosingPhoto}
      audiences={audienceItems}
      packages={packages}
      featuredPhoto={featuredPhotograph}
      featuredSupports={featuredPhotographSupports}
      serviceGroups={homepageServiceGroups}
    />
  );
}
