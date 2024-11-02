import { NextResponse } from 'next/server';
import { getCoffeeShops, getCoffeeShopsByLocation } from '@/lib/api';

export const revalidate = 15552000; // 6 months

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');

  try {
    if (location) {
      const coffeeShops = await getCoffeeShopsByLocation(location);
      return NextResponse.json(coffeeShops);
    }
    
    const allCoffeeShops = await getCoffeeShops();
    return NextResponse.json(allCoffeeShops);
  } catch (error) {
    console.error('Error fetching coffee shops:', error);
    return NextResponse.json(
      { error: 'Failed to fetch coffee shops' }, 
      { status: 500 }
    );
  }
}