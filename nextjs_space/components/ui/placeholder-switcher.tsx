"use client";

import { useState } from "react";
import { FileText } from "lucide-react";

interface PlaceholderSwitcherProps {
  showPlaceholders: boolean;
  onChange: (show: boolean) => void;
}

export function PlaceholderSwitcher({
  showPlaceholders,
  onChange,
}: PlaceholderSwitcherProps) {
  return (
    <button
      onClick={() => onChange(!showPlaceholders)}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-[#313244] hover:bg-gray-200 dark:hover:bg-[#45475a] transition-colors"
      title={showPlaceholders ? "Text anzeigen" : "Platzhalter anzeigen"}
    >
      <FileText className="w-4 h-4 text-gray-700 dark:text-gray-300" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {showPlaceholders ? "{{KI}}" : "Text"}
      </span>
    </button>
  );
}
