"use client";

import React from "react";
import {
  Monitor,
  Globe,
  Smartphone,
  Apple,
  Moon,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";

interface RenderingClient {
  id: string;
  nameKey: string;
  icon: React.ElementType;
  lightMode: boolean;
  darkMode: boolean;
  responsive: boolean;
  cssSupport: "full" | "limited" | "minimal";
  svg: boolean;
  webFonts: boolean;
  borderRadius: boolean;
  notes: { de: string; en: string };
  details: { de: string[]; en: string[] };
}

const clients: RenderingClient[] = [
  {
    id: "outlook-windows",
    nameKey: "outlookWindows",
    icon: Monitor,
    lightMode: true,
    darkMode: false,
    responsive: false,
    svg: false,
    webFonts: false,
    borderRadius: false,
    cssSupport: "minimal",
    notes: {
      de: "Word-Rendering-Engine (2007-2019), extrem limitierter CSS-Support",
      en: "Word rendering engine (2007-2019), extremely limited CSS support",
    },
    details: {
      de: [
        "Nutzt Microsoft Word als Rendering-Engine",
        "Kein background-image Support",
        "Keine border-radius, box-shadow",
        "VML für Hintergrundbilder erforderlich",
        "DPI-Scaling kann Bilder vergrößern",
        "Conditional Comments <!--[if mso]> notwendig",
      ],
      en: [
        "Uses Microsoft Word as rendering engine",
        "No background-image support",
        "No border-radius, box-shadow",
        "VML required for background images",
        "DPI scaling can enlarge images",
        "Conditional comments <!--[if mso]> necessary",
      ],
    },
  },
  {
    id: "outlook-online",
    nameKey: "outlookOnline",
    icon: Globe,
    lightMode: true,
    darkMode: true,
    responsive: true,
    svg: true,
    webFonts: true,
    borderRadius: true,
    cssSupport: "limited",
    notes: {
      de: "Forced Inversion kann Farben invertieren, <style>-Tags werden entfernt",
      en: "Forced inversion may invert colors, <style> tags are removed",
    },
    details: {
      de: [
        "Entfernt <style>-Tags im Body",
        "Nur Inline-Styles funktionieren zuverlässig",
        "Forced Dark Mode invertiert Farben automatisch",
        "Media Queries funktionieren teilweise",
        "Besserer CSS-Support als Desktop-Version",
      ],
      en: [
        "Removes <style> tags in body",
        "Only inline styles work reliably",
        "Forced dark mode inverts colors automatically",
        "Media queries work partially",
        "Better CSS support than desktop version",
      ],
    },
  },
  {
    id: "gmail",
    nameKey: "gmail",
    icon: Globe,
    lightMode: true,
    darkMode: true,
    responsive: true,
    svg: true,
    webFonts: true,
    borderRadius: true,
    cssSupport: "limited",
    notes: {
      de: "Clippt E-Mails über 102KB, entfernt <style>-Tags",
      en: "Clips emails over 102KB, removes <style> tags",
    },
    details: {
      de: [
        "102KB Größenlimit (HTML wird geclippt)",
        "Entfernt <style>-Tags im Body",
        "Inline-Styles sind Pflicht",
        "Auto Dark Mode invertiert Farben",
        "Mobile App hat besseren Support",
      ],
      en: [
        "102KB size limit (HTML gets clipped)",
        "Removes <style> tags in body",
        "Inline styles are mandatory",
        "Auto dark mode inverts colors",
        "Mobile app has better support",
      ],
    },
  },
  {
    id: "apple-mail",
    nameKey: "appleMail",
    icon: Apple,
    lightMode: true,
    darkMode: true,
    responsive: true,
    svg: true,
    webFonts: true,
    borderRadius: true,
    cssSupport: "full",
    notes: {
      de: "Vollständige prefers-color-scheme Unterstützung, bester CSS-Support",
      en: "Full prefers-color-scheme support, best CSS support",
    },
    details: {
      de: [
        "Webkit-basiert, moderner CSS-Support",
        "prefers-color-scheme funktioniert perfekt",
        "Media Queries voll unterstützt",
        "Web Fonts werden geladen",
        "Beste Dark Mode Implementierung",
      ],
      en: [
        "Webkit-based, modern CSS support",
        "prefers-color-scheme works perfectly",
        "Media queries fully supported",
        "Web fonts are loaded",
        "Best dark mode implementation",
      ],
    },
  },
  {
    id: "mobile-ios",
    nameKey: "mobileIOS",
    icon: Smartphone,
    lightMode: true,
    darkMode: true,
    responsive: true,
    svg: true,
    webFonts: true,
    borderRadius: true,
    cssSupport: "full",
    notes: {
      de: "iOS Mail App, exzellenter Support für moderne CSS-Features",
      en: "iOS Mail App, excellent support for modern CSS features",
    },
    details: {
      de: [
        "Webkit-basiert wie Apple Mail",
        "Responsive Design funktioniert perfekt",
        "Media Queries voll unterstützt",
        "Automatische Skalierung auf 320px Breite",
        "Touch-optimierte Links (min. 44x44px)",
      ],
      en: [
        "Webkit-based like Apple Mail",
        "Responsive design works perfectly",
        "Media queries fully supported",
        "Automatic scaling to 320px width",
        "Touch-optimized links (min. 44x44px)",
      ],
    },
  },
  {
    id: "mobile-android",
    nameKey: "mobileAndroid",
    icon: Smartphone,
    lightMode: true,
    darkMode: true,
    responsive: true,
    svg: true,
    webFonts: true,
    borderRadius: true,
    cssSupport: "limited",
    notes: {
      de: "Gmail App auf Android, guter Support mit einigen Einschränkungen",
      en: "Gmail App on Android, good support with some limitations",
    },
    details: {
      de: [
        "Basiert auf Gmail Web-Client",
        "Ähnliche Einschränkungen wie Gmail",
        "Responsive Design funktioniert",
        "Auto Dark Mode invertiert Farben",
        "Touch-Targets beachten (min. 48x48px)",
      ],
      en: [
        "Based on Gmail web client",
        "Similar limitations as Gmail",
        "Responsive design works",
        "Auto dark mode inverts colors",
        "Mind touch targets (min. 48x48px)",
      ],
    },
  },
];

interface RenderingMatrixProps {
  locale: Locale;
}

export function RenderingMatrix({ locale }: RenderingMatrixProps) {
  const t = getTranslation(locale);
  const r = t?.rendering ?? {};
  const [expandedClient, setExpandedClient] = React.useState<string | null>(
    null,
  );

  const getCssSupportColor = (support: string) => {
    switch (support) {
      case "full":
        return "text-green-600 dark:text-green-400";
      case "limited":
        return "text-yellow-600 dark:text-yellow-400";
      case "minimal":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  const getCssSupportLabel = (support: string) => {
    const labels = {
      de: { full: "Vollständig", limited: "Eingeschränkt", minimal: "Minimal" },
      en: { full: "Full", limited: "Limited", minimal: "Minimal" },
    };
    return labels[locale][support as keyof typeof labels.de] || support;
  };

  return (
    <div className="bg-white dark:bg-[#1e1e2e] rounded-xl border border-gray-200 dark:border-[#313244] overflow-hidden">
      <div className="px-5 py-4 bg-gray-50 dark:bg-[#181825] border-b border-gray-200 dark:border-[#313244]">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {r?.title ?? "Rendering Matrix"}
        </h3>
        <p className="text-sm text-gray-500 dark:text-[#6c7086] mt-1">
          {r?.subtitle ?? ""}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-[#313244]">
              <th className="text-left px-5 py-3 text-sm font-semibold text-gray-700 dark:text-[#cdd6f4]">
                E-Mail Client
              </th>

              <th className="px-5 py-3 text-center text-sm font-semibold text-gray-700 dark:text-[#cdd6f4]">
                <div className="flex items-center justify-center gap-1.5">
                  <Moon className="w-4 h-4" />
                  <span className="hidden sm:inline">{"Dark-Mode"}</span>
                </div>
              </th>
              <th className="px-5 py-3 text-center text-sm font-semibold text-gray-700 dark:text-[#cdd6f4]">
                <span className="hidden sm:inline">{" Responsive"}</span>
              </th>
              <th className="px-5 py-3 text-center text-sm font-semibold text-gray-700 dark:text-[#cdd6f4]">
                CSS
              </th>
              <th className="px-5 py-3 text-center text-sm font-semibold text-gray-700 dark:text-[#cdd6f4]">
                SVG
              </th>
              <th className="px-5 py-3 text-center text-sm font-semibold text-gray-700 dark:text-[#cdd6f4]">
                Web Fonts
              </th>
              <th className="px-5 py-3 text-center text-sm font-semibold text-gray-700 dark:text-[#cdd6f4]">
                Border Radius
              </th>
            </tr>
          </thead>
          <tbody>
            {clients?.map((client) => {
              const Icon = client?.icon ?? Monitor;
              const name =
                r?.[client?.nameKey as keyof typeof r] ?? client?.nameKey ?? "";
              const notes = client?.notes?.[locale] ?? client?.notes?.en ?? "";
              const details =
                client?.details?.[locale] ?? client?.details?.en ?? [];
              const isExpanded = expandedClient === client.id;

              return (
                <React.Fragment key={client?.id ?? ""}>
                  <tr
                    className="border-b border-gray-100 dark:border-[#313244] hover:bg-gray-50 dark:hover:bg-[#181825] transition-colors cursor-pointer"
                    onClick={() =>
                      setExpandedClient(isExpanded ? null : client.id)
                    }
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-gray-900 dark:text-white truncate">
                            {name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-center">
                      {client?.darkMode ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-5 py-4 text-center">
                      {client?.responsive ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span
                        className={`text-xs font-medium ${getCssSupportColor(client.cssSupport)}`}
                      >
                        {getCssSupportLabel(client.cssSupport)}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      {client?.svg ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-5 py-4 text-center">
                      {client?.webFonts ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-5 py-4 text-center">
                      {client?.borderRadius ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr className="bg-gray-50 dark:bg-[#181825] border-b border-gray-100 dark:border-[#313244]">
                      <td colSpan={5} className="px-5 py-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-gray-700 dark:text-[#cdd6f4]">
                              {notes}
                            </p>
                          </div>
                          <div className="pl-6">
                            <ul className="space-y-1.5">
                              {details.map((detail, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-gray-600 dark:text-[#a6adc8] flex items-start gap-2"
                                >
                                  <span className="text-teal-600 dark:text-teal-400 mt-1">
                                    •
                                  </span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
