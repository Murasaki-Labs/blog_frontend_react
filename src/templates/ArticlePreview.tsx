import React from 'react';
import { Article } from '../types/article';
import { Skeleton } from '../components/Skeleton';
import { NavLink } from 'react-router';

interface ArticlePreviewProps {
  article: Article;
  loading?: boolean;
}

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ article, loading = false }) => {
  if (loading) {
    return (
      <div className="border border-[var(--color-border)] shadow-sm p-4 rounded-xl bg-[var(--color-bg-muted)] animate-pulse-slow">
        <Skeleton className="w-full h-40 mb-4 rounded-xl" />
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <div className="flex gap-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    );
  }

  return (
    <NavLink
      to={`/articles/${article.slug}`}
      className="block group transition-all hover:scale-[1.015] duration-300"
    >
      <div className="flex flex-col md:flex-row items-start gap-4 border border-[var(--color-border)] shadow-sm rounded-xl bg-[var(--color-bg-muted)] dark:bg-[var(--color-border)] transition-colors">
        <div
          className="w-full md:w-52 h-40 rounded-xl md:rounded-l-xl md:rounded-r-none bg-center bg-cover"
          style={{ backgroundImage: `url(${article.previewImage})` }}
        />
        <div className="flex-1 py-4 px-2 md:px-0">
          <h2 className="text-xl font-bold font-sportlight leading-snug mb-1 text-[var(--color-primary)] line-clamp-2">
            {article.title}
          </h2>
          <p className="text-base text-[var(--color-muted-foreground)] line-clamp-2">
            {article.description}
          </p>
          <div className="flex items-center gap-4 mt-3 text-xs text-[var(--color-muted-foreground)]">
            <div className="flex items-center gap-1">📅 {article.date}</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
