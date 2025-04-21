export interface Author {
  id: string;
  name: string;
  bio?: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  publishedAt: Date;
  updatedAt?: Date;
  author: Author;
  category: Category;
  tags?: string[];
  readTime?: string;
  featured?: boolean;
}