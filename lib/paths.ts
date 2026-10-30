/**
 * Public asset prefix for GitHub Pages (`/Umodzi-Impact-Website`).
 * Empty for local `next dev` / default builds.
 * Inlined at build time via next.config `env`.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a root-relative public path (`/photos/...`) with the site basePath. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//") || !basePath) {
    return path;
  }
  if (path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }
  return `${basePath}${path}`;
}
