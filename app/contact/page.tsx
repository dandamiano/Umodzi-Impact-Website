import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageSection } from "@/components/ui/PageSection";
import {
  contactDetails,
  contactLinks,
  publishedSocialChannels,
} from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquire about a team-building experience with Umodzi Impact Hub.",
};

export default function ContactPage() {
  const links = contactLinks(contactDetails);
  const hasChannels =
    links.length > 0 ||
    publishedSocialChannels.length > 0 ||
    Boolean(contactDetails.address);

  return (
    <PageSection>
      <PageIntro
        title="Contact"
        lede="Enquire about a team-building or experiential learning programme for your group."
      />
      {hasChannels ? (
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {links.length > 0 ? (
            <section aria-labelledby="direct-contact-heading">
              <h2 id="direct-contact-heading" className="font-display text-xl font-medium">
                Speak with us
              </h2>
              <ul className="mt-4 space-y-3">
                {links.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="underline-offset-4 hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {contactDetails.address ? (
            <section aria-labelledby="address-heading">
              <h2 id="address-heading" className="font-display text-xl font-medium">
                Visit
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed">{contactDetails.address}</p>
            </section>
          ) : null}
          {publishedSocialChannels.length > 0 ? (
            <section aria-labelledby="social-heading">
              <h2 id="social-heading" className="font-display text-xl font-medium">
                Social
              </h2>
              <ul className="mt-4 space-y-3">
                {publishedSocialChannels.map((channel) => (
                  <li key={channel.id}>
                    <a
                      href={channel.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {channel.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      ) : (
        <EmptyState align="start" className="mt-10">
          Telephone, WhatsApp, email, and social links will be listed here when
          they are confirmed. An enquiry form is not available on this site.
        </EmptyState>
      )}
    </PageSection>
  );
}
