import React from 'react';
import { ArticleMetadata } from '../types/article';
import { ArticlePreview } from './ArticlePreview';

interface ArticlePreviewGridProps {
  articles: ArticleMetadata[];
  loading?: boolean;
}

export const ArticlePreviewGrid: React.FC<ArticlePreviewGridProps> = ({
  articles,
  loading = false,
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {(loading ? Array.from({ length: 6 }) : articles).map((article, idx) => (
      <ArticlePreview
        key={loading ? idx : (article as ArticleMetadata).slug}
        article={article as ArticleMetadata}
        loading={loading}
      />
    ))}
  </div>
);
