import React from 'react';
import { useParams } from 'react-router';
import { useArticle } from '../hooks';
import parse from 'html-react-parser';
import { Skeleton } from '../components/Skeleton';
import { Lightbulb } from 'lucide-react';

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
    <div className="container mx-auto px-4 py-10">
      <div className="lg:px-24 xl:px-44 2xl:px-80">
        <div className="text-center mt-12">
          <h1 className="font-black text-4xl lg:text-5xl leading-normal mb-6">
            {article.frontMatter.title}
          </h1>
          {article.frontMatter.description && (
            <p className="leading-loose text-lg text-slate-700 lg:px-16 xl:px-32 min-h-[125px]">
              {article.frontMatter.description}
            </p>
          )}
        </div>
        <div className="mt-10 grid grid-cols-2 md:flex md:justify-between lg:mt-16">
          <div className="flex items-center flex-wrap mb-6 col-span-2 md:order-2 md:mb-0 md:mx-8 md:flex-1 md:justify-between">
            <div className="flex-1 flex items-center">
              <div className="flex items-center px-2 py-1 border-2 rounded-lg border-gray-100 text-slate-600 mr-2">
                <img
                  className="w-6 h-6 rounded mr-2"
                  src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
                  alt="Tech logo"
                />
                <span className="leading-3 text-sm">
                  {article.frontMatter.tag || 'Modern Angular'}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-end text-slate-500 left-1.5 md:order-3">
              <Lightbulb size={24} className="text-yellow-400" />
              <Lightbulb size={24} className="text-yellow-400" />
              <Lightbulb size={24} className="text-slate-300" />
            </div>
          </div>
          <div className="flex items-center justify-start md:order-1">
            <img
              className="w-12 h-12 rounded-full ring-gray-200 ring-4"
              src={
                article.frontMatter.authorImage || 'https://randomuser.me/api/portraits/men/32.jpg'
              }
              alt={article.frontMatter.author || 'Kevin Kreuzer'}
              loading="lazy"
            />
            <div>
              <p className="ml-3 text-lg font-extrabold leading-5">
                {article.frontMatter.author || 'Kevin Kreuzer'}
              </p>
              <p className="ml-3 text-sm text-slate-500 hover:text-blue-700">
                {article.frontMatter.authorHandle || '@kreuzercode'}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center md:order-4">
            <p className="text-sm text-slate-500">{article.frontMatter.date}</p>
            <p className="text-sm text-slate-500">{article.frontMatter.readTime || '7 min read'}</p>
          </div>
        </div>
      </div>

      {article.frontMatter.previewImage && (
        <img
          src={article.frontMatter.previewImage}
          alt={article.frontMatter.title}
          className="mx-auto mt-8 rounded-3xl w-full"
          style={{ aspectRatio: '16 / 9' }}
          loading="eager"
        />
      )}

      <div className="pt-16 lg:px-24 xl:px-44 2xl:px-80 relative">
        <article className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
          {parse(article.markdown)}
        </article>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
