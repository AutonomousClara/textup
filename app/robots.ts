import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/start', '/api/'],
    },
    sitemap: 'https://textup.autonomousclara.com/sitemap.xml',
  };
}
