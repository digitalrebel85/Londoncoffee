import Image from "next/image";
import { MapPin, Clock, Phone, Globe, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { CoffeeShop } from "@/lib/api";

interface CoffeeShopDetailsProps {
  shop: CoffeeShop;
}

export function CoffeeShopDetails({ shop }: CoffeeShopDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="relative h-[400px] w-full">
          <Image
            src={shop.thumbnail}
            alt={shop.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold">{shop.title}</CardTitle>
              <p className="text-muted-foreground">{shop.type}</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold">{shop.rating}</span>
              <span className="text-muted-foreground">({shop.reviews} reviews)</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>{shop.address}</span>
              </div>
              
              {shop.hours && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div className="space-y-1">
                    {shop.hours.map((hour, index) => (
                      <div key={index}>{hour}</div>
                    ))}
                  </div>
                </div>
              )}
              
              {shop.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>{shop.phone}</span>
                </div>
              )}
              
              {shop.website && (
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <a
                    href={shop.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">About</h3>
              <p className="text-muted-foreground">{shop.description}</p>
              
              {shop.photos && shop.photos.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {shop.photos.slice(0, 4).map((photo, index) => (
                    <div key={index} className="relative aspect-square">
                      <Image
                        src={photo}
                        alt={`${shop.title} interior ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white"
              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(shop.address)}`, '_blank')}
            >
              Get Directions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}