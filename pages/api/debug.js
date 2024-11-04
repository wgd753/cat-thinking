export default function handler(req, res) {
  res.status(200).json({
    locales: process.env.NODE_ENV,
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
    currentLocale: req.headers['accept-language'],
    publicDir: process.cwd() + '/public/locales',
  })
} 