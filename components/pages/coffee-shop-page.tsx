import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Phone, Star, Globe, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CoffeeShopHeader } from "@/components/layout/header"
import { CoffeeShopFooter } from "@/components/layout/footer"
import type { CoffeeShop } from "@/lib/api"

export function CoffeeShopPage({ shop }: { shop: CoffeeShop }) {
  return (
    <div className="flex flex-col min-h-screen">
      <CoffeeShopHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <Image
            src={shop.thumbnail}
            alt={shop.title}
            fill
            className="object-cover brightness-75"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link
                href="/coffee-shops"
                className="inline-flex items-center text-white hover:text-amber-300 mb-4 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Coffee Shops
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {shop.title}
              </h1>
              <div className="flex items-center text-white space-x-4">
                <div className="flex items-center">
                  {Array.from({ length: Math.round(shop.rating) }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2">({shop.reviews} reviews)</span>
                </div>
                <span>•</span>
                <span>{shop.type}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Photo Gallery */}
              {shop.photos && shop.photos.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {shop.photos.map((photo, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={photo}
                          alt={`${shop.title} photo ${index + 1}`}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Hours Section */}
              {shop.hours && shop.hours.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                    {shop.hours.map((hour, index) => (
                      <div key={index} className="text-gray-600">{hour}</div>
                    ))}
                  </div>
                </section>
              )}

              {/* Location Section */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Location</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600">{shop.address}</p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>{shop.address}</span>
                </div>

                {shop.hours && shop.hours.length > 0 && (
                  <div className="flex items-start text-gray-600">
                    <Clock className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      {shop.hours[0]}
                    </div>
                  </div>
                )}

                {shop.phone && (
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                    <a href={`tel:${shop.phone}`} className="hover:text-amber-600">
                      {shop.phone}
                    </a>
                  </div>
                )}

                {shop.website && (
                  <div className="flex items-center text-gray-600">
                    <Globe className="w-5 h-5 mr-2 flex-shrink-0" />
                    <a
                      href={shop.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                )}

                {shop.website && (
                  <a
                    href={shop.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-6"
                  >
                    <Button className="w-full bg-amber-500 hover:bg-amber-600">
                      Visit Website
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <CoffeeShopFooter />
    </div>
  )
}