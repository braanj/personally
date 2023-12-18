export interface Post {
  [x: string]: Any;

  title: string;
  description: string;
  author: string;
  category: string | string[];
  country: string;
  image?: string | null;
  language: string | string[];
  published_at: string;
  source: string;
  slug: string;
  path?: string;
}
