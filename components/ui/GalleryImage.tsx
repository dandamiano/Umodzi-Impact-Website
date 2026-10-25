"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/types/content";

type GalleryImageProps = {
  image: GalleryItem;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function GalleryImage({
  image,
  sizes,
  priority = false,
  className = "h-auto w-full",
}: GalleryImageProps) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div className="flex aspect-[3/2] items-center justify-center bg-mist px-4 text-center text-sm leading-relaxed">
        Photograph unavailable
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
      onError={() => setMissing(true)}
      className={className}
    />
  );
}
