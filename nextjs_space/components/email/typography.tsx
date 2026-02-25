import React from "react";

export interface TypographyProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  color?: string;
  fontSize?: string;
  fontWeight?: number | string;
  fontFamily?: string;
  lineHeight?: string;
  margin?: string;
  textAlign?: "left" | "center" | "right";
  className?: string;
  style?: React.CSSProperties;
}

const defaultStyles: Record<
  string,
  { fontSize: string; fontWeight: number; lineHeight: string; margin: string }
> = {
  h1: {
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "1.2",
    margin: "0 0 16px 0",
  },
  h2: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "1.3",
    margin: "0 0 12px 0",
  },
  h3: {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "1.4",
    margin: "0 0 8px 0",
  },
  p: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "1.6",
    margin: "0 0 16px 0",
  },
  span: { fontSize: "14px", fontWeight: 400, lineHeight: "1.5", margin: "0" },
};

export function EmailTypography({
  children,
  as = "p",
  color = "#1a1a2e",
  fontSize,
  fontWeight,
  fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  lineHeight,
  margin,
  textAlign = "left",
  className = "",
  style,
}: TypographyProps) {
  const defaults = defaultStyles[as] ?? defaultStyles.p;
  const Tag = as;

  const resolvedFontWeight =
    typeof fontWeight === "string"
      ? parseInt(fontWeight) || defaults?.fontWeight || 400
      : (fontWeight ?? defaults?.fontWeight ?? 400);

  return (
    <Tag
      className={`email-text ${className}`}
      style={{
        fontFamily,
        color,
        textAlign: textAlign,
        fontSize: fontSize ?? defaults?.fontSize ?? "16px",
        fontWeight: resolvedFontWeight,
        lineHeight: lineHeight ?? defaults?.lineHeight ?? "1.6",
        margin: margin ?? defaults?.margin ?? "0",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
