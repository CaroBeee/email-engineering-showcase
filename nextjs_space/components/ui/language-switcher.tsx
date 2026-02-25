'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
}

export function LanguageSwitcher({ locale, onChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-[#313244] rounded-lg p-1">
      <Globe className="w-4 h-4 text-gray-500 dark:text-[#6c7086] mx-2" />
      <button
        onClick={() => onChange?.('de')}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-all',
          locale === 'de' 
            ? 'bg-white dark:bg-[#45475a] text-gray-900 dark:text-white shadow-sm' 
            : 'text-gray-600 dark:text-[#6c7086] hover:text-gray-900 dark:hover:text-white'
        )}
      >
        DE
      </button>
      <button
        onClick={() => onChange?.('en')}
        className={cn(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-all',
          locale === 'en' 
            ? 'bg-white dark:bg-[#45475a] text-gray-900 dark:text-white shadow-sm' 
            : 'text-gray-600 dark:text-[#6c7086] hover:text-gray-900 dark:hover:text-white'
        )}
      >
        EN
      </button>
    </div>
  );
}
