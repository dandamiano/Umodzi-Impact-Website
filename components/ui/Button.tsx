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

function buttonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center rounded-md text-center font-medium font-display motion-safe:transition-colors",
    "disabled:cursor-not-allowed disabled:opacity-60",
    size === "large" ? "min-h-12 px-6 py-3 text-base" : "min-h-11 px-4 py-2 text-sm",
    variant === "primary" && "bg-brand-navy text-white hover:bg-brand-teal",
    variant === "secondary" &&
      "border border-brand-navy bg-paper text-brand-navy hover:bg-mist",
    variant === "inverse" &&
      "bg-paper text-brand-navy hover:bg-brand-teal hover:text-white",
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
