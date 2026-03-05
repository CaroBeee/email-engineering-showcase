"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Code2, Palette, Shield, Zap, Github } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import { Sun, Moon } from "lucide-react";
import { ThemeId, getTheme } from "@/lib/design-tokens";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";
import { TemplateCard } from "@/components/ui/template-card";
import { TabSwitcher } from "@/components/ui/tab-switcher";
import { CodeViewer } from "@/components/ui/code-viewer";
import { AccessibilityPanel } from "@/components/ui/accessibility-panel";
import { RenderingMatrix } from "@/components/ui/rendering-matrix";
import {
  ThemeSwitcher,
  TokenPreviewPanel,
} from "@/components/ui/theme-switcher";
import {
  productGridHtmlCode,
  productGridViewTemplate,
} from "@/components/templates/product-grid-template";
import {
  transactionalHtmlCode,
  transactionalViewTemplate,
} from "@/components/templates/transactional-template";
import {
  newsletterHtmlCode,
  newsletterViewTemplate,
} from "@/components/templates/newsletter-template";
import { PlaceholderSwitcher } from "@/components/ui/placeholder-switcher";
import { EmailFacts } from "@/components/ui/facts";
import { OutlookFacts } from "@/components/ui/outlook-facts";
import { MailLanguageSwitcher } from "@/components/ui/mail-language-switcher";

const templateDefinitions = [
  {
    id: "newsletter",
    name: { de: "Newsletter", en: "Newsletter" },
    description: {
      de: "Klassischer Newsletter mit Hero-Image und Artikel-Teasern",
      en: "Classic newsletter with hero image and article teasers",
    },
    Component: newsletterViewTemplate,
    generateHtml: newsletterHtmlCode,
  },
  {
    id: "product-grid",
    name: { de: "Produkt-Grid", en: "Product Grid" },
    description: {
      de: "2-Spalten Produktpräsentation mit Badges und CTAs",
      en: "2-column product showcase with badges and CTAs",
    },
    Component: productGridViewTemplate,
    generateHtml: productGridHtmlCode,
  },
  {
    id: "transactional",
    name: { de: "Transaktional", en: "Transactional" },
    description: {
      de: "Zahlungsbestätigung mit Transaktionsdetails",
      en: "Payment confirmation with transaction details",
    },
    Component: transactionalViewTemplate,
    generateHtml: transactionalHtmlCode,
  },
];

