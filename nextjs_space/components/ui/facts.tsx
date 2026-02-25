"use client";

import { AlertTriangle, CheckCircle2, XCircle, Info } from "lucide-react";
import { Locale, getTranslation } from "@/lib/i18n";

interface EmailFactsProps {
  locale: Locale;
}

const sectionConfig = [
  { key: "technicalLimitations", icon: AlertTriangle, color: "text-orange-600 dark:text-orange-400" },
  { key: "clientProblems", icon: XCircle, color: "text-red-600 dark:text-red-400" },
  { key: "whatWorks", icon: CheckCircle2, color: "text-green-600 dark:text-green-400" },
  { key: "whatDoesntWork", icon: XCircle, color: "text-red-600 dark:text-red-400" },
  { key: "bestPractices", icon: Info, color: "text-blue-600 dark:text-blue-400" },
  { key: "performance", icon: CheckCircle2, color: "text-teal-600 dark:text-teal-400" },
];

export function EmailFacts({ locale }: EmailFactsProps) {
  const t = getTranslation(locale);

  return (
    <section className="py-12 bg-white dark:bg-[#1e1e2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {t.emailFacts.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {sectionConfig.map((section) => {
            const Icon = section.icon;
            const sectionData = t.emailFacts[section.key as keyof typeof t.emailFacts] as { title: string; items: string[] };
            
            return (
              <div
                key={section.key}
                className="bg-gray-50 dark:bg-[#181825] rounded-lg p-6 border border-gray-200 dark:border-[#313244]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${section.color}`} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {sectionData.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {sectionData.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-sm text-gray-700 dark:text-[#cdd6f4] flex items-start gap-2"
                    >
                      <span className="text-gray-400 dark:text-[#6c7086] mt-1">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}