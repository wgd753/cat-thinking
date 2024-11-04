import { GetServerSideProps } from 'next';

const Feed = () => null;

export async function getServerSideProps({ res }) {
  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Cat Translator - What is Your Cat Thinking</title>
        <link>https://cat.jellyw.com</link>
        <description>AI-powered cat translator that helps you understand what your cat is thinking</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      </channel>
    </rss>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(feed);
  res.end();

  return {
    props: {},
  };
}

export default Feed; 