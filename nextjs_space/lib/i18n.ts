export type Locale = "de" | "en";

export const translations = {
  de: {
    title: "Email Showcase",
    subtitle: "Modernes Email Engineering für Enterprise-Anwendungen",
    nav: {
      home: "Startseite",
      templates: "Templates",
      rendering: "Rendering Matrix",
      accessibility: "Barrierefreiheit",
    },
    templates: {
      newsletter: "Newsletter",
      productGrid: "Produkt-Grid",
      transactional: "Transaktional",
    },
    preview: "Vorschau",
    code: "Code",
    copy: "Kopieren",
    copied: "Kopiert!",
    lightMode: "Hell",
    darkMode: "Dunkel",
    accessibility: {
      title: "Barrierefreiheit",
      contrast: "Kontrast-Prüfung",
      altText: "Alt-Text-Prüfung",
      semantic: "Semantische Struktur",
      passed: "Bestanden",
      failed: "Fehlgeschlagen",
      warning: "Warnung",
    },
    rendering: {
      title: "Rendering Matrix",
      subtitle: "Kompatibilität über alle Email-Clients",
      outlookWindows: "Outlook Windows",
      outlookOnline: "Outlook Online",
      gmail: "Gmail",
      appleMail: "Apple Mail",
      mobileIOS: "iOS Mail",
      mobileAndroid: "Android Gmail",
    },
    features: {
      title: "Features",
      tokenBased: "Token-basiertes Dark Mode",
      bulletproof: "Bulletproof Code",
      responsive: "Responsive Design",
      wcag: "WCAG-konform",
    },
    emailFacts: {
      title: "E-Mail Template Entwicklung: Fakten & Herausforderungen",
      technicalLimitations: {
        title: "Technische Grenzen und Hürden",
        items: [
          "Kein JavaScript – Alle Interaktivität muss über HTML/CSS gelöst werden",
          "CSS-Support stark limitiert – Viele moderne CSS-Features werden nicht unterstützt",
          "Inline-Styles erforderlich – Externe Stylesheets werden oft blockiert",
          "Table-basiertes Layout – Flexbox/Grid funktionieren nicht zuverlässig",
          "Keine Web Fonts garantiert – Fallback-Fonts sind Pflicht",
        ],
      },
      clientProblems: {
        title: "Client-spezifische Probleme",
        items: [
          "Outlook (Windows) nutzt Word-Rendering-Engine – Extrem limitierter CSS-Support",
          "Gmail entfernt <style>-Tags im Body – Nur Inline-Styles funktionieren",
          "Apple Mail hat eigene Quirks – Besonders bei Dark Mode",
          "Mobile Clients skalieren unterschiedlich – Responsive Design ist komplex",
          "Dark Mode Implementierung variiert stark zwischen Clients",
        ],
      },
      whatWorks: {
        title: "Was funktioniert",
        items: [
          "Table-basierte Layouts mit festen Breiten",
          "Inline-Styles für alle visuellen Eigenschaften",
          "Web-sichere Schriftarten (Arial, Georgia, etc.)",
          "Einfache CSS-Eigenschaften (color, background, padding, margin)",
          "Media Queries für Responsive Design (mit Einschränkungen)",
          "Alt-Texte für Bilder (wichtig für Accessibility)",
        ],
      },
      whatDoesntWork: {
        title: "Was nicht funktioniert",
        items: [
          "JavaScript und interaktive Elemente",
          "Flexbox und CSS Grid",
          "Position: absolute/fixed",
          "CSS Animations und Transitions",
          "SVG-Grafiken (außer als <img>)",
          "Video-Embeds (außer als Thumbnail mit Link)",
          "Formulare mit komplexer Validierung",
        ],
      },
      bestPractices: {
        title: "Best Practices",
        items: [
          "Mobile-First Design – Mindestens 320px Breite unterstützen",
          "Preheader-Text nutzen – Erste 50-100 Zeichen sind entscheidend",
          "Alt-Texte für alle Bilder – Accessibility und Spam-Filter",
          "Klare Call-to-Actions – Große, gut sichtbare Buttons",
          "Testen, testen, testen – Litmus, Email on Acid, oder echte Geräte",
          "Fallback-Fonts definieren – Nie nur auf Web Fonts verlassen",
          "Kontrastverhältnisse beachten – WCAG 2.1 AA Standard (4.5:1)",
        ],
      },
      performance: {
        title: "Performance & Deliverability",
        items: [
          "HTML-Größe unter 102KB halten – Gmail clippt größere E-Mails",
          "Bilder optimieren – Komprimierung und richtige Dimensionen",
          "Text-zu-Bild-Verhältnis beachten – Zu viele Bilder = Spam-Verdacht",
          "SPF, DKIM, DMARC konfigurieren – Authentifizierung ist Pflicht",
          "Spam-Trigger vermeiden – Keine ALL CAPS, zu viele Links, etc.",
          "Unsubscribe-Link prominent platzieren – Gesetzliche Pflicht (DSGVO)",
          "Versandfrequenz optimieren – Zu häufig = höhere Abmelderate",
        ],
      },
    },
    outlookFacts: {
      title: "Windows Outlook: Der Albtraum jedes Email-Entwicklers",
      subtitle:
        "Warum Outlook (Windows) die größte Herausforderung im Email-Design ist",
      sections: [
        {
          title: "Die Word-Rendering-Engine",
          items: [
            "Outlook 2007-2019 nutzt Microsoft Word als Rendering-Engine statt eines Browsers",
            "Kein Webkit, kein Gecko, kein Blink – sondern Word-HTML-Rendering",
            "CSS-Support entspricht etwa dem Stand von 1999",
            "Viele grundlegende CSS-Eigenschaften werden ignoriert oder falsch interpretiert",
          ],
        },
        {
          title: "Was NICHT funktioniert",
          items: [
            "background-image auf <td> oder <div> – Wird komplett ignoriert",
            "padding auf <p> – Funktioniert nicht zuverlässig",
            "margin: auto – Zentrieren funktioniert anders",
            "max-width / min-width – Werden ignoriert",
            "CSS Floats – Funktionieren nicht",
            "position: relative/absolute – Wird ignoriert",
            "border-radius – Keine runden Ecken möglich",
            "box-shadow – Keine Schatten möglich",
            "Web Fonts – Nur System-Fonts werden angezeigt",
          ],
        },
        {
          title: "Workarounds & Hacks",
          items: [
            "VML (Vector Markup Language) für Hintergrundbilder in Buttons",
            "Conditional Comments <!--[if mso]> für Outlook-spezifischen Code",
            "mso-* CSS-Properties für Outlook-spezifisches Styling",
            "Nested Tables für komplexe Layouts statt CSS",
            "Spacer-GIFs für präzise Abstände (ja, wirklich!)",
            "border statt border-radius für Button-Rahmen",
          ],
        },
        {
          title: "DPI-Scaling Problem",
          items: [
            "Outlook skaliert Bilder basierend auf DPI-Einstellungen",
            "Bilder können auf High-DPI-Displays zu groß dargestellt werden",
            "Lösung: Explizite width/height-Attribute in <img>-Tags",
            "Zusätzlich: style='width: Xpx; height: Ypx;' als Inline-Style",
          ],
        },
        {
          title: "Table-Layout Besonderheiten",
          items: [
            "cellpadding und cellspacing müssen auf '0' gesetzt werden",
            "border='0' ist Pflicht für saubere Layouts",
            "Verschachtelte Tables sind oft die einzige Lösung",
            "role='presentation' für semantisch korrekte Tables",
            "Feste Breiten in Pixeln statt Prozent für Zuverlässigkeit",
          ],
        },
        {
          title: "Best Practices für Outlook",
          items: [
            "Immer mit Outlook testen – Litmus oder Email on Acid nutzen",
            "Mobile-First vergessen – Outlook ist Desktop-only",
            "Fallback-Lösungen für jeden visuellen Effekt",
            "VML-Buttons für runde Ecken bei CTAs – wichtig für konsistentes Design",
            "Conditional Comments für Outlook-spezifische Fixes",
            "Einfache, robuste Layouts bevorzugen",
          ],
        },
      ],
    },
  },
  en: {
    title: "Email Showcase",
    subtitle: "Modern Email Engineering for Enterprise Applications",
    nav: {
      home: "Home",
      templates: "Templates",
      rendering: "Rendering Matrix",
      accessibility: "Accessibility",
    },
    templates: {
      newsletter: "Newsletter",
      productGrid: "Product Grid",
      transactional: "Transactional",
    },
    preview: "Preview",
    code: "Code",
    copy: "Copy",
    copied: "Copied!",
    lightMode: "Light",
    darkMode: "Dark",
    accessibility: {
      title: "Accessibility",
      contrast: "Contrast Check",
      altText: "Alt Text Check",
      semantic: "Semantic Structure",
      passed: "Passed",
      failed: "Failed",
      warning: "Warning",
    },
    rendering: {
      title: "Rendering Matrix",
      subtitle: "Compatibility across all email clients",
      outlookWindows: "Outlook Windows",
      outlookOnline: "Outlook Online",
      gmail: "Gmail",
      appleMail: "Apple Mail",
      mobileIOS: "iOS Mail",
      mobileAndroid: "Android Gmail",
    },
    features: {
      title: "Features",
      tokenBased: "Token-based Dark Mode",
      bulletproof: "Bulletproof Code",
      responsive: "Responsive Design",
      wcag: "WCAG Compliant",
    },
    emailFacts: {
      title: "Email Template Development: Facts & Challenges",
      technicalLimitations: {
        title: "Technical Limitations and Hurdles",
        items: [
          "No JavaScript – All interactivity must be solved via HTML/CSS",
          "CSS support heavily limited – Many modern CSS features are not supported",
          "Inline styles required – External stylesheets are often blocked",
          "Table-based layout – Flexbox/Grid don't work reliably",
          "No guaranteed web fonts – Fallback fonts are mandatory",
        ],
      },
      clientProblems: {
        title: "Client-Specific Problems",
        items: [
          "Outlook (Windows) uses Word rendering engine – Extremely limited CSS support",
          "Gmail removes <style> tags in body – Only inline styles work",
          "Apple Mail has its own quirks – Especially with Dark Mode",
          "Mobile clients scale differently – Responsive design is complex",
          "Dark Mode implementation varies greatly between clients",
        ],
      },
      whatWorks: {
        title: "What Works",
        items: [
          "Table-based layouts with fixed widths",
          "Inline styles for all visual properties",
          "Web-safe fonts (Arial, Georgia, etc.)",
          "Simple CSS properties (color, background, padding, margin)",
          "Media queries for responsive design (with limitations)",
          "Alt texts for images (important for accessibility)",
        ],
      },
      whatDoesntWork: {
        title: "What Doesn't Work",
        items: [
          "JavaScript and interactive elements",
          "Flexbox and CSS Grid",
          "Position: absolute/fixed",
          "CSS Animations and Transitions",
          "SVG graphics (except as <img>)",
          "Video embeds (except as thumbnail with link)",
          "Forms with complex validation",
        ],
      },
      bestPractices: {
        title: "Best Practices",
        items: [
          "Mobile-first design – Support at least 320px width",
          "Use preheader text – First 50-100 characters are crucial",
          "Alt texts for all images – Accessibility and spam filters",
          "Clear call-to-actions – Large, highly visible buttons",
          "Test, test, test – Litmus, Email on Acid, or real devices",
          "Define fallback fonts – Never rely solely on web fonts",
          "Mind contrast ratios – WCAG 2.1 AA standard (4.5:1)",
        ],
      },
      performance: {
        title: "Performance & Deliverability",
        items: [
          "Keep HTML size under 102KB – Gmail clips larger emails",
          "Optimize images – Compression and proper dimensions",
          "Mind text-to-image ratio – Too many images = spam suspicion",
          "Configure SPF, DKIM, DMARC – Authentication is mandatory",
          "Avoid spam triggers – No ALL CAPS, too many links, etc.",
          "Place unsubscribe link prominently – Legal requirement (GDPR)",
          "Optimize sending frequency – Too frequent = higher unsubscribe rate",
        ],
      },
    },
    outlookFacts: {
      title: "Windows Outlook: Every Email Developer's Nightmare",
      subtitle:
        "Why Outlook (Windows) is the biggest challenge in email design",
      sections: [
        {
          title: "The Word Rendering Engine",
          items: [
            "Outlook 2007-2019 uses Microsoft Word as rendering engine instead of a browser",
            "No Webkit, no Gecko, no Blink – but Word HTML rendering",
            "CSS support is roughly equivalent to 1999 standards",
            "Many basic CSS properties are ignored or misinterpreted",
          ],
        },
        {
          title: "What DOESN'T Work",
          items: [
            "background-image on <td> or <div> – Completely ignored",
            "padding on <p> – Doesn't work reliably",
            "margin: auto – Centering works differently",
            "max-width / min-width – Are ignored",
            "CSS Floats – Don't work",
            "position: relative/absolute – Is ignored",
            "border-radius – No rounded corners possible",
            "box-shadow – No shadows possible",
            "Web Fonts – Only system fonts are displayed",
          ],
        },
        {
          title: "Workarounds & Hacks",
          items: [
            "VML (Vector Markup Language) for background images in buttons",
            "Conditional Comments <!--[if mso]> for Outlook-specific code",
            "mso-* CSS properties for Outlook-specific styling",
            "Nested tables for complex layouts instead of CSS",
            "Spacer GIFs for precise spacing (yes, really!)",
            "border instead of border-radius for button borders",
          ],
        },
        {
          title: "DPI Scaling Problem",
          items: [
            "Outlook scales images based on DPI settings",
            "Images can be displayed too large on high-DPI displays",
            "Solution: Explicit width/height attributes in <img> tags",
            "Additionally: style='width: Xpx; height: Ypx;' as inline style",
          ],
        },
        {
          title: "Table Layout Specifics",
          items: [
            "cellpadding and cellspacing must be set to '0'",
            "border='0' is mandatory for clean layouts",
            "Nested tables are often the only solution",
            "role='presentation' for semantically correct tables",
            "Fixed widths in pixels instead of percent for reliability",
          ],
        },
        {
          title: "Best Practices for Outlook",
          items: [
            "Always test with Outlook – Use Litmus or Email on Acid",
            "Forget mobile-first – Outlook is desktop-only",
            "Fallback solutions for every visual effect",
            "VML buttons for rounded border for CTAs - important for consistent design",
            "Conditional comments for Outlook-specific fixes",
            "Prefer simple, robust layouts",
          ],
        },
      ],
    },
  },
} as const;

