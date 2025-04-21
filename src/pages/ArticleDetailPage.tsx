import React from 'react';
import { useParams } from 'react-router';
import { useArticle } from '../hooks';
import parse from 'html-react-parser';
import { Skeleton } from '../components/Skeleton';

const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { article, loading, error } = useArticle(slug);

  if (!slug) return <div>There is no such post</div>;

  if (loading)
    return (
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <div className="animate-pulse-slow space-y-6">
          <Skeleton className="w-full h-64 rounded-xl mb-6" />
          <Skeleton className="h-8 w-2/3 mb-2" />
          <Skeleton className="h-5 w-1/3 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-2" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  if (!article) return <div>Article not found</div>;

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl font-sportlight bg-[var(--color-bg)] text-[var(--color-primary)] transition-colors">
      {article.frontMatter.previewImage && (
        <img
          src={article.frontMatter.previewImage}
          alt={article.frontMatter.title}
          className="rounded-xl w-full object-cover mb-8 shadow-lg max-h-96"
        />
      )}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight font-sportlight text-[var(--color-primary)]">
        {article.frontMatter.title}
      </h1>
      <div className="flex items-center gap-4 text-base text-[var(--color-muted-foreground)] mb-6">
        <span className="flex items-center gap-1">
          <span role="img" aria-label="calendar">
            📅
          </span>
          {article.frontMatter.date}
        </span>
      </div>
      {article.frontMatter.description && (
        <p className="text-lg text-[var(--color-muted-foreground)] mb-8">
          {article.frontMatter.description}
        </p>
      )}
      <article className="prose dark:prose-invert max-w-none text-lg leading-relaxed font-sportlight">
        {parse(article.markdown)}
      </article>
    </div>
  );
};

export default ArticleDetailPage;
