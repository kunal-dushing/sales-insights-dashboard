import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent Next.js from mistaking a package lock in the user profile for this app's root.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
