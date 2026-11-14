import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "inverse";
type ButtonSize = "default" | "large";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

/**
 * Scrapbook stamp buttons — slight tilt, inset stamp edge, soft offset
 * shadow (like a glued sticker). Hover settles the tilt and lifts.
 */
function buttonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    "gallery-stamp inline-flex items-center justify-center rounded-md text-center font-medium font-display",
    "-rotate-1 shadow-[3px_4px_0_0_color-mix(in_srgb,var(--color-brand-navy)_18%,transparent)]",
    "motion-safe:transition-[transform,colors,box-shadow] motion-safe:duration-300",
    "hover:rotate-0 hover:-translate-y-0.5 hover:shadow-[4px_6px_0_0_color-mix(in_srgb,var(--color-brand-navy)_22%,transparent)]",
    "active:translate-y-0 active:shadow-[2px_2px_0_0_color-mix(in_srgb,var(--color-brand-navy)_18%,transparent)]",
    "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:rotate-[-1deg]",
    size === "large" ? "min-h-12 px-6 py-3 text-base" : "min-h-11 px-4 py-2 text-sm",
    variant === "primary" &&
      "border-2 border-brand-navy/15 bg-brand-orange text-brand-navy hover:bg-[#e07a00]",
    variant === "secondary" &&
      "border-2 border-dashed border-brand-orange bg-paper text-brand-navy hover:bg-wash-orange",
    variant === "inverse" &&
      "border-2 border-brand-navy/20 bg-paper text-brand-navy hover:border-brand-navy hover:bg-brand-navy hover:text-white",
    className,
  );
}

export function Button({
  variant = "primary",
  size = "default",
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonClassName(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "default",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClassName(variant, size, className)}>
      {children}
    </Link>
  );
}
