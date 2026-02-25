import React from "react";

interface EmailPreheaderProps {
  children: React.ReactNode;
  className?: string;
}

export function EmailPreheader({
  children,
  className = "",
}: EmailPreheaderProps) {
  return (
    <div
      style={{
        display: "none",
        visibility: "hidden",
        msoHide: "all",
        fontSize: "1px",
        color: "#ffffff",
        lineHeight: "1px",
        maxHeight: "0px",
        maxWidth: "0px",
        opacity: 0,
        overflow: "hidden",
      }}
      className={className}
    >
      {children}
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
  );
}
