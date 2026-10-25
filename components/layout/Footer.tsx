import Link from "next/link";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { Container } from "@/components/ui/Container";
import { contactDetails, contactLinks, publishedSocialChannels } from "@/data/contact";
import { availableNavigation } from "@/data/navigation";
import { values } from "@/data/values";
import { site } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  const contacts = contactLinks(contactDetails);

  return (
    <footer className="mt-auto border-t border-brand-navy/10 bg-mist">
      <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_minmax(11rem,0.7fr)_minmax(11rem,0.8fr)]">
        <div className="max-w-md md:col-span-2 lg:col-span-1">
          <SiteLogo size="footer" />
          <p className="mt-4 text-sm leading-relaxed">{site.description}</p>
          {contacts.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {contacts.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm underline-offset-4 hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          {contactDetails.address ? (
            <p className="mt-4 text-sm leading-relaxed">{contactDetails.address}</p>
          ) : null}
          {publishedSocialChannels.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-4">
              {publishedSocialChannels.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    className="text-sm underline-offset-4 hover:underline"
                  >
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-medium">Explore</h2>
          <ul className="mt-3 space-y-2">
            {availableNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm underline-offset-4 hover:text-brand-teal hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-medium">Values</h2>
          <ul className="mt-3 space-y-2">
            {values.map((value) => (
              <li key={value.name} className="text-sm">
                {value.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="border-t border-brand-navy/10 py-4">
        <p className="text-sm text-brand-teal">
          © {year} {site.name}
        </p>
      </Container>
    </footer>
  );
}
