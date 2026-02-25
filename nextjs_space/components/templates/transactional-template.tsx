"use client";

import React from "react";
import {
  EmailContainer,
  EmailSection,
  EmailTypography,
  EmailButton,
  EmailPreheader,
} from "../email";
import { DesignTokens, defaultTheme } from "@/lib/design-tokens";
import {
  generateMailHtml,
  generateViewMail,
} from "./mail-template";
import { Locale, getMailTranslation } from "@/lib/i18n";

interface TransactionalTemplateProps {
  tokens?: DesignTokens;
  forceDarkMode?: boolean;
  locale?: Locale;
  showPlaceholders?: boolean;
}

export function TransactionalTemplate({
  tokens = defaultTheme,
  forceDarkMode = false,
  locale = "de",
  showPlaceholders = false,
}: TransactionalTemplateProps) {
  const t = getMailTranslation(locale);

  const getText = (key: string, value: string) => {
    return showPlaceholders ? `{{${key}}}` : value;
  };

  return (
    <>
      <EmailPreheader>
        {getText("newsletter.preheader", t.newsletter.preheader)}
      </EmailPreheader>
      <EmailContainer>
        <EmailSection
          backgroundColor={tokens.colors.success}
          padding={tokens.spacing.sectionPadding}
        >
          <EmailTypography
            as="h1"
            color="#ffffff"
            margin="0"
            fontSize="28px"
            fontFamily={tokens.typography.fontFamilyHeading}
            fontWeight={tokens.typography.headingWeight}
          >
            {getText(
              "transactional.header.title",
              t.transactional.header.title,
            )}
          </EmailTypography>
        </EmailSection>

        <EmailSection padding={tokens.spacing.sectionPadding}>
          <EmailTypography
            as="p"
            color={tokens.colors.text}
            margin="0 0 24px 0"
            fontFamily={tokens.typography.fontFamily}
            lineHeight={tokens.typography.lineHeight}
          >
            {getText(
              "transactional.content.thankYou",
              t.transactional.content.thankYou,
            )}
          </EmailTypography>

          <table
            role="presentation"
            cellPadding="0"
            cellSpacing="0"
            width="100%"
            style={{
              backgroundColor: tokens.colors.surface,
              borderRadius: "8px",
              border: `1px solid ${tokens.colors.border}`,
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "16px",
                    borderBottom: `1px solid ${tokens.colors.border}`,
                  }}
                >
                  <EmailTypography
                    as="span"
                    color={tokens.colors.textMuted}
                    fontSize="14px"
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "transactional.details.orderNumber",
                      t.transactional.details.orderNumber,
                    )}
                  </EmailTypography>
                  <EmailTypography
                    as="p"
                    fontWeight={600}
                    margin="4px 0 0 0"
                    color={tokens.colors.text}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    #ORD-2026-001234
                  </EmailTypography>
                </td>
                <td
                  style={{
                    padding: "16px",
                    borderBottom: `1px solid ${tokens.colors.border}`,
                    textAlign: "right",
                  }}
                >
                  <EmailTypography
                    as="span"
                    color={tokens.colors.textMuted}
                    fontSize="14px"
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "transactional.details.date",
                      t.transactional.details.date,
                    )}
                  </EmailTypography>
                  <EmailTypography
                    as="p"
                    fontWeight={600}
                    margin="4px 0 0 0"
                    color={tokens.colors.text}
                    fontFamily={tokens.typography.fontFamily}
                    textAlign="right"
                  >
                    {locale === "de" ? "13. Januar 2026" : "January 13, 2026"}
                  </EmailTypography>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "16px" }}>
                  <EmailTypography
                    as="span"
                    color={tokens.colors.textMuted}
                    fontSize="14px"
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "transactional.details.paymentMethod",
                      t.transactional.details.paymentMethod,
                    )}
                    {t.transactional.details.paymentMethod}
                  </EmailTypography>
                  <EmailTypography
                    as="p"
                    fontWeight={600}
                    margin="4px 0 0 0"
                    color={tokens.colors.text}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    Visa •••• 4242
                  </EmailTypography>
                </td>
                <td style={{ padding: "16px", textAlign: "right" }}>
                  <EmailTypography
                    as="span"
                    color={tokens.colors.textMuted}
                    fontSize="14px"
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "transactional.details.totalAmount",
                      t.transactional.details.totalAmount,
                    )}
                  </EmailTypography>
                  <EmailTypography
                    as="p"
                    fontWeight={700}
                    margin="4px 0 0 0"
                    fontSize="20px"
                    color={tokens.colors.success}
                    fontFamily={tokens.typography.fontFamily}
                    textAlign="right"
                  >
                    €127,99
                  </EmailTypography>
                </td>
              </tr>
            </tbody>
          </table>
        </EmailSection>

        <EmailSection
          padding={`0 ${tokens.spacing.containerPadding} ${tokens.spacing.sectionPadding}`}
        >
          <EmailTypography
            as="h3"
            margin="0 0 16px 0"
            color={tokens.colors.text}
            fontFamily={tokens.typography.fontFamilyHeading}
            fontWeight={tokens.typography.headingWeight}
          >
            {getText(
              "transactional.orderItems.title",
              t.transactional.orderItems.title,
            )}
          </EmailTypography>

          <table
            role="presentation"
            cellPadding="0"
            cellSpacing="0"
            width="100%"
          >
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "12px 0",
                    borderBottom: `1px solid ${tokens.colors.border}`,
                  }}
                >
                  <EmailTypography
                    as="span"
                    fontWeight={500}
                    color={tokens.colors.text}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "transactional.orderItems.headphones",
                      t.transactional.orderItems.headphones,
                    )}
                  </EmailTypography>
                  <EmailTypography
                    as="span"
                    color={tokens.colors.textMuted}
                    margin="0 0 0 8px"
                    fontFamily={tokens.typography.fontFamily}
                  >
                    × 1
                  </EmailTypography>
                </td>
                <td
                  style={{
                    padding: "12px 0",
                    borderBottom: `1px solid ${tokens.colors.border}`,
                    textAlign: "right",
                  }}
                >
                  <EmailTypography
                    as="span"
                    fontWeight={500}
                    color={tokens.colors.text}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    €99,99
                  </EmailTypography>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "12px 0",
                    borderBottom: `1px solid ${tokens.colors.border}`,
                  }}
                >
                  <EmailTypography
                    as="span"
                    fontWeight={500}
                    color={tokens.colors.text}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "transactional.orderItems.cable",
                      t.transactional.orderItems.cable,
                    )}
                  </EmailTypography>
                  <EmailTypography
                    as="span"
                    color={tokens.colors.textMuted}
                    margin="0 0 0 8px"
                    fontFamily={tokens.typography.fontFamily}
                  >
                    × 2
                  </EmailTypography>
                </td>
                <td
                  style={{
                    padding: "12px 0",
                    borderBottom: `

1px solid ${tokens.colors.border}`,
                    textAlign: "right",
                  }}
                >
                  <EmailTypography
                    as="span"
                    fontWeight={500}
                    color={tokens.colors.text}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    €28,00
                  </EmailTypography>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px 0" }}>
                  <EmailTypography
                    as="span"
                    fontWeight={600}
                    color={tokens.colors.text}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "transactional.orderItems.total",
                      t.transactional.orderItems.total,
                    )}
                  </EmailTypography>
                </td>
                <td style={{ padding: "12px 0", textAlign: "right" }}>
                  <EmailTypography
                    as="span"
                    fontWeight={700}
                    fontSize="18px"
                    color={tokens.colors.primary}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    €127,99
                  </EmailTypography>
                </td>
              </tr>
            </tbody>
          </table>
        </EmailSection>

        <EmailSection
          padding={tokens.spacing.sectionPadding}
          backgroundColor={
            forceDarkMode ? tokens.darkMode.surface : tokens.colors.surface
          }
        >
          <div style={{ textAlign: "center" }}>
            <EmailTypography
              as="p"
              color={tokens.colors.textMuted}
              margin="0 0 16px 0"
              fontFamily={tokens.typography.fontFamily}
            >
              {getText(
                "transactional.cta.message",
                t.transactional.cta.message,
              )}
            </EmailTypography>
            <EmailButton
              href="#"
              backgroundColor={tokens.colors.primary}
              borderRadius={tokens.button.borderRadius}
              paddingX={tokens.button.paddingX}
              paddingY={tokens.button.paddingY}
              fontFamily={tokens.typography.fontFamily}
            >
              {getText("transactional.cta.button", t.transactional.cta.button)}
            </EmailButton>
          </div>
        </EmailSection>

        <EmailSection padding={`16px ${tokens.spacing.containerPadding}`}>
          <table
            role="presentation"
            cellPadding="0"
            cellSpacing="0"
            width="100%"
            style={{
              backgroundColor: "#FEF3C7",
              borderRadius: "8px",
              border: "1px solid #F59E0B",
            }}
          >
            <tbody>
              <tr>
                <td style={{ padding: "12px 16px" }}>
                  <EmailTypography
                    as="p"
                    fontSize="13px"
                    color="#92400E"
                    margin="0"
                    fontFamily={tokens.typography.fontFamily}
                  >
                    🔒{" "}
                    <strong>
                      {getText(
                        "transactional.security.title",
                        t.transactional.security.title,
                      )}
                    </strong>
                    {getText(
                      "transactional.security.message",
                      t.transactional.security.message,
                    )}
                  </EmailTypography>
                </td>
              </tr>
            </tbody>
          </table>
        </EmailSection>

        <EmailSection padding={`24px ${tokens.spacing.containerPadding}`}>
          <EmailTypography
            as="p"
            fontSize="12px"
            color={tokens.colors.textMuted}
            margin="0"
            fontFamily={tokens.typography.fontFamily}
          >
            {getText(
              "transactional.footer.support",
              t.transactional.footer.support,
            )}
            <a href="#" style={{ color: tokens.colors.primary }}>
              support@example.com
            </a>{" "}
          </EmailTypography>
          <EmailTypography
            as="p"
            fontSize="12px"
            color={tokens.colors.textMuted}
            margin="8px 0 0 0"
            fontFamily={tokens.typography.fontFamily}
          >
            {getText(
              "transactional.footer.copyright",
              t.transactional.footer.copyright,
            )}{" "}
            {getText("tokens.brand.name", tokens.brand.name)}{" "}
            {getText(
              "transactional.footer.rights",
              t.transactional.footer.rights,
            )}
          </EmailTypography>
        </EmailSection>
      </EmailContainer>
    </>
  );
}

export function generateTransactionalHtml(
  tokens: DesignTokens = defaultTheme,
): string {
  return `<!DOCTYPE html>
<html lang="de" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <title>Zahlung erfolgreich</title>
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
  <style>
    /* Design Tokens: ${tokens.brand.name} */
    body { margin: 0; padding: 0; font-family: ${tokens.typography.fontFamily}; }
    @media (prefers-color-scheme: dark) {
      .email-bg { background-color: ${tokens.darkMode.background} !important; }
      .email-text { color: ${tokens.darkMode.text} !important; }
      .email-surface { background-color: ${tokens.darkMode.surface} !important; }
    }
    @media screen and (max-width: 600px) {
      .email-container { width: 100% !important; }
      .stack-cell { display: block !important; width: 100% !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #fafafa;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fafafa;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!--[if mso]><table role="presentation" width="680"><tr><td><![endif]-->
        <table role="presentation" cellpadding="0" cellspacing="0" width="680" class="email-container email-bg" style="max-width: 680px; width: 100%; background-color: ${tokens.colors.background};">
          <tr>
            <td style="padding: ${tokens.spacing.sectionPadding}; background-color: ${tokens.colors.success};">
              <h1 style="margin: 0; color: #ffffff; font-family

: ${tokens.typography.fontFamilyHeading}; font-size: 28px; font-weight: ${tokens.typography.headingWeight};">✓ Zahlung erfolgreich</h1>
            </td>
          </tr>
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function transactionalHtmlCode(
  tokens: DesignTokens = defaultTheme,
  locale: Locale = "de",
) {
  return generateMailHtml(
    tokens,
    `Billing successful (${tokens.colors.primary})`,
    <TransactionalTemplate tokens={tokens} locale={locale} />,
  );
}

export function transactionalViewTemplate({
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
    <TransactionalTemplate
      forceDarkMode={forceDarkMode}
      tokens={tokens}
      locale={locale}
      showPlaceholders={showPlaceholders}
    />,
  );
}
