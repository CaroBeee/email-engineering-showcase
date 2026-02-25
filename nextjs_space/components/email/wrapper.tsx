import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  padding?: string;
  backgroundColor?: string;
  className?: string;
}

export function EmailWrapper({
  children,
  padding = "24px 32px",
  backgroundColor = "transparent",
  className = "",
}: WrapperProps) {
  return (
    <table
      role="presentation"
      cellPadding="0"
      cellSpacing="0"
      width="100%"
      className={`email-wrapper ${className}`}
      style={{ backgroundColor, padding }}
    >
      <tbody>
        <tr>
          <td
            style={{
              padding,
              backgroundColor,
            }}
          >
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
