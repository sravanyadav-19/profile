/** @type {import('next').NextConfig} */

// GitHub Pages serves the site under  https://<user>.github.io/<repo>/
// so in the production build we prefix every asset with the repo name.
// Local `npm run dev` stays at http://localhost:3000 (no prefix).
// 👉 If your repo is named something other than "profile", change this:
const REPO_NAME = "profile";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${REPO_NAME}` : "";

const nextConfig = {
  reactStrictMode: true,
  compress: true,

  // static HTML/CSS/JS export → deployable to GitHub Pages
  output: "export",
  trailingSlash: true,

  // next/image can't optimize on static hosting
  images: { unoptimized: true },

  basePath,
  // expose the base path to client components (used by lib/paths.ts)
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

module.exports = nextConfig;
