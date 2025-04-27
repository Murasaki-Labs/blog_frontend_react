import React from 'react';
import { Article } from '../types/article';
import { Skeleton } from '../components/Skeleton';
import { NavLink } from 'react-router';
import { Lightbulb } from 'lucide-react';

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
      className="h-full cursor-pointer rounded-3xl bg-white dark:bg-[var(--color-bg-muted)] shadow-lg hover:shadow-2xl transition-shadow flex flex-col border border-[var(--color-border)]"
    >
      <img
        className="rounded-t-3xl w-full h-48 object-cover"
        alt={article.title}
        loading="lazy"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
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
            <div className="flex-1 flex items-center">
              <div className="flex items-center px-2 py-1 border-2 rounded-lg border-gray-100 dark:border-[var(--color-tag-border)] text-slate-600 dark:text-[var(--color-muted-foreground)] mr-2">
                <img
                  className="w-6 h-6 rounded mr-2"
                  src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
                  alt="technology logo"
                />
                <span className="leading-3 text-sm">{article.tag || 'Typesctipt'}</span>
              </div>
            </div>
            <div className="flex items-center justify-end relative left-1.5">
              <Lightbulb size={24} className="text-yellow-400" />
              <Lightbulb size={24} className="text-yellow-400" />
              <Lightbulb size={24} className="text-slate-300 dark:text-slate-600" />
            </div>
          </div>
          <div className="flex items-center justify-start">
            <img
              className="w-12 h-12 rounded-full ring-4 ring-gray-200 dark:ring-[var(--color-border)]"
              src={article.authorImage || 'https://randomuser.me/api/portraits/men/32.jpg'}
              alt={article.author || 'Tomas Trajan'}
              loading="lazy"
            />
            <div>
              <p className="ml-3 text-sm font-extrabold leading-5 text-[var(--color-primary)] dark:text-[var(--color-primary)]">
                {article.author || 'Tomas Trajan'}
              </p>
              <p className="ml-3 text-sm text-slate-500 dark:text-[var(--color-muted-foreground)] hover:text-blue-700 dark:hover:text-blue-400">
                {article.authorHandle || '@tomastrajan'}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center">
            <p className="text-sm text-slate-500 dark:text-[var(--color-muted-foreground)]">
              {article.date}
            </p>
            <p className="text-sm text-slate-500 dark:text-[var(--color-muted-foreground)]">
              {article.readTime || '13 min read'}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
