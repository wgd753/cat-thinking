const Robots = () => null;

export async function getServerSideProps({ res }) {
  const robots = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://cat.jellyw.com/sitemap.xml

# Crawl-delay
Crawl-delay: 10`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robots);
  res.end();

  return {
    props: {},
  };
}

export default Robots; 