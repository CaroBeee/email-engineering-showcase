"use client";

import React, { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import prettier from "prettier";
import * as prettierPluginHtml from "prettier/parser-html";
import {
  hacksEmailStyles,
  resetStyles,
  responsiveEmailStyles,
} from "@/lib/email-styles";
import { DesignTokens, defaultTheme } from "@/lib/design-tokens";

interface MailTemplateProps {
  tokens?: DesignTokens;
  title?: string;
  forceDarkMode?: boolean;
  children?: React.ReactNode; // Add children prop to accept dynamic content
}

const prettierOptionsHTML: prettier.Options = {
  parser: "html" as const,
  tabWidth: 2,
  printWidth: 65,
  htmlWhitespaceSensitivity: "ignore" as const,
  singleAttributePerLine: false,
  proseWrap: "preserve" as const,
  plugins: [prettierPluginHtml],
  bracketSameLine: true,
  semi: true,
  singleQuote: false,
  useTabs: false,
  embeddedLanguageFormatting: "off" as const,
};

export function MailTemplate({ children }: MailTemplateProps) {
  return <>{children}</>;
}

export function MailTemplateView({
  forceDarkMode,
  tokens,
  children,
}: MailTemplateProps) {
  const darkModeOverride = `
   
      /* Force Dark Mode */
  
      .email-card { background-color: #252540 !important; }
      .email-border { border-color: #3f3f5c !important; }

      .email-bg { background-color: ${tokens?.darkMode.background} !important; }
      .email-text { color: ${tokens?.darkMode.text} !important; }
      .email-text-muted { color: ${tokens?.darkMode.textMuted} !important; }
      .email-surface { background-color: ${tokens?.darkMode.surface} !important; }
    }

      body { background-color: #1a1a2e !important; }
      table[role="presentation"] { background-color: #1a1a2e !important; }
   
  `;
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: forceDarkMode === true ? darkModeOverride : "",
        }}
      />
      {/* <MailTemplate children={children} /> */}
      <MailTemplate tokens={tokens}>{children}</MailTemplate>
    </>
  );
}

export function generateViewMail(
  tokens: DesignTokens = defaultTheme,
  forceDarkMode: boolean,
  component: React.ReactElement,
) {
  const darkModeOverride = `
   
      /* Force Dark Mode */
  
      .email-card { background-color: #252540 !important; }
      .email-border { border-color: #3f3f5c !important; }

      .email-bg { background-color: ${tokens?.darkMode.background} !important; }
      .email-text { color: ${tokens?.darkMode.text} !important; }
      .email-text-muted { color: ${tokens?.darkMode.textMuted} !important; }
      .email-surface { background-color: ${tokens?.darkMode.surface} !important; }
    }

      body { background-color: #1a1a2e !important; }
      table[role="presentation"] { background-color: #1a1a2e !important; }
   
  `;
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: forceDarkMode === true ? darkModeOverride : "",
        }}
      />
      {/* <MailTemplate>{component}</MailTemplate> */}
      <MailTemplateView tokens={tokens}>{component}</MailTemplateView>
      {/* <MailTemplate children={component} />
      <MailTemplateView children={component} /> */}
    </>
  );
}

// Updated function to dynamically generate HTML using renderToStaticMarkup
export async function generateMailHtml(
  tokens: DesignTokens = defaultTheme,
  title: string,
  component: React.ReactElement,
): Promise<string> {
  // Wrap the component with MailTemplate
  const wrappedElement: ReactElement = (
    <MailTemplate forceDarkMode={false} tokens={tokens} title={title}>
      {component}
    </MailTemplate>
  );

  // Render just the newsletter component
  const innerHtml = renderToStaticMarkup(wrappedElement as React.ReactElement);

  // Wrap with full HTML document structure
  const fullHtml = `<!DOCTYPE html>
<html lang="de" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="light dark"/>
  <meta name="supported-color-schemes" content="light dark"/>

  <meta name="format-detection" content="telephone=no" />
  <meta name="format-detection" content="date=no" />
  <meta name="format-detection" content="address=no" />
  <meta name="format-detection" content="email=no" />

  <title>${title}</title>
  <!--[if mso]>
  <style>
    table {
        border-collapse: collapse;
        border-spacing: 0;
        border: none;
        margin: 0;
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
    }
    div,
    td {
        padding: 0;
    }
    div {
        margin: 0 !important;
    }
  </style>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    ${resetStyles}
    /* Design Tokens: ${tokens.brand.name} */
    :root {
      --primary: ${tokens.colors.primary};
      --text: ${tokens.colors.text};
      --text-muted: ${tokens.colors.textMuted};
      --bg: ${tokens.colors.background};
      --surface: ${tokens.colors.surface};
      --border: ${tokens.colors.border};
    }
    
    /* Dark Mode Token-based */
    @media (prefers-color-scheme: dark) {
      .email-bg { background-color: ${tokens.darkMode.background} !important; }
      .email-text { color: ${tokens.darkMode.text} !important; }
      .email-text-muted { color: ${tokens.darkMode.textMuted} !important; }
      .email-surface { background-color: ${tokens.darkMode.surface} !important; }
    }
    ${hacksEmailStyles}
    
   ${responsiveEmailStyles}
  </style>
 
</head>
<body style="width: 100% !important; margin: 0; padding: 0; word-spacing: normal; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #fafafa; font-family: ${tokens.typography.fontFamily};">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fafafa;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!--[if mso]><table role="presentation" cellpadding="0" cellspacing="0" width="680"><tr><td><![endif]-->
        ${innerHtml}
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>`;

  return prettier.format(fullHtml, prettierOptionsHTML);
}

// Legacy export for backwards compatibility
export const mailHtmlCode = generateMailHtml(
  defaultTheme,
  "title",
  <div>No component provided</div>,
);
