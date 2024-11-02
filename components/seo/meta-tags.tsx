import { Metadata } from "next";

interface MetaTagsProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: "article" | "website";
}

export function constructMetadata({
  title,
  description,
  image,
  url,
  type = "website",
}: MetaTagsProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Coffee Shops in London",
      images: image ? [{ url: image }] : undefined,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}