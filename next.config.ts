import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  async redirects() {
    return [
      { source: '/storia-e-valori/', destination: '/chi-siamo', permanent: true },
    ];
  }
};

export default nextConfig;
