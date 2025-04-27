import React from 'react';
import { NavLink } from 'react-router';
import { useTheme } from '../providers/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full items-center justify-between py-2 px-4 md:px-8 bg-[var(--color-bg)] backdrop-blur border-b border-[var(--color-border)] shadow-lg transition-colors">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
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
          {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
