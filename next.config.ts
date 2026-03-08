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
};

export default nextConfig;
