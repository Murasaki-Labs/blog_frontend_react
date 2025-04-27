export interface Article {
  slug: string;
  title: string;
  description: string;
  previewImage: string;
  date: string;
  author?: string;
  authorImage?: string;
  authorHandle?: string;
  readTime?: string;
  tag?: string;
}
