type PageHeadingProps = {
  title: string;
  lede?: string;
};

export function PageHeading({ title, lede }: PageHeadingProps) {
  return (
    <header className="max-w-3xl">
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">{title}</h1>
      {lede ? (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">{lede}</p>
      ) : null}
    </header>
  );
}
