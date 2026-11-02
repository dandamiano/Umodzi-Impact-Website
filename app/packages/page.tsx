import type { Metadata } from "next";
import { PackagePortfolio } from "@/components/ui/PackagePortfolio";
import {
  packages,
  packagesBackgroundPhoto,
  packagesClosingPhoto,
  packagesSupportPhoto,
} from "@/data/packages";
import { packagesPage } from "@/lib/constants";
import { enquiryLink } from "@/lib/enquiry";

export const metadata: Metadata = {
  title: packagesPage.title,
  description:
    "Connect, Collaborate, Transform, and the Executive Leadership Forum—four experiences on one pathway.",
};

export default function PackagesPage() {
  return (
    <PackagePortfolio
      items={packages}
      enquiryHref={enquiryLink.href}
      heroPhoto={packagesBackgroundPhoto}
      supportPhoto={packagesSupportPhoto}
      closingPhoto={packagesClosingPhoto}
    />
  );
}
