"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3)",
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg">
              Discover London's Best Coffee Shops
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-200 drop-shadow">
              Explore the finest cafes and roasteries in the heart of London. Your
              perfect brew awaits.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/locations">
              <Button
                className="bg-amber-500 text-white hover:bg-amber-600 transition-colors"
              >
                Explore by Area
              </Button>
            </Link>
            <Link href="/coffee-shops">
              <Button
                variant="outline"
                className="bg-white/90 hover:bg-white transition-colors"
              >
                View All Shops
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}