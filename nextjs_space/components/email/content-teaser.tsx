import React from "react";
import { ButtonProps, EmailButton } from "./button";
import { EmailImage, ImageProps } from "./image";
import { EmailTypography, TypographyProps } from "./typography";
import { DesignTokens } from "@/lib/design-tokens";
import { EmailWrapper } from "./wrapper";

interface ContentTeaserProps {
  className?: string;
  image: ImageProps;
  headline: TypographyProps;
  content: TypographyProps;
  button: ButtonProps;
  tokens: DesignTokens;
  direction?: "imageLeft" | "imageRight";
}

export function EmailContentTeaser({
  className = "",
  image,
  headline,
  content,
  button,
  tokens,
  direction = "imageLeft",
}: ContentTeaserProps) {
  const teaserImage = () => {
    return (
      <EmailImage
        src={image.src}
        alt={image.alt}
        borderRadius={image.borderRadius}
      />
    );
  };

  const teaserContent = () => {
    return (
      <>
        <EmailTypography
          {...headline}
          as="h3"
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
      </>
    );
  };

  return (
    <EmailWrapper>
      <table
        role="presentation"
        cellPadding="0"
        cellSpacing="0"
        width="100%"
        className={`email-content-teaser ${className}`}
        style={{ padding: tokens.spacing.sectionPadding }}
      >
        <tbody>
          <tr>
            <td
              className="email-teaser-column email-teaser-column--first email-stack"
              style={{
                width: "50%",
                verticalAlign: "top",
                paddingRight: direction === "imageLeft" ? `30px` : "0",
              }}
            >
              {direction === "imageLeft" ? teaserImage() : teaserContent()}
            </td>
            <td
              className="email-teaser-column email-stack"
              style={{
                width: "50%",
                verticalAlign: "top",
                paddingLeft: direction === "imageLeft" ? `0` : "30px",
              }}
            >
              {direction === "imageLeft" ? teaserContent() : teaserImage()}
            </td>
          </tr>
        </tbody>
      </table>
    </EmailWrapper>
  );
}
