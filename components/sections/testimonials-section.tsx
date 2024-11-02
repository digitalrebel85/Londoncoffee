import Image from "next/image"
import { Star } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Coffee Enthusiast 1",
    text: "London Coffee Shops helped me discover my new favorite cafe! The recommendations are spot-on, and I love exploring new coffee spots in the city.",
  },
  {
    id: 2,
    name: "Coffee Enthusiast 2",
    text: "London Coffee Shops helped me discover my new favorite cafe! The recommendations are spot-on, and I love exploring new coffee spots in the city.",
  },
  {
    id: 3,
    name: "Coffee Enthusiast 3",
    text: "London Coffee Shops helped me discover my new favorite cafe! The recommendations are spot-on, and I love exploring new coffee spots in the city.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-700">
          What Coffee Lovers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-700"
            >
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription>Verified Customer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {testimonial.text}
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-4 h-4 fill-current"
                    />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}