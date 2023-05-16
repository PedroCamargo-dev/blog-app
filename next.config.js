/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST_BACKEND: process.env.HOST_BACKEND,
  },
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
