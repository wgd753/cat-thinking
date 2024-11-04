/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n: {
    ...i18n,
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/blog/posts/:id',
        destination: '/blog/posts/[id]',
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
