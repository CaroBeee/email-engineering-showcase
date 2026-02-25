import React from "react";

interface ColumnLayoutProps {
  children: React.ReactNode[];
  columns?: 2 | 3 | 4;
  gap?: number | string;
  className?: string;
}

export function EmailColumnLayout({
  children,
  columns = 2,
  gap = 16,
  className = "",
}: ColumnLayoutProps) {
  const columnWidth = Math.floor(100 / columns);
  const childArray = React.Children.toArray(children);

  const gapValue = typeof gap === "string" ? parseInt(gap) || 16 : gap;

  const rows: React.ReactNode[][] = [];
  for (let i = 0; i < childArray.length; i += columns) {
    rows.push(childArray.slice(i, i + columns));
  }

  return (
    <table
      role="presentation"
      cellPadding="0"
      cellSpacing="0"
      width="100%"
      className={className}
    >
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((child, colIndex) => (
              <td
                key={colIndex}
                className="email-column email-stack"
                style={{
                  width: `${columnWidth}%`,
                  verticalAlign: "top",
                  paddingLeft: colIndex > 0 ? `${gapValue / 2}px` : "0",
                  paddingRight:
                    colIndex < row.length - 1 ? `${gapValue / 2}px` : "0",
                  paddingBottom:
                    rowIndex < rows.length - 1 ? `${gapValue}px` : "0",
                }}
              >
                {child}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
