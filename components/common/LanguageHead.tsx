import Head from 'next/head'
import { useRouter } from 'next/router'

const SUPPORTED_LOCALES = ['en', 'zh', 'ja', 'ko', 'es']
const BASE_URL = 'https://cat.jellyw.com'

interface LanguageHeadProps {
  path: string
}

export default function LanguageHead({ path }: LanguageHeadProps) {
  const router = useRouter()
  const { locale } = router
  
  return (
    <Head>
      {/* Self-referencing hreflang */}
      <link 
        rel="alternate" 
        hrefLang={locale} 
        href={`${BASE_URL}${locale === 'en' ? '' : `/${locale}`}${path}`}
      />
      
      {/* Other language versions */}
      {SUPPORTED_LOCALES.map(lang => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${BASE_URL}${lang === 'en' ? '' : `/${lang}`}${path}`}
        />
      ))}
      
      {/* x-default hreflang */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${BASE_URL}${path}`}
      />
    </Head>
  )
} 