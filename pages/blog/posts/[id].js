import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { blogPostsData } from '../../../lib/blogData';
import { useRouter } from 'next/router';
import SEOHead from '../../../components/SEOHead';

export default function BlogPost({ post }) {
  const { t } = useTranslation('common');
  const router = useRouter();

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found 😿</h1>
        <Link href="/blog">
          <span className="text-indigo-600 hover:text-indigo-800">← Back to Blog</span>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${post.title} | Cat Translator Blog`}
        description={post.excerpt}
        path={`/blog/posts/${post.id}`}
        ogType="article"
      />

      <main className="container mx-auto px-4 py-8">
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" locale={router.locale}>
                <span className="text-indigo-600 hover:text-indigo-800">Home</span>
              </Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link href="/blog" locale={router.locale}>
                <span className="text-indigo-600 hover:text-indigo-800">Blog</span>
              </Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li>
              <span className="text-gray-500">{post.title}</span>
            </li>
          </ol>
        </nav>

        <article className="max-w-3xl mx-auto prose prose-lg">
          <header className="text-center mb-12">
            <div className="text-6xl mb-4">{post.emoji}</div>
            <div className="text-sm text-indigo-500 font-semibold mb-2">
              {post.category}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center text-gray-600">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {post.content.map((section, index) => (
            <section key={index} className="mb-8">
              {section.type === "introduction" ? (
                <p className="text-xl text-gray-700 mb-8">{section.content}</p>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-2">
                      {section.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </>
              )}
            </section>
          ))}
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "datePublished": post.date,
              "articleSection": post.category,
              "publisher": {
                "@type": "Organization",
                "name": "Cat Translator"
              }
            })
          }}
        />
      </main>
    </>
  );
}

export async function getStaticPaths({ locales }) {
  // 为每个语言生成所有可能的路径
  const paths = locales.flatMap(locale => 
    Object.keys(blogPostsData).map(id => ({
      params: { id: id.toString() },
      locale: locale, // 添加语言参数
    }))
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  try {
    const postId = parseInt(params.id);
    const post = blogPostsData[postId];

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      },
      // 每小时重新生成页面
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
    };
  }
} 