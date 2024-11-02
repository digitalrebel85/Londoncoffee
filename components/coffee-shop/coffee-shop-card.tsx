"use client";

import Image from "next/image";
import { MapPin, Clock, Star, Navigation, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { CoffeeShop } from "@/lib/api";

interface CoffeeShopCardProps {
  shop: CoffeeShop;
}

export function CoffeeShopCard({ shop }: CoffeeShopCardProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${shop.title} ${shop.address}`
  )}`;

  const handleDirectionsClick = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle>{shop.title}</CardTitle>
        <CardDescription>{shop.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video mb-4">
          <Image
            src={shop.thumbnail}
            alt={shop.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex items-center mb-2 text-amber-500">
          {Array.from({ length: Math.round(shop.rating || 0) }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
          <span className="ml-2 text-sm text-gray-600">
            ({shop.reviews || 0} reviews)
          </span>
        </div>
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span>{shop.address}</span>
          </div>
          {shop.hours && shop.hours[0] && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1 flex-shrink-0" />
              <span>{shop.hours[0]}</span>
            </div>
          )}
          {shop.topReview && (
            <div className="flex items-start mt-4 p-3 bg-gray-50 rounded-lg">
              <Quote className="w-4 h-4 mr-2 flex-shrink-0 text-amber-500" />
              <p className="text-sm italic text-gray-600">{shop.topReview}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleDirectionsClick}
          variant="default" 
          className="w-full bg-amber-500 hover:bg-amber-600 text-white"
        >
          <Navigation className="w-4 h-4 mr-2" />
          Get Directions
        </Button>
      </CardFooter>
    </Card>
  );
}