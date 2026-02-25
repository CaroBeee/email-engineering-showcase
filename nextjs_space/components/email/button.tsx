import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number | string;
  padding?: string;
  paddingX?: string;
  paddingY?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number | string;
  position?: "left" | "right" | "center";
  className?: string;
}

export function EmailButton({
  children,
  href = "#",
  backgroundColor = "#7c3aed",
  textColor = "#ffffff",
  borderRadius = 6,
  padding,
  paddingX = "28px",
  paddingY = "14px",
  fontFamily = "system-ui, -apple-system, sans-serif",
  fontSize = "16px",
  fontWeight = 600,
  position = "left",
  className = "",
}: ButtonProps) {
  const resolvedPadding = padding || `${paddingY} ${paddingX}`;
  const resolvedBorderRadius =
    typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;

  return (
    <table
      role="presentation"
      cellPadding="0"
      cellSpacing="0"
      className={className}
      align={position}
    >
      <tbody>
        <tr>
          <td
            className="email-btn"
            style={{
              backgroundColor,
              borderRadius: resolvedBorderRadius,
              textAlign: "center",
            }}
          >
            <a
              href={href}
              style={{
                display: "inline-block",
                padding: resolvedPadding,
                color: textColor,
                fontFamily,
                fontSize,
                fontWeight:
                  typeof fontWeight === "string"
                    ? parseInt(fontWeight) || 600
                    : fontWeight,
                textDecoration: "none",
                lineHeight: "1.2",
              }}
            >
              {children}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
