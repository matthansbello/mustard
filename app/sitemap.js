import { SITE } from '@/common/site-config';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ __metadata_id__: [] }];
}

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/portfolio', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/company-profile', priority: 0.6, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
