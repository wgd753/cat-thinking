import Head from 'next/head';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import imageCompression from 'browser-image-compression';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router';


function CatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  )
}


function SpeakerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <circle cx="12" cy="14" r="4" />
      <line x1="12" x2="12.01" y1="6" y2="6" />
    </svg>
  )
}

export default function Components() {
  const [imagePreview, setImagePreview] = useState('/image-1730699489088.jpg'); // Default preview image
  const [compressing, setCompressing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({ data: '', error: '' });
  const { t } = useTranslation('common');
  const router = useRouter();

  // 添加 useEffect 钩子
  useEffect(() => {
    const pasteHandler = async (event) => {
      const items = (event.clipboardData || window.clipboardData).items;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const blob = items[i].getAsFile();
          const file = new File([blob], "pastedImage.jpg", { type: "image/jpeg" });
          await previewImage({ target: { files: [file] } });
          break;
        }
      }
    };

    window.addEventListener('paste', pasteHandler);
    return () => {
      window.removeEventListener('paste', pasteHandler);
    };
  }, []);

  const previewImage = async (event) => {
    const file = event.target.files[0];
    const validTypes = ['image/png', 'image/jpeg', 'image/webp'];
  
    if (file && validTypes.includes(file.type)) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      };
      try {
        setCompressing(true);
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onloadend = async () => {
          setImagePreview(reader.result);
          setCompressing(false);
          const blob = await (await fetch(reader.result)).blob();
          const file = new File([blob], "compressedImage.jpg", { type: "image/jpeg" });
          await submitForm(file);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Error during compression', error);
        alert('Cannot compress the image.');
        setCompressing(false);
      }
    } else {
      alert('Please select an image file (png, jpeg, webp).');
      setImagePreview('');
    }
  };

  const submitForm = async (file) => {
    setLoading(true);
  
    const formData = new FormData();
    formData.append("image", file);
  
    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'x-selected-language': router.locale || 'en', // 添加当前选择的语言
      },
      body: formData,
    });  
    if (!response.ok) {
      const errorData = await response.json();
      setResult({ data: '', error: errorData.error });
      setLoading(false);
      return;
    }
    const data = await response.json();
    setResult({ data: data.result, error: '' });
    setLoading(false);
  };

  const switchLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* SEO Meta Tags */}
        <meta name="keywords" content="cat translator, cat mind reader, cat emotion analyzer, cat behavior, pet communication, AI cat translator, cat language, cat thoughts, cat feelings, cat mood" />
        <meta name="author" content="jellyw" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('title')} />
        <meta property="og:description" content={t('description')} />
        <meta property="og:url" content="https://cat.jellyw.com" />
        <meta property="og:site_name" content="Cat Translator" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('title')} />
        <meta name="twitter:description" content={t('description')} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://cat.jellyw.com/${router.locale}`} />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center max-w-4xl mx-auto">
          {t('title')}
        </h1>

        <div className="flex gap-2 justify-center my-4">
          <button
            onClick={() => switchLanguage('en')}
            className={`px-3 py-1 rounded ${
              router.locale === 'en' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            English
          </button>
          <button
            onClick={() => switchLanguage('zh')}
            className={`px-3 py-1 rounded ${
              router.locale === 'zh' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            中文
          </button>
          <button
            onClick={() => switchLanguage('ja')}
            className={`px-3 py-1 rounded ${
              router.locale === 'ja' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            日本語
          </button>
          <button
            onClick={() => switchLanguage('ko')}
            className={`px-3 py-1 rounded ${
              router.locale === 'ko' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            한국어
          </button>
          <button
            onClick={() => switchLanguage('es')}
            className={`px-3 py-1 rounded ${
              router.locale === 'es' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Español
          </button>
        </div>

        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 py-4">
          {t('description')}
        </p>

        <div className="w-full max-w-md px-2 py-2">
          <form onSubmit={submitForm} encType="multipart/form-data">
            <div className="grid w-full gap-2">
              <Label htmlFor="catImage">{t('uploadLabel')}</Label>
              <Input id="catImage" name="image" type="file" onChange={previewImage} />
              <Button type="submit" variant="dark" disabled={loading || compressing}>
                {compressing 
                  ? t('analyzeButton.scanning')
                  : loading 
                    ? t('analyzeButton.analyzing')
                    : t('analyzeButton.default')
                }
              </Button>
            </div>
          </form>
        </div>

        <Card className="max-w-md mt-8">
          <CardHeader>
            <div className="flex items-center">
              <CatIcon className="w-6 h-6 mr-2" />
              <h2 className="text-2xl font-bold">{t('analyzedImage')}</h2>
            </div>
          </CardHeader>
          <CardContent>
            {compressing ? (
              <div style={{ textAlign: 'center' }}>{t('analyzeButton.scanning')}</div>
            ) : (
              imagePreview && <img alt={t('analyzedImage')} className="aspect-content object-cover" height="500" src={imagePreview} width="500" />
            )}
            <div className="mt-4 rounded-lg p-4">
              <p className="ml-2 text-lg" style={{ textAlign: 'center' }}>
                {compressing 
                  ? "🐱🐱🐱🐱🐱🐱" 
                  : loading 
                    ? t('analyzeButton.analyzing')
                    : result.error 
                      ? `${t('error')}: ${result.error}`
                      : result.data || t('defaultCatMessage')
                }
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How it Works 部分 */}
        <section className="max-w-2xl mx-auto mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('howItWorks.title')}</h2>
          <p className="text-gray-600 mb-4">{t('howItWorks.description')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div>
              <h3 className="font-bold">{t('howItWorks.steps.upload.title')}</h3>
              <p>{t('howItWorks.steps.upload.description')}</p>
            </div>
            <div>
              <h3 className="font-bold">{t('howItWorks.steps.analyze.title')}</h3>
              <p>{t('howItWorks.steps.analyze.description')}</p>
            </div>
            <div>
              <h3 className="font-bold">{t('howItWorks.steps.results.title')}</h3>
              <p>{t('howItWorks.steps.results.description')}</p>
            </div>
          </div>
        </section>

        {/* FAQ 部分 */}
        <section className="max-w-2xl mx-auto mt-12 text-left">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('faq.title')}</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} itemScope itemType="https://schema.org/Question">
                <h3 className="font-bold" itemProp="name">{t(`faq.q${i}`)}</h3>
                <p className="mt-2" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  {t(`faq.a${i}`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 用户评价部分 */}
        <section className="max-w-2xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('testimonials.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4 border rounded-lg" itemScope itemType="https://schema.org/Review">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <meta itemProp="reviewRating" content="5" />
                </div>
                <p itemProp="reviewBody">{t(`testimonials.review${i}`)}</p>
                <p className="mt-2 text-sm text-gray-600" itemProp="author">
                  {t(`testimonials.author${i}`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 相关文章部分 */}
        <section className="max-w-2xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">{t('articles.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <article key={i} className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">{t(`articles.article${i}.title`)}</h3>
                <p className="text-gray-600">{t(`articles.article${i}.excerpt`)}</p>
                <a 
                  href={`/blog/article-${i}`} 
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  {t('articles.readMore')}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* 统计数据部分 */}
        <section className="max-w-2xl mx-auto mt-12 text-center">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold">1M+</div>
              <p>{t('stats.translations')}</p>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9/5</div>
              <p>{t('stats.rating')}</p>
            </div>
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <p>{t('stats.users')}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 mt-12 border-t">
        <p>{t('footer.madeWith')} <a href="http://cat.jellyw.com" className="underline">jellyw</a></p>
        <p>{t('footer.contact')}: <a href="mailto:admin@jellyw.com">wgd@jellyw.com</a></p>
        <p className="text-sm text-gray-500 mt-2">{t('footer.tagline')}</p>
        
        <div className="mt-4 flex justify-center gap-4">
          <a href="/privacy" className="text-gray-600 hover:underline">{t('footer.privacy')}</a>
          <a href="/terms" className="text-gray-600 hover:underline">{t('footer.terms')}</a>
          <a href="/blog" className="text-gray-600 hover:underline">{t('footer.blog')}</a>
          <a href="/about" className="text-gray-600 hover:underline">{t('footer.about')}</a>
        </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}