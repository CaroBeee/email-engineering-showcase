"use client";

import React from "react";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Eye,
  Type,
  Layout,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";

interface AccessibilityCheck {
  id: string;
  status: "passed" | "failed" | "warning";
  messageKey: string;
}

const checks: AccessibilityCheck[] = [
  { id: "contrast", status: "passed", messageKey: "contrast" },
  { id: "altText", status: "passed", messageKey: "altText" },
  { id: "semantic", status: "warning", messageKey: "semantic" },
];

const icons: Record<string, React.ElementType> = {
  contrast: Eye,
  altText: Type,
  semantic: Layout,
};

const statusColors = {
  passed: "bg-green-500/10 text-green-500 border-green-500/20",
  failed: "bg-red-500/10 text-red-500 border-red-500/20",
  warning: "bg-amber-500/10 text-amber-500 border-amber-500/20",
};

const statusIcons = {
  passed: CheckCircle2,
  failed: XCircle,
  warning: AlertTriangle,
};

interface AccessibilityPanelProps {
  locale: Locale;
}

export function AccessibilityPanel({ locale }: AccessibilityPanelProps) {
  const t = getTranslation(locale);
  const a11y = t?.accessibility ?? {};

  return (
    <div className="bg-white dark:bg-[#1e1e2e] rounded-xl border border-gray-200 dark:border-[#313244] overflow-hidden">
      <div className="px-5 py-4 bg-gray-50 dark:bg-[#181825] border-b border-gray-200 dark:border-[#313244]">
        <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <Eye className="w-5 h-5 text-teal-500" />
          {a11y?.title ?? "Accessibility"}
        </h3>
      </div>
      <div className="p-5 space-y-3">
        {checks?.map((check) => {
          const Icon = icons[check?.id ?? ""] ?? Eye;
          const StatusIcon =
            statusIcons[check?.status ?? "passed"] ?? CheckCircle2;
          const statusLabel =
            a11y?.[check?.status as keyof typeof a11y] ?? check?.status;
          const checkName =
            a11y?.[check?.messageKey as keyof typeof a11y] ?? check?.messageKey;

          return (
            <div
              key={check?.id ?? ""}
              className={`flex items-center justify-between p-4 rounded-lg border ${statusColors[check?.status ?? "passed"] ?? statusColors.passed}`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 opacity-70" />
                <span className="font-medium">{checkName}</span>
              </div>
              <div className="flex items-center gap-2">
                <StatusIcon className="w-4 h-4" />
                <span className="text-sm font-medium">{statusLabel}</span>
              </div>
            </div>
          );
        }) ?? null}
      </div>
    </div>
  );
}
