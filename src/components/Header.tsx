import React from 'react';
import { NavLink } from 'react-router';
import { useTheme } from '../providers/ThemeProvider';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between py-6 px-4 md:px-8 bg-[var(--color-bg-muted)] backdrop-blur border-b border-[var(--color-border)] shadow-sm transition-colors">
      <NavLink
        to="/articles"
        className="font-extrabold text-2xl tracking-tight text-[var(--color-primary)] font-sportlight"
      >
        JLPT Blog
      </NavLink>
      <button
        onClick={toggleTheme}
        className="rounded-full p-2 transition-colors bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-[var(--color-accent-foreground)]"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <span role="img" aria-label="dark">
            🌙
          </span>
        ) : (
          <span role="img" aria-label="light">
            ☀️
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;
