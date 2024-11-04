module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'ko', 'es'],
    localeDetection: false,
  },
  defaultNS: 'common',
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
} 