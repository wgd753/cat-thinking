import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Blog() {
  const { t } = useTranslation('common');

  const articles = [
    {
      id: 'article-1',
      title: 'Understanding Your Cat\'s Body Language',
      excerpt: 'Learn to decode your cat\'s body language with our comprehensive guide. Understand tail positions, ear movements, and facial expressions.',
      author: 'Dr. Sarah Wilson',
      date: '2024-03-15',
      category: 'Cat Behavior',
      readingTime: '8 minutes'
    },
    {
      id: 'article-2',
      title: 'The Science Behind Cat Vocalizations',
      excerpt: 'Discover the scientific explanation behind cat sounds and vocalizations. Learn why cats meow, purr, chirp, and how they communicate.',
      author: 'Prof. James Martinez',
      date: '2024-03-14',
      category: 'Cat Communication',
      readingTime: '10 minutes'
    },
    {
      id: 'article-3',
      title: 'Complete Guide to Cat Nutrition',
      excerpt: 'Expert guide on cat nutrition, dietary requirements, and feeding practices. Learn about protein needs, hydration, and creating the perfect diet.',
      author: 'Dr. Emily Chen',
      date: '2024-03-13',
      category: 'Cat Health & Nutrition',
      readingTime: '12 minutes'
    },
    {
      id: 'article-4',
      title: 'The Evolution of Cat-Human Relationships',
      excerpt: 'Explore the fascinating history of cat-human relationships from ancient civilizations to modern times. Learn how cats evolved from wild animals to beloved pets.',
      author: 'Dr. Michael Thompson',
      date: '2024-03-12',
      category: 'Cat History & Culture',
      readingTime: '15 minutes'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Blog | Cat Translator</title>
        <meta name="description" content="Explore our blog for insights into cat behavior, health, and the latest research in feline communication." />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cat Translator Blog</h1>
        
        <div className="grid gap-8">
          {articles.map((article) => (
            <article key={article.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Link href={`/blog/${article.id}`}>
                <div className="cursor-pointer">
                  <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                  <div className="text-sm text-gray-600 mb-2">
                    <span>{article.author}</span> • <span>{article.date}</span> • <span>{article.readingTime}</span>
                  </div>
                  <div className="text-sm text-blue-600 mb-4">{article.category}</div>
                  <p className="text-gray-700">{article.excerpt}</p>
                  <div className="mt-4 text-blue-500 hover:underline">Read more →</div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
} 