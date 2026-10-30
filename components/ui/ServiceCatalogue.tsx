import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ServicePackagesBridge } from "@/components/ui/ServicePackagesBridge";
import { ServicePathwayNav } from "@/components/ui/ServicePathwayNav";
import { ServicePathways } from "@/components/ui/ServicePathways";
import type { ServiceGroup } from "@/data/services";
import type { GalleryItem } from "@/types/content";

type ServiceCatalogueProps = {
  title: string;
  lede: string;
  groups: readonly ServiceGroup[];
  heroPhoto?: GalleryItem;
  packagesHref?: string;
};

export function ServiceCatalogue({
  title,
  lede,
  groups,
  heroPhoto,
  packagesHref = "/packages",
}: ServiceCatalogueProps) {
  const serviceCount = groups.reduce((total, group) => total + group.items.length, 0);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-mist">
        <div
          aria-hidden="true"
          className="home-dots pointer-events-none absolute top-10 right-8 hidden h-24 w-28 opacity-35 sm:block"
        />

        <Container className="relative py-14 sm:py-16 lg:py-20">
          <div className="home-rise">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services" },
              ]}
            />
          </div>

          <div className="mt-2 grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <header className="home-rise max-w-xl" style={{ animationDelay: "60ms" }}>
              <span
                className="home-draw mb-4 block h-1 w-12 bg-brand-orange"
                aria-hidden="true"
              />
              <p className="font-display text-xs font-medium tracking-[0.16em] text-brand-teal uppercase">
                What we deliver
              </p>
              <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
                {title}
              </h1>
              <p className="mt-5 max-w-md font-serif text-xl leading-relaxed text-brand-teal sm:text-2xl">
                {lede}
              </p>
              <p className="mt-5 font-display text-sm text-brand-navy/55">
                <span className="tabular-nums text-brand-navy">{serviceCount}</span>{" "}
                services
                <span aria-hidden="true" className="mx-2 text-brand-orange">
                  ·
                </span>
                <span className="tabular-nums text-brand-navy">{groups.length}</span>{" "}
                pathways
              </p>
            </header>

            {heroPhoto ? (
              <div
                className="home-rise relative min-w-0"
                style={{ animationDelay: "120ms" }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-8 top-4 hidden h-44 w-44 rounded-full border border-brand-teal/25 lg:block"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 -bottom-4 hidden h-36 w-36 rounded-full border border-brand-teal/20 lg:block"
                />
                <div className="relative lg:pt-5 lg:pl-5">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 hidden h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] rounded-[1.75rem] border border-brand-teal/45 lg:block"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-1.5 -bottom-1.5 z-10 hidden size-3.5 bg-brand-orange sm:block"
                  />
                  <div className="relative overflow-hidden rounded-3xl bg-paper shadow-soft ring-1 ring-brand-navy/10">
                    <Image
                      src={heroPhoto.src}
                      alt={heroPhoto.alt}
                      width={heroPhoto.width}
                      height={heroPhoto.height}
                      sizes="(min-width: 1024px) 44vw, 100vw"
                      priority
                      className="home-settle aspect-[16/11] h-auto w-full object-cover object-[center_35%]"
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <ServicePathwayNav groups={groups} />
        </Container>
      </section>

      <section className="relative bg-paper py-16 sm:py-20">
        <Container>
          <ServicePathways groups={groups} />
          <ServicePackagesBridge href={packagesHref} />
        </Container>
      </section>
    </>
  );
}
