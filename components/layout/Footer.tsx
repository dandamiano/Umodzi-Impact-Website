import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { Container } from "@/components/ui/Container";
import { contactDetails, contactLinks, publishedSocialChannels } from "@/data/contact";
import { availableNavigation } from "@/data/navigation";
import { values } from "@/data/values";
import { site } from "@/lib/constants";
import { enquiryLink } from "@/lib/enquiry";

export function Footer() {
  const year = new Date().getFullYear();
  const contacts = contactLinks(contactDetails);

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-brand-navy/10 bg-paper">
      <div className="h-1 bg-brand-orange" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full border border-brand-teal/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-24 h-48 w-48 rounded-full bg-mist"
      />
      <div
        aria-hidden="true"
        className="home-dots pointer-events-none absolute top-12 right-8 hidden h-24 w-28 opacity-40 lg:block"
      />

      <Container className="relative grid gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-14">
        <div className="max-w-md">
          <SiteLogo size="footer" />
          <p className="mt-2 font-display text-lg font-medium tracking-tight text-brand-navy">
            {site.wordmark}
          </p>
          <span
            className="mt-3 block h-1 w-10 bg-brand-orange"
            aria-hidden="true"
          />
          <p className="mt-4 text-sm leading-relaxed text-brand-teal">
            Malawi-based team building and experiential learning for
            organisations, schools, and community groups.
          </p>

          <Link
            href={enquiryLink.href}
            className="group mt-6 inline-flex min-h-11 items-center gap-2 font-display text-sm font-medium text-brand-navy hover:text-brand-teal"
          >
            Start an enquiry
            <ArrowRight
              aria-hidden="true"
              className="size-4 motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
            />
          </Link>

          {contacts.length > 0 ? (
            <ul className="mt-6 space-y-2 border-t border-brand-navy/10 pt-5">
              {contacts.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-brand-navy underline-offset-4 hover:text-brand-teal hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}

          {contactDetails.address ? (
            <p className="mt-4 text-sm leading-relaxed text-brand-teal">
              {contactDetails.address}
            </p>
          ) : null}

          {publishedSocialChannels.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {publishedSocialChannels.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    className="text-sm font-medium text-brand-navy underline-offset-4 hover:text-brand-teal hover:underline"
                  >
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-xs font-medium tracking-[0.16em] text-brand-teal uppercase">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {availableNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-sm text-brand-navy hover:text-brand-teal"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-0 bg-brand-orange motion-safe:transition-all motion-safe:duration-300 group-hover:w-3"
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-xs font-medium tracking-[0.16em] text-brand-green uppercase">
            Values
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {values.map((value) => (
              <li
                key={value.name}
                className="flex items-start gap-2 text-sm text-brand-navy"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green"
                />
                {value.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-brand-navy/10 bg-mist">
        <Container className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-brand-teal">
            © {year} {site.name}
          </p>
          <p className="text-sm text-brand-teal/80">Based in Malawi</p>
        </Container>
      </div>
    </footer>
  );
}
