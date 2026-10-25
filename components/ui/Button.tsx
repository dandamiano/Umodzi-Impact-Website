import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "inverse";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

function buttonClassName(variant: ButtonVariant, className?: string) {
  return cn(
    "inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-center text-sm font-medium font-display motion-safe:transition-colors",
    "disabled:cursor-not-allowed disabled:opacity-60",
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
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonClassName(variant, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClassName(variant, className)}>
      {children}
    </Link>
  );
}
