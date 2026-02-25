'use client';

import React from 'react';
import { Eye, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TabSwitcherProps {
  activeTab: 'preview' | 'code';
  onTabChange: (tab: 'preview' | 'code') => void;
  previewLabel?: string;
  codeLabel?: string;
}

export function TabSwitcher({ activeTab, onTabChange, previewLabel = 'Preview', codeLabel = 'Code' }: TabSwitcherProps) {
  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-[#313244] rounded-lg p-1">
      <button
        onClick={() => onTabChange?.('preview')}
        className={cn(
          'px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2',
          activeTab === 'preview' 
            ? 'bg-white dark:bg-[#45475a] text-gray-900 dark:text-white shadow-sm' 
            : 'text-gray-600 dark:text-[#6c7086] hover:text-gray-900 dark:hover:text-white'
        )}
      >
        <Eye className="w-4 h-4" />
        {previewLabel}
      </button>
      <button
        onClick={() => onTabChange?.('code')}
        className={cn(
          'px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2',
          activeTab === 'code' 
            ? 'bg-white dark:bg-[#45475a] text-gray-900 dark:text-white shadow-sm' 
            : 'text-gray-600 dark:text-[#6c7086] hover:text-gray-900 dark:hover:text-white'
        )}
      >
        <Code2 className="w-4 h-4" />
        {codeLabel}
      </button>
    </div>
  );
}
