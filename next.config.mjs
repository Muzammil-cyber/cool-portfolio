/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.graphassets.com",
        protocol: "https",
      },
      {
        hostname: "us-east-1-shared-usea1-02.graphassets.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
