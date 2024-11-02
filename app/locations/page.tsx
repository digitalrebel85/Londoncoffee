import { CoffeeShopHeader } from "@/components/layout/header"
import { CoffeeShopFooter } from "@/components/layout/footer"
import { LocationCard } from "@/components/coffee-shop/location-card"
import { getLocations } from "@/lib/api"

export default function LocationsPage() {
  const locations = getLocations()

  return (
    <div className="flex flex-col min-h-screen">
      <CoffeeShopHeader />
      <main className="flex-1">
        <section className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-700">
            London Coffee Shop Locations
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
        </section>
      </main>
      <CoffeeShopFooter />
    </div>
  )
}