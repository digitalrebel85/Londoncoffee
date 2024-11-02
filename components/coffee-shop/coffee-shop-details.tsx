"use client";

import Image from "next/image";
import { MapPin, Clock, Phone, Globe, Star, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { CoffeeShop } from "@/lib/api";

export function CoffeeShopDetails({ shop }: { shop: CoffeeShop }) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${shop.title} ${shop.address}`
  )}`;

  const handleDirectionsClick = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{shop.title}</h1>
            <p className="text-gray-600">{shop.type}</p>
          </div>

          <div className="flex items-center space-x-1 text-amber-500">
            {Array.from({ length: Math.round(shop.rating || 0) }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-gray-600">({shop.reviews || 0} reviews)</span>
          </div>

          <Card className="p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span>{shop.address}</span>
            </div>

            {shop.hours && shop.hours.length > 0 && (
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-500" />
                <div className="space-y-1">
                  {shop.hours.map((hour, index) => (
                    <div key={index} className="text-sm">{hour}</div>
                  ))}
                </div>
              </div>
            )}

            {shop.phone && (
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <a href={`tel:${shop.phone}`} className="hover:text-amber-500">
                  {shop.phone}
                </a>
              </div>
            )}

            {shop.website && (
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gray-500" />
                <a 
                  href={shop.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500"
                >
                  Visit Website
                </a>
              </div>
            )}

            <Button 
              onClick={handleDirectionsClick}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white mt-4"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </Card>

          {shop.topReview && (
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Top Review</h2>
              <p className="italic text-gray-600">{shop.topReview}</p>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <div className="relative aspect-video">
            <Image
              src={shop.thumbnail}
              alt={shop.title}
              fill
              className="rounded-lg object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {shop.photos && shop.photos.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {shop.photos.slice(0, 4).map((photo, index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={photo}
                    alt={`${shop.title} - Photo ${index + 1}`}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}