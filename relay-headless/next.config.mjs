/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_STRAPI_BASE_URL: process.env.NEXT_PUBLIC_STRAPI_BASE_URL,
  },
  images: {
    domains: [
      new URL(
        process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337"
      ).hostname,
    ],
  },
  // Add any additional Next.js configurations here
};

export default nextConfig;
