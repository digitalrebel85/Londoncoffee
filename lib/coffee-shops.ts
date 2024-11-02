import { CoffeeShop } from "@/types/coffee-shop"

const COFFEE_SHOPS: CoffeeShop[] = [
  {
    id: "roasted-bean-shoreditch",
    title: "The Roasted Bean",
    description: "Artisanal roasts in Shoreditch",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=60",
    address: "123 Brick Lane, London",
    hours: "Open 7AM - 7PM",
    rating: 4.5,
    reviews: 128,
    phone: "+44 20 1234 5678",
    website: "https://theroastedbean.com",
    location: "shoreditch",
    photos: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    ]
  },
  {
    id: "brew-and-co-covent",
    title: "Brew & Co.",
    description: "Specialty coffee in Covent Garden",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&auto=format&fit=crop&q=60",
    address: "45 Long Acre, London",
    hours: "Open 6:30AM - 8PM",
    rating: 4.7,
    reviews: 256,
    phone: "+44 20 2345 6789",
    website: "https://brewandco.com",
    location: "covent-garden",
    photos: [
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
    ]
  },
  {
    id: "grind-house-camden",
    title: "The Grind House",
    description: "Eco-friendly cafe in Camden",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60",
    address: "78 Camden High St, London",
    hours: "Open 8AM - 6PM",
    rating: 4.6,
    reviews: 192,
    phone: "+44 20 3456 7890",
    website: "https://grindhouse.com",
    location: "camden",
    photos: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247"
    ]
  }
]

export async function getCoffeeShops(): Promise<CoffeeShop[]> {
  return COFFEE_SHOPS
}

export async function getCoffeeShopById(id: string): Promise<CoffeeShop | undefined> {
  return COFFEE_SHOPS.find(shop => shop.id === id)
}

export async function getCoffeeShopsByLocation(location: string): Promise<CoffeeShop[]> {
  return COFFEE_SHOPS.filter(shop => shop.location === location)
}

export async function getCoffeeShopIds(): Promise<{ id: string }[]> {
  return COFFEE_SHOPS.map(shop => ({
    id: shop.id
  }))
}