'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import type { Locale } from '@/lib/i18n';
import { getTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface DarkModeToggleProps {
  locale: Locale;
}

export function DarkModeToggle({ locale }: DarkModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const t = getTranslation(locale);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 bg-gray-100 dark:bg-[#313244] rounded-lg p-1">
        <button className="px-3 py-1.5 rounded-md text-sm font-medium bg-white dark:bg-[#45475a] shadow-sm flex items-center gap-1.5">
          <Sun className="w-4 h-4" />
          <span className="hidden sm:inline">{t?.lightMode ?? 'Light'}</span>
        </button>
        <button className="px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1.5 text-gray-600 dark:text-[#6c7086]">
          <Moon className="w-4 h-4" />
          <span className="hidden sm:inline">{t?.darkMode ?? 'Dark'}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-[#313244] rounded-lg p-1">
      <button
        onClick={() => setTheme?.('light')}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-1.5',
          theme === 'light' 
            ? 'bg-white dark:bg-[#45475a] text-gray-900 dark:text-white shadow-sm' 
            : 'text-gray-600 dark:text-[#6c7086] hover:text-gray-900 dark:hover:text-white'
        )}
      >
        <Sun className="w-4 h-4" />
        <span className="hidden sm:inline">{t?.lightMode ?? 'Light'}</span>
      </button>
      <button
        onClick={() => setTheme?.('dark')}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-1.5',
          theme === 'dark' 
            ? 'bg-white dark:bg-[#45475a] text-gray-900 dark:text-white shadow-sm' 
            : 'text-gray-600 dark:text-[#6c7086] hover:text-gray-900 dark:hover:text-white'
        )}
      >
        <Moon className="w-4 h-4" />
        <span className="hidden sm:inline">{t?.darkMode ?? 'Dark'}</span>
      </button>
    </div>
  );
}
