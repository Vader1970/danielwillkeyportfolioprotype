import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Explicitly set the workspace root to avoid lockfile detection warnings
  outputFileTracingRoot: path.resolve(process.cwd()),

  // Allow cross-origin requests in development
  allowedDevOrigins: ["127.0.0.1", "localhost"],

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Optimize loading
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@radix-ui/react-toast", // Only Radix UI component actually used
    ],
  },

  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
