import { Sun, Moon } from 'lucide-react';
import type { Theme } from '../../types/theme';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                hover:bg-gray-200 dark:hover:bg-gray-700
                transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600" />
      )}
    </button>
  );
}