import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AudienceRoster } from "@/components/ui/AudienceRoster";
import { CallToAction } from "@/components/ui/CallToAction";
import { ButtonLink } from "@/components/ui/Button";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { PackageCard } from "@/components/ui/PackageCard";
import { PackagePathway } from "@/components/ui/PackagePathway";
import { PageSection } from "@/components/ui/PageSection";
import { PhotographFeature } from "@/components/ui/PhotographFeature";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ApproachMethod } from "@/components/ui/ApproachMethod";
import { ServiceIndex } from "@/components/ui/ServiceIndex";
import { approachPillars } from "@/data/approach";
import { audienceBackgroundPhoto, audienceItems } from "@/data/audiences";
import {
  featuredPhotograph,
  featuredPhotographSupports,
  heroPhoto,
} from "@/data/gallery";
import { packages } from "@/data/packages";
import { homepageServiceGroups } from "@/data/services";
import { enquiryLink } from "@/lib/enquiry";
import { homePage, site } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  description: site.description,
};

function Accent() {
  return <span className="mb-4 block h-1 w-12 bg-brand-orange" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div className="relative mx-auto grid max-w-6xl items-center px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
          <div className="relative flex flex-col items-center py-12 text-center sm:py-16 lg:items-start lg:py-20 lg:text-left">
            <div
              aria-hidden="true"
              className="home-dots pointer-events-none absolute top-10 right-0 hidden h-24 w-28 opacity-50 lg:block"
            />
            <h1 className="home-rise relative">
              <span className="block font-serif text-2xl leading-none tracking-tight text-brand-teal sm:text-3xl">
                More than a
              </span>
              <span className="mt-2 block whitespace-nowrap text-5xl font-medium leading-[0.9] tracking-[-0.035em] sm:text-6xl lg:text-[4.75rem]">
                day of
              </span>
              <span className="block whitespace-nowrap text-5xl font-medium leading-[0.9] tracking-[-0.035em] sm:text-6xl lg:text-[4.75rem]">
                games<span className="text-brand-orange">.</span>
              </span>
            </h1>
            <span
              className="home-draw mx-auto mt-6 block h-1 w-14 bg-brand-orange lg:mx-0"
              aria-hidden="true"
            />
            <p className="home-rise mx-auto mt-5 max-w-md font-serif text-xl leading-relaxed sm:text-2xl lg:mx-0">
              {homePage.lede}
            </p>
            <div
              className="home-rise mt-8 flex flex-nowrap items-center justify-center gap-3 sm:gap-4 lg:justify-start"
              style={{ animationDelay: "80ms" }}
            >
              <ButtonLink href={enquiryLink.href} size="large">
                {enquiryLink.label}
              </ButtonLink>
              <Link
                href="/packages"
                className="group inline-flex min-h-12 items-center gap-2 font-display text-base font-medium text-brand-navy hover:text-brand-teal"
              >
                View packages
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
          {heroPhoto ? (
            <div
              className="home-rise relative min-w-0 px-0 pt-2 pb-2 lg:py-16"
              style={{ animationDelay: "140ms" }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 top-6 hidden h-52 w-52 rounded-full border border-brand-teal/30 lg:block"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -bottom-6 hidden h-40 w-40 rounded-full border border-brand-teal/25 lg:block"
              />
              <div className="relative lg:pt-6 lg:pl-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 hidden h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[1.75rem] border border-brand-teal/50 lg:block"
                />
                <span
                  aria-hidden="true"
                  className="absolute -right-1.5 -bottom-1.5 z-10 hidden size-3.5 bg-brand-orange sm:block"
                />
                <div className="relative overflow-hidden rounded-3xl bg-mist shadow-soft ring-1 ring-brand-navy/10">
                  <GalleryImage
                    image={heroPhoto}
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="home-settle aspect-[16/10] h-auto w-full object-cover object-[center_60%]"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="relative block h-20 w-full sm:h-28"
        >
          <path
            d="M0 72C220 128 460 18 740 58C1020 98 1240 16 1440 68V140H0Z"
            className="fill-brand-teal/10"
          />
          <path
            d="M0 80C220 122 480 34 760 66C1040 98 1240 36 1440 74"
            fill="none"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            className="stroke-brand-orange"
          />
          <path
            d="M0 98C240 46 520 124 800 82C1080 40 1260 104 1440 78"
            fill="none"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            className="stroke-brand-teal/45"
          />
        </svg>
      </section>

      <AudienceRoster
        titleId="audiences-heading"
        title={homePage.audienceTitle}
        lede={homePage.audienceLede}
        items={audienceItems}
        backgroundPhoto={audienceBackgroundPhoto}
      />

      <PageSection className="bg-mist" labelledBy="packages-heading">
        <div className="home-rise">
          <Accent />
          <SectionHeading
            id="packages-heading"
            title="Packages"
            lede={homePage.packagesLede}
          />
          <PackagePathway
            items={packages}
            basePath="/packages"
            className="home-rise"
          />
        </div>
        <ul className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          {packages.map((item, index) => (
            <li
              key={item.id}
              className={cn(
                "home-rise scroll-mt-28",
                item.tier === "featured" && "lg:relative lg:z-10",
              )}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <PackageCard
                id={item.id}
                name={item.name}
                step={item.step}
                duration={item.duration}
                outcome={item.outcome}
                summary={item.summary}
                idealFor={item.idealFor}
                inclusions={item.inclusions}
                tier={item.tier}
                badge={item.badge}
                variant="preview"
                className="motion-safe:transition motion-safe:duration-300 hover:-translate-y-1 hover:shadow-soft"
              />
            </li>
          ))}
        </ul>
        <ButtonLink href="/packages" variant="primary" className="mt-8">
          Compare packages
        </ButtonLink>
      </PageSection>

      <PhotographFeature
        titleId="photographs-heading"
        title="Photographs"
        lede={homePage.photographsLede}
        lead={featuredPhotograph}
        supports={featuredPhotographSupports}
        cta={{ href: "/gallery", label: "View gallery" }}
      />

      <PageSection className="bg-mist" labelledBy="services-heading">
        <ServiceIndex
          titleId="services-heading"
          title="Services"
          lede={homePage.servicesLede}
          groups={homepageServiceGroups}
        />
      </PageSection>

      <PageSection labelledBy="approach-heading">
        <ApproachMethod
          titleId="approach-heading"
          title="The approach"
          lede={homePage.approach}
          pillars={approachPillars}
        />
      </PageSection>

      <CallToAction
        decorated
        eyebrow="Let's plan it"
        title="Enquire about a team experience"
        description="Share your goals and group size—we will help shape a programme that fits."
        action={{ href: enquiryLink.href, label: "Start an enquiry" }}
      />
    </>
  );
}
