
export interface PropertyType {
  id: number;
  title: string;
  type: string;
  location: string;
  price: number;
  currency: string;
  period: string;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  beds: number;
  baths: number;
  guests: number;
  amenities: string[];
  host: {
    name: string;
    image: string;
    joinedDate: string;
    isSuperhost: boolean;
  };
  description?: string;
  featured?: boolean;
}

export const properties: PropertyType[] = [
  {
    id: 1,
    title: "Villa avec vue sur mer à Nice",
    type: "Villa",
    location: "Nice, France",
    price: 250,
    currency: "€",
    period: "nuit",
    rating: 4.8,
    reviewCount: 127,
    image: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=870&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b46f39f?q=80&w=870&auto=format&fit=crop"
    ],
    beds: 3,
    baths: 2,
    guests: 6,
    amenities: ["Wi-Fi", "Piscine", "Vue sur mer", "Cuisine", "Parking", "Climatisation"],
    host: {
      name: "Marie Dupont",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop",
      joinedDate: "2019",
      isSuperhost: true
    },
    description: "Magnifique villa moderne avec vue imprenable sur la Méditerranée. Profitez de la piscine privée et des terrasses ensoleillées. À seulement 10 minutes à pied de la plage et des restaurants.",
    featured: true
  },
  {
    id: 2,
    title: "Appartement au cœur de Paris",
    type: "Appartement",
    location: "Paris, France",
    price: 180,
    currency: "€",
    period: "nuit",
    rating: 4.7,
    reviewCount: 95,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1780&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1780&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613575831056-0acd5da8f396?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588471980726-8346cb477a33?q=80&w=870&auto=format&fit=crop"
    ],
    beds: 2,
    baths: 1,
    guests: 4,
    amenities: ["Wi-Fi", "Cuisine équipée", "Ascenseur", "Lave-linge", "TV", "Climatisation"],
    host: {
      name: "Jean Martin",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
      joinedDate: "2020",
      isSuperhost: false
    },
    description: "Charmant appartement haussmannien situé à deux pas des Champs-Élysées. Lumineux et entièrement rénové, il offre tout le confort moderne dans un cadre authentiquement parisien.",
    featured: true
  },
  {
    id: 3,
    title: "Maison de campagne en Provence",
    type: "Maison",
    location: "Aix-en-Provence, France",
    price: 195,
    currency: "€",
    period: "nuit",
    rating: 4.9,
    reviewCount: 78,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610368169682-966abcf2590d?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=870&auto=format&fit=crop"
    ],
    beds: 4,
    baths: 2,
    guests: 8,
    amenities: ["Wi-Fi", "Jardin", "Barbecue", "Parking", "Lave-linge", "Cheminée"],
    host: {
      name: "Sophie Bernard",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
      joinedDate: "2018",
      isSuperhost: true
    },
    description: "Authentique mas provençal entouré de lavande et d'oliviers. La maison en pierre offre une vue panoramique sur les collines environnantes et une piscine privée. Idéal pour des vacances au calme.",
    featured: true
  },
  {
    id: 4,
    title: "Loft moderne à Bordeaux",
    type: "Loft",
    location: "Bordeaux, France",
    price: 160,
    currency: "€",
    period: "nuit",
    rating: 4.6,
    reviewCount: 62,
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=958&auto=format&fit=crop",
    beds: 2,
    baths: 2,
    guests: 4,
    amenities: ["Wi-Fi", "Cuisine équipée", "Climatisation", "TV", "Lave-linge", "Parking"],
    host: {
      name: "Pierre Dubois",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
      joinedDate: "2020",
      isSuperhost: false
    }
  },
  {
    id: 5,
    title: "Chalet dans les Alpes",
    type: "Chalet",
    location: "Chamonix, France",
    price: 320,
    currency: "€",
    period: "nuit",
    rating: 4.9,
    reviewCount: 114,
    image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?q=80&w=873&auto=format&fit=crop",
    beds: 5,
    baths: 3,
    guests: 10,
    amenities: ["Wi-Fi", "Cheminée", "Sauna", "Vue sur la montagne", "Cuisine équipée", "Parking"],
    host: {
      name: "Michel Blanc",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop",
      joinedDate: "2017",
      isSuperhost: true
    }
  },
  {
    id: 6,
    title: "Studio vue Tour Eiffel",
    type: "Studio",
    location: "Paris, France",
    price: 140,
    currency: "€",
    period: "nuit",
    rating: 4.5,
    reviewCount: 87,
    image: "https://images.unsplash.com/photo-1509732344996-0870461978a9?q=80&w=870&auto=format&fit=crop",
    beds: 1,
    baths: 1,
    guests: 2,
    amenities: ["Wi-Fi", "Vue sur la Tour Eiffel", "Cuisine équipée", "TV", "Ascenseur", "Climatisation"],
    host: {
      name: "Camille Petit",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
      joinedDate: "2019",
      isSuperhost: false
    }
  }
];

export const propertyTypes = [
  {
    id: 1,
    name: "Appartements",
    icon: "🏢",
    count: 254
  },
  {
    id: 2,
    name: "Maisons",
    icon: "🏡",
    count: 178
  },
  {
    id: 3,
    name: "Villas",
    icon: "🏝️",
    count: 82
  },
  {
    id: 4,
    name: "Chalets",
    icon: "🏔️",
    count: 65
  },
  {
    id: 5,
    name: "Bord de mer",
    icon: "🌊",
    count: 124
  },
  {
    id: 6,
    name: "Campagne",
    icon: "🌳",
    count: 97
  }
];
