/** @type {import('next').NextConfig} */

const removeImports = require('next-remove-imports')();
const nextConfig = {
  images: {
    remotePatterns: [{protocol: 'https', hostname: '**'}],
  },
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = removeImports({
  ...nextConfig,
});
