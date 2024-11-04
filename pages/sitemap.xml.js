function SiteMap() {
  // getServerSideProps will handle the XML generation
  return null;
}

export async function getServerSideProps({ res }) {
  const baseUrl = 'https://cat.jellyw.com';
  const languages = ['en', 'zh', 'ko', 'ja', 'es'];
  const currentDate = new Date().toISOString();

  // 静态页面
  const staticPages = [
    {
      url: '/',
      changefreq: 'daily',
      priority: 1.0
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/privacy',
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: '/terms',
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: '/blog',
      changefreq: 'daily',
      priority: 0.9
    }
  ];

  // 博客文章
  const blogPosts = [1, 2, 3, 4, 5, 6].map(id => ({
    url: `/blog/posts/${id}`,
    changefreq: 'weekly',
    priority: 0.7
  }));

  // 生成所有 URL
  const allUrls = [];

  // 添加默认语言（英文）页面
  [...staticPages, ...blogPosts].forEach(page => {
    allUrls.push(`
      <url>
        <loc>${baseUrl}${page.url}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `);
  });

  // 添加其他语言版本
  languages.forEach(lang => {
    if (lang !== 'en') {
      [...staticPages, ...blogPosts].forEach(page => {
        allUrls.push(`
          <url>
            <loc>${baseUrl}/${lang}${page.url}</loc>
            <lastmod>${currentDate}</lastmod>
            <changefreq>${page.changefreq}</changefreq>
            <priority>${page.priority * 0.8}</priority>
          </url>
        `);
      });
    }
  });

  // 生成完整的 sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls.join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap; 