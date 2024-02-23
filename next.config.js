/** @type {import('next').NextConfig} */

const dotenv = require("dotenv");
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "uk"],
    defaultLocale: "en",
    localeDetection: false
  },
  devIndicators: {
    buildActivity: false,
  },
  env: {
    API_KEY: process.env.API_KEY
  },
};

module.exports = nextConfig;
