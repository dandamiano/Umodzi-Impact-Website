import { values } from "@/data/values";
import { cn } from "@/lib/utils";

type ValuesListProps = {
  namesOnly?: boolean;
};

export function ValuesList({ namesOnly = false }: ValuesListProps) {
  if (namesOnly) {
    return (
      <ul className="mt-8 flex flex-wrap gap-2">
        {values.map((value) => (
          <li
            key={value.name}
            className="gallery-stamp border border-brand-navy/15 bg-paper px-3 py-1.5 font-display text-sm font-medium text-brand-navy"
          >
            {value.name}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
      {values.map((value, index) => {
        const isGoodVibes = value.name === "Good Vibes";

        return (
          <li
            key={value.name}
            className={cn(
              "home-rise group relative overflow-hidden bg-paper p-5 sm:p-6",
              "motion-safe:transition-transform motion-safe:duration-300",
              index % 2 === 0
                ? "motion-safe:hover:-rotate-1"
                : "motion-safe:hover:rotate-1",
            )}
            style={{ animationDelay: `${60 + index * 55}ms` }}
          >
            <span
              className={cn(
                "gallery-tape absolute -top-1 z-10 h-2.5 w-10",
                index % 2 === 0 ? "left-[20%] -rotate-6" : "right-[16%] rotate-[8deg]",
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-1",
                isGoodVibes ? "bg-brand-orange" : "bg-brand-green/80",
              )}
              aria-hidden="true"
            />

            <div className="relative flex gap-3 sm:gap-4">
              <span
                aria-hidden="true"
                className={cn(
                  "mt-0.5 font-display text-sm tabular-nums",
                  isGoodVibes ? "text-brand-orange" : "text-brand-green",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h3
                  className={cn(
                    "font-display text-lg font-medium tracking-tight sm:text-xl",
                    isGoodVibes && "text-brand-navy",
                  )}
                >
                  {isGoodVibes ? (
                    <span className="gallery-stamp inline-block rotate-[-3deg] border border-brand-orange/70 px-2 py-0.5 text-brand-orange">
                      {value.name}
                    </span>
                  ) : (
                    value.name
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/70 sm:text-[0.9375rem]">
                  {value.description}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
