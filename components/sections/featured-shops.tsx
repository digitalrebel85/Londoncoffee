import { CoffeeShopCard } from "@/components/coffee-shop/coffee-shop-card";
import { getCoffeeShops } from "@/lib/api";

export async function FeaturedShops() {
  const shops = await getCoffeeShops();
  const featuredShops = shops
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 3);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-700">
          Top-Rated Coffee Shops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredShops.map((shop) => (
            <CoffeeShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </div>
    </section>
  );
}