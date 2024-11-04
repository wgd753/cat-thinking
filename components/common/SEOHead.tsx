import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOHeadProps {
  title: string
  description: string
  path: string
  ogType?: string
}

const SUPPORTED_LOCALES = ['en', 'zh', 'ja', 'ko', 'es']
const BASE_URL = 'https://cat.jellyw.com'

export default function SEOHead({ title, description, path, ogType = 'website' }: SEOHeadProps) {
  const router = useRouter()
  const { locale } = router
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`${BASE_URL}${path}`} />
      
      {/* Canonical URL */}
      <link 
        rel="canonical" 
        href={`${BASE_URL}${path}`}
      />
      
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