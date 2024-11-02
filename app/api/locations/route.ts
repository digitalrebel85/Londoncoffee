import { NextResponse } from 'next/server';
import { getLocations, getCoffeeShopsByLocation } from '@/lib/api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  try {
    const locations = getLocations();
    
    if (slug) {
      const location = locations.find(loc => loc.slug === slug);
      if (!location) {
        return NextResponse.json(
          { error: 'Location not found' }, 
          { status: 404 }
        );
      }
      
      const coffeeShops = await getCoffeeShopsByLocation(slug);
      return NextResponse.json({ ...location, coffeeShops });
    }

    return NextResponse.json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch locations' }, 
      { status: 500 }
    );
  }
}