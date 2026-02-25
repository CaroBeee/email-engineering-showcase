import React from "react";
import { EmailButton } from "./button";
import { EmailImage, ImageProps } from "./image";
import { EmailTypography } from "./typography";
import { DesignTokens } from "@/lib/design-tokens";
import { Locale, getMailTranslation } from "@/lib/i18n";

interface BadgeProps {
  type: "limited" | "new" | "sale" | "bestseller";
}

interface MainProductProps {
  className?: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: ImageProps;
  badge?: BadgeProps | null;
  tokens: DesignTokens;
  locale?: Locale;
  showPlaceholders?: boolean;
  button: string;
}

export function EmailMainProduct({
  className = "",
  tokens,
  name,
  price,
  originalPrice,
  image,
  badge,
  locale = "de",
  showPlaceholders = false,
  button,
}: MainProductProps) {
  const t = getMailTranslation(locale);

  const getText = (key: string, value: string) => {
    return showPlaceholders ? `{{${key}}}` : value;
  };

  const getBadgeText = (type: "limited" | "new" | "sale" | "bestseller") => {
    const badgeKey = `productGrid.badges.${type}`;
    const badgeValue = t.productGrid.badges[type];
    return getText(badgeKey, badgeValue);
  };

  const badgeColor =
    badge?.type === "limited"
      ? tokens.colors.accent
      : badge?.type === "new"
        ? tokens.colors.success
        : badge?.type === "sale"
          ? tokens.colors.error
          : badge?.type === "bestseller"
            ? tokens.colors.success
            : tokens.colors.primary;

  return (
    <div className={`email-product ${className}`}>
      {badge && (
        <span
          style={{
            display: "inline-block",
            backgroundColor: badgeColor,
            color: "#ffffff",
            padding: "4px 12px",
            borderRadius: "9999px",
            fontSize: "12px",
            fontWeight: 600,
            marginBottom: "12px",
            fontFamily: tokens.typography.fontFamily,
          }}
        >
          {getBadgeText(badge.type)}
        </span>
      )}
      <EmailImage {...image} width="100%" borderRadius={8} />
      <EmailTypography
        as="p"
        fontWeight={600}
        margin="12px 0 4px 0"
        color={tokens.colors.text}
        fontFamily={tokens.typography.fontFamily}
      >
        {name}
      </EmailTypography>
      <div>
        <EmailTypography
          as="span"
          fontSize="18px"
          fontWeight={700}
          color={tokens.colors.primary}
          fontFamily={tokens.typography.fontFamily}
        >
          {price}
        </EmailTypography>
        {originalPrice && (
          <EmailTypography
            as="span"
            fontSize="14px"
            color={tokens.colors.textMuted}
            margin="0 0 0 8px"
            style={{ textDecoration: "line-through" }}
            fontFamily={tokens.typography.fontFamily}
          >
            {originalPrice}
          </EmailTypography>
        )}
        <div style={{ marginTop: tokens.spacing.elementGap }}>
          <EmailButton
            backgroundColor={tokens.colors.primary}
            borderRadius={tokens.button.borderRadius}
            fontFamily={tokens.typography.fontFamily}
            paddingX="22px"
            paddingY="10px"
            position="center"
          >
            {button}
          </EmailButton>
        </div>
      </div>
    </div>
  );
}
