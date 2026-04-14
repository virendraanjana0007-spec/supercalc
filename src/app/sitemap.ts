import { getAllSlugs } from '@/lib/tools';

export default async function sitemap() {
  const toolSlugs = getAllSlugs();
  
  const toolUrls = toolSlugs.map((slug) => ({
    url: `https://supercalc.com/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const categoryUrls = [
    {
      url: 'https://supercalc.com/finance-calculators',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://supercalc.com/student-tools',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://supercalc.com/health-fitness',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://supercalc.com/unit-converters',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return [
    {
      url: 'https://supercalc.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...categoryUrls,
    ...toolUrls,
  ];
}
