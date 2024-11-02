export interface CoffeeShop {
  id: string
  title: string
  description: string
  image: string
  address: string
  hours: string
  rating?: number
  reviews?: number
  phone?: string
  website?: string
  photos?: string[]
  location: string
}