import Image from "next/image"
import type { Location } from "@/lib/api"

export function LocationHero({ location }: { location: Location }) {
  return (
    <section className="relative h-[400px] w-full">
      {location.image && (
        <Image
          src={location.image}
          alt={location.name}
          fill
          className="object-cover brightness-50"
          priority
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {location.name}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
            {location.description}
          </p>
        </div>
      </div>
    </section>
  )
}