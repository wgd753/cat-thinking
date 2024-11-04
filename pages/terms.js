import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export default function Terms() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Terms of Use | Cat Translator - Service Agreement</title>
        <meta name="description" content="Read Cat Translator's terms of use to understand the rules and guidelines for using our AI-powered cat behavior interpretation service." />
        <meta name="keywords" content="terms of use, service agreement, cat translator terms, user guidelines" />
        <meta property="og:title" content="Terms of Use | Cat Translator" />
        <meta property="og:description" content="Terms and conditions for using Cat Translator's services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://cat.jellyw.com/terms" />
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
              <span className="text-gray-500">Terms of Use</span>
            </li>
          </ol>
        </nav>

        {/* Quick Navigation */}
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
            <Link href="/privacy">
              <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200">
                Privacy Policy 🔒
              </span>
            </Link>
          </div>
        </nav>

        <article className="max-w-3xl mx-auto prose prose-lg">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
            <p className="text-xl text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Cat Translator!</h2>
            <p>By accessing or using our service, you agree to these terms. Please read them carefully.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Service Description</h2>
            <p>Cat Translator is an AI-powered tool that helps interpret cat behavior through:</p>
            <ul>
              <li>Photo and video analysis</li>
              <li>Behavior interpretation</li>
              <li>Communication suggestions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
            <h3>You agree to:</h3>
            <ul>
              <li>Provide accurate information</li>
              <li>Use the service responsibly</li>
              <li>Not share inappropriate or harmful content</li>
              <li>Respect other users' privacy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Content Guidelines</h2>
            <p>When using Cat Translator, you may only upload:</p>
            <ul>
              <li>Images and videos of cats</li>
              <li>Content you have permission to share</li>
              <li>Family-friendly content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Service Limitations</h2>
            <p>Please understand that:</p>
            <ul>
              <li>AI interpretations are suggestions, not veterinary advice</li>
              <li>Service availability may vary</li>
              <li>Features may change over time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p>All content and technology on Cat Translator are protected by copyright and other intellectual property rights.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
            <p>For questions about these terms, please contact:</p>
            <p>Email: wgd@jellyw.com</p>
            <p>Address: Guangzhou, China</p>
          </section>
        </article>

        {/* Add Footer Navigation */}
        <footer className="mt-16 text-center">
          <nav className="space-x-4">
            <Link href="/">
              <span className="text-gray-600 hover:text-indigo-600">Home</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-600 hover:text-indigo-600">About</span>
            </Link>
            <Link href="/blog">
              <span className="text-gray-600 hover:text-indigo-600">Blog</span>
            </Link>
            <Link href="/privacy">
              <span className="text-gray-600 hover:text-indigo-600">Privacy</span>
            </Link>
          </nav>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Terms of Use",
              "description": "Terms and conditions for using Cat Translator services",
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

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
} 