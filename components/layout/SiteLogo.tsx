import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  size?: "header" | "footer";
  /** White plate behind the mark — keeps the hanging logo readable on dark hero. */
  plate?: boolean;
  priority?: boolean;
  className?: string;
};

const imageSizes = {
  /** Larger crest — may hang below the app bar bottom border only. */
  header:
    "h-[3.75rem] w-auto max-w-[4.5rem] object-contain object-left sm:h-[4.5rem] sm:max-w-[5.5rem] lg:h-20 lg:max-w-[6.25rem]",
  footer: "h-14 w-auto max-w-[4.25rem] sm:h-16 sm:max-w-[5rem]",
} as const;

export function SiteLogo({
  size = "header",
  plate = false,
  priority = false,
  className,
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-w-0 max-w-full",
        plate &&
          "rounded-md bg-paper px-1.5 pt-1 pb-1.5 shadow-soft ring-1 ring-brand-navy/10",
        className,
      )}
    >
      <Image
        src="/brand/logo-blue.png"
        alt={site.wordmark}
        width={800}
        height={739}
        priority={priority}
        className={imageSizes[size]}
      />
    </Link>
  );
}
