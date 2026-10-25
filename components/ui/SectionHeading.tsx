type SectionHeadingProps = {
  title: string;
  lede?: string;
  id?: string;
  as?: "h2" | "h3";
};

export function SectionHeading({
  title,
  lede,
  id,
  as = "h2",
}: SectionHeadingProps) {
  const Tag = as;

  return (
    <div className="max-w-2xl">
      <Tag id={id} className="text-3xl font-medium tracking-tight sm:text-4xl">
        {title}
      </Tag>
      {lede ? (
        <p className="mt-3 text-base leading-relaxed text-brand-teal sm:text-lg">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
