import { useEffect, useState } from 'react';
import { ArticleMetadata } from '../types/article';
import { fetchArticles } from '../services/article.service';

export function useArticles() {
  const [articles, setArticles] = useState<ArticleMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchArticles();
        setArticles(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load articles');
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return { articles, loading, error };
}
