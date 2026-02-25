import React from "react";
import { ButtonProps, EmailButton } from "./button";
import { EmailImage, ImageProps } from "./image";
import { EmailTypography, TypographyProps } from "./typography";
import { DesignTokens } from "@/lib/design-tokens";
import { EmailWrapper } from "./wrapper";

interface MainTeaserProps {
  className?: string;
  image: ImageProps;
  headline: TypographyProps;
  content: TypographyProps;
  button: ButtonProps;
  tokens: DesignTokens;
  children?: React.ReactNode;
}

export function EmailMainTeaser({
  className = "",
  image,
  headline,
  content,
  button,
  tokens,
}: MainTeaserProps) {
  return (
    <EmailWrapper padding="0">
      <div className={`email-main-teaser ${className}`}>
        <EmailImage
          src={image.src}
          alt={image.alt}
          borderRadius={image.borderRadius}
        />
        <EmailWrapper>
          <EmailTypography
            {...headline}
            as="h2"
            color={headline.color || tokens.colors.text}
            fontFamily={
              headline.fontFamily || tokens.typography.fontFamilyHeading
            }
            fontWeight={headline.fontWeight || tokens.typography.headingWeight}
          >
            {headline.children}
          </EmailTypography>

          <EmailTypography
            {...content}
            color={content.color || tokens.colors.textMuted}
            fontFamily={content.fontFamily || tokens.typography.fontFamily}
            fontSize={content.fontSize || tokens.typography.baseFontSize}
            lineHeight={content.lineHeight || tokens.typography.lineHeight}
          >
            {content.children}
          </EmailTypography>

          <div style={{ marginTop: tokens.spacing.elementGap }}>
            <EmailButton
              {...button}
              backgroundColor={button.backgroundColor || tokens.colors.primary}
              borderRadius={button.borderRadius || tokens.button.borderRadius}
              fontFamily={button.fontFamily || tokens.typography.fontFamily}
              paddingX={tokens.button.paddingX}
              paddingY={tokens.button.paddingY}
            >
              {button.children}
            </EmailButton>
          </div>
        </EmailWrapper>
      </div>
    </EmailWrapper>
  );
}
