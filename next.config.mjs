/** @type {import('next').NextConfig} */
export default {
  output: "export",
  ...(process.env.HALO_PROJECT_PREVIEWS === "1" && { distDir: "out-review" }),
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};
