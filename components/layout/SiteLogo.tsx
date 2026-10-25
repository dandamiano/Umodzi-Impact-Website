import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  size?: "header" | "footer";
  priority?: boolean;
  className?: string;
};

const imageSizes = {
  header: "h-16 w-auto max-w-[4.75rem] sm:h-20 sm:max-w-[6rem]",
  footer: "h-14 w-auto max-w-[4.25rem] sm:h-16 sm:max-w-[5rem]",
} as const;

export function SiteLogo({
  size = "header",
  priority = false,
  className,
}: SiteLogoProps) {
  return (
    <Link href="/" className={cn("inline-flex min-w-0 max-w-full", className)}>
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
