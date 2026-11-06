import { Mail, Phone } from "lucide-react";
import { SocialIconLinks } from "@/components/layout/SocialIcons";
import { Container } from "@/components/ui/Container";
import {
  contactDetails,
  contactLinks,
  publishedSocialChannels,
} from "@/data/contact";
import { cn } from "@/lib/utils";

export function TopBar() {
  const contacts = contactLinks(contactDetails).filter(
    (item) =>
      item.href.startsWith("tel:") || item.href.startsWith("mailto:"),
  );
  const hasSocial = publishedSocialChannels.length > 0;

  if (contacts.length === 0 && !hasSocial) return null;

  return (
    <div className="border-b border-white/10 bg-brand-navy text-white">
      <Container
        className={cn(
          "flex min-h-10 items-center gap-2 py-0.5 text-xs sm:min-h-9 sm:gap-4 sm:py-1.5 sm:text-[0.8125rem]",
          contacts.length > 0 ? "justify-between" : "justify-end",
        )}
      >
        {contacts.length > 0 ? (
          <ul className="flex min-w-0 items-center gap-0.5 sm:gap-1">
            {contacts.map((item) => {
              const isPhone = item.href.startsWith("tel:");
              const Icon = isPhone ? Phone : Mail;

              return (
                <li key={item.href} className="min-w-0">
                  <a
                    href={item.href}
                    className={cn(
                      "inline-flex min-h-9 max-w-full items-center gap-1.5 rounded-md px-1.5 text-white/90 underline-offset-2 hover:bg-white/10 hover:text-brand-orange sm:px-2 sm:hover:underline",
                      !isPhone && "sm:gap-1.5",
                    )}
                  >
                    <Icon aria-hidden="true" className="size-3.5 shrink-0" />
                    <span
                      className={cn(
                        "truncate",
                        // Keep the bar to one row on phones: email is icon-only.
                        !isPhone && "sr-only sm:not-sr-only",
                      )}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        ) : null}

        {hasSocial ? (
          <SocialIconLinks
            channels={publishedSocialChannels}
            className="shrink-0 gap-0.5"
            linkClassName="size-9 hover:bg-white/10 hover:text-brand-orange sm:size-8"
          />
        ) : null}
      </Container>
    </div>
  );
}
