module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'ko', 'es'],
    localeDetection: true,
  },
  defaultNS: 'common',
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
} 