import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  className?: string;
}

export function EmailImage({
  src,
  alt,
  width = "100%",
  height = "auto",
  borderRadius = 4,
  className = "",
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={typeof width === "number" ? width : undefined}
      height={typeof height === "number" ? height : undefined}
      className={className}
      style={{
        display: "block",
        width: typeof width === "string" ? width : `${width}px`,
        maxWidth: "100%",
        height: typeof height === "string" ? height : `${height}px`,
        borderRadius: `${borderRadius}px`,
        border: "0",
      }}
    />
  );
}
