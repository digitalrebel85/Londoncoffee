import { CoffeeShopHeader } from "@/components/layout/header";
import { CoffeeShopFooter } from "@/components/layout/footer";
import { CoffeeShopCard } from "@/components/coffee-shop/coffee-shop-card";
import { LocationHero } from "@/components/coffee-shop/location-hero";
import type { CoffeeShop, Location } from "@/lib/api";

interface LocationPageProps {
  location: Location;
  coffeeShops: CoffeeShop[];
}

export function LocationPage({ location, coffeeShops }: LocationPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <CoffeeShopHeader />
      <main className="flex-1">
        <LocationHero location={location} />
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-700">
            Coffee Shops in {location.name}
          </h2>
          {coffeeShops.length === 0 ? (
            <p className="text-center text-gray-500">
              No coffee shops found in this area. Please try another location.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffeeShops.map((shop) => (
                <CoffeeShopCard key={shop.id} shop={shop} />
              ))}
            </div>
          )}
        </section>
      </main>
      <CoffeeShopFooter />
    </div>
  );
}