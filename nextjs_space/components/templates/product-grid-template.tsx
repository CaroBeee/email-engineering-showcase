"use client";

import React from "react";
import {
  EmailContainer,
  EmailSection,
  EmailButton,
  EmailTypography,
  EmailColumnLayout,
  EmailPreheader,
} from "../email";
import { DesignTokens, defaultTheme } from "@/lib/design-tokens";
import {
  generateMailHtml,
  generateViewMail,
} from "./mail-template";
import { Locale, getMailTranslation } from "@/lib/i18n";
import { EmailProduct } from "../email/product";
import { EmailMainProduct } from "../email/main-product";

interface ProductGridTemplateProps {
  tokens?: DesignTokens;
  forceDarkMode?: boolean;
  locale?: Locale;
  showPlaceholders?: boolean;
}

export function ProductGridTemplate({
  tokens = defaultTheme,
  forceDarkMode = false,
  locale = "de",
  showPlaceholders = false,
}: ProductGridTemplateProps) {
  const t = getMailTranslation(locale);

  const getText = (key: string, value: string) => {
    return showPlaceholders ? `{{${key}}}` : value;
  };

  const mainProduct = {
    name: getText(
      "productGrid.products.speakers",
      t.productGrid.products.speakers,
    ),
    price: "€439",
    originalPrice: "€599",
    image: {
      src: "https://images.unsplash.com/photo-1674303324806-7018a739ed11?w=600&h=600&fit=crop",
      alt: getText(
        "productGrid.products.speakers",
        t.productGrid.products.speakers,
      ),
    },
    badge: { type: "sale" as const },
    button: getText("productGrid.buttons.buyNow", t.productGrid.buttons.buyNow),
  };

  const products = [
    {
      name: getText(
        "productGrid.products.headphones",
        t.productGrid.products.headphones,
      ),
      price: "€299",
      originalPrice: "€349",
      image: {
        src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        alt: getText(
          "productGrid.products.headphones",
          t.productGrid.products.headphones,
        ),
      },
      badge: { type: "sale" as const },
      button: getText(
        "productGrid.buttons.buyNow",
        t.productGrid.buttons.buyNow,
      ),
    },
    {
      name: getText(
        "productGrid.products.smartwatch",
        t.productGrid.products.smartwatch,
      ),
      price: "€449",
      image: {
        src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
        alt: getText(
          "productGrid.products.smartwatch",
          t.productGrid.products.smartwatch,
        ),
      },
      badge: { type: "new" as const },
      button: getText(
        "productGrid.buttons.buyNow",
        t.productGrid.buttons.buyNow,
      ),
    },
    {
      name: getText(
        "productGrid.products.earbuds",
        t.productGrid.products.earbuds,
      ),
      price: "€179",
      image: {
        src: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop",
        alt: getText(
          "productGrid.products.earbuds",
          t.productGrid.products.earbuds,
        ),
      },
      badge: { type: "limited" as const },
      button: getText(
        "productGrid.buttons.buyNow",
        t.productGrid.buttons.buyNow,
      ),
    },
    {
      name: getText(
        "productGrid.products.laptopStand",
        t.productGrid.products.laptopStand,
      ),
      price: "€89",
      image: {
        src: "https://images.unsplash.com/photo-1629317480826-910f729d1709?w=300&h=300&fit=crop",
        alt: getText(
          "productGrid.products.laptopStand",
          t.productGrid.products.laptopStand,
        ),
      },
      badge: { type: "bestseller" as const },
      button: getText(
        "productGrid.buttons.buyNow",
        t.productGrid.buttons.buyNow,
      ),
    },
  ];

  return (
    <>
      <EmailContainer>
        <EmailPreheader>
          {getText("newsletter.preheader", t.newsletter.preheader)}
        </EmailPreheader>
        <EmailSection
          backgroundColor={tokens.colors.primary}
          padding={tokens.spacing.sectionPadding}
        >
          <EmailTypography
            as="h1"
            color="#ffffff"
            margin="0"
            fontFamily={tokens.typography.fontFamilyHeading}
            fontWeight={tokens.typography.headingWeight}
          >
            {getText("productGrid.header.title", t.productGrid.header.title)}
          </EmailTypography>
          <EmailTypography
            as="p"
            color="rgba(255,255,255,0.9)"
            margin="8px 0 0 0"
            fontFamily={tokens.typography.fontFamily}
          >
            {getText(
              "productGrid.header.subtitle",
              t.productGrid.header.subtitle,
            )}
          </EmailTypography>
        </EmailSection>

        <EmailSection padding={tokens.spacing.containerPadding}>
          <EmailTypography
            as="p"
            color={tokens.colors.textMuted}
            fontFamily={tokens.typography.fontFamily}
            fontSize={tokens.typography.baseFontSize}
            lineHeight={tokens.typography.lineHeight}
          >
            {getText("productGrid.intro", t.productGrid.intro)}
          </EmailTypography>
        </EmailSection>

        <EmailSection padding={tokens.spacing.containerPadding}>
          <EmailTypography
            as="h2"
            color={tokens.colors.text}
            margin="0 0 12px 0"
            fontFamily={tokens.typography.fontFamilyHeading}
            fontWeight={tokens.typography.headingWeight}
            textAlign="center"
          >
            {getText("productGrid.headline", t.productGrid.headline)}
          </EmailTypography>
          <EmailMainProduct
            {...mainProduct}
            tokens={tokens}
            locale={locale}
            showPlaceholders={showPlaceholders}
          />
        </EmailSection>

        <EmailSection padding={tokens.spacing.sectionPadding}>
          <EmailColumnLayout
            columns={2}
            gap="16px"
            className="product-grid-layout"
          >
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: forceDarkMode
                    ? tokens.darkMode.surface
                    : tokens.colors.surface,
                  borderRadius: "8px",
                  padding: "16px",
                  textAlign: "center",
                  border: `1px solid ${tokens.colors.border}`,
                }}
              >
                <EmailProduct
                  {...product}
                  tokens={tokens}
                  locale={locale}
                  showPlaceholders={showPlaceholders}
                />
              </div>
            ))}
          </EmailColumnLayout>
        </EmailSection>

        <EmailSection
          padding={tokens.spacing.sectionPadding}
          backgroundColor={
            forceDarkMode ? tokens.darkMode.surface : tokens.colors.surface
          }
        >
          <EmailTypography
            as="p"
            color={tokens.colors.textMuted}
            margin="0 0 16px 0"
            fontFamily={tokens.typography.fontFamily}
          >
            {getText("productGrid.cta.shipping", t.productGrid.cta.shipping)}
          </EmailTypography>
          <EmailButton
            href="#"
            backgroundColor={tokens.colors.primary}
            borderRadius={tokens.button.borderRadius}
            paddingX={tokens.button.paddingX}
            paddingY={tokens.button.paddingY}
            fontFamily={tokens.typography.fontFamily}
          >
            {getText("productGrid.cta.button", t.productGrid.cta.button)}
          </EmailButton>
        </EmailSection>

        <EmailSection padding={`16px ${tokens.spacing.containerPadding}`}>
          <EmailTypography
            as="p"
            fontSize="12px"
            color={tokens.colors.textMuted}
            margin="0"
            fontFamily={tokens.typography.fontFamily}
          >
            {t.productGrid.footer.copyright} {tokens.brand.name} ·
            <a href="#" style={{ color: tokens.colors.primary }}>
              {getText(
                "productGrid.footer.imprint",
                t.productGrid.footer.imprint,
              )}
            </a>{" "}
            ·
            <a href="#" style={{ color: tokens.colors.primary }}>
              {getText(
                "productGrid.footer.unsubscribe",
                t.productGrid.footer.unsubscribe,
              )}
            </a>
          </EmailTypography>
        </EmailSection>
      </EmailContainer>
    </>
  );
}

export function productGridHtmlCode(
  tokens: DesignTokens = defaultTheme,
  locale: Locale = "de",
  showPlaceholders: boolean = false,
) {
  return generateMailHtml(
    tokens,
    `Product Grid - ${tokens.brand.name}`,
    <ProductGridTemplate
      tokens={tokens}
      locale={locale}
      showPlaceholders={showPlaceholders}
    />,
  );
}

export function productGridViewTemplate({
  tokens = defaultTheme,
  locale = "de",
  showPlaceholders = false,
  forceDarkMode = false,
}: {
  tokens?: DesignTokens;
  locale?: Locale;
  showPlaceholders?: boolean;
  forceDarkMode?: boolean;
}) {
  return generateViewMail(
    tokens,
    forceDarkMode,
    <ProductGridTemplate
      forceDarkMode={forceDarkMode}
      tokens={tokens}
      locale={locale}
      showPlaceholders={showPlaceholders}
    />,
  );
}