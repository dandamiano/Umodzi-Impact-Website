import type { Metadata } from "next";
import { CallToAction } from "@/components/ui/CallToAction";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageSection } from "@/components/ui/PageSection";
import { publishedCaseStudies } from "@/data/experiences";
import { enquiryLink } from "@/lib/enquiry";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Client experiences published with permission.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageSection>
        <PageIntro
          title="Experiences"
          lede="Client projects are published here when permission and the details have been confirmed."
        />
        {publishedCaseStudies.length === 0 ? (
          <EmptyState className="mt-10">
            Approved client experiences have not been added yet.
          </EmptyState>
        ) : (
          <ul className="mt-10 grid gap-6">
            {publishedCaseStudies.map((study) => (
              <li key={study.id}>
                <article className="rounded-lg border border-brand-navy/15 bg-paper p-6 shadow-soft">
                  <h2 className="font-display text-2xl font-medium">{study.title}</h2>
                  <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="font-medium">Client</dt>
                      <dd>{study.client}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Date</dt>
                      <dd>{study.date}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Location</dt>
                      <dd>{study.location}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Participants</dt>
                      <dd>{study.participants}</dd>
                    </div>
                  </dl>
                  <h3 className="mt-6 font-display text-lg font-medium">Themes</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                    {study.themes.map((theme) => (
                      <li key={theme}>{theme}</li>
                    ))}
                  </ul>
                  {study.feedback ? (
                    <p className="mt-6 text-sm leading-relaxed">{study.feedback}</p>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        )}
      </PageSection>
      <CallToAction
        title="Plan your own experience"
        description="Enquire about a programme for your group."
        action={enquiryLink}
      />
    </>
  );
}
