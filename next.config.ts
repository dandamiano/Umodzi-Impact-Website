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
  process.env.GITHUB_PAGES === "true" ? "/Umodzi-Impact-Website" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Public folder URLs are not rewritten by basePath; Image + withBasePath use this.
  env: {
    NEXT_PUBLIC_BASE_PATH: pagesBasePath,
  },
  ...(pagesBasePath
    ? { basePath: pagesBasePath, assetPrefix: pagesBasePath }
    : {}),
  images: {
    // Custom loader prefixes /photos and /brand for GitHub Pages (unoptimized
    // alone skips basePath — see vercel/next.js#68498).
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
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
