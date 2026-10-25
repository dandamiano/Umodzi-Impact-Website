import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHeading } from "@/components/ui/PageHeading";

type PageIntroProps = {
  title: string;
  lede?: string;
  current?: string;
};

export function PageIntro({ title, lede, current = title }: PageIntroProps) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: current },
        ]}
      />
      <PageHeading title={title} lede={lede} />
    </>
  );
}
