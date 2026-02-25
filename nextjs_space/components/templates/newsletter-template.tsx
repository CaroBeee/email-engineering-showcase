"use client";

import {
  EmailContainer,
  EmailButton,
  EmailTypography,
  EmailPreheader,
  EmailSection,
} from "../email";
import { DesignTokens, defaultTheme } from "@/lib/design-tokens";
import { generateViewMail, generateMailHtml } from "./mail-template";
import { Locale, getMailTranslation } from "@/lib/i18n";
import { EmailMainTeaser } from "../email/main-teaser";
import { EmailContentTeaser } from "../email/content-teaser";

interface NewsletterTemplateProps {
  tokens?: DesignTokens;
  forceDarkMode?: boolean;
  locale?: Locale;
  showPlaceholders?: boolean;
}

export function NewsletterTemplate({
  tokens = defaultTheme,
  forceDarkMode = false,
  locale = "de",
  showPlaceholders = false,
}: NewsletterTemplateProps) {
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
            {getText("newsletter.header.title", t.newsletter.header.title)}
          </EmailTypography>
          <EmailTypography
            as="p"
            color="#ffffff"
            margin="8px 0 0 0"
            fontFamily={tokens.typography.fontFamily}
          >
            {getText(
              "newsletter.header.subtitle",
              t.newsletter.header.subtitle,
            )}
          </EmailTypography>
        </EmailSection>
        <EmailSection padding="0">
          <EmailMainTeaser
            tokens={tokens}
            image={{
              src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=680&h=300&fit=crop",
              width: 680,
              height: 300,
              alt: getText(
                "newsletter.mainArticle.imageAlt",
                t.newsletter.mainArticle.imageAlt,
              ),
            }}
            headline={{
              children: getText(
                "newsletter.mainArticle.title",
                t.newsletter.mainArticle.title,
              ),
            }}
            content={{
              children: getText(
                "newsletter.mainArticle.content",
                t.newsletter.mainArticle.content,
              ),
            }}
            button={{
              children: getText(
                "newsletter.mainArticle.button",
                t.newsletter.mainArticle.button,
              ),
            }}
          />
        </EmailSection>

        <EmailSection padding={`0 ${tokens.spacing.containerPadding}`}>
          <div
            style={{ height: "1px", backgroundColor: tokens.colors.border }}
          />
        </EmailSection>
        <EmailSection padding="0">
          <EmailContentTeaser
            tokens={tokens}
            image={{
              src: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?w=320&h=320&fit=crop",
              alt: getText(
                "newsletter.article1.imageAlt",
                t.newsletter.article1.imageAlt,
              ),
            }}
            headline={{
              children: getText(
                "newsletter.article1.title",
                t.newsletter.article1.title,
              ),
            }}
            content={{
              children: getText(
                "newsletter.article1.content",
                t.newsletter.article1.content,
              ),
            }}
            button={{
              children: getText(
                "newsletter.article1.button",
                t.newsletter.article1.button,
              ),
            }}
          />
        </EmailSection>

        <EmailSection padding={`0 ${tokens.spacing.containerPadding}`}>
          <div
            style={{ height: "1px", backgroundColor: tokens.colors.border }}
          />
        </EmailSection>
        <EmailSection padding="0">
          <EmailContentTeaser
            direction="imageRight"
            tokens={tokens}
            image={{
              src: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=320&h=320&fit=crop",
              alt: getText(
                "newsletter.article2.imageAlt",
                t.newsletter.article2.imageAlt,
              ),
            }}
            headline={{
              children: getText(
                "newsletter.article2.title",
                t.newsletter.article2.title,
              ),
            }}
            content={{
              children: getText(
                "newsletter.article2.content",
                t.newsletter.article2.content,
              ),
            }}
            button={{
              children: getText(
                "newsletter.article2.button",
                t.newsletter.article2.button,
              ),
            }}
          />
        </EmailSection>
        <EmailSection padding={tokens.spacing.sectionPadding}>
          <EmailTypography
            as="h3"
            fontFamily={tokens.typography.fontFamilyHeading}
            fontWeight={tokens.typography.headingWeight}
            color={tokens.colors.text}
          >
            {getText(
              "newsletter.highlights.title",
              t.newsletter.highlights.title,
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
                <td style={{ paddingBottom: tokens.spacing.elementGap }}>
                  <EmailTypography
                    as="p"
                    fontWeight={600}
                    margin="0 0 4px 0"
                    color={tokens.colors.text}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "newsletter.highlights.article3.title",
                      t.newsletter.highlights.article3.title,
                    )}
                  </EmailTypography>
                  <EmailTypography
                    as="span"
                    color={tokens.colors.textMuted}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "newsletter.highlights.article4.subtitle",
                      t.newsletter.highlights.article4.subtitle,
                    )}
                  </EmailTypography>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: tokens.spacing.elementGap }}>
                  <EmailTypography
                    as="p"
                    fontWeight={600}
                    margin="0 0 4px 0"
                    color={tokens.colors.text}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "newsletter.highlights.article5.title",
                      t.newsletter.highlights.article5.title,
                    )}
                  </EmailTypography>
                  <EmailTypography
                    as="span"
                    color={tokens.colors.textMuted}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "newsletter.highlights.article5.subtitle",
                      t.newsletter.highlights.article5.subtitle,
                    )}
                  </EmailTypography>
                </td>
              </tr>
              <tr>
                <td>
                  <EmailTypography
                    as="p"
                    fontWeight={600}
                    margin="0 0 4px 0"
                    color={tokens.colors.text}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "newsletter.highlights.article6.title",
                      t.newsletter.highlights.article6.title,
                    )}
                  </EmailTypography>
                  <EmailTypography
                    as="span"
                    color={tokens.colors.textMuted}
                    fontFamily={tokens.typography.fontFamily}
                  >
                    {getText(
                      "newsletter.highlights.article6.subtitle",
                      t.newsletter.highlights.article6.subtitle,
                    )}
                  </EmailTypography>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: tokens.spacing.elementGap }}>
            <EmailButton
              backgroundColor={tokens.colors.primary}
              borderRadius={tokens.button.borderRadius}
              fontFamily={tokens.typography.fontFamily}
              paddingX={tokens.button.paddingX}
              paddingY={tokens.button.paddingY}
            >
              {getText(
                "newsletter.highlights.button",
                t.newsletter.highlights.button,
              )}
            </EmailButton>
          </div>
        </EmailSection>

        <EmailSection
          backgroundColor={
            forceDarkMode ? tokens.darkMode.surface : tokens.colors.surface
          }
          padding={`24px ${tokens.spacing.containerPadding}`}
        >
          <EmailTypography
            as="p"
            fontSize="14px"
            color={tokens.colors.textMuted}
            margin="0"
            fontFamily={tokens.typography.fontFamily}
          >
            {getText(
              "newsletter.footer.disclaimer",
              t.newsletter.footer.disclaimer,
            )}
          </EmailTypography>
          <EmailTypography
            as="p"
            fontSize="14px"
            color={tokens.colors.textMuted}
            margin="8px 0 0 0"
            fontFamily={tokens.typography.fontFamily}
          >
            <a
              href="#"
              style={{
                color: tokens.colors.primary,
                textDecoration: "underline",
              }}
            >
              {getText(
                "newsletter.footer.unsubscribe",
                t.newsletter.footer.unsubscribe,
              )}
            </a>
            {" · "}
            <a
              href="#"
              style={{
                color: tokens.colors.primary,
                textDecoration: "underline",
              }}
            >
              {getText(
                "newsletter.footer.settings",
                t.newsletter.footer.settings,
              )}
            </a>
          </EmailTypography>
        </EmailSection>
      </EmailContainer>
    </>
  );
}

export function newsletterHtmlCode(
  tokens: DesignTokens = defaultTheme,
  locale: Locale = "de",
  showPlaceholders: boolean = false,
) {
  return generateMailHtml(
    tokens,
    `Tech Pulse Newsletter - Stay informed (${tokens.colors.primary})`,
    <NewsletterTemplate
      tokens={tokens}
      locale={locale}
      showPlaceholders={showPlaceholders}
    />,
  );
}

export function newsletterViewTemplate({
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
    <NewsletterTemplate
      forceDarkMode={forceDarkMode}
      tokens={tokens}
      locale={locale}
      showPlaceholders={showPlaceholders}
    />,
  );
}
