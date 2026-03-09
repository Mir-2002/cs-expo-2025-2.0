import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/gallery", destination: "/coming-soon", permanent: false },
      {
        source: "/hall-of-fame",
        destination: "/coming-soon",
        permanent: false,
      },
    ];
  },
  output: "export",
};

export default nextConfig;
