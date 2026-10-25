import { EmptyState } from "@/components/ui/EmptyState";
import { GalleryImage } from "@/components/ui/GalleryImage";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types/content";

type GalleryGridProps = {
  images: readonly GalleryItem[];
  layout?: "masonry" | "grid";
};

export function GalleryGrid({ images, layout = "masonry" }: GalleryGridProps) {
  if (images.length === 0) {
    return <EmptyState>Approved photographs have not been added yet.</EmptyState>;
  }

  return (
    <ul
      className={cn(
        layout === "masonry" && "columns-1 gap-4 sm:columns-2 lg:columns-3",
        layout === "grid" && "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {images.map((image) => (
        <li
          key={image.src}
          className={cn(
            "overflow-hidden rounded-lg bg-mist",
            layout === "masonry" && "mb-4 break-inside-avoid",
          )}
        >
          <GalleryImage
            image={image}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={
              layout === "grid" ? "aspect-[3/2] h-auto w-full object-cover" : "h-auto w-full"
            }
          />
        </li>
      ))}
    </ul>
  );
}
