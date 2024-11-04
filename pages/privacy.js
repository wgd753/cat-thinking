import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Privacy() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Privacy Policy | Cat Translator</title>
        <meta name="description" content="Privacy policy for Cat Translator - Learn how we protect your data and respect your privacy." />
        <meta name="robots" content="noindex" />
      </Head>

      <article className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2>Information We Collect</h2>
          <p>When you use Cat Translator, we collect the following types of information:</p>
          <ul>
            <li>Images you upload for analysis</li>
            <li>Device information (browser type, operating system)</li>
            <li>Usage data (features used, time spent on site)</li>
            <li>Language preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and improve our cat translation services</li>
            <li>Analyze and enhance user experience</li>
            <li>Maintain and optimize our website performance</li>
            <li>Communicate with you about our services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Data Storage and Security</h2>
          <p>Your data is stored securely using industry-standard encryption. Images are temporarily stored for processing and automatically deleted after 24 hours.</p>
        </section>

        <section className="mb-8">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request data deletion</li>
            <li>Opt-out of data collection</li>
            <li>Request data correction</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Contact Us</h2>
          <p>If you have any questions about our privacy policy, please contact us at:</p>
          <p>Email: wgd@jellyw.com</p>
        </section>

        <section className="mb-8">
          <h2>Updates to This Policy</h2>
          <p>This privacy policy was last updated on March 15, 2024. We will notify users of any material changes to this policy.</p>
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