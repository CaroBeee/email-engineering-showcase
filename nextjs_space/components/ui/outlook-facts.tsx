"use client";

import {
  AlertCircle,
  XOctagon,
  Wrench,
  Monitor,
  Table,
  Lightbulb,
} from "lucide-react";
import { Locale, getTranslation } from "@/lib/i18n";

interface OutlookFactsProps {
  locale: Locale;
}

const sectionIcons = [Monitor, XOctagon, Wrench, AlertCircle, Table, Lightbulb];

export function OutlookFacts({ locale }: OutlookFactsProps) {
  const t = getTranslation(locale);

  return (
    <section className="py-12 bg-gradient-to-b from-red-50 to-white dark:from-red-950/10 dark:to-[#1e1e2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {t.outlookFacts.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-[#a6adc8]">
            {t.outlookFacts.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.outlookFacts.sections.map((section, idx) => {
            const Icon = sectionIcons[idx];
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#181825] rounded-lg p-6 border-2 border-red-200 dark:border-red-900/30 hover:border-red-300 dark:hover:border-red-800/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-sm text-gray-700 dark:text-[#cdd6f4] flex items-start gap-2"
                    >
                      <span className="text-red-400 dark:text-red-600 mt-1 font-bold">
                        ×
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-6 bg-red-100 dark:bg-red-950/20 border-l-4 border-red-600 dark:border-red-500 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {locale === "de" ? "Wichtiger Hinweis" : "Important Note"}
              </h4>
              <p className="text-sm text-gray-700 dark:text-[#cdd6f4]">
                {locale === "de"
                  ? "Outlook 2007-2019 macht etwa 10-15% aller Email-Clients aus (Stand 2024). Trotz der Herausforderungen ist es unverzichtbar, für diese Clients zu optimieren, besonders im B2B-Bereich."
                  : "Outlook 2007-2019 accounts for about 10-15% of all email clients (as of 2024). Despite the challenges, it's essential to optimize for these clients, especially in B2B environments."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
