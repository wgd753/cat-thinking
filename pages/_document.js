import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { locale } = ctx;
    return { ...initialProps, locale };
  }

  render() {
    const { locale } = this.props;
    
    const seoData = {
      en: {
        title: "Cat Translator - What is Your Cat Thinking?",
        description: "Free online cat translator and mind reader. Upload your cat's photo and discover what your cat is thinking. AI-powered cat emotion and thought analysis tool.",
        keywords: "cat translator, cat mind reader, what is my cat thinking, cat emotion analyzer, cat thoughts, cat behavior",
        reviewCount: "1.2K",
        ratingValue: "4.8",
        price: "Free"
      },
      zh: {
        title: "猫语翻译器 - 你的猫咪在想什么？",
        description: "免费在线猫语翻译器和心思解读工具。上传猫咪照片，发现它们的想法。AI驱动的猫咪情感和思维分析工具。",
        keywords: "猫语翻译器,猫咪心思,猫咪想法,猫咪情感分析,猫咪行为,猫咪表情",
      },
      ja: {
        title: "キャット・トランスレーター - あなたの猫は何を考えているの？",
        description: "無料オンライン猫翻訳ツール。猫の写真をアップロードして、猫の考えていることを発見しましょう。AI搭載の猫の感情と思考分析ツール。",
        keywords: "猫翻訳,猫の気持ち,猫の考え,猫の感情分析,猫の行動,猫の表情",
      },
      ko: {
        title: "고양이 번역기 - 당신의 고양이는 무슨 생각을 하고 있나요?",
        description: "무료 온라인 고양이 번역기와 마음 읽기 도구. 고양이 사진을 업로드하여 고양이의 생각을 발견하세요. AI 기반 고양이 감정과 사고 분석 도구.",
        keywords: "고양이 번역기,고양이 마음,고양이 생각,고양이 감정 분석,고양이 행동,고양이 표정",
      },
      es: {
        title: "Traductor de Gatos - ¿Qué está pensando tu gato?",
        description: "Traductor de gatos y lector de mentes en línea gratuito. Sube la foto de tu gato y descubre lo que está pensando. Herramienta de análisis de emociones y pensamientos felinos impulsada por IA.",
        keywords: "traductor de gatos,lector de mentes de gatos,qué piensa mi gato,analizador de emociones felinas,comportamiento felino",
      }
    };

    const currentSeo = seoData[locale] || seoData.en;

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication",
          "name": currentSeo.title,
          "description": currentSeo.description,
          "url": "https://cat.jellyw.com",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": currentSeo.ratingValue,
            "reviewCount": currentSeo.reviewCount
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does the cat translator work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our AI-powered cat translator analyzes your cat's facial expressions, body language, and behavior through uploaded photos to interpret their thoughts and emotions."
              }
            },
            {
              "@type": "Question",
              "name": "Is the cat translator free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the cat translator is completely free to use. Simply upload your cat's photo and get instant results."
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://cat.jellyw.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Cat Translator",
              "item": "https://cat.jellyw.com/translator"
            }
          ]
        }
      ]
    };

    return (
      <Html lang={locale}>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link 
            rel="icon" 
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐱</text></svg>"
          />
          
          {/* 基础 SEO 标签 */}
          <meta name="description" content={currentSeo.description} />
          <meta name="keywords" content={currentSeo.keywords} />
          
          {/* Open Graph 标签 */}
          <meta property="og:title" content={currentSeo.title} />
          <meta property="og:description" content={currentSeo.description} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Cat Translator" />
          
          {/* Twitter 卡片 */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={currentSeo.title} />
          <meta name="twitter:description" content={currentSeo.description} />

          {/* 多语言链接 */}
          <link rel="alternate" hrefLang="en" href="https://cat.jellyw.com" />
          <link rel="alternate" hrefLang="zh" href="https://cat.jellyw.com/zh" />
          <link rel="alternate" hrefLang="ja" href="https://cat.jellyw.com/ja" />
          <link rel="alternate" hrefLang="ko" href="https://cat.jellyw.com/ko" />
          <link rel="alternate" hrefLang="es" href="https://cat.jellyw.com/es" />
          <link rel="alternate" hrefLang="x-default" href="https://cat.jellyw.com" />

          {/* 其他元数据 */}
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link
            rel="apple-touch-icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>😺</text></svg>"
          />

          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-YBC3RTJHB4"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-YBC3RTJHB4');
              `,
            }}
          />

          {/* 添加结构化数据 */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          
          {/* 添加更多相关标记 */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;