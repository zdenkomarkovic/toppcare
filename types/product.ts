export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

export interface SanityVideo {
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
    url?: string;
  };
  caption?: string;
}

export interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  price?: number;
  comparePrice?: number;
  images: SanityImage[];
  description?: any[];
  shortDescription?: string;
  category?: Category;
  inStock: boolean;
  featured: boolean;
  ingredients?: string;
  howToUse?: string;
  volume?: string;
  badge?: string;
  videos?: SanityVideo[];
}
