import type { NextConfig } from "next";

/**
 * Static export for hosting the marketing site as plain files.
 * The Next.js 16 starter enables Cache Components and partial prefetching.
 * Those features depend on the Next.js server, so they stay off here.
 * Image optimisation is off because the image optimizer is also a server.
 *
 * CSS is set up for both bundlers. Webpack reads postcss.config.mjs.
 * Turbopack uses the loader below. This PC's Application Control policy
 * blocks the native SWC binary, so the npm scripts pass --webpack.
 *
 * GitHub Pages serves the project at /Umodzi-Impact-Website/.
 * Local `next dev` / `next build` stay at the site root unless GITHUB_PAGES=true.
 */
const pagesBasePath =
  process.env.GITHUB_PAGES === "true" ? "/Umodzi-Impact-Website" : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(pagesBasePath
    ? { basePath: pagesBasePath, assetPrefix: pagesBasePath }
    : {}),
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
