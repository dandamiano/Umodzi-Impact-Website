import { cn } from "@/lib/utils";

type EmptyStateProps = {
  children: React.ReactNode;
  className?: string;
  align?: "center" | "start";
};

export function EmptyState({
  children,
  className,
  align = "center",
}: EmptyStateProps) {
  return (
    <p
      className={cn(
        "rounded-lg border border-dashed border-brand-navy/20 bg-mist px-6 py-16 leading-relaxed",
        align === "center" && "text-center",
        align === "start" && "max-w-2xl",
        className,
      )}
    >
      {children}
    </p>
  );
}
