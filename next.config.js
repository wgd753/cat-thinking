const { i18n } = require('./next-i18next.config')
const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@'] = path.join(__dirname);
    }
    return config;
  },
  publicRuntimeConfig: {
    localeSubpaths: {
      en: 'en',
      zh: 'zh',
      ja: 'ja',
      ko: 'ko',
      es: 'es',
    },
  }
}

module.exports = nextConfig
