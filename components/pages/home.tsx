import { CoffeeShopHeader } from "@/components/layout/header"
import { CoffeeShopFooter } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedShops } from "@/components/sections/featured-shops"
import { MissionSection } from "@/components/sections/mission-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <CoffeeShopHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedShops />
        <MissionSection />
      </main>
      <CoffeeShopFooter />
    </div>
  )
}