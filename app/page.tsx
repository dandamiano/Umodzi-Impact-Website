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
      <PageSection className="overflow-hidden bg-mist py-12 sm:py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="home-rise">
            <p className="font-display text-sm font-medium tracking-wide text-brand-teal">
              {site.name}
            </p>
            <h1 className="mt-4 max-w-xl text-5xl font-medium tracking-tight sm:text-6xl">
              {homePage.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">{homePage.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={enquiryLink.href}>{enquiryLink.label}</ButtonLink>
              <ButtonLink href="/packages" variant="secondary">
                View packages
              </ButtonLink>
            </div>
          </div>
          {heroPhoto ? (
            <div className="home-rise relative min-w-0" style={{ animationDelay: "140ms" }}>
              <div
                className="absolute -bottom-3 -right-3 hidden h-[92%] w-[92%] rounded-3xl bg-brand-orange sm:block"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-3xl shadow-soft">
                <GalleryImage
                  image={heroPhoto}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="home-settle aspect-[4/3] h-auto w-full object-cover"
                />
              </div>
            </div>
          ) : null}
        </div>
      </PageSection>

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
