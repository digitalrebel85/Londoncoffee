import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocations, getCoffeeShopsByLocation } from "@/lib/api";
import { LocationPage } from "@/components/pages/location-page";
import { constructMetadata } from "@/components/seo/meta-tags";
import { generateLocationSchema } from "@/components/seo/structured-data";

export const revalidate = 15552000; // 6 months

export async function generateStaticParams() {
  const locations = getLocations();
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const locations = getLocations();
  const location = locations.find((loc) => loc.slug === params.slug);
  
  if (!location) {
    return constructMetadata({
      title: "Location Not Found",
      description: "The requested location could not be found.",
      url: `https://coffeeshopsinlondon.com/locations/${params.slug}`,
      type: "website",
    });
  }

  return constructMetadata({
    title: `Best Coffee Shops in ${location.name}, London`,
    description: location.description,
    image: location.image,
    url: `https://coffeeshopsinlondon.com/locations/${location.slug}`,
    type: "website",
  });
}

export default async function LocationRoute({
  params,
}: {
  params: { slug: string };
}) {
  const locations = getLocations();
  const location = locations.find((loc) => loc.slug === params.slug);
  
  if (!location) {
    notFound();
  }

  const coffeeShops = await getCoffeeShopsByLocation(params.slug);

  const jsonLd = generateLocationSchema({
    name: location.name,
    description: location.description,
    image: location.image,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationPage location={location} coffeeShops={coffeeShops} />
    </>
  );
}