import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function About() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>About Us | Cat Translator</title>
        <meta name="description" content="Learn about Cat Translator - Our mission, team, and commitment to helping people understand their cats better." />
      </Head>

      <article className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-bold mb-8">About Cat Translator</h1>

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