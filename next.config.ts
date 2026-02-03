import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
      {
        protocol: "https",
        hostname: "assets2.ser.vi",
      },
      {
        protocol: "https",
        hostname: "file.cdn.sunmi.com",
      },
    ],
    qualities: [100, 70, 75],
  },
};

export default nextConfig;
