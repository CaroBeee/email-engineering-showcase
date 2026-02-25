'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeViewerProps {
  code: string;
  language?: string;
  copyText?: string;
  copiedText?: string;
}

export function CodeViewer({ code, language = 'html', copyText = 'Copy', copiedText = 'Copied!' }: CodeViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator?.clipboard?.writeText?.(code ?? '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative rounded-lg bg-[#1e1e2e] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-[#181825] border-b border-[#313244]">
        <span className="text-xs text-[#6c7086] font-mono uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className={cn(
            'flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all',
            copied 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-[#313244] text-[#cdd6f4] hover:bg-[#45475a]'
          )}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? copiedText : copyText}
        </button>
      </div>
      <div className="overflow-auto max-h-[400px]">
        <pre className="p-4 text-sm font-mono text-[#cdd6f4] leading-relaxed">
          <code>{code ?? ''}</code>
        </pre>
      </div>
    </div>
  );
}
