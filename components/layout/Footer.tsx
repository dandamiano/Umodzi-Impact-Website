import Link from "next/link";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { Container } from "@/components/ui/Container";
import { contactDetails, contactLinks, publishedSocialChannels } from "@/data/contact";
import { availableNavigation } from "@/data/navigation";
import { footer, site } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  const contacts = contactLinks(contactDetails);
  const exploreLinks = availableNavigation.filter((item) => item.href !== "/");

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-brand-navy/10 bg-paper">
      <div className="h-1 bg-brand-orange" aria-hidden="true" />

      <Container className="relative grid gap-10 py-12 sm:gap-12 sm:py-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.7fr)_minmax(0,0.9fr)] lg:gap-14">
        <div className="max-w-sm">
          <SiteLogo size="footer" />
          <p className="mt-3 font-display text-base font-medium tracking-tight text-brand-navy">
            {site.wordmark}
          </p>
          <p className="mt-2 font-serif text-lg leading-snug text-brand-navy/75">
            {footer.punch}
          </p>

          <Link
            href={footer.cta.href}
            className="mt-5 inline-flex min-h-11 items-center font-display text-sm font-medium text-brand-navy underline decoration-brand-orange/80 underline-offset-4 motion-safe:transition-colors hover:text-brand-teal"
          >
            {footer.cta.label}
          </Link>

          {contacts.length > 0 ? (
            <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-brand-navy/10 pt-3">
              {contacts.map((item, index) => (
                <li key={item.href} className="flex items-center gap-x-3">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-brand-orange/70">
                      ·
                    </span>
                  ) : null}
                  <a
                    href={item.href}
                    className="text-sm text-brand-navy/70 underline-offset-4 hover:text-brand-teal hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}

          {contactDetails.address ? (
            <p className="mt-2 text-sm leading-relaxed text-brand-navy/60">
              {contactDetails.address}
            </p>
          ) : null}
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase">
            {footer.exploreStamp}
          </h2>
          <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 sm:flex-col sm:items-start sm:gap-2">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-brand-navy motion-safe:transition-colors hover:text-brand-teal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase">
            {footer.valuesStamp}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {footer.valueHighlights.map((name) => (
              <li
                key={name}
                className="border border-brand-navy/12 bg-wash-green/70 px-2.5 py-1 font-display text-xs font-medium text-brand-navy"
              >
                {name}
              </li>
            ))}
          </ul>
          <Link
            href={footer.valuesAction.href}
            className="mt-4 inline-flex text-sm font-medium text-brand-navy/65 underline-offset-4 hover:text-brand-teal hover:underline"
          >
            {footer.valuesAction.label}
          </Link>

          {publishedSocialChannels.length > 0 ? (
            <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-brand-navy/10 pt-3">
              {publishedSocialChannels.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    className="text-sm font-medium text-brand-navy/70 underline-offset-4 hover:text-brand-teal hover:underline"
                  >
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>

      <div className="border-t border-brand-navy/10 bg-mist">
        <Container className="flex flex-col gap-1.5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-brand-navy/65">
            © {year} {site.wordmark}
            <span aria-hidden="true" className="mx-2 text-brand-orange/80">
              ·
            </span>
            <span className="text-brand-navy/55">{footer.location}</span>
          </p>
          <p className="font-serif text-sm text-brand-teal/80">{footer.wink}</p>
        </Container>
      </div>
    </footer>
  );
}
