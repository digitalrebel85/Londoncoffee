import axios from "axios";
import { generateCoffeeShopId } from "./utils";

export interface CoffeeShop {
  id: string;
  title: string;
  area: string;
  address: string;
  rating: number;
  reviews: number;
  type: string;
  thumbnail: string;
  description: string;
  location?: string;
  photos?: string[];
  hours?: string[];
  phone?: string;
  website?: string;
  topReview?: string;
}

export interface Location {
  name: string;
  slug: string;
  description: string;
  image: string;
  coffeeShopCount: number;
}

const LOCATIONS: Location[] = [
  {
    name: "Shoreditch",
    slug: "shoreditch",
    description: "A trendy neighborhood known for its artisanal coffee scene and creative atmosphere.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
    coffeeShopCount: 15
  },
  {
    name: "Soho",
    slug: "soho",
    description: "Historic district with a vibrant coffee culture and iconic cafes.",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80",
    coffeeShopCount: 12
  },
  {
    name: "Camden",
    slug: "camden",
    description: "Alternative culture meets specialty coffee in this lively London area.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80",
    coffeeShopCount: 10
  },
  {
    name: "Covent Garden",
    slug: "covent-garden",
    description: "Elegant cafes and coffee shops in London's entertainment district.",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80",
    coffeeShopCount: 8
  },
  {
    name: "Marylebone",
    slug: "marylebone",
    description: "Sophisticated coffee culture in an upscale London neighborhood.",
    image: "https://images.unsplash.com/photo-1464979681340-bdd28a61699e?auto=format&fit=crop&q=80",
    coffeeShopCount: 10
  },
  {
    name: "London Bridge",
    slug: "london-bridge",
    description: "Historic coffee houses and modern cafes near London's iconic bridge.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
    coffeeShopCount: 7
  }
];

export function getLocations(): Location[] {
  return LOCATIONS;
}

async function fetchCoffeeShopsFromAPI(location: string): Promise<CoffeeShop[]> {
  try {
    const response = await axios.get(
      `https://api.valueserp.com/search`,
      {
        params: {
          api_key: "5C3FD44146204B86AED94576A4E40E6F",
          q: `best coffee shops in ${location}, London`,
          location: `${location}, London, UK`,
          search_type: "places",
          gl: "gb",
          hl: "en",
          google_domain: "google.co.uk",
          num: 20,
          include_places_details: true,
          include_reviews_details: true
        }
      }
    );

    if (!response.data.places_results) {
      console.warn(`No results found for ${location}`);
      return [];
    }

    return response.data.places_results.map((place: any) => ({
      id: generateCoffeeShopId(place.title || "", place.area || location),
      title: place.title || "Unknown Coffee Shop",
      area: place.area || location,
      address: place.full_address || place.address || "",
      rating: parseFloat(place.rating) || 0,
      reviews: parseInt(place.reviews) || 0,
      type: place.type || "Coffee Shop",
      thumbnail: place.thumbnail || 
        place.photos?.[0] || 
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
      description: place.description || `Visit ${place.title} in ${location}`,
      location: location.toLowerCase(),
      photos: place.photos?.slice(0, 6) || [],
      hours: place.hours || [],
      phone: place.phone || "",
      website: place.website || "",
      topReview: place.reviews_data?.[0]?.snippet || 
                place.reviews_data?.[0]?.text || 
                ""
    }));
  } catch (error) {
    console.error(`Error fetching coffee shops for ${location}:`, error);
    return [];
  }
}

export async function getCoffeeShops(): Promise<CoffeeShop[]> {
  const allShops = await Promise.all(
    LOCATIONS.map(location => fetchCoffeeShopsFromAPI(location.name))
  );
  return allShops.flat().filter(shop => 
    shop.title && 
    shop.address && 
    (shop.type?.toLowerCase().includes('coffee') || 
     shop.type?.toLowerCase().includes('café') || 
     shop.type?.toLowerCase().includes('cafe'))
  );
}

export async function getCoffeeShopById(id: string): Promise<CoffeeShop | null> {
  const shops = await getCoffeeShops();
  return shops.find(shop => shop.id === id) || null;
}

export async function getCoffeeShopsByLocation(slug: string): Promise<CoffeeShop[]> {
  const location = LOCATIONS.find(loc => loc.slug === slug);
  if (!location) return [];
  
  const shops = await fetchCoffeeShopsFromAPI(location.name);
  return shops.filter(shop => 
    shop.title && 
    shop.address && 
    (shop.type?.toLowerCase().includes('coffee') || 
     shop.type?.toLowerCase().includes('café') || 
     shop.type?.toLowerCase().includes('cafe'))
  );
}