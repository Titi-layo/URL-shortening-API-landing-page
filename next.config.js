/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: "/URL-shortening-API-landing-page",
};

module.exports = nextConfig;
