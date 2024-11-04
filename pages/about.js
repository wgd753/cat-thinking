import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import SEOHead from '../components/common/SEOHead';

export default function About() {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title="About Cat Translator | AI-Powered Cat Behavior Interpreter"
        description="Discover how Cat Translator uses Google's Gemini AI to help you understand your cat's behavior. Learn about our mission to strengthen the bond between cats and their humans."
        path="/about"
      />

      <main className="container mx-auto px-4 py-8">
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
              <span className="text-gray-500">About</span>
            </li>
          </ol>
        </nav>

        <nav className="mb-12">
          <h2 className="sr-only">Quick Navigation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200">
                Try Cat Translator 🐱
              </span>
            </Link>
            <Link href="/blog">
              <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200">
                Read Our Blog 📚
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
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Cat Translator</h1>
            <p className="text-xl text-gray-600">Using AI to bridge the gap between cats and humans</p>
          </header>

          <section className="mb-12">
            <h2>Hey there! 👋</h2>
            <p>Welcome to Cat Translator! I'm super passionate about helping people understand their furry friends better. This little project of mine uses AI magic to decode what your cat is trying to tell you!</p>
          </section>

          <section className="mb-12">
            <h2>How This All Started</h2>
            <p>You know how cats can be mysterious sometimes? That's exactly why I created Cat Translator in 2024! As a cat parent myself, I wanted to build something cool that could help us all better understand what our cats are thinking. Thanks to Google's awesome Gemini AI model, that dream is now a reality!</p>
          </section>

          <section className="mb-12">
            <h2>The Tech Behind It</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3>AI Magic ✨</h3>
                <p>I'm using Google's super-smart Gemini AI to do the heavy lifting. It's like having a cat behavior expert in your pocket, helping you figure out what your cat's trying to say!</p>
              </div>
              <div>
                <h3>Getting Better Every Day</h3>
                <p>The more people use Cat Translator, the smarter it gets! Your feedback helps make the tool even better at understanding our feline friends.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2>Who's Behind This?</h2>
            <p>Hi! 👋 I'm a programmer and total cat nerd who built Cat Translator. While it's just me running the show, I'm committed to making this the best tool possible for cat lovers everywhere. Sometimes the best things start small, right? 😊</p>
          </section>

          <section className="mb-12">
            <h2>Let's Chat!</h2>
            <p>Got questions? Ideas? Cat photos to share? I'd love to hear from you!</p>
            <p>Drop me a line at: wgd@jellyw.com</p>
            <p>Based in: Guangzhou, China 🇨🇳</p>
          </section>
        </article>

        <footer className="mt-16 text-center">
          <nav className="space-x-4">
            <Link href="/">
              <span className="text-gray-600 hover:text-indigo-600">Home</span>
            </Link>
            <Link href="/blog">
              <span className="text-gray-600 hover:text-indigo-600">Blog</span>
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
              "@type": "AboutPage",
              "name": "About Cat Translator",
              "description": "Cat Translator uses Google's Gemini AI to help people understand their cats better.",
              "publisher": {
                "@type": "Organization",
                "name": "Cat Translator",
                "location": "Guangzhou, China"
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