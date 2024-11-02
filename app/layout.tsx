import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from "@/components/analytics/google-tag-manager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://coffeeshopsinlondon.com'),
  title: {
    default: "Coffee Shops in London - Discover the Best Cafes",
    template: "%s | Coffee Shops in London"
  },
  description: "Explore London's finest coffee shops, artisanal cafes, and specialty roasters. Find your perfect brew in the heart of the city.",
  keywords: ["london coffee shops", "best cafes london", "specialty coffee london", "artisan coffee shops", "london cafes"],
  authors: [{ name: "Coffee Shops in London" }],
  creator: "Coffee Shops in London",
  publisher: "Coffee Shops in London",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://coffeeshopsinlondon.com",
    siteName: "Coffee Shops in London",
    images: [{
      url: "https://coffeeshopsinlondon.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Coffee Shops in London"
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@londoncoffee",
    creator: "@londoncoffee",
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Food & Drink",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManagerScript />
      </head>
      <body className={inter.className}>
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  );
}