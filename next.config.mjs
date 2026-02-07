/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.credstack.ai",
          },
        ],
        destination: "https://credstack.ai/:path*",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
