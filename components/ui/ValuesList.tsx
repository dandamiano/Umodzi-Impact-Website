import { values } from "@/data/values";

type ValuesListProps = {
  namesOnly?: boolean;
};

export function ValuesList({ namesOnly = false }: ValuesListProps) {
  if (namesOnly) {
    return (
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
        {values.map((value) => (
          <li key={value.name} className="font-display text-base font-medium">
            {value.name}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="mt-10 grid gap-0 sm:grid-cols-2 sm:gap-x-10 lg:gap-x-14">
      {values.map((value, index) => (
        <li
          key={value.name}
          className="home-rise group border-t border-brand-green/25 py-6 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
          style={{ animationDelay: `${60 + index * 55}ms` }}
        >
          <div className="flex gap-4 sm:gap-5 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
            <span
              aria-hidden="true"
              className="mt-0.5 font-display text-sm tabular-nums text-brand-green motion-safe:transition-colors motion-safe:duration-300 group-hover:text-brand-orange"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1 border-l border-brand-green/30 pl-4 sm:pl-5">
              <h3 className="font-display text-lg font-medium tracking-tight sm:text-xl">
                {value.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-teal sm:text-[0.9375rem]">
                {value.description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
