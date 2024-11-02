import Link from "next/link"
import { MapPin } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Location } from "@/lib/api"

export function LocationCard({ location }: { location: Location }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-amber-500" />
          <CardTitle>{location.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {location.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={`/locations/${location.slug}`} className="w-full">
          <Button
            variant="outline"
            className="w-full hover:bg-amber-500 hover:text-white transition-colors"
          >
            Explore Coffee Shops
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}