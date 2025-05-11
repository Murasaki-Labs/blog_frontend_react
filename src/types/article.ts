export interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  difficulty: string;
  coverImage: string;
  readingTime: string;
  canonicalUrl: string;
}

export interface ArticleWithContent {
  metadata: ArticleMetadata;
  content: string;
}
