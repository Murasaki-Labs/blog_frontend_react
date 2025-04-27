import React from 'react';
import { useArticles } from '../hooks';
import { ArticlePreviewGrid } from '../templates/ArticlePreviewGrid';

const ArticlesPage: React.FC = () => {
  const { articles, loading, error } = useArticles();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        <ArticlePreviewGrid articles={[]} loading />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 pt-10 max-w-6xl">
      <ArticlePreviewGrid articles={articles} />
    </div>
  );
};

export default ArticlesPage;
