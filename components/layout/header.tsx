"use client"

import Link from "next/link"
import { Coffee } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Coffee Shops", href: "/coffee-shops" },
  { name: "Locations", href: "/locations" },
  { name: "About", href: "#" },
]

export function CoffeeShopHeader() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="/">
        <Coffee className="h-10 w-10 text-amber-500" />
        <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-700">
          London Coffee Shops
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {navigation.map((item) => (
          <Link
            key={item.name}
            className="text-sm font-medium hover:text-amber-500 transition-colors"
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}