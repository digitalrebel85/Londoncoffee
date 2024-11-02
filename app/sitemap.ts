import { MetadataRoute } from 'next';
import { getLocations, getCoffeeShops } from '@/lib/api';

const BASE_URL = 'https://coffeeshopsinlondon.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locations = getLocations();
  const coffeeShops = await getCoffeeShops();

  const locationUrls = locations.map((location) => ({
    url: `${BASE_URL}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const coffeeShopUrls = coffeeShops.map((shop) => ({
    url: `${BASE_URL}/coffee-shops/${shop.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/coffee-shops`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...locationUrls,
    ...coffeeShopUrls,
  ];
}