import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCoffeeShops, getCoffeeShopById } from "@/lib/api";
import { CoffeeShopDetails } from "@/components/coffee-shop-details";
import { constructMetadata } from "@/components/seo/meta-tags";
import { generateCoffeeShopSchema } from "@/components/seo/structured-data";

export const revalidate = 15552000; // 6 months

export async function generateStaticParams() {
  const shops = await getCoffeeShops();
  return shops.map((shop) => ({
    id: shop.id || '',
  })).filter(params => params.id);
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const shop = await getCoffeeShopById(params.id);
  
  if (!shop) {
    return constructMetadata({
      title: "Coffee Shop Not Found",
      description: "The requested coffee shop could not be found.",
      url: `https://coffeeshopsinlondon.com/coffee-shops/${params.id}`,
      type: "website",
    });
  }

  return constructMetadata({
    title: `${shop.title} - Coffee Shop in ${shop.area}, London`,
    description: `Visit ${shop.title} in ${shop.area}, London. ${shop.description}`,
    image: shop.thumbnail,
    url: `https://coffeeshopsinlondon.com/coffee-shops/${shop.id}`,
    type: "article",
  });
}

export default async function CoffeeShopPage({ params }: { params: { id: string } }) {
  const shop = await getCoffeeShopById(params.id);
  
  if (!shop) {
    notFound();
  }

  const jsonLd = generateCoffeeShopSchema({
    title: shop.title,
    description: shop.description,
    image: shop.thumbnail,
    address: shop.address,
    rating: shop.rating,
    reviews: shop.reviews,
    phone: shop.phone,
    website: shop.website,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoffeeShopDetails shop={shop} />
    </div>
  );
}