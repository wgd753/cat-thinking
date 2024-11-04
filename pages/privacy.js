import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export default function Privacy() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Privacy Policy | Cat Translator - Protecting Your Data</title>
        <meta name="description" content="Learn how Cat Translator protects your privacy and handles your data. Read our detailed privacy policy to understand your rights and our responsibilities." />
        <meta name="keywords" content="privacy policy, data protection, cat translator privacy, user data rights" />
        <meta property="og:title" content="Privacy Policy | Cat Translator" />
        <meta property="og:description" content="Learn how Cat Translator protects your privacy and handles your data." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://cat.jellyw.com/privacy" />
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
              <span className="text-gray-500">Privacy Policy</span>
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
            <Link href="/terms">
              <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200">
                Terms of Use 📜
              </span>
            </Link>
          </div>
        </nav>

        <article className="max-w-3xl mx-auto prose prose-lg">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Privacy Matters</h2>
            <p>At Cat Translator, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our service.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3>1. Personal Information</h3>
            <ul>
              <li>Email address (when you choose to provide it)</li>
              <li>Profile information (optional)</li>
              <li>Usage data and preferences</li>
            </ul>

            <h3>2. Cat Photos and Videos</h3>
            <ul>
              <li>Images and videos you upload for analysis</li>
              <li>Analysis results and interpretations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul>
              <li>To provide and improve our cat translation services</li>
              <li>To personalize your experience</li>
              <li>To communicate with you about our services</li>
              <li>To improve our AI model's accuracy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>We implement industry-standard security measures to protect your data. Your cat photos and personal information are encrypted and stored securely.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <ul>
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Opt-out of communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>If you have any questions about our Privacy Policy, please contact us at:</p>
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
              "@type": "WebPage",
              "name": "Privacy Policy",
              "description": "Cat Translator Privacy Policy and Data Protection Information",
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