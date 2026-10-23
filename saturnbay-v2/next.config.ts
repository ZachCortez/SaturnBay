import type { NextConfig } from "next";
const repoName = "SaturnBay";
const isPages = process.env.GITHUB_PAGES === "true";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isPages ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` } : {}),
};
export default nextConfig;
