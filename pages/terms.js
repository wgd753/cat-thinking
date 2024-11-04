import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Terms() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Terms of Use | Cat Translator</title>
        <meta name="description" content="Terms of use for Cat Translator - Understanding our service agreement and user responsibilities." />
        <meta name="robots" content="noindex" />
      </Head>

      <article className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>

        <section className="mb-8">
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using Cat Translator, you agree to be bound by these Terms of Use and all applicable laws and regulations.</p>
        </section>

        <section className="mb-8">
          <h2>Service Description</h2>
          <p>Cat Translator provides AI-powered cat behavior analysis through image processing. While we strive for accuracy, results are interpretative and should not replace professional veterinary advice.</p>
        </section>

        <section className="mb-8">
          <h2>User Responsibilities</h2>
          <ul>
            <li>You must only upload images you have the right to use</li>
            <li>You must not upload harmful or inappropriate content</li>
            <li>You are responsible for maintaining your account security</li>
            <li>You must not attempt to breach our security measures</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Intellectual Property</h2>
          <p>All content, features, and functionality of Cat Translator are owned by jellyw and protected by international copyright laws.</p>
        </section>

        <section className="mb-8">
          <h2>Limitation of Liability</h2>
          <p>Cat Translator is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of our service.</p>
        </section>

        <section className="mb-8">
          <h2>Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of new terms.</p>
        </section>

        <section className="mb-8">
          <h2>Contact Information</h2>
          <p>For questions about these terms, please contact:</p>
          <p>Email: wgd@jellyw.com</p>
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