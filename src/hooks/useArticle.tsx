import { useEffect, useState } from 'react';
import { getParsedArticle, ParsedArticle } from '../facades/articleFacade';

export function useArticle(slug?: string) {
  const [article, setArticle] = useState<ParsedArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(null);
    getParsedArticle(slug)
      .then(setArticle)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  return { article, loading, error };
}
