import React from 'react';

interface ArticleTagsProps {
  tags: string[];
}

export const ArticleTags: React.FC<ArticleTagsProps> = ({ tags }) => (
  <div className="flex-1 flex items-center">
    {tags.map((tag) => (
      <div
        key={tag}
        className="flex items-center px-2 py-1 border-2 rounded-lg border-gray-100 dark:border-[var(--color-tag-border)] text-slate-600 dark:text-[var(--color-muted-foreground)] mr-2"
      >
        <img
          className="w-6 h-6 rounded mr-2"
          src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
          alt={`${tag} logo`}
        />
        <span className="leading-3 text-sm text-gray-100">{tag}</span>
      </div>
    ))}
  </div>
);
