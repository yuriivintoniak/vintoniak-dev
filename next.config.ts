import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vintoniak-dev",
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
