import type { SocialChannel } from "@/types/content";
import { cn } from "@/lib/utils";

type SocialIconProps = {
  className?: string;
};

function FacebookIcon({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M14 13.5h2.5l.5-3H14V8.5c0-.8.2-1.3 1.4-1.3H17V4.1C16.4 4 15.5 4 14.6 4 12.3 4 10.8 5.4 10.8 7.9V10.5H8.5v3h2.3V20h3.2v-6.5Z" />
    </svg>
  );
}

function TikTokIcon({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.6 8.3a6.3 6.3 0 0 1-3.7-1.2v7.1a5.3 5.3 0 1 1-4.5-5.2v2.7a2.6 2.6 0 1 0 1.8 2.5V2.5h2.7a6.3 6.3 0 0 0 3.7 3.5v2.3Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M6.9 8.7H4.1V20h2.8V8.7ZM5.5 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 20h-2.8v-5.6c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20H10.7s0-9.3 0-10.3h2.8v1.5c.4-.6 1.1-1.6 2.8-1.6 2 0 3.7 1.3 3.7 4.2V20Z" />
    </svg>
  );
}

const icons = {
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  linkedin: LinkedInIcon,
} as const;

type SocialIconLinksProps = {
  channels: readonly (SocialChannel & { href: string })[];
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
};

export function SocialIconLinks({
  channels,
  className,
  linkClassName,
  iconClassName,
}: SocialIconLinksProps) {
  if (channels.length === 0) return null;

  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {channels.map((channel) => {
        const Icon = icons[channel.id];

        return (
          <li key={channel.id}>
            <a
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={channel.label}
              className={cn(
                "inline-flex size-8 items-center justify-center rounded-md text-current motion-safe:transition-colors",
                linkClassName,
              )}
            >
              <Icon className={cn("size-4", iconClassName)} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
