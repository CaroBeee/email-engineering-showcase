// Token-based Dark Mode CSS for capable clients
export const darkModeStyles = `
  @media (prefers-color-scheme: dark) {
    .email-bg { background-color: #1a1a2e !important; }
    .email-text { color: #e4e4e7 !important; }
    .email-text-muted { color: #a1a1aa !important; }
    .email-card { background-color: #252540 !important; }
    .email-border { border-color: #3f3f5c !important; }
    .email-btn { background-color: #7c3aed !important; }
  }
`;
export const resetStyles = `
  /* Reset styles for email clients */
  body, table, td, p, a, li, blockquote { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; -webkit-font-smoothing: antialiased; }`;

export const hacksEmailStyles = `

  /* iOS blue link fix */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
    
  /*Gmail Hack*/
  u + #body a {
    color: inherit !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}
 /* Samsung Mail Hack */
  #MessageViewBody a {
    color: inherit !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}

a:link,
span.MsoHyperlink {
    mso-style-priority: 100 !important;
    text-decoration: none !important;
}
`;

export const responsiveEmailStyles = ` 
/* Responsive styles */
  @media screen and (max-width: 600px) {
    .email-container { width: 100% !important; max-width: 100% !important; }
    .email-column { display: block !important; width: 100% !important; max-width: 100% !important; }
    .email-teaser-column { display: block !important; width: 100% !important; max-width: 100% !important; padding-left: 0 !important }
    .email-teaser-column--first { display: block !important; width: 100% !important; max-width: 100% !important; padding-bottom: 20px !important; }
    .email-stack { display: block !important; width: 100% !important; }
    .email-center-mobile { text-align: center !important; }
    .email-hide-mobile { display: none !important; }

    .product-grid-layout .email-column { width: 100% !important; max-width: 100% !important; padding-bottom: 15px; }
  }`;
