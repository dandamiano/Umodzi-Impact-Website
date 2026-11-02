import type { Metadata } from "next";
import { ServicePortfolio } from "@/components/ui/ServicePortfolio";
import {
  serviceGroups,
  servicesClosingPhoto,
  servicesHeroPhoto,
  servicesSupportPhoto,
} from "@/data/services";
import { servicesPage } from "@/lib/constants";

export const metadata: Metadata = {
  title: servicesPage.title,
  description:
    "Facilitation, logistics, and capture—modules you can assemble into a full team experience.",
};

export default function ServicesPage() {
  return (
    <ServicePortfolio
      groups={serviceGroups}
      heroPhoto={servicesHeroPhoto}
      supportPhoto={servicesSupportPhoto}
      closingPhoto={servicesClosingPhoto}
    />
  );
}
