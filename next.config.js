/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ua"],
    defaultLocale: "en",
  },
  devIndicators: {
    buildActivity: false
  }
}

module.exports = nextConfig
