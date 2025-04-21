import React from 'react';
import { Article } from '../types/article';
import { ArticlePreview } from './ArticlePreview';

interface ArticlePreviewGridProps {
  articles: Article[];
  loading?: boolean;
}

export const ArticlePreviewGrid: React.FC<ArticlePreviewGridProps> = ({
  articles,
  loading = false,
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {(loading ? Array.from({ length: 6 }) : articles).map((article, idx) => (
      <ArticlePreview
        key={loading ? idx : (article as Article).slug}
        article={article as Article}
        loading={loading}
      />
    ))}
  </div>
);
