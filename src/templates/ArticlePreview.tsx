import React from 'react';
import { ArticleMetadata } from '../types/article';
import { Skeleton } from '../components/Skeleton';
import { NavLink } from 'react-router';
import { Lightbulb } from 'lucide-react';
import { getActiveBulbs } from '../utils/getActiveBulbs';
import { formatDate } from '../utils/formatDate';
import { ArticleTags } from '../components/ArticleTags';

interface ArticlePreviewProps {
  article: ArticleMetadata;
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

  const activeBulbs = getActiveBulbs(article.difficulty.toLowerCase());

  return (
    <NavLink
      to={`/articles/${article.slug}`}
      className="h-full cursor-pointer rounded-3xl bg-white dark:bg-[var(--color-bg-muted)] shadow-lg hover:shadow-2xl transition-shadow flex flex-col border border-[var(--color-border)]"
    >
      <img
        className="rounded-t-3xl w-full h-48 object-cover"
        alt={article.title}
        loading="lazy"
        src={article.coverImage}
      />
      <div className="p-6 pb-7 flex-1 flex flex-col">
        <h2 className="text-2xl font-extrabold mb-4 leading-tight text-[var(--color-primary)] dark:text-[var(--color-primary)] font-title">
          {article.title}
        </h2>
        <p className="leading-relaxed text-slate-700 dark:text-[var(--color-muted-foreground)] flex-1">
          {article.description}
        </p>
        <div className="mt-10 grid grid-cols-2">
          <div className="flex items-center flex-wrap mb-6 col-span-2">
            <ArticleTags tags={article.tags} />
            <div className="flex items-center justify-end relative left-1.5">
              {[...Array(3)].map((_, index) => (
                <Lightbulb
                  key={index}
                  size={24}
                  className={
                    index < activeBulbs ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600'
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-start">
            <img
              className="w-12 h-12 rounded-full ring-4 ring-gray-200 dark:ring-[var(--color-border)]"
              src={article.author.avatar}
              alt={article.author.name}
              loading="lazy"
            />
            <div>
              <p className="ml-3 text-sm font-extrabold leading-5 text-[var(--color-primary)] dark:text-[var(--color-primary)]">
                {article.author.name}
              </p>
              <p className="ml-3 text-sm text-slate-500 dark:text-[var(--color-muted-foreground)]">
                {formatDate(article.date)}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center">
            <p className="text-sm text-slate-500 dark:text-[var(--color-muted-foreground)]">
              {article.readingTime}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
