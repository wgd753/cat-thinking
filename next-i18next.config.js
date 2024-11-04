module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'ko', 'es'],
    localeDetection: false,
  },
  defaultNS: 'common',
  localePath: './public/locales',
  reloadOnPrerender: true,
  debug: process.env.NODE_ENV === 'development',
} 