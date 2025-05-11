import axios from 'axios';
import { ArticleMetadata, ArticleWithContent } from '../types/article';

const API_URL = '/api';

export const fetchArticles = async (): Promise<ArticleMetadata[]> => {
  try {
    const { data } = await axios.get<ArticleMetadata[]>(`${API_URL}/articles`);
    return data;
  } catch {
    throw new Error('Error when downloading articles');
  }
};

export const fetchArticleBySlug = async (slug: string): Promise<ArticleWithContent> => {
  try {
    const metadataResponse = await axios.get<ArticleMetadata>(`${API_URL}/articles/${slug}`);
    const contentResponse = await axios.get(`${API_URL}/articles/${slug}.html`, {
      responseType: 'text',
    });
    return {
      metadata: metadataResponse.data,
      content: contentResponse.data,
    };
  } catch {
    throw new Error('Error when downloading article');
  }
};
