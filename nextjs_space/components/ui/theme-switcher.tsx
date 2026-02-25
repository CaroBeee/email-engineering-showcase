"use client";

import { motion } from "framer-motion";
import { Palette, Check } from "lucide-react";
import {
  ThemeId,
  themes,
  themeMetadata,
  DesignTokens,
} from "@/lib/design-tokens";
import { Locale } from "@/lib/i18n";

interface ThemeSwitcherProps {
  currentTheme: ThemeId;
  onThemeChange: (theme: ThemeId) => void;
  locale: Locale;
}

export function ThemeSwitcher({
  currentTheme,
  onThemeChange,
  locale,
}: ThemeSwitcherProps) {
  const themeIds = Object.keys(themes) as ThemeId[];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Palette className="w-4 h-4" />
        <span>
          {locale === "de" ? "Design Tokens / Marke" : "Design Tokens / Brand"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {themeIds.map((themeId) => {
          const meta = themeMetadata[themeId];
          const tokens = themes[themeId];
          const isActive = currentTheme === themeId;

          return (
            <motion.button
              key={themeId}
              onClick={() => onThemeChange(themeId)}
              className={`relative p-3 rounded-lg border-2 transition-all text-left ${
                !isActive
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50 bg-card"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2"
                >
                  <Check className="w-4 h-4 text-primary" />
                </motion.div>
              )}

              {/* Color Preview */}
              <div className="flex gap-1 mb-2">
                <div
                  className="w-4 h-4 rounded-full border border-white/20"
                  style={{ backgroundColor: tokens.colors.primary }}
                  title="Primary"
                />
                <div
                  className="w-4 h-4 rounded-full border border-white/20"
                  style={{ backgroundColor: tokens.colors.secondary }}
                  title="Secondary"
                />
                <div
                  className="w-4 h-4 rounded-full border border-white/20"
                  style={{ backgroundColor: tokens.colors.accent }}
                  title="Accent"
                />
                <div
                  className="w-4 h-4 rounded-full border border-white/20"
                  style={{ backgroundColor: tokens.colors.text }}
                  title="Text"
                />
              </div>

              {/* Theme Name */}
              <div className="font-medium text-sm">
                {locale === "de" ? meta.labelDe : meta.labelEn}
              </div>

              {/* Description */}
              <div className="text-xs text-muted-foreground mt-0.5">
                {meta.description}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// Compact version for toolbar
export function ThemeSwitcherCompact({
  currentTheme,
  onThemeChange,
  locale,
}: ThemeSwitcherProps) {
  const themeIds = Object.keys(themes) as ThemeId[];

  return (
    <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
      {themeIds.map((themeId) => {
        const tokens = themes[themeId];
        const isActive = currentTheme === themeId;
        const meta = themeMetadata[themeId];

        return (
          <button
            key={themeId}
            onClick={() => onThemeChange(themeId)}
            className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
              isActive
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title={locale === "de" ? meta.labelDe : meta.labelEn}
          >
            <div
              className="w-3 h-3 rounded-full border border-white/20"
              style={{ backgroundColor: tokens.colors.primary }}
            />
            <span className="hidden sm:inline">
              {locale === "de" ? meta.labelDe : meta.labelEn}
            </span>
          </button>
        );
      })}{" "}
    </div>
  );
}

// Token Preview Panel
export function TokenPreviewPanel({
  tokens,
  locale,
  forceDarkMode,
}: {
  tokens: DesignTokens;
  locale: Locale;
  forceDarkMode: boolean;
}) {
  return (
    <div className="p-4 bg-card rounded-xl border border-border space-y-4">
      <h4 className="font-semibold text-sm">
        {locale === "de" ? "Aktive Design Tokens" : "Active Design Tokens"}
      </h4>

      {/* Colors */}
      <div>
        <div>
          <div className="text-xs text-muted-foreground mb-2">
            {locale === "de" ? "Farben" : "Colors"}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Object.entries(tokens.colors)
              .slice(0, 4)
              .map(([key, value]) => (
                <div key={key} className="text-center">
                  <div
                    className="w-8 h-8 rounded-lg mx-auto border border-border"
                    style={{ backgroundColor: value }}
                  />
                  <div className="text-[10px] text-muted-foreground mt-1 truncate">
                    {key}
                  </div>
                </div>
              ))}
          </div>
        </div>
        {!forceDarkMode ? (
          <div className="pt-4">
            <div className="text-xs text-muted-foreground mb-2 ">
              {locale === "de" ? "Farben Light" : "Colors light"}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(tokens.colors)
                .slice(4, 9)
                .map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div
                      className="w-8 h-8 rounded-lg mx-auto border border-border"
                      style={{ backgroundColor: value }}
                    />
                    <div className="text-[10px] text-muted-foreground mt-1 truncate">
                      {key}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="pt-4">
            <div className="text-xs text-muted-foreground mb-2 ">
              {locale === "de" ? "Farben Dark" : "Colors dark"}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(tokens.darkMode)
                .slice(0, 8)
                .map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div
                      className="w-8 h-8 rounded-lg mx-auto border border-border"
                      style={{ backgroundColor: value }}
                    />
                    <div className="text-[10px] text-muted-foreground mt-1 truncate">
                      {key}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Typography */}
      <div>
        <div className="text-xs text-muted-foreground mb-2">
          {locale === "de" ? "Typografie" : "Typography"}
        </div>
        <div className="text-xs space-y-1">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Font:</span>
            <span className="font-mono truncate max-w-[150px]">
              {tokens.typography.fontFamily.split(",")[0].replace(/'/g, "")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Size:</span>
            <span className="font-mono">{tokens.typography.baseFontSize}</span>
          </div>
        </div>
      </div>

      {/* Button Style Preview */}
      <div>
        <div className="text-xs text-muted-foreground mb-2">
          {locale === "de" ? "Button-Stil" : "Button Style"}
        </div>
        <div
          className="inline-block px-4 py-2 text-white text-sm font-medium"
          style={{
            backgroundColor: tokens.colors.primary,
            borderRadius: tokens.button.borderRadius,
            fontFamily: tokens.typography.fontFamily,
          }}
        >
          {locale === "de" ? "Beispiel Button" : "Example Button"}
        </div>
      </div>
    </div>
  );
}
