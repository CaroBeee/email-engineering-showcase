"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  XCircle,
  Tag,
  BookOpen,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { JourneyData, JourneyStep, JourneyStepStatus } from "@/lib/journey-data";

interface DevJourneyPageProps {
  data: JourneyData;
  locale: Locale;
}

const statusConfig: Record<
  JourneyStepStatus,
  {
    icon: React.ElementType;
    label: { de: string; en: string };
    borderColor: string;
    bgColor: string;
    iconColor: string;
    dotColor: string;
  }
> = {
  insight: {
    icon: Lightbulb,
    label: { de: "Konzept", en: "Concept" },
    borderColor: "border-blue-300 dark:border-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    dotColor: "bg-blue-500",
  },
  problem: {
    icon: XCircle,
    label: { de: "Problem", en: "Problem" },
    borderColor: "border-red-300 dark:border-red-700",
    bgColor: "bg-red-50 dark:bg-red-950/30",
    iconColor: "text-red-600 dark:text-red-400",
    dotColor: "bg-red-500",
  },
  solution: {
    icon: CheckCircle2,
    label: { de: "Lösung", en: "Solution" },
    borderColor: "border-teal-300 dark:border-teal-700",
    bgColor: "bg-teal-50 dark:bg-teal-950/30",
    iconColor: "text-teal-600 dark:text-teal-400",
    dotColor: "bg-teal-500",
  },
  result: {
    icon: Shield,
    label: { de: "Ergebnis", en: "Result" },
    borderColor: "border-green-300 dark:border-green-700",
    bgColor: "bg-green-50 dark:bg-green-950/30",
    iconColor: "text-green-600 dark:text-green-400",
    dotColor: "bg-green-500",
  },
};

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator?.clipboard?.writeText?.(code ?? "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="rounded-lg bg-[#1e1e2e] overflow-hidden mt-4 border border-[#313244]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#181825] border-b border-[#313244]">
        <span className="text-xs text-[#6c7086] font-mono uppercase">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all",
            copied
              ? "bg-green-500/20 text-green-400"
              : "bg-[#313244] text-[#cdd6f4] hover:bg-[#45475a]"
          )}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
          {copied ? "Kopiert!" : "Kopieren"}
        </button>
      </div>
      <div className="overflow-auto max-h-[320px]">
        <pre className="p-4 text-sm font-mono text-[#cdd6f4] leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function StepCard({
  step,
  locale,
  index,
}: {
  step: JourneyStep;
  locale: Locale;
  index: number;
}) {
  const [expanded, setExpanded] = useState(true);
  const cfg = statusConfig[step.status];
  const Icon = cfg.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative flex gap-6"
    >
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 z-10",
            cfg.borderColor,
            cfg.bgColor
          )}
        >
          <Icon className={cn("w-5 h-5", cfg.iconColor)} />
        </div>
        <div className="w-0.5 flex-1 bg-gray-200 dark:bg-[#313244] mt-2 mb-2" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div
          className={cn(
            "rounded-xl border overflow-hidden",
            cfg.borderColor
          )}
        >
          {/* Card Header */}
          <button
            onClick={() => setExpanded(!expanded)}
            className={cn(
              "w-full text-left px-6 py-4 flex items-start justify-between gap-4",
              cfg.bgColor
            )}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded",
                    cfg.iconColor,
                    "bg-white/50 dark:bg-black/20"
                  )}
                >
                  {cfg.label[locale]}
                </span>
                <span className="text-xs text-gray-400 dark:text-[#6c7086]">
                  Phase {step.phase}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {step.title[locale]}
              </h3>
            </div>
            {expanded ? (
              <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
            )}
          </button>

          {/* Card Body */}
          {expanded && (
            <div className="px-6 py-5 bg-white dark:bg-[#181825] space-y-5">
              {/* Description */}
              <p className="text-sm text-gray-700 dark:text-[#cdd6f4] leading-relaxed">
                {step.description[locale]}
              </p>

              {/* Tags */}
              {step.tags && step.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-[#313244] text-gray-600 dark:text-[#a6adc8] font-mono"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Screenshot */}
              {step.screenshot && (
                <div className="space-y-2">
                  {step.screenshotLabel && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-800 dark:text-white">
                        {step.screenshotLabel[locale]}
                      </span>
                      <span className="text-xs text-gray-400 px-2 py-0.5 rounded bg-gray-100 dark:bg-[#313244]">
                        Testi.at
                      </span>
                    </div>
                  )}
                  <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-[#313244] shadow-lg">
                    <Image
                      src={step.screenshot}
                      alt={
                        step.screenshotCaption?.[locale] ?? "Testi.at Screenshot"
                      }
                      width={900}
                      height={600}
                      className="w-full h-auto object-cover"
                      unoptimized
                    />
                  </div>
                  {step.screenshotCaption && (
                    <p className="text-xs text-gray-500 dark:text-[#6c7086] italic leading-relaxed">
                      {step.screenshotCaption[locale]}
                    </p>
                  )}
                </div>
              )}

              {/* Code Snippet */}
              {step.codeSnippet && (
                <CodeBlock
                  code={step.codeSnippet}
                  language={step.codeLanguage ?? "html"}
                />
              )}

              {/* Step-specific Facts */}
              {step.facts && step.facts.length > 0 && (
                <div className="rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 p-4 space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                      {locale === "de" ? "Wichtige Facts" : "Key Facts"}
                    </span>
                  </div>
                  {step.facts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5 font-bold text-sm">
                        →
                      </span>
                      <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                        {fact[locale]}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const emailFactsSectionConfig = [
  {
    key: "technicalLimitations",
    label: { de: "Technische Grenzen", en: "Technical Limitations" },
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/20",
    border: "border-orange-200 dark:border-orange-800/30",
  },
  {
    key: "clientProblems",
    label: { de: "Client-Probleme", en: "Client Problems" },
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-950/20",
    border: "border-red-200 dark:border-red-800/30",
  },
  {
    key: "whatWorks",
    label: { de: "Was funktioniert", en: "What Works" },
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-950/20",
    border: "border-green-200 dark:border-green-800/30",
  },
  {
    key: "whatDoesntWork",
    label: { de: "Was nicht funktioniert", en: "What Doesn't Work" },
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-950/20",
    border: "border-red-200 dark:border-red-800/30",
  },
  {
    key: "bestPractices",
    label: { de: "Best Practices", en: "Best Practices" },
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "border-blue-200 dark:border-blue-800/30",
  },
  {
    key: "performance",
    label: { de: "Performance", en: "Performance" },
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-950/20",
    border: "border-teal-200 dark:border-teal-800/30",
  },
];

export function DevJourneyPage({ data, locale }: DevJourneyPageProps) {
  const t = getTranslation(locale);

  const relevantEmailSections = emailFactsSectionConfig.filter((s) =>
    data.relevantEmailFacts.includes(s.key)
  );

  const relevantOutlookSections = t.outlookFacts.sections.filter(
    (_, i) => data.relevantOutlookSections.includes(i)
  );

  const complexityLabel = {
    low: { de: "Niedrig", en: "Low" },
    medium: { de: "Mittel", en: "Medium" },
    high: { de: "Hoch", en: "High" },
  }[data.complexity];

  const complexityColor = {
    low: "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400",
    medium:
      "text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400",
    high: "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400",
  }[data.complexity];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#11111b]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#1e1e2e]/80 backdrop-blur-lg border-b border-gray-200 dark:border-[#313244]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-[#6c7086] hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {locale === "de" ? "Zurück zur Übersicht" : "Back to overview"}
              </Link>
              <span className="text-gray-300 dark:text-[#45475a]">|</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {data.icon} {data.templateName[locale]}
              </span>
            </div>
            <span
              className={cn(
                "text-xs font-bold px-3 py-1.5 rounded-full",
                complexityColor
              )}
            >
              {locale === "de" ? "Komplexität:" : "Complexity:"}{" "}
              {complexityLabel[locale]}
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-gray-100 to-transparent dark:from-[#1e1e2e] dark:to-transparent border-b border-gray-200 dark:border-[#313244]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{data.icon}</span>
              <div>
                <p className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                  {locale === "de"
                    ? "Entwicklungs-Dokumentation"
                    : "Development Documentation"}
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  {data.templateName[locale]}
                  <span className="text-teal-600 dark:text-teal-400">
                    {" "}
                    —{" "}
                    {locale === "de"
                      ? "Der Entwicklungsweg"
                      : "The Development Journey"}
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-[#a6adc8] max-w-3xl leading-relaxed">
              {data.templateDescription[locale]}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1e1e2e] rounded-lg border border-gray-200 dark:border-[#313244] text-sm">
                <Zap className="w-4 h-4 text-teal-500" />
                <span className="text-gray-700 dark:text-[#cdd6f4]">
                  <strong>{data.steps.length}</strong>{" "}
                  {locale === "de" ? "Entwicklungsphasen" : "Development Phases"}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1e1e2e] rounded-lg border border-gray-200 dark:border-[#313244] text-sm">
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-gray-700 dark:text-[#cdd6f4]">
                  <strong>
                    {data.steps.filter((s) => s.status === "problem").length}
                  </strong>{" "}
                  {locale === "de" ? "Entdeckte Probleme" : "Problems Found"}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1e1e2e] rounded-lg border border-gray-200 dark:border-[#313244] text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 dark:text-[#cdd6f4]">
                  <strong>
                    {data.steps.filter((s) => s.status === "solution").length}
                  </strong>{" "}
                  {locale === "de" ? "Angewandte Lösungen" : "Solutions Applied"}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1e1e2e] rounded-lg border border-gray-200 dark:border-[#313244] text-sm">
                <Shield className="w-4 h-4 text-teal-500" />
                <span className="text-gray-700 dark:text-[#cdd6f4]">
                  {locale === "de" ? "Ergebnis:" : "Result:"}{" "}
                  <strong className="text-teal-600 dark:text-teal-400">
                    Bulletproof
                  </strong>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {locale === "de" ? "Entwicklungsstrahl" : "Development Timeline"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-[#6c7086] mb-8">
            {locale === "de"
              ? "Vom ersten Entwurf bis zur bulletproof E-Mail – jede Phase dokumentiert."
              : "From first draft to bulletproof email – every phase documented."}
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-8 p-4 bg-white dark:bg-[#1e1e2e] rounded-lg border border-gray-200 dark:border-[#313244]">
            {Object.entries(statusConfig).map(([key, cfg]) => {
              const Icon = cfg.icon;
              return (
                <div key={key} className="flex items-center gap-2 text-sm">
                  <Icon className={cn("w-4 h-4", cfg.iconColor)} />
                  <span className="text-gray-600 dark:text-[#a6adc8]">
                    {cfg.label[locale]}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="space-y-0">
            {data.steps.map((step, i) => (
              <StepCard key={step.phase} step={step} locale={locale} index={i} />
            ))}
            {/* End cap */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-teal-500 text-white flex-shrink-0 border-2 border-teal-400">
                  <Shield className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1 pb-4">
                <div className="px-6 py-4 bg-teal-500 rounded-xl text-white">
                  <p className="text-sm font-bold uppercase tracking-wider mb-1 opacity-80">
                    {locale === "de" ? "Finales Ergebnis" : "Final Result"}
                  </p>
                  <p className="text-lg font-bold">
                    ✅{" "}
                    {locale === "de"
                      ? "Bulletproof E-Mail – produktionsfertig"
                      : "Bulletproof Email – production-ready"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {locale === "de" ? "Key Learnings" : "Key Learnings"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.keyLearnings.map((learning, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3 p-4 bg-white dark:bg-[#1e1e2e] rounded-lg border border-gray-200 dark:border-[#313244]"
              >
                <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700 dark:text-[#cdd6f4] leading-relaxed">
                  {learning[locale]}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Relevant Email Facts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {locale === "de"
              ? "Relevante E-Mail-Facts für dieses Template"
              : "Relevant Email Facts for this Template"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-[#6c7086] mb-6">
            {locale === "de"
              ? "Diese Fakten und Einschränkungen waren direkt relevant für die Entwicklung dieses Templates."
              : "These facts and limitations were directly relevant for the development of this template."}
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {relevantEmailSections.map((section) => {
              const sectionData = t.emailFacts[
                section.key as keyof typeof t.emailFacts
              ] as unknown as { title: string; items: string[] };
              return (
                <div
                  key={section.key}
                  className={cn(
                    "rounded-lg p-5 border",
                    section.bg,
                    section.border
                  )}
                >
                  <h3
                    className={cn(
                      "text-base font-semibold mb-3",
                      section.color
                    )}
                  >
                    {sectionData.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {sectionData.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 dark:text-[#cdd6f4] flex items-start gap-2"
                      >
                        <span className={cn("mt-1 font-bold", section.color)}>
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
        </section>

        {/* Relevant Outlook Facts */}
        <section className="pb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {locale === "de"
              ? "Outlook-spezifische Herausforderungen"
              : "Outlook-Specific Challenges"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-[#6c7086] mb-6">
            {locale === "de"
              ? "Diese Outlook-Eigenheiten mussten beim Entwickeln dieses Templates berücksichtigt werden."
              : "These Outlook quirks had to be considered when developing this template."}
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {relevantOutlookSections.map((section, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#181825] rounded-lg p-5 border-2 border-red-200 dark:border-red-900/30"
              >
                <h3 className="text-base font-semibold text-red-600 dark:text-red-400 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1.5">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 dark:text-[#cdd6f4] flex items-start gap-2"
                    >
                      <span className="text-red-400 font-bold mt-0.5">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
