import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MissionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-700">
              Our Mission
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
              We're passionate about connecting coffee lovers with London's most
              exceptional cafes. Our curated selection showcases the city's diverse
              coffee culture, from historic establishments to cutting-edge
              roasteries.
            </p>
          </div>
          <Link href="/locations">
            <Button className="bg-amber-500 text-white hover:bg-amber-600 transition-colors">
              Explore Coffee Shops
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}