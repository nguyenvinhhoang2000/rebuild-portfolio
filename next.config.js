/** @type {import('next').NextConfig} */

const IMAGES_DOMAINS = process.env.NEXT_PUBLIC_IMAGES_DOMAIN.split(",");

const nextConfig = {
  images: {
    domains: IMAGES_DOMAINS,
  },
};

module.exports = nextConfig;
