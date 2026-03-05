'use client';

import React from 'react';
import { Mail, ShoppingBag, Receipt, ArrowRight, GitBranch } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface TemplateCardProps {
  id: string;
  name: string;
  description: string;
  onClick: () => void;
  isActive?: boolean;
  journeyHref?: string;
  journeyLabel?: string;
}

const iconMap: Record<string, React.ElementType> = {
  newsletter: Mail,
  'product-grid': ShoppingBag,
  transactional: Receipt
};

export function TemplateCard({ id, name, description, onClick, isActive, journeyHref, journeyLabel }: TemplateCardProps) {
  const Icon = iconMap[id ?? ''] ?? Mail;

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={onClick}
        className={cn(
          'group w-full text-left p-5 rounded-xl border transition-all duration-200',
          isActive
            ? 'bg-teal-50 dark:bg-teal-500/10 border-teal-300 dark:border-teal-500/30'
            : 'bg-white dark:bg-[#1e1e2e] border-gray-200 dark:border-[#313244] hover:border-teal-300 dark:hover:border-teal-500/30 hover:shadow-lg'
        )}
      >
        <div className="flex items-start gap-4">
          <div className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center transition-colors',
            isActive
              ? 'bg-teal-500 text-white'
              : 'bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white'
          )}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{name ?? ''}</h3>
            <p className="text-sm text-gray-500 dark:text-[#6c7086] line-clamp-2">{description ?? ''}</p>
          </div>
          <ArrowRight className={cn(
            'w-5 h-5 mt-1 transition-transform',
            isActive
              ? 'text-teal-500'
              : 'text-gray-400 group-hover:translate-x-1 group-hover:text-teal-500'
          )} />
        </div>
      </button>
      {journeyHref && (
        <Link
          href={journeyHref}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/30 bg-teal-50/50 dark:bg-teal-500/5 hover:bg-teal-100 dark:hover:bg-teal-500/15 transition-colors"
        >
          <GitBranch className="w-4 h-4" />
          {journeyLabel ?? 'Dev Journey'}
        </Link>
      )}
    </div>
  );
}
