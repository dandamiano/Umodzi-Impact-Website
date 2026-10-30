"use client";

import { cn } from "@/lib/utils";

type GalleryPagerProps = {
  page: number;
  totalPages: number;
  labelId: string;
  pageLabel: string;
  prevLabel: string;
  nextLabel: string;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (page: number) => void;
};

export function GalleryPager({
  page,
  totalPages,
  labelId,
  pageLabel,
  prevLabel,
  nextLabel,
  onPrev,
  onNext,
  onGoTo,
}: GalleryPagerProps) {
  if (totalPages <= 1) {
    return null;
  }

  const dots = Array.from({ length: totalPages }, (_, index) => index);
  const maxDots = 7;
  const showWindow = totalPages > maxDots;
  const windowStart = showWindow
    ? Math.min(Math.max(0, page - 3), totalPages - maxDots)
    : 0;
  const visibleDots = showWindow
    ? dots.slice(windowStart, windowStart + maxDots)
    : dots;

  return (
    <nav
      aria-label="Gallery pages"
      className="mt-10 flex flex-col items-center gap-5 sm:mt-12"
    >
      <p
        id={labelId}
        className="gallery-stamp -rotate-2 border-2 border-brand-orange/70 bg-wash-orange px-3 py-1.5 font-display text-xs font-semibold tracking-[0.18em] text-brand-navy uppercase shadow-soft"
      >
        {pageLabel} {String(page + 1).padStart(2, "0")} /{" "}
        {String(totalPages).padStart(2, "0")}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={page === 0}
          aria-label={prevLabel}
          className={cn(
            "inline-flex min-h-11 min-w-11 -rotate-2 items-center justify-center border-2 border-brand-navy bg-paper font-display text-lg font-semibold text-brand-navy shadow-soft motion-safe:transition-transform motion-safe:duration-300",
            "hover:-translate-y-0.5 hover:rotate-0 hover:bg-wash-orange",
            "disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:-rotate-2 disabled:hover:bg-paper",
          )}
        >
          ←
        </button>

        <div className="flex items-center gap-1.5 px-1 sm:gap-2 sm:px-2">
          {showWindow && windowStart > 0 ? (
            <span className="px-0.5 font-display text-xs text-brand-navy/40">
              …
            </span>
          ) : null}
          {visibleDots.map((index) => {
            const active = index === page;
            return (
              <button
                key={index}
                type="button"
                aria-label={`${pageLabel} ${index + 1}`}
                aria-current={active ? "page" : undefined}
                onClick={() => onGoTo(index)}
                className={cn(
                  "size-2.5 rotate-12 motion-safe:transition-all motion-safe:duration-300 sm:size-3",
                  active
                    ? "scale-125 bg-brand-orange shadow-soft"
                    : "bg-brand-navy/25 hover:bg-brand-teal/60 hover:rotate-0",
                )}
              />
            );
          })}
          {showWindow && windowStart + maxDots < totalPages ? (
            <span className="px-0.5 font-display text-xs text-brand-navy/40">
              …
            </span>
          ) : null}
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={page >= totalPages - 1}
          aria-label={nextLabel}
          className={cn(
            "inline-flex min-h-11 min-w-11 rotate-2 items-center justify-center border-2 border-brand-navy bg-brand-navy font-display text-lg font-semibold text-white shadow-soft motion-safe:transition-transform motion-safe:duration-300",
            "hover:-translate-y-0.5 hover:rotate-0 hover:bg-brand-teal",
            "disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:rotate-2 disabled:hover:bg-brand-navy",
          )}
        >
          →
        </button>
      </div>

      <p className="font-display text-[0.65rem] tracking-[0.14em] text-brand-navy/45 uppercase">
        {prevLabel} · {nextLabel}
      </p>
    </nav>
  );
}
