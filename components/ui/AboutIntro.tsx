import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { GalleryItem } from "@/types/content";

type AboutIntroProps = {
  title: string;
  lede: string;
  current?: string;
  photo?: GalleryItem;
  enquire: {
    href: string;
    label: string;
  };
};

export function AboutIntro({
  title,
  lede,
  current = "About",
  photo,
  enquire,
}: AboutIntroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy">
      {photo ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <Image
            src={photo.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="home-settle object-cover object-[center_36%]"
          />
          {/* Let more photo show; deepen only on the copy side */}
          <div className="absolute inset-0 bg-brand-navy/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-brand-navy/25" />
        </div>
      ) : null}

      <div
        aria-hidden="true"
        className="home-dots pointer-events-none absolute top-10 right-8 hidden h-24 w-28 opacity-20 sm:block"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, white 55%, transparent) 1.15px, transparent 1.15px)",
        }}
      />

      <div className="relative mx-auto flex min-h-[26rem] max-w-7xl flex-col justify-end px-4 pt-8 pb-16 sm:min-h-[30rem] sm:px-6 sm:pt-10 sm:pb-20 lg:min-h-[34rem] lg:max-w-[90rem] lg:px-10 lg:pb-24 xl:px-12">
        <div className="home-rise mb-8 text-white/55 [&_nav]:mb-0 [&_a]:text-white/55 [&_a:hover]:text-white [&_span]:text-white/55">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: current },
            ]}
          />
        </div>

        <div className="relative mt-auto flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <header className="home-rise relative max-w-2xl">
            <span
              className="home-draw mb-4 block h-1 w-12 bg-brand-orange"
              aria-hidden="true"
            />
            <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
              {title}
            </h1>
            <p className="mt-4 max-w-xl font-serif text-xl leading-relaxed text-white/90 sm:mt-5 sm:text-[1.65rem] sm:leading-snug">
              {lede}
            </p>
          </header>

          <div
            className="home-rise shrink-0 lg:pb-1"
            style={{ animationDelay: "90ms" }}
          >
            <Link
              href={enquire.href}
              className="group inline-flex min-h-11 items-center gap-2 border-b border-white/35 pb-1 font-display text-sm font-medium tracking-wide text-white motion-safe:transition-colors motion-safe:duration-300 hover:border-brand-orange hover:text-brand-orange"
            >
              {enquire.label}
              <ArrowRight
                aria-hidden="true"
                className="size-3.5 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
