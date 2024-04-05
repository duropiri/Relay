const config = {
  api: process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337",
  images: {
    domains: [
      new URL(
        process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337"
      ).hostname,
    ],
  },
};

export default config;
