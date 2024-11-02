import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CoffeeShop } from "@/types/coffee-shop"

interface CoffeeShopCardProps {
  shop: CoffeeShop
}

export function CoffeeShopCard({ shop }: CoffeeShopCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle>{shop.title}</CardTitle>
        <CardDescription>{shop.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={shop.image}
          alt={shop.title}
          width={400}
          height={200}
          className="rounded-lg object-cover w-full h-48"
        />
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{shop.address}</span>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          <span>{shop.hours}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/coffee-shops/${shop.id}`} className="w-full">
          <Button variant="outline" className="w-full hover:bg-amber-500 hover:text-white transition-colors">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}