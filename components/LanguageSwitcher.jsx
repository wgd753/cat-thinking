import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'es', name: 'Español' }
  ]

  const switchLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <div className="flex gap-2 justify-center my-4">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          className={`px-3 py-1 rounded ${
            router.locale === lang.code
              ? 'bg-black text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  )
} 