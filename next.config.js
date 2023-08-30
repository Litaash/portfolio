/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ua"],
    defaultLocale: "en",
  },
  devIndicators: {
    buildActivity: false
  },
  env: {
    NEXT_PUBLIC_X_MASTER_KEY: '$2b$10$Yql0m.rEan4cq/wn0mMyI.wa96p6pWZS.ukwltF/2CmU.3A7K6AgO',
  },
}

module.exports = nextConfig
