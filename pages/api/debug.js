export default function handler(req, res) {
  const fs = require('fs');
  const path = require('path');

  const publicDir = path.join(process.cwd(), 'public/locales');
  let files = [];
  
  try {
    files = fs.readdirSync(publicDir);
  } catch (error) {
    files = [`Error reading directory: ${error.message}`];
  }

  res.status(200).json({
    env: process.env.NODE_ENV,
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
    currentLocale: req.headers['accept-language'],
    publicDir,
    files,
    cwd: process.cwd(),
    nodeVersion: process.version,
  });
} 