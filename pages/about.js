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
          <h2>Our Mission</h2>
          <p>At Cat Translator, we're passionate about strengthening the bond between humans and their feline companions. Our AI-powered platform helps decode cat behavior, making communication between species more intuitive and meaningful.</p>
        </section>

        <section className="mb-12">
          <h2>Our Story</h2>
          <p>Founded in 2024, Cat Translator emerged from a simple observation: while cats are one of the most popular pets worldwide, they're often misunderstood. Our team of animal behaviorists, AI specialists, and cat lovers came together to bridge this communication gap.</p>
        </section>

        <section className="mb-12">
          <h2>How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3>Advanced AI</h3>
              <p>Our AI model is trained on millions of cat images and behaviors, allowing accurate interpretation of feline body language.</p>
            </div>
            <div>
              <h3>Expert Input</h3>
              <p>Every analysis is backed by research from certified animal behaviorists and veterinarians.</p>
            </div>
            <div>
              <h3>Continuous Learning</h3>
              <p>Our system continuously improves through user feedback and new research findings.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2>Our Team</h2>
          <p>Our diverse team includes:</p>
          <ul>
            <li>Certified Animal Behaviorists</li>
            <li>AI and Machine Learning Engineers</li>
            <li>Veterinary Consultants</li>
            <li>UX/UI Designers</li>
            <li>Cat Welfare Advocates</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Reach out to us at:</p>
          <p>Email: wgd@jellyw.com</p>
          <p>Address: Shanghai, China</p>
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