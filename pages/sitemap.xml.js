function SiteMap() {
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
      priority: 1.0,
      multilingual: true // 标记支持多语言的页面
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: 0.8,
      multilingual: false
    },
    {
      url: '/privacy',
      changefreq: 'monthly',
      priority: 0.5,
      multilingual: false
    },
    {
      url: '/terms',
      changefreq: 'monthly',
      priority: 0.5,
      multilingual: false
    },
    {
      url: '/blog',
      changefreq: 'daily',
      priority: 0.9,
      multilingual: false
    }
  ];

  // 博客文章
  const blogPosts = [1, 2, 3, 4, 5, 6].map(id => ({
    url: `/blog/posts/${id}`,
    changefreq: 'weekly',
    priority: 0.7
  }));

  const allUrls = [];

  // 添加所有英文页面
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

  // 只为支持多语言的页面添加其他语言版本
  languages.forEach(lang => {
    if (lang !== 'en') {
      staticPages
        .filter(page => page.multilingual)
        .forEach(page => {
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