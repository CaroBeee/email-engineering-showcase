// Design Token System für Multi-Brand Email Templates

export interface DesignTokens {
  // Brand Identity
  brand: {
    name: string;
    logo?: string;
  };
  // Color Palette
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  // Dark Mode Overrides
  darkMode: {
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
  };
  // Typography
  typography: {
    fontFamily: string;
    fontFamilyHeading: string;
    baseFontSize: string;
    lineHeight: string;
    headingWeight: string;
  };
  // Spacing & Layout
  spacing: {
    basePadding: string;
    containerPadding: string;
    sectionPadding: string;
    elementGap: string;
  };
  // Button Styles
  button: {
    borderRadius: string;
    paddingX: string;
    paddingY: string;
    fontSize: string;
    fontWeight: string;
  };
}

export type ThemeId = "default" | "corporate" | "startup" | "luxury";

// Default Theme - Clean & Professional
export const defaultTheme: DesignTokens = {
  brand: {
    name: "Default Brand",
  },
  colors: {
    primary: "#3B82F6",
    primaryHover: "#2563EB",
    secondary: "#64748B",
    accent: "#8B5CF6",
    background: "#FFFFFF",
    surface: "#F8FAFC",
    text: "#1E293B",
    textMuted: "#64748B",
    border: "#E2E8F0",
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
  },
  darkMode: {
    background: "#0F172A",
    surface: "#1E293B",
    text: "#F1F5F9",
    textMuted: "#94A3B8",
    border: "#334155",
  },
  typography: {
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontFamilyHeading: "'Helvetica Neue', Arial, sans-serif",
    baseFontSize: "16px",
    lineHeight: "1.6",
    headingWeight: "700",
  },
  spacing: {
    basePadding: "12px",
    containerPadding: "24px",
    sectionPadding: "32px",
    elementGap: "16px",
  },
  button: {
    borderRadius: "8px",
    paddingX: "32px",
    paddingY: "14px",
    fontSize: "16px",
    fontWeight: "600",
  },
};

// Corporate Theme - Trustworthy & Established
export const corporateTheme: DesignTokens = {
  brand: {
    name: "Corporate Pro",
  },
  colors: {
    primary: "#0F4C81",
    primaryHover: "#0A3A63",
    secondary: "#6B7280",
    accent: "#059669",
    background: "#FFFFFF",
    surface: "#F9FAFB",
    text: "#111827",
    textMuted: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#DC2626",
  },
  darkMode: {
    background: "#111827",
    surface: "#1F2937",
    text: "#F9FAFB",
    textMuted: "#9CA3AF",
    border: "#374151",
  },
  typography: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontFamilyHeading: "'Arial Black', Arial, sans-serif",
    baseFontSize: "16px",
    lineHeight: "1.7",
    headingWeight: "800",
  },
  spacing: {
    basePadding: "14px",
    containerPadding: "32px",
    sectionPadding: "40px",
    elementGap: "20px",
  },
  button: {
    borderRadius: "4px",
    paddingX: "28px",
    paddingY: "12px",
    fontSize: "14px",
    fontWeight: "700",
  },
};

// Startup Theme - Modern & Dynamic
export const startupTheme: DesignTokens = {
  brand: {
    name: "Startup Vibe",
  },
  colors: {
    primary: "#7C3AED",
    primaryHover: "#6D28D9",
    secondary: "#EC4899",
    accent: "#06B6D4",
    background: "#FFFFFF",
    surface: "#FAF5FF",
    text: "#1F2937",
    textMuted: "#6B7280",
    border: "#E9D5FF",
    success: "#34D399",
    warning: "#FBBF24",
    error: "#F87171",
  },
  darkMode: {
    background: "#0F0720",
    surface: "#1A0F2E",
    text: "#F5F3FF",
    textMuted: "#A78BFA",
    border: "#4C1D95",
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    fontFamilyHeading: "'Inter', 'Segoe UI', sans-serif",
    baseFontSize: "15px",
    lineHeight: "1.5",
    headingWeight: "700",
  },
  spacing: {
    basePadding: "10px",
    containerPadding: "20px",
    sectionPadding: "28px",
    elementGap: "12px",
  },
  button: {
    borderRadius: "9999px",
    paddingX: "36px",
    paddingY: "14px",
    fontSize: "15px",
    fontWeight: "600",
  },
};

// Luxury Theme - Elegant & Premium
export const luxuryTheme: DesignTokens = {
  brand: {
    name: "Luxe Edition",
  },
  colors: {
    primary: "#B8860B",
    primaryHover: "#996F09",
    secondary: "#1C1C1C",
    accent: "#C9A961",
    background: "#FFFEF9",
    surface: "#FAF9F6",
    text: "#1C1C1C",
    textMuted: "#666666",
    border: "#E8E4D9",
    success: "#2E7D32",
    warning: "#ED6C02",
    error: "#C62828",
  },
  darkMode: {
    background: "#0A0A0A",
    surface: "#1C1C1C",
    text: "#FFFEF9",
    textMuted: "#A3A3A3",
    border: "#333333",
  },
  typography: {
    fontFamily: "'Garamond', 'Times New Roman', serif",
    fontFamilyHeading: "'Didot', 'Bodoni MT', serif",
    baseFontSize: "17px",
    lineHeight: "1.8",
    headingWeight: "400",
  },
  spacing: {
    basePadding: "12px",
    containerPadding: "40px",
    sectionPadding: "48px",
    elementGap: "24px",
  },
  button: {
    borderRadius: "0px",
    paddingX: "40px",
    paddingY: "16px",
    fontSize: "13px",
    fontWeight: "500",
  },
};

// Theme Registry
export const themes: Record<ThemeId, DesignTokens> = {
  default: defaultTheme,
  corporate: corporateTheme,
  startup: startupTheme,
  luxury: luxuryTheme,
};

// Helper to get theme
export function getTheme(themeId: ThemeId): DesignTokens {
  return themes[themeId] || defaultTheme;
}

// Generate inline styles from tokens
export function generateEmailStyles(tokens: DesignTokens): string {
  return `
    /* Design Tokens: ${tokens.brand.name} */
    :root {
      --email-primary: ${tokens.colors.primary};
      --email-primary-hover: ${tokens.colors.primaryHover};
      --email-secondary: ${tokens.colors.secondary};
      --email-accent: ${tokens.colors.accent};
      --email-bg: ${tokens.colors.background};
      --email-surface: ${tokens.colors.surface};
      --email-text: ${tokens.colors.text};
      --email-text-muted: ${tokens.colors.textMuted};
      --email-border: ${tokens.colors.border};
      --email-font: ${tokens.typography.fontFamily};
      --email-font-heading: ${tokens.typography.fontFamilyHeading};
    }
    
    @media (prefers-color-scheme: dark) {
      :root {
        --email-bg: ${tokens.darkMode.background};
        --email-surface: ${tokens.darkMode.surface};
        --email-text: ${tokens.darkMode.text};
        --email-text-muted: ${tokens.darkMode.textMuted};
        --email-border: ${tokens.darkMode.border};
      }
    }
  `;
}

// Theme metadata for UI
export const themeMetadata: Record<
  ThemeId,
  { labelDe: string; labelEn: string; description: string }
> = {
  default: {
    labelDe: "Standard",
    labelEn: "Default",
    description: "Clean & professional look",
  },
  corporate: {
    labelDe: "Corporate",
    labelEn: "Corporate",
    description: "Trustworthy & established",
  },
  startup: {
    labelDe: "Startup",
    labelEn: "Startup",
    description: "Modern & dynamic",
  },
  luxury: {
    labelDe: "Luxus",
    labelEn: "Luxury",
    description: "Elegant & premium",
  },
};
