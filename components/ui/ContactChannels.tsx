import { Container } from "@/components/ui/Container";
import { contactPage } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { ContactLink } from "@/data/contact";
import type { SocialChannel } from "@/types/content";

type ContactChannelsProps = {
  links: readonly ContactLink[];
  social: readonly (SocialChannel & { href: string })[];
  address?: string;
};

export function ContactChannels({
  links,
  social,
  address,
}: ContactChannelsProps) {
  const hasChannels = links.length > 0 || social.length > 0 || Boolean(address);

  if (!hasChannels) return null;

  return (
    <section
      aria-labelledby="contact-channels-heading"
      className="relative overflow-hidden bg-wash-orange py-12 sm:py-14"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute top-12 left-[12%] size-2 rotate-12 bg-brand-navy/25" />
        <span className="absolute top-24 right-[14%] size-10 rotate-6 rounded-full border border-dashed border-brand-orange/40" />
      </div>

      <Container className="relative">
        <header className="home-rise max-w-xl">
          <span
            className="gallery-stamp mb-4 inline-block rotate-[5deg] border border-brand-navy/25 bg-paper px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-navy uppercase"
            aria-hidden="true"
          >
            {contactPage.channelsStamp}
          </span>
          <h2
            id="contact-channels-heading"
            className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl"
          >
            {contactPage.channelsTitle}
          </h2>
          <p className="mt-3 max-w-md font-serif text-xl leading-snug text-brand-navy/75 sm:text-2xl">
            {contactPage.channelsLede}
          </p>
        </header>

        <ul className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
          {links.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "inline-flex border-2 border-brand-navy bg-paper px-4 py-2.5 font-display text-sm font-semibold text-brand-navy shadow-soft motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5 hover:rotate-0 hover:bg-wash-teal",
                  index % 2 === 0 ? "-rotate-2" : "rotate-1",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          {social.map((channel, index) => (
            <li key={channel.id}>
              <a
                href={channel.href}
                className={cn(
                  "inline-flex border-2 border-brand-teal bg-paper px-4 py-2.5 font-display text-sm font-semibold text-brand-teal shadow-soft motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5 hover:rotate-0 hover:bg-wash-green",
                  index % 2 === 0 ? "rotate-2" : "-rotate-1",
                )}
              >
                {channel.label}
              </a>
            </li>
          ))}
          {address ? (
            <li className="w-full pt-2">
              <p className="max-w-sm -rotate-1 border-2 border-dashed border-brand-navy/20 bg-paper px-4 py-3 text-sm leading-relaxed text-brand-navy shadow-soft">
                {address}
              </p>
            </li>
          ) : null}
        </ul>
      </Container>
    </section>
  );
}
