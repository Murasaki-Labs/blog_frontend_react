import axios from 'axios';
import { Article } from '../types/article';

const API_URL = '/api';

export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const { data } = await axios.get<Article[]>(`${API_URL}/articles`);
    return data;
  } catch {
    throw new Error('Error when downloading articles');
  }
};

export const fetchArticleBySlug = async (slug: string): Promise<string> => {
  try {
    const { data } = await axios.get<string>(`${API_URL}/articles/${slug}`);
    return data;
  } catch {
    throw new Error('Error when downloading an article');
  }
};