export function getTranslation(locale: Locale) {
  return translations[locale] ?? translations.en;
}

export const mailTranslations = {
  de: {
    newsletter: {
      preheader:
        "KI-Revolution, neue Frameworks und Cloud-Trends – Ihre Tech-News der Woche",
      header: {
        title: "📨 TechPulse Weekly",
        subtitle: "Ihre wöchentliche Dosis Tech-News",
      },
      mainArticle: {
        title: "Diese Woche: KI-Revolution im Alltag",
        content:
          "Künstliche Intelligenz verändert unseren Arbeitsalltag grundlegend. Von automatisierten Workflows bis hin zu intelligenten Assistenten – wir zeigen Ihnen die wichtigsten Entwicklungen und wie Sie davon profitieren können.",
        button: "Artikel lesen →",
        imageAlt: "Team arbeitet an Laptops in modernem Büro",
      },
      article1: {
        title: "Cloud-Native Development: Die Zukunft ist jetzt",
        content:
          "Microservices, Container und Kubernetes revolutionieren die Art, wie wir Software entwickeln und deployen. Erfahren Sie, wie Sie Ihre Infrastruktur modernisieren und von Skalierbarkeit und Flexibilität profitieren.",
        button: "Mehr erfahren →",
        imageAlt: "Entwickler arbeiten an Cloud-Infrastruktur",
      },
      article2: {
        title: "Cybersecurity 2026: Neue Bedrohungen, neue Lösungen",
        content:
          "Die Bedrohungslandschaft entwickelt sich rasant weiter. Von Zero-Trust-Architekturen bis zu KI-gestützter Threat Detection – wir zeigen Ihnen, wie Sie Ihr Unternehmen schützen und Compliance-Anforderungen erfüllen.",
        button: "Sicherheit erhöhen →",
        imageAlt: "Cybersecurity Dashboard mit Analysen",
      },
      highlights: {
        title: "Weitere Highlights",
        article3: {
          title: "🚀 Neues Framework verändert Web-Entwicklung",
          subtitle: "Die Open-Source-Community feiert das neue Release",
        },
        article4: {
          title: "🔒 Sicherheits-Update: Was Sie wissen müssen",
          subtitle: "Kritische Schwachstellen wurden behoben",
        },
        article5: {
          title: "📊 Marktanalyse: Cloud-Trends 2026",
          subtitle: "Wo investieren Unternehmen?",
        },
        article6: {
          title: "💡 DevOps Best Practices für 2026",
          subtitle: "Automatisierung und Continuous Delivery im Fokus",
        },
        button: "Mehr entdecken →",
      },
      footer: {
        disclaimer:
          "Sie erhalten diese E-Mail, weil Sie sich für den TechPulse Newsletter angemeldet haben.",
        unsubscribe: "Abmelden",
        settings: "Einstellungen",
      },
    },
    productGrid: {
      preheader:
        "KI-Revolution, neue Frameworks und Cloud-Trends – Ihre Tech-News der Woche",
      header: {
        title: "🛍️ Neue Produkte",
        subtitle: "Entdecken Sie unsere neuesten Highlights",
      },
      intro:
        "Entdecken Sie unsere exklusive Kollektion an Tech-Gadgets. Von innovativen Wearables bis hin zu praktischem Zubehör – wir haben alles, was Ihr digitales Leben bereichert. Profitieren Sie jetzt von unseren Einführungsangeboten und sichern Sie sich die neueste Technologie zu attraktiven Preisen.",
      headline: "Unsere Top-Empfehlungen für Sie",
      products: {
        speakers: "Premium Wireless Lautsprecher",
        headphones: "Premium Headphones",
        smartwatch: "Smart Watch Pro",
        earbuds: "Wireless Earbuds",
        laptopStand: "Laptop Stand",
      },
      buttons: {
        buyNow: "Jetzt kaufen",
      },
      badges: {
        sale: "Sale",
        new: "Neu",
        limited: "Limitiert",
        bestseller: "Bestseller",
      },
      cta: {
        shipping: "Kostenloser Versand ab €50 · 30 Tage Rückgaberecht",
        button: "Alle Produkte entdecken →",
      },
      footer: {
        copyright: "© 2026",
        imprint: "Impressum",
        unsubscribe: "Abmelden",
      },
    },
    transactional: {
      preheader:
        "KI-Revolution, neue Frameworks und Cloud-Trends – Ihre Tech-News der Woche",
      header: {
        title: "✓ Zahlung erfolgreich",
      },
      content: {
        thankYou:
          "Vielen Dank für Ihre Bestellung! Ihre Zahlung wurde erfolgreich verarbeitet. Hier sind die Details Ihrer Transaktion:",
      },
      details: {
        orderNumber: "Bestellnummer",
        date: "Datum",
        paymentMethod: "Zahlungsmethode",
        totalAmount: "Gesamtbetrag",
      },
      orderItems: {
        title: "Bestellte Artikel",
        headphones: "Premium Wireless Headphones",
        cable: "USB-C Ladekabel (2m)",
        subtotal: "Zwischensumme",
        shipping: "Versand",
        total: "Gesamt (inkl. MwSt.)",
      },
      cta: {
        message: "Sie können den Status Ihrer Bestellung jederzeit einsehen:",
        button: "Bestellung verfolgen →",
      },
      security: {
        title: "Sicherheitshinweis:",
        message:
          "Wir werden Sie niemals nach Ihren vollständigen Kartendaten fragen. Ignorieren Sie verdächtige E-Mails.",
      },
      footer: {
        support: "Bei Fragen kontaktieren Sie uns unter",
        copyright: "© 2026",
        rights: "· Alle Rechte vorbehalten",
      },
    },
  },
  en: {
    newsletter: {
      preheader:
        "AI Revolution, new frameworks and cloud trends – Your tech news of the week",
      header: {
        title: "📨 TechPulse Weekly",
        subtitle: "Your weekly dose of tech news",
      },
      mainArticle: {
        title: "This Week: AI Revolution in Everyday Life",
        content:
          "Artificial intelligence is fundamentally changing our work routine. From automated workflows to intelligent assistants – we show you the most important developments and how you can benefit from them.",
        button: "Read article →",
        imageAlt: "Team working on laptops in modern office",
      },
      article1: {
        title: "Cloud-Native Development: The Future is Now",
        content:
          "Microservices, containers, and Kubernetes are revolutionizing how we develop and deploy software. Learn how to modernize your infrastructure and benefit from scalability and flexibility.",
        button: "Learn more →",
        imageAlt: "Developers working on cloud infrastructure",
      },
      article2: {
        title: "Cybersecurity 2026: New Threats, New Solutions",
        content:
          "The threat landscape is evolving rapidly. From zero-trust architectures to AI-powered threat detection – we show you how to protect your business and meet compliance requirements.",
        button: "Enhance security →",
        imageAlt: "Cybersecurity dashboard with analytics",
      },
      highlights: {
        title: "More Highlights",
        article3: {
          title: "🚀 New Framework Changes Web Development",
          subtitle: "The open-source community celebrates the new release",
        },
        article4: {
          title: "🔒 Security Update: What You Need to Know",
          subtitle: "Critical vulnerabilities have been fixed",
        },
        article5: {
          title: "📊 Market Analysis: Cloud Trends 2026",
          subtitle: "Where are companies investing?",
        },
        article6: {
          title: "💡 DevOps Best Practices for 2026",
          subtitle: "Focus on automation and continuous delivery",
        },
        button: "Read more →",
      },
      footer: {
        disclaimer:
          "You are receiving this email because you signed up for the TechPulse Newsletter.",
        unsubscribe: "Unsubscribe",
        settings: "Settings",
      },
    },
    productGrid: {
      preheader:
        "AI Revolution, new frameworks and cloud trends – Your tech news of the week",
      header: {
        title: "🛍️New Products",
        subtitle: "Discover our latest highlights",
      },
      intro:
        "Discover our exclusive collection of tech gadgets. From innovative wearables to practical accessories – we have everything to enrich your digital life. Take advantage of our introductory offers now and secure the latest technology at attractive prices.",
      headline: "Our Top Picks for You",
      products: {
        speakers: "Premium Wireless Speakers",
        headphones: "Premium Headphones",
        smartwatch: "Smart Watch Pro",
        earbuds: "Wireless Earbuds",
        laptopStand: "Laptop Stand",
      },
      buttons: {
        buyNow: "Buy Now →",
      },
      badges: {
        sale: "Sale",
        new: "New",
        limited: "Limited",
        bestseller: "Bestseller",
      },
      cta: {
        shipping: "Free shipping over €50 · 30 days return policy",
        button: "Discover all products →",
      },
      footer: {
        copyright: "© 2026",
        imprint: "Imprint",
        unsubscribe: "Unsubscribe",
      },
    },
    transactional: {
      preheader:
        "AI Revolution, new frameworks and cloud trends – Your tech news of the week",
      header: {
        title: "✓ Payment Successful",
      },
      content: {
        thankYou:
          "Thank you for your order! Your payment has been successfully processed. Here are the details of your transaction:",
      },
      details: {
        orderNumber: "Order Number",
        date: "Date",
        paymentMethod: "Payment Method",
        totalAmount: "Total Amount",
      },
      orderItems: {
        title: "Ordered Items",
        headphones: "Premium Wireless Headphones",
        cable: "USB-C Charging Cable (2m)",
        subtotal: "Subtotal",
        shipping: "Shipping",
        total: "Total (incl. VAT)",
      },
      cta: {
        message: "You can check the status of your order at any time:",
        button: "Track order →",
      },
      security: {
        title: "Security Notice:",
        message:
          "We will never ask for your complete card details. Ignore suspicious emails.",
      },
      footer: {
        support: "For questions, contact us at",
        copyright: "© 2026",
        rights: "· All rights reserved",
      },
    },
  },
} as const;

export function getMailTranslation(locale: Locale) {
  return mailTranslations[locale] ?? mailTranslations.en;
}