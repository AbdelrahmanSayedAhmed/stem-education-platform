import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Don’t fail the build on ESLint errors
    ignoreDuringBuilds: true,
  },
  // If type errors are also blocking, you can temporarily ignore them:
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
