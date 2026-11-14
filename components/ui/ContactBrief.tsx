"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactPage } from "@/lib/constants";
import { cn } from "@/lib/utils";

const VIBES = contactPage.vibes;

const fieldClass =
  "mt-1.5 w-full border-2 border-brand-navy/15 bg-paper px-3 py-2 font-sans text-base text-brand-navy outline-none motion-safe:transition-colors placeholder:text-brand-navy/35 focus:border-brand-teal focus-visible:border-brand-teal";

const fieldErrorClass = "border-brand-orange focus:border-brand-orange";

type ContactBriefProps = {
  enquiryEmail?: string;
};

type BriefState = {
  name: string;
  organisation: string;
  size: string;
  vibes: string[];
  goal: string;
  email: string;
  phone: string;
};

type FieldErrors = Partial<
  Record<"name" | "size" | "vibes" | "goal" | "contact", string>
>;

const emptyBrief: BriefState = {
  name: "",
  organisation: "",
  size: "",
  vibes: [],
  goal: "",
  email: "",
  phone: "",
};

function composeBrief(brief: BriefState) {
  const vibeLabels = brief.vibes
    .map((id) => VIBES.find((vibe) => vibe.id === id)?.label ?? id)
    .join(", ");

  return [
    "Umodzi Impact — mission brief",
    "",
    `Name: ${brief.name}`,
    brief.organisation ? `Organisation: ${brief.organisation}` : null,
    `Group size: ${brief.size}`,
    `Vibe: ${vibeLabels || "—"}`,
    `Goal: ${brief.goal}`,
    brief.email ? `Email: ${brief.email}` : null,
    brief.phone ? `WhatsApp / phone: ${brief.phone}` : null,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}

function validateBrief(brief: BriefState): FieldErrors {
  const errors: FieldErrors = {};

  if (!brief.name.trim()) errors.name = contactPage.errors.name;
  if (!brief.size.trim()) errors.size = contactPage.errors.size;
  if (brief.vibes.length === 0) errors.vibes = contactPage.errors.vibes;
  if (!brief.goal.trim()) errors.goal = contactPage.errors.goal;
  if (!brief.email.trim() && !brief.phone.trim()) {
    errors.contact = contactPage.errors.contact;
  }

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1 text-sm text-brand-orange">
      {message}
    </p>
  );
}

