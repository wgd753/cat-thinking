import SEOHead from '../components/common/SEOHead'
// ... 其他导入

export default function Terms() {
  return (
    <>
      <SEOHead
        title="Terms of Service | Cat Translator"
        description="Read about Cat Translator's terms of service and usage guidelines."
        path="/terms"
      />
      {/* ... 其他代码 */}
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