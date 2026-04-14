import { getAllSlugs } from '@/lib/tools';

const SITE_URL = 'https://supercalc-dun.vercel.app';

export default async function sitemap() {
  const toolSlugs = getAllSlugs();
  
  const toolUrls = toolSlugs.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const categoryUrls = [
    {
      url: `${SITE_URL}/finance-calculators`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/student-tools`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/health-fitness`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/unit-converters`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...categoryUrls,
    ...toolUrls,
  ];
}
