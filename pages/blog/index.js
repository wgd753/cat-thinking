import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export default function Blog() {
  const { t } = useTranslation('common');

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Cat's Body Language 🐱",
      excerpt: "Cats communicate primarily through body language. Learn to decode your cat's messages through tail positions (straight up means happy!), ear movements (forward means interested, flat means scared), and eye expressions (slow blinks mean 'I love you'!).",
      date: "2024-03-15",
      readTime: "5 min read",
      emoji: "😺",
      category: "Behavior Guide"
    },
    {
      id: 2,
      title: "Why Do Cats Purr? The Science Behind It 🔊",
      excerpt: "Did you know cats purr at frequencies between 25-150Hz? This frequency can promote healing! Discover the fascinating reasons behind purring - from contentment to self-healing, and even communication with humans.",
      date: "2024-03-10",
      readTime: "4 min read",
      emoji: "😻",
      category: "Cat Science"
    },
    {
      id: 3,
      title: "Common Cat Behaviors Decoded 🔍",
      excerpt: "Why do cats knead with their paws? Why do they bring you 'presents'? We explain these adorable (and sometimes puzzling) behaviors. From marking territory to showing affection, understand your cat's daily habits.",
      date: "2024-03-05",
      readTime: "6 min read",
      emoji: "🐈",
      category: "Daily Tips"
    },
    {
      id: 4,
      title: "How AI Helps Us Understand Cats Better 🤖",
      excerpt: "Explore how Google's Gemini AI model helps decode cat behavior patterns. Learn about the technology behind Cat Translator and how it's revolutionizing the way we communicate with our feline friends.",
      date: "2024-03-01",
      readTime: "7 min read",
      emoji: "🧠",
      category: "Technology"
    },
    {
      id: 5,
      title: "Cat Moods and What They Mean 😸",
      excerpt: "From playful to grumpy, learn to read your cat's different moods. Understanding these emotional states helps build a stronger bond with your pet and ensures their wellbeing.",
      date: "2024-02-28",
      readTime: "5 min read",
      emoji: "😾",
      category: "Behavior Guide"
    },
    {
      id: 6,
      title: "The Secret Language of Cat Tails 📝",
      excerpt: "Your cat's tail is like a mood indicator! Discover what different tail positions and movements mean - from the friendly upright question mark to the wary low swish.",
      date: "2024-02-25",
      readTime: "4 min read",
      emoji: "🐱",
      category: "Body Language"
    }
  ];

  return (
    <>
      <Head>
        <title>Cat Behavior Blog | Cat Translator - Expert Tips & Insights</title>
        <meta name="description" content="Explore our blog for expert insights on cat behavior, communication tips, and the latest updates about AI-powered cat translation technology." />
        <meta name="keywords" content="cat behavior, cat communication, pet care tips, cat translation, AI pets" />
        <meta property="og:title" content="Cat Behavior Blog | Cat Translator" />
        <meta property="og:description" content="Expert insights on cat behavior and communication" />
        <meta property="og:type" content="blog" />
        <link rel="canonical" href="https://cat.jellyw.com/blog" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Add Breadcrumb Navigation */}
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/">
                <span className="text-indigo-600 hover:text-indigo-800">Home</span>
              </Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li>
              <span className="text-gray-500">Blog</span>
            </li>
          </ol>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cat Behavior Blog 📚</h1>
          <p className="text-xl text-gray-600">Understanding your feline friend, one post at a time 🐱</p>
        </header>

        {/* Add Quick Navigation */}
        <nav className="mb-12">
          <h2 className="sr-only">Quick Navigation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200">
                Try Cat Translator 🐱
              </span>
            </Link>
            <Link href="/about">
              <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200">
                About Us 👋
              </span>
            </Link>
            <Link href="#categories">
              <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200">
                Categories 📑
              </span>
            </Link>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto">
          {/* Featured Post */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-center text-6xl mb-4">
                  {blogPosts[0].emoji}
                </div>
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Featured Post • {blogPosts[0].category}
                </div>
                <Link href={`/blog/posts/${blogPosts[0].id}`}>
                  <h2 className="block mt-1 text-2xl leading-tight font-bold text-black hover:text-indigo-600">
                    {blogPosts[0].title}
                  </h2>
                </Link>
                <p className="mt-2 text-gray-500">{blogPosts[0].excerpt}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-gray-600 text-sm">{blogPosts[0].date}</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-600 text-sm">{blogPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Posts Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map(post => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="text-center text-4xl mb-4">
                    {post.emoji}
                  </div>
                  <div className="text-sm text-indigo-500 font-semibold mb-2">
                    {post.category}
                  </div>
                  <Link href={`/blog/posts/${post.id}`}>
                    <h3 className="text-xl font-semibold mb-2 hover:text-indigo-600">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>

        {/* Add Categories Section */}
        <section id="categories" className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Array.from(new Set(blogPosts.map(post => post.category))).map(category => (
              <div key={category} className="bg-white rounded-lg shadow p-4 text-center">
                <h3 className="font-semibold text-indigo-600">{category}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {blogPosts.filter(post => post.category === category).length} articles
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Add Footer Navigation */}
        <footer className="mt-16 text-center">
          <nav className="space-x-4">
            <Link href="/">
              <span className="text-gray-600 hover:text-indigo-600">Home</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-600 hover:text-indigo-600">About</span>
            </Link>
            <Link href="/privacy">
              <span className="text-gray-600 hover:text-indigo-600">Privacy</span>
            </Link>
            <Link href="/terms">
              <span className="text-gray-600 hover:text-indigo-600">Terms</span>
            </Link>
          </nav>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Cat Translator Blog",
              "description": "Expert insights on cat behavior and communication",
              "publisher": {
                "@type": "Organization",
                "name": "Cat Translator"
              },
              "blogPosts": blogPosts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "datePublished": post.date,
                "articleSection": post.category
              }))
            })
          }}
        />
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
} 