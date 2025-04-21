import React from 'react';

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`bg-[var(--color-bg-muted)] dark:bg-[var(--color-border)] rounded animate-pulse-slow ${className}`}
  />
);
