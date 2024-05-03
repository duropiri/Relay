/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_STRAPI_BASE_URL: process.env.NEXT_PUBLIC_STRAPI_BASE_URL,
    NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
    NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY,
    NEXT_PUBLIC_EMAIL_USERNAME: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    NEXT_PUBLIC_EMAIL_PASSWORD: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    NEXT_PUBLIC_PERSONAL_EMAIL: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
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
