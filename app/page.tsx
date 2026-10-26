import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CallToAction } from "@/components/ui/CallToAction";
import { ButtonLink } from "@/components/ui/Button";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { PackageCard } from "@/components/ui/PackageCard";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredPhotos, heroPhoto } from "@/data/gallery";
import { packages } from "@/data/packages";
import { services } from "@/data/services";
import { values } from "@/data/values";
import { enquiryLink } from "@/lib/enquiry";
import { homePage, site } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  description: site.description,
};

const homepageServices = services.filter((service) => !service.needsConfirmation);

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

      <PageSection labelledBy="audiences-heading" className="py-12 sm:py-14">
        <div className="home-rise">
          <Accent />
          <SectionHeading id="audiences-heading" title={homePage.audienceTitle} />
        </div>
        <ul className="mt-8 flex flex-wrap gap-3">
          {homePage.audiences.map((audience, index) => (
            <li
              key={audience}
              className="home-rise"
              style={{ animationDelay: `${80 + index * 60}ms` }}
            >
              <span className="inline-flex min-h-11 items-center rounded-full border border-brand-navy/15 bg-mist px-4 text-sm font-medium">
                {audience}
              </span>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection className="bg-mist" labelledBy="packages-heading">
        <div className="home-rise">
          <Accent />
          <SectionHeading
            id="packages-heading"
            title="Packages"
            lede={homePage.packagesLede}
          />
        </div>
        <ul className="mt-10 grid gap-6 lg:grid-cols-2">
          {packages.map((item, index) => (
            <li
              key={item.id}
              className="home-rise"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <PackageCard
                name={item.name}
                duration={item.duration}
                summary={item.summary}
                idealFor={item.idealFor}
                inclusions={item.inclusions}
                enquiry={enquiryLink}
                variant="preview"
                className="rounded-2xl border-t-4 border-t-brand-orange motion-safe:transition motion-safe:duration-300 hover:-translate-y-1 hover:shadow-soft"
              />
            </li>
          ))}
        </ul>
        <ButtonLink href="/packages" variant="secondary" className="mt-8">
          Package details
        </ButtonLink>
      </PageSection>

      <PageSection labelledBy="photographs-heading">
        <div className="home-rise">
          <Accent />
          <SectionHeading
            id="photographs-heading"
            title="Photographs"
            lede={homePage.photographsLede}
          />
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPhotos.map((photo, index) => (
            <li
              key={photo.src}
              className={cn(
                "home-rise group overflow-hidden rounded-2xl bg-mist",
                index === 0 && "sm:col-span-2 lg:row-span-2",
              )}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <GalleryImage
                image={photo}
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 66vw, 100vw"
                    : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                }
                className={cn(
                  "h-full w-full object-cover motion-safe:transition motion-safe:duration-500 group-hover:scale-105",
                  index === 0 ? "aspect-[4/3] lg:aspect-auto lg:min-h-full" : "aspect-[4/3]",
                )}
              />
            </li>
          ))}
        </ul>
        <ButtonLink href="/gallery" variant="secondary" className="mt-8">
          View gallery
        </ButtonLink>
      </PageSection>

      <PageSection className="bg-mist" labelledBy="services-heading">
        <div className="home-rise">
          <Accent />
          <SectionHeading id="services-heading" title="Services" lede={homePage.servicesLede} />
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {homepageServices.map((service, index) => (
            <li
              key={service.id}
              className="home-rise"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <Link
                href={`/services/#${service.id}`}
                className="group flex min-h-14 items-center justify-between gap-4 rounded-xl bg-paper px-5 py-4 shadow-soft motion-safe:transition motion-safe:duration-300 hover:-translate-y-0.5 hover:text-brand-teal"
              >
                <span className="font-medium">{service.name}</span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 shrink-0 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection labelledBy="approach-heading">
        <div className="home-rise">
          <Accent />
          <SectionHeading id="approach-heading" title="The approach" lede={homePage.approach} />
        </div>
        <ul className="mt-8 flex flex-wrap gap-3">
          {values.map((value, index) => (
            <li
              key={value.name}
              className="home-rise"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="inline-flex min-h-11 items-center rounded-full bg-mist px-4 font-display text-sm font-medium">
                {value.name}
              </span>
            </li>
          ))}
        </ul>
        <ButtonLink href="/about" variant="secondary" className="mt-8">
          About Umodzi Impact Hub
        </ButtonLink>
      </PageSection>

      <CallToAction
        decorated
        title="Enquire about a team experience"
        description="Ask about a programme for your organisation, school, or community group."
        action={enquiryLink}
      />
    </>
  );
}
