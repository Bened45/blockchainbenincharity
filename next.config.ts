import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore
    outputFileTracingExcludes: {
      '*': ['public/images/gallery/content/**/*'],
    },
  },
};

export default nextConfig;