const features = [
  { icon: Palette, key: "tokenBased" },
  { icon: Shield, key: "bulletproof" },
  { icon: Zap, key: "responsive" },
  { icon: Code2, key: "wcag" },
];

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("de");
  const [localeMail, setLocaleMail] = useState<Locale>("en");
  const [activeTemplateId, setActiveTemplateId] = useState(
    templateDefinitions[0].id,
  );
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [currentTheme, setCurrentTheme] = useState<ThemeId>("default");
  const [currentHtmlCode, setCurrentHtmlCode] = useState<string>("");
  const [emailDarkMode, setEmailDarkMode] = useState<boolean>(false);
  const [showPlaceholders, setShowPlaceholders] = useState(false);

  const t = getTranslation(locale);
  const tokens = getTheme(currentTheme);

  const activeTemplate =
    templateDefinitions.find((tpl) => tpl.id === activeTemplateId) ||
    templateDefinitions[0];
  const ActiveComponent = activeTemplate.Component;

  useEffect(() => {
    const generateCode = async () => {
      const code = await activeTemplate.generateHtml(
        tokens,
        localeMail,
        showPlaceholders,
      );
      setCurrentHtmlCode(code);
    };
    generateCode();
  }, [activeTemplate, tokens, emailDarkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#11111b]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#1e1e2e]/80 backdrop-blur-lg border-b border-gray-200 dark:border-[#313244]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                {t?.title ?? "Email Showcase"}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} onChange={setLocale} />
              <DarkModeToggle locale={locale} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-teal-50 to-transparent dark:from-teal-950/20 dark:to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Modern{" "}
            <span className="text-teal-600 dark:text-teal-400">Email</span>{" "}
            Engineering
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-[#a6adc8] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t?.subtitle ?? ""}
          </motion.p>

          {/* Feature badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features?.map((feature) => {
              const Icon = feature?.icon ?? Code2;
              const label =
                t?.features?.[feature?.key as keyof typeof t.features] ??
                feature?.key ??
                "";
              return (
                <div
                  key={feature?.key ?? ""}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1e1e2e] rounded-full shadow-sm border border-gray-200 dark:border-[#313244]"
                >
                  <Icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-[#cdd6f4]">
                    {label}
                  </span>
                </div>
              );
            }) ?? null}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar - Template & Theme Selection */}
          <aside className="lg:col-span-3 space-y-6">
            {/* Template Selection */}
            <div>
              <h2 className="text-sm font-semibold text-gray-500 dark:text-[#6c7086] uppercase tracking-wider mb-4">
                {t?.nav?.templates ?? "Templates"}
              </h2>
              <div className="space-y-3">
                {templateDefinitions.map((template) => (
                  <TemplateCard
                    key={template.id}
                    id={template.id}
                    name={template.name[locale]}
                    description={template.description[locale]}
                    onClick={() => setActiveTemplateId(template.id)}
                    isActive={activeTemplateId === template.id}
                    journeyHref={`/journey/${template.id}`}
                    journeyLabel={locale === "de" ? "Entwicklungsreise" : "Dev Journey"}
                  />
                ))}
              </div>
            </div>

            {/* Theme Switcher */}
            <div className="pt-4 border-t border-gray-200 dark:border-[#313244]">
              <ThemeSwitcher
                currentTheme={currentTheme}
                onThemeChange={setCurrentTheme}
                locale={locale}
              />
            </div>

            {/* Token Preview */}
            <TokenPreviewPanel
              forceDarkMode={emailDarkMode}
              tokens={tokens}
              locale={locale}
            />
          </aside>

          {/* Main Preview Area */}
          <div className="lg:col-span-9 space-y-6">
            {/* Tab Switcher */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {activeTemplate.name[locale]}
                </h2>
                <p className="text-sm text-gray-500 dark:text-[#6c7086] mt-1">
                  {locale === "de" ? "Theme" : "Theme"}:{" "}
                  <span className="font-medium text-teal-600 dark:text-teal-400">
                    {tokens.brand.name}
                  </span>
                </p>
              </div>
              <TabSwitcher
                activeTab={activeTab}
                onTabChange={setActiveTab}
                previewLabel={t?.preview ?? "Preview"}
                codeLabel={t?.code ?? "Code"}
              />
              <MailLanguageSwitcher
                locale={localeMail}
                onChange={setLocaleMail}
              />
              {/* Email Dark Mode Toggle*/}
              <div className="flex items-center gap-1 bg-gray-100 dark:bg-[#313244] rounded-lg p-1">
                <button
                  onClick={() => setEmailDarkMode(!emailDarkMode)}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2"
                >
                  {emailDarkMode ? (
                    <Moon className=" w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                </button>
                <PlaceholderSwitcher
                  showPlaceholders={showPlaceholders}
                  onChange={setShowPlaceholders}
                />
              </div>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
              {activeTab === "preview" ? (
                <motion.div
                  key={`preview-${currentTheme}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="email-preview-frame"
                >
                  <div className="overflow-auto max-h-[700px]">
                    <ActiveComponent
                      tokens={tokens}
                      forceDarkMode={emailDarkMode}
                      locale={localeMail}
                      showPlaceholders={showPlaceholders}
                    />
                    {/*{JSON.stringify(tokens, null, 2)} */}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`code-${currentTheme}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <CodeViewer
                    code={currentHtmlCode}
                    copyText={t?.copy ?? "Copy"}
                    copiedText={t?.copied ?? "Copied!"}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Accessibility & Rendering Matrix */}
            <div className="grid md:grid-cols-1 gap-6 mt-8">
              <RenderingMatrix locale={locale} />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <AccessibilityPanel locale={locale} />
            </div>
          </div>
        </div>
        <EmailFacts locale={locale} />
        <OutlookFacts locale={locale} />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-[#313244] mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-[#6c7086]">
              Email Showcase – Senior Frontend Engineer Portfolio
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-[#a6adc8] hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
