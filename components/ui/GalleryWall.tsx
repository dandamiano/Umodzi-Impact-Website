"use client";

import { useEffect, useId, useState } from "react";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { GalleryPager } from "@/components/ui/GalleryPager";
import { galleryPage } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { FeaturedPhoto, GalleryItem } from "@/types/content";

/**
 * Flexible columns by device; always 2 rows per page.
 * Spotlight (previous laptop look): 2 / 4 cols → 4 / 8 per page
 * Wall (previous laptop look): 2 / 3 / 4 cols → 4 / 6 / 8 per page
 */
const LAYOUT = {
  spotlight: {
    grid: "grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12",
    sizes: "(min-width: 1024px) 22vw, 50vw",
    pageSizeForWidth: (width: number) => (width >= 1024 ? 8 : 4),
  },
  wall: {
    grid: "grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-11 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-12",
    sizes: "(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, 50vw",
    pageSizeForWidth: (width: number) => {
      if (width >= 1280) return 8;
      if (width >= 1024) return 6;
      return 4;
    },
  },
} as const;

const TILTS = [
  "-rotate-[1.5deg]",
  "rotate-[1.25deg]",
  "-rotate-[0.9deg]",
  "rotate-[1.75deg]",
] as const;

const STICKY_TONES = [
  "bg-wash-orange text-brand-navy",
  "bg-wash-green text-brand-green",
  "bg-wash-teal text-brand-teal",
  "bg-mist text-brand-navy",
] as const;

type GalleryWallProps = {
  images: readonly GalleryItem[] | readonly FeaturedPhoto[];
  sectionId: string;
  showCaptions?: boolean;
  layout?: keyof typeof LAYOUT;
};

function hasCaption(
  image: GalleryItem | FeaturedPhoto,
): image is FeaturedPhoto {
  return "caption" in image && typeof image.caption === "string";
}

function usePageSize(layout: keyof typeof LAYOUT) {
  const [pageSize, setPageSize] = useState(4);

  useEffect(() => {
    const update = () => {
      setPageSize(LAYOUT[layout].pageSizeForWidth(window.innerWidth));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [layout]);

  return pageSize;
}

export function GalleryWall({
  images,
  sectionId,
  showCaptions = false,
  layout = "wall",
}: GalleryWallProps) {
  const labelId = useId();
  const pageSize = usePageSize(layout);
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(images.length / pageSize));
  const config = LAYOUT[layout];

  useEffect(() => {
    setPage(0);
  }, [pageSize, images.length]);

  useEffect(() => {
    if (page > totalPages - 1) {
      setPage(Math.max(0, totalPages - 1));
    }
  }, [page, totalPages]);

  if (images.length === 0) {
    return (
      <p className="mt-10 text-sm text-brand-navy/70">
        Photographs are on their way.
      </p>
    );
  }

  const start = page * pageSize;
  const visible = images.slice(start, start + pageSize);

  const goTo = (next: number) => {
    setPage(next);
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mt-10 sm:mt-12">
      <ul aria-labelledby={labelId} className={cn("grid", config.grid)}>
        {visible.map((image, index) => {
          const caption =
            showCaptions && hasCaption(image) ? image.caption : null;

          return (
            <li
              key={`${image.src}-${page}-${pageSize}`}
              className="gallery-rise group"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <figure
                className={cn(
                  "motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-0 group-hover:scale-[1.02]",
                  TILTS[index % TILTS.length],
                )}
              >
                <div className="relative bg-paper p-1 pb-3 shadow-soft ring-1 ring-brand-navy/10 sm:p-1.5 sm:pb-4">
                  {index % 2 === 0 ? (
                    <span
                      className={cn(
                        "gallery-tape absolute -top-1 z-10",
                        index % 4 === 0 ? "left-2 -rotate-6" : "right-2 rotate-6",
                      )}
                    />
                  ) : null}
                  {index % 3 === 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute -right-1 -bottom-1 z-10 size-2.5 rotate-12 bg-brand-orange"
                    />
                  ) : null}
                  <div className="overflow-hidden bg-mist">
                    <GalleryImage
                      image={image}
                      sizes={config.sizes}
                      className="aspect-[4/5] h-auto w-full object-cover"
                    />
                  </div>
                </div>
                {caption ? (
                  <figcaption
                    className={cn(
                      "gallery-sticky relative z-10 mx-auto -mt-2.5 w-[90%] px-2 py-1.5 text-center font-display text-xs font-semibold tracking-tight shadow-soft ring-1 ring-brand-navy/10 motion-safe:transition-transform motion-safe:duration-500 group-hover:rotate-0 sm:-mt-3 sm:text-sm",
                      STICKY_TONES[index % STICKY_TONES.length],
                      index % 2 === 0 ? "-rotate-1" : "rotate-1",
                    )}
                  >
                    {caption}
                  </figcaption>
                ) : null}
              </figure>
            </li>
          );
        })}
      </ul>

      <GalleryPager
        page={page}
        totalPages={totalPages}
        labelId={labelId}
        pageLabel={galleryPage.wallPageOf}
        prevLabel={galleryPage.wallPrev}
        nextLabel={galleryPage.wallNext}
        onPrev={() => goTo(page - 1)}
        onNext={() => goTo(page + 1)}
        onGoTo={goTo}
      />
    </div>
  );
}
