import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eks-development-01-api-beneficios.s3.us-east-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
