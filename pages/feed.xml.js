import { blogPostsData } from '@/lib/blogData';

export default function FeedXml() {
  // This page should never be rendered
  return null;
}

export async function getServerSideProps({ res }) {
  const feed = generateFeed(blogPostsData);
  
  res.setHeader('Content-Type', 'text/xml');
  res.write(feed);
  res.end();

  return {
    props: {},
  };
}

function generateFeed(posts) {
  const baseUrl = 'https://cat.jellyw.com';
  
  return `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Cat Translator Blog</title>
        <link>${baseUrl}</link>
        <description>Understanding your feline friend better with AI</description>
        <language>en</language>
        ${Object.values(posts).map(post => `
          <item>
            <title>${escapeXml(post.title)}</title>
            <link>${baseUrl}/blog/posts/${post.id}</link>
            <description>${escapeXml(post.excerpt)}</description>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <guid>${baseUrl}/blog/posts/${post.id}</guid>
          </item>
        `).join('')}
      </channel>
    </rss>`;
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
} 