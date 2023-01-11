/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    additionalData: `@import "_variables.scss";`,
 }
}

module.exports = nextConfig
