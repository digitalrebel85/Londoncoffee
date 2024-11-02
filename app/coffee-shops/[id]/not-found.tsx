import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Coffee Shop Not Found</h1>
      <p className="text-gray-600 mb-8 text-center">
        We couldn't find the coffee shop you're looking for. It might have moved or no longer exists.
      </p>
      <Link href="/locations">
        <Button className="bg-amber-500 hover:bg-amber-600">
          Explore Other Coffee Shops
        </Button>
      </Link>
    </div>
  )
}