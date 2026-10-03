import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.image2url.com",
        pathname: "/r2/default/images/**",
      },
    ],
  },
};

export default nextConfig;
