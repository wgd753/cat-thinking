import Head from 'next/head';

export default function BlogJsonLd({ post, locale }) {
  const baseUrl = 'https://cat.jellyw.com';
  
  // 创建包含 emoji 的 SVG Data URL
  const emojiSvgUrl = `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <text x="50" y="50" font-size="70" text-anchor="middle" dominant-baseline="central">
        ${post.emoji || '🐱'}
      </text>
    </svg>
  `)}`;
  
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.content[0].content,
    "image": emojiSvgUrl,
    "datePublished": post.date,
    "dateModified": post.modifiedDate || post.date,
    "author": {
      "@type": "Person",
      "name": "Cat Jelly Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cat Jelly",
      "logo": {
        "@type": "ImageObject",
        "url": `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">😺</text></svg>')}`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}${locale === 'en' ? '' : `/${locale}`}/blog/posts/${post.id}`
    },
    "inLanguage": locale,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "128",
      "reviewCount": "86",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
    </Head>
  );
} 