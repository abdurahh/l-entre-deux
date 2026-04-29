export const ROUTES = {
  home: '/',
  inspiration: '/inspiration',
  collections: '/collections',
  collectionsMen: '/collections/men',
  collectionsWomen: '/collections/women',
  comfort: '/comfort',
  about: '/about',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export interface Product {
  id: string;
  name: string;
  material: string;
  price: number;
  image: string;
  silhouette: 'flowy' | 'structured' | 'high-waist';
}

export interface GazetteArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  volume: string;
  tag: string;
}