export function ContactBrief({ enquiryEmail }: ContactBriefProps) {
  const [brief, setBrief] = useState<BriefState>(emptyBrief);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  const message = useMemo(() => composeBrief(brief), [brief]);

  const toggleVibe = (id: string) => {
    setBrief((current) => {
      const exists = current.vibes.includes(id);
      return {
        ...current,
        vibes: exists
          ? current.vibes.filter((vibe) => vibe !== id)
          : [...current.vibes, id],
      };
    });
    setErrors((current) => {
      if (!current.vibes) return current;
      const next = { ...current };
      delete next.vibes;
      return next;
    });
  };

  const clearFieldError = (key: keyof FieldErrors) => {
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting || submitted) return;

    setFormError(null);
    const nextErrors = validateBrief(brief);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      const focusId =
        firstKey === "vibes"
          ? "contact-vibe-connect"
          : firstKey === "contact"
            ? "contact-email"
            : `contact-${firstKey}`;
      document.getElementById(focusId)?.focus();
      return;
    }

    setSubmitting(true);

    try {
      setSubmitted(true);
      setCopied(false);

      if (enquiryEmail) {
        const subject = encodeURIComponent(
          `Team brief from ${brief.name.trim()}`,
        );
        const body = encodeURIComponent(composeBrief(brief));
        window.location.href = `mailto:${enquiryEmail}?subject=${subject}&body=${body}`;
      }
    } catch {
      setSubmitted(false);
      setFormError(contactPage.errors.submit);
    } finally {
      setSubmitting(false);
    }
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
      setFormError(contactPage.errors.submit);
    }
  };

  return (
    <section
      id="mission-brief"
      aria-labelledby="mission-brief-heading"
      className="relative z-0 -mt-px scroll-mt-28 overflow-hidden bg-paper pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-dots absolute inset-0 opacity-[0.16]" />
        <span className="absolute top-12 right-[10%] size-2 rotate-12 bg-brand-orange/55" />
      </div>

      <Container className="relative">
        <header className="home-rise max-w-xl">
          <span
            className="gallery-stamp mb-3 inline-block rotate-[-5deg] border border-brand-orange/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold tracking-[0.16em] text-brand-orange uppercase"
            aria-hidden="true"
          >
            {contactPage.briefStamp}
          </span>
          <h2
            id="mission-brief-heading"
            className="relative w-fit font-display text-2xl font-medium tracking-tight text-brand-navy sm:text-3xl"
          >
            {contactPage.briefTitle}
            <svg
              className="gallery-scribble pointer-events-none absolute -bottom-1 left-0 h-2.5 w-[65%] text-brand-orange"
              viewBox="0 0 180 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 6c18-4 36 3 54-1s36-3 54 2 36 1 52-2"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
              />
            </svg>
          </h2>
          <p className="mt-3 max-w-md font-serif text-lg leading-snug text-brand-navy/70 sm:text-xl">
            {contactPage.briefLede}
          </p>
        </header>

        <div className="gallery-rise relative mx-auto mt-7 max-w-xl sm:mt-8">
          <span
            aria-hidden="true"
            className="gallery-tape absolute -top-2 left-8 z-20 -rotate-6 sm:left-12"
          />
          <span
            aria-hidden="true"
            className="gallery-tape absolute -top-1 right-8 z-20 rotate-6 sm:right-12"
          />

          <div className="relative border-2 border-brand-navy/10 bg-paper p-4 shadow-soft sm:p-6">
            {submitted ? (
              <div
                className="space-y-4 motion-safe:animate-[home-rise_0.7s_cubic-bezier(0.22,1,0.36,1)_both]"
                role="status"
                aria-live="polite"
              >
                <p className="gallery-stamp inline-block rotate-[-4deg] border-2 border-brand-orange/70 bg-wash-orange px-3 py-1 font-display text-xs font-semibold tracking-[0.16em] text-brand-navy uppercase">
                  {contactPage.successStamp}
                </p>
                <h3 className="font-display text-2xl font-medium tracking-tight text-brand-navy">
                  {contactPage.successTitle}
                </h3>
                <p className="text-sm leading-relaxed text-brand-navy/80 sm:text-base">
                  {contactPage.successBody}
                </p>
                <p className="text-sm leading-relaxed text-brand-navy/70">
                  {enquiryEmail ? (
                    <>
                      {contactPage.successWithEmail} {contactPage.successFollowUp}
                    </>
                  ) : (
                    contactPage.successWithoutEmail
                  )}
                </p>
                <pre className="overflow-x-auto whitespace-pre-wrap border-2 border-dashed border-brand-navy/20 bg-wash-teal/50 p-3 font-sans text-sm leading-relaxed text-brand-navy">
                  {message}
                </pre>
                {formError ? (
                  <p
                    role="alert"
                    className="border-2 border-brand-orange/50 bg-wash-orange px-3 py-2 text-sm text-brand-navy"
                  >
                    {formError}
                  </p>
                ) : null}
                <div className="flex flex-wrap gap-3">
                  <Button type="button" variant="primary" onClick={copyBrief}>
                    {copied ? contactPage.copiedLabel : contactPage.copyLabel}
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setBrief(emptyBrief);
                      setCopied(false);
                      setErrors({});
                      setFormError(null);
                    }}
                  >
                    {contactPage.resetLabel}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr_1fr]">
                  <label className="block min-w-0" htmlFor="contact-name">
                    <span className="font-display text-xs font-medium text-brand-navy sm:text-sm">
                      {contactPage.nameLabel}{" "}
                      <span className="text-brand-orange" aria-hidden="true">
                        *
                      </span>
                    </span>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      value={brief.name}
                      onChange={(event) => {
                        const name = event.target.value;
                        setBrief((current) => ({ ...current, name }));
                        clearFieldError("name");
                      }}
                      className={cn(fieldClass, errors.name && fieldErrorClass)}
                    />
                    <FieldError id="contact-name-error" message={errors.name} />
                  </label>

                  <label className="block min-w-0" htmlFor="contact-size">
                    <span className="font-display text-xs font-medium text-brand-navy sm:text-sm">
                      {contactPage.sizeLabel}{" "}
                      <span className="text-brand-orange" aria-hidden="true">
                        *
                      </span>
                    </span>
                    <input
                      id="contact-size"
                      name="size"
                      inputMode="numeric"
                      placeholder={contactPage.sizePlaceholder}
                      required
                      aria-invalid={Boolean(errors.size)}
                      aria-describedby={
                        errors.size ? "contact-size-error" : undefined
                      }
                      value={brief.size}
                      onChange={(event) => {
                        const size = event.target.value;
                        setBrief((current) => ({ ...current, size }));
                        clearFieldError("size");
                      }}
                      className={cn(fieldClass, errors.size && fieldErrorClass)}
                    />
                    <FieldError id="contact-size-error" message={errors.size} />
                  </label>

                  <label className="block min-w-0 sm:col-span-1" htmlFor="contact-org">
                    <span className="font-display text-xs font-medium text-brand-navy sm:text-sm">
                      {contactPage.orgLabel}{" "}
                      <span className="font-normal text-brand-navy/45">
                        ({contactPage.orgHint})
                      </span>
                    </span>
                    <input
                      id="contact-org"
                      name="organisation"
                      autoComplete="organization"
                      value={brief.organisation}
                      onChange={(event) => {
                        const organisation = event.target.value;
                        setBrief((current) => ({ ...current, organisation }));
                      }}
                      className={fieldClass}
                    />
                  </label>
                </div>

                <fieldset aria-describedby="contact-vibe-hint">
                  <legend className="font-display text-xs font-medium text-brand-navy sm:text-sm">
                    {contactPage.vibeLabel}{" "}
                    <span className="text-brand-orange" aria-hidden="true">
                      *
                    </span>
                  </legend>
                  <p id="contact-vibe-hint" className="mt-0.5 text-xs text-brand-navy/50">
                    {contactPage.vibeHint}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {VIBES.map((vibe) => {
                      const active = brief.vibes.includes(vibe.id);
                      return (
                        <label
                          key={vibe.id}
                          title={vibe.blurb}
                          className={cn(
                            "cursor-pointer border-2 px-2.5 py-1.5 font-display text-xs font-semibold tracking-tight uppercase motion-safe:transition-[background-color,border-color] motion-safe:duration-200 sm:text-sm",
                            active
                              ? "border-brand-orange bg-brand-orange text-brand-navy"
                              : "border-brand-navy/15 bg-mist/70 text-brand-navy hover:border-brand-teal/50",
                          )}
                        >
                          <input
                            id={`contact-vibe-${vibe.id}`}
                            type="checkbox"
                            className="sr-only"
                            checked={active}
                            onChange={() => toggleVibe(vibe.id)}
                            aria-invalid={Boolean(errors.vibes)}
                            aria-describedby={
                              errors.vibes ? "contact-vibes-error" : undefined
                            }
                          />
                          {vibe.label}
                        </label>
                      );
                    })}
                  </div>
                  <FieldError id="contact-vibes-error" message={errors.vibes} />
                </fieldset>

                <label className="block" htmlFor="contact-goal">
                  <span className="font-display text-xs font-medium text-brand-navy sm:text-sm">
                    {contactPage.goalLabel}{" "}
                    <span className="text-brand-orange" aria-hidden="true">
                      *
                    </span>
                  </span>
                  <textarea
                    id="contact-goal"
                    name="goal"
                    rows={2}
                    required
                    placeholder={contactPage.goalPlaceholder}
                    aria-invalid={Boolean(errors.goal)}
                    aria-describedby={
                      errors.goal ? "contact-goal-error" : undefined
                    }
                    value={brief.goal}
                    onChange={(event) => {
                      const goal = event.target.value;
                      setBrief((current) => ({ ...current, goal }));
                      clearFieldError("goal");
                    }}
                    className={cn(
                      fieldClass,
                      "resize-y",
                      errors.goal && fieldErrorClass,
                    )}
                  />
                  <FieldError id="contact-goal-error" message={errors.goal} />
                </label>

                <div>
                  <p
                    id="contact-reach-hint"
                    className="font-display text-xs font-medium text-brand-navy sm:text-sm"
                  >
                    Reach you{" "}
                    <span className="font-sans font-normal text-brand-navy/50">
                      · {contactPage.contactHint}
                    </span>
                  </p>
                  <div className="mt-1.5 grid gap-3 sm:grid-cols-2">
                    <label className="block min-w-0" htmlFor="contact-email">
                      <span className="sr-only">{contactPage.emailLabel}</span>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        placeholder={contactPage.emailLabel}
                        aria-invalid={Boolean(errors.contact)}
                        aria-describedby={
                          errors.contact ? "contact-contact-error" : undefined
                        }
                        value={brief.email}
                        onChange={(event) => {
                          const email = event.target.value;
                          setBrief((current) => ({ ...current, email }));
                          clearFieldError("contact");
                        }}
                        className={cn(
                          fieldClass,
                          "mt-0",
                          errors.contact && fieldErrorClass,
                        )}
                        suppressHydrationWarning
                      />
                    </label>

                    <label className="block min-w-0" htmlFor="contact-phone">
                      <span className="sr-only">{contactPage.phoneLabel}</span>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder={contactPage.phoneLabel}
                        aria-invalid={Boolean(errors.contact)}
                        aria-describedby={
                          errors.contact ? "contact-contact-error" : undefined
                        }
                        value={brief.phone}
                        onChange={(event) => {
                          const phone = event.target.value;
                          setBrief((current) => ({ ...current, phone }));
                          clearFieldError("contact");
                        }}
                        className={cn(
                          fieldClass,
                          "mt-0",
                          errors.contact && fieldErrorClass,
                        )}
                      />
                    </label>
                  </div>
                  <FieldError
                    id="contact-contact-error"
                    message={errors.contact}
                  />
                </div>

                {formError ? (
                  <p
                    role="alert"
                    className="border-2 border-brand-orange/50 bg-wash-orange px-3 py-2 text-sm text-brand-navy"
                  >
                    {formError}
                  </p>
                ) : null}

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    disabled={submitting}
                    className="rotate-0 sm:rotate-1"
                  >
                    {submitting
                      ? contactPage.submitBusyLabel
                      : contactPage.submitLabel}
                  </Button>
                  <p className="text-xs leading-snug text-brand-navy/50 sm:text-sm">
                    {contactPage.submitReassurance}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
