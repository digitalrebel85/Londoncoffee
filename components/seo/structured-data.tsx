export function generateCoffeeShopSchema(shop: {
  title: string;
  description: string;
  image: string;
  address: string;
  rating?: number;
  reviews?: number;
  phone?: string;
  website?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: shop.title,
    description: shop.description,
    image: shop.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: shop.address,
      addressLocality: "London",
      addressCountry: "GB"
    },
    ...(shop.rating && { aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: shop.rating,
      reviewCount: shop.reviews
    }}),
    ...(shop.phone && { telephone: shop.phone }),
    ...(shop.website && { url: shop.website })
  };
}

export function generateLocationSchema(location: {
  name: string;
  description: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${location.name}, London`,
    description: location.description,
    image: location.image,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: "London",
      addressCountry: "GB"
    }
  };
}