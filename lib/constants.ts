export const LONDON_AREAS = [
  "Shoreditch",
  "Soho",
  "Camden",
  "Covent Garden",
  "Marylebone",
  "London Bridge"
] as const;

export const COFFEE_SHOPS = [
  {
    id: "bar-italia",
    title: "Bar Italia",
    area: "Soho",
    address: "22 Frith St, London W1D 4RF",
    rating: 4.5,
    reviews: 2891,
    type: "Italian Coffee Shop",
    thumbnail: "https://lh3.googleusercontent.com/places/ABCD1234",
    description: "Historic Italian café serving espresso since 1949."
  },
  {
    id: "london-notes-coffee-roasters-bar-trafalgar-square",
    title: "Notes Coffee Roasters & Bar | Trafalgar Square",
    area: "Central London",
    address: "31 St Martin's Lane, London WC2N 4ER",
    rating: 4.4,
    reviews: 1256,
    type: "Coffee Shop & Roastery",
    thumbnail: "https://lh3.googleusercontent.com/places/EFGH5678",
    description: "Specialty coffee roasters with an extensive drink menu."
  }
] as const;