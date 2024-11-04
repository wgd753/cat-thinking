function RobotsTxt() {
  // getServerSideProps will handle the content
  return null;
}

export async function getServerSideProps({ res }) {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://cat.jellyw.com/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}

export default RobotsTxt; 