import { withBasePath } from "@/lib/paths";

/**
 * Static-export loader: public folder files are not rewritten by basePath /
 * assetPrefix, so Image src must include the Pages subpath ourselves.
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
 */
export default function imageLoader({ src }: { src: string }): string {
  return withBasePath(src);
}
