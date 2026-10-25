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
    <ul className="mt-8 grid gap-8 sm:grid-cols-2">
      {values.map((value) => (
        <li key={value.name}>
          <h3 className="font-display text-lg font-medium">{value.name}</h3>
          <p className="mt-2 text-sm leading-relaxed">{value.description}</p>
        </li>
      ))}
    </ul>
  );
}
