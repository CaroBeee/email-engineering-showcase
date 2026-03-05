export type JourneyStepStatus = "problem" | "solution" | "result" | "insight";

export interface JourneyStep {
  phase: number;
  status: JourneyStepStatus;
  title: { de: string; en: string };
  description: { de: string; en: string };
  screenshot?: string;
  screenshotCaption?: { de: string; en: string };
  screenshotLabel?: { de: string; en: string };
  codeSnippet?: string;
  codeLanguage?: string;
  tags?: string[];
  facts?: { de: string; en: string }[];
}

export interface JourneyData {
  templateId: string;
  templateName: { de: string; en: string };
  templateDescription: { de: string; en: string };
  complexity: "low" | "medium" | "high";
  icon: string;
  accentColor: string;
  steps: JourneyStep[];
  keyLearnings: { de: string; en: string }[];
  relevantEmailFacts: string[];
  relevantOutlookSections: number[];
}

export const journeyData: Record<string, JourneyData> = {
  newsletter: {
    templateId: "newsletter",
    templateName: { de: "Newsletter", en: "Newsletter" },
    templateDescription: {
      de: "Klassischer Newsletter mit Hero-Image, 2-Spalten Artikelraster und Dark Mode – der komplexeste Template-Typ mit den meisten Cross-Client-Hürden.",
      en: "Classic newsletter with hero image, 2-column article grid and dark mode – the most complex template type with the most cross-client hurdles.",
    },
    complexity: "high",
    icon: "📨",
    accentColor: "teal",
    steps: [
      {
        phase: 1,
        status: "insight",
        title: {
          de: "Phase 1 – Design Konzept & erster Entwurf",
          en: "Phase 1 – Design Concept & First Draft",
        },
        description: {
          de: "Der erste Entwurf nutzte modernes CSS: Flexbox für das 2-Spalten-Artikelraster, CSS Grid für den Hero-Bereich und background-image für den Header. Alles sauber in einer externen CSS-Datei – so wie man es aus der Web-Entwicklung kennt. Das Ergebnis im Browser war vielversprechend.",
          en: "The first draft used modern CSS: Flexbox for the 2-column article grid, CSS Grid for the hero area and background-image for the header. Everything clean in an external CSS file – just as you know it from web development. The result in the browser was promising.",
        },
        codeSnippet: `/* ❌ Erster Entwurf – funktioniert NUR im Browser */
.article-grid {
  display: flex;
  gap: 24px;
}
.article-card {
  flex: 1;
  background-image: url('hero.jpg');
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.cta-button {
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
}`,
        codeLanguage: "css",
        tags: ["Flexbox", "CSS Grid", "background-image", "border-radius"],
      },
      {
        phase: 2,
        status: "problem",
        title: {
          de: "Phase 2 – Testi.at Test: Outlook 2019 zeigt Chaos",
          en: "Phase 2 – Testi.at Test: Outlook 2019 Shows Chaos",
        },
        description: {
          de: "Der erste Test in Testi.at war ernüchternd. Outlook 2019 (Word-Rendering-Engine) zerschoss das komplette Layout. Das 2-Spalten-Grid kollabierte zu einer einzigen Spalte, alle Abstände waren weg, border-radius funktionierte nicht, Hintergrundbilder verschwanden komplett und die Buttons wurden zu simplen Links ohne Styling. Klassisches MSO-Rendering-Desaster.",
          en: "The first test in Testi.at was sobering. Outlook 2019 (Word rendering engine) completely destroyed the layout. The 2-column grid collapsed to a single column, all spacing was gone, border-radius didn't work, background images disappeared completely and the buttons became simple links without styling. Classic MSO rendering disaster.",
        },
        screenshot: "/nl-testi_MSO.jpeg",
        screenshotCaption: {
          de: "Testi.at Screenshot – Outlook 2019 (MSO-Rendering): Das Flexbox-Grid ist kollabiert, Abstände fehlen, Bilder verschwunden, Buttons ohne Styling.",
          en: "Testi.at Screenshot – Outlook 2019 (MSO rendering): The Flexbox grid has collapsed, spacing is missing, images disappeared, buttons without styling.",
        },
        screenshotLabel: {
          de: "❌ Outlook 2019 – Erster Versuch",
          en: "❌ Outlook 2019 – First Attempt",
        },
        tags: ["Outlook 2019", "MSO", "Word-Engine", "Layout-Kollaps"],
        facts: [
          {
            de: "Outlook 2007–2019 nutzt Microsoft Word als Rendering-Engine – kein Webkit, kein Gecko.",
            en: "Outlook 2007–2019 uses Microsoft Word as rendering engine – no Webkit, no Gecko.",
          },
          {
            de: "background-image auf <td> oder <div> wird von MSO vollständig ignoriert.",
            en: "background-image on <td> or <div> is completely ignored by MSO.",
          },
          {
            de: "Flexbox und CSS Grid haben in Outlook keinerlei Wirkung.",
            en: "Flexbox and CSS Grid have no effect whatsoever in Outlook.",
          },
        ],
      },
      {
        phase: 3,
        status: "solution",
        title: {
          de: "Phase 3 – Migration auf Table-basiertes Layout",
          en: "Phase 3 – Migration to Table-Based Layout",
        },
        description: {
          de: "Die Lösung: Vollständige Umstellung auf verschachtelte HTML-Tables mit expliziten width/height-Attributen, cellpadding='0', cellspacing='0' und border='0'. Das 2-Spalten-Raster wurde als <tr> mit zwei <td>-Elementen umgesetzt. Alle Inline-Styles direkt am Element, kein externes Stylesheet.",
          en: "The solution: Complete migration to nested HTML tables with explicit width/height attributes, cellpadding='0', cellspacing='0' and border='0'. The 2-column grid was implemented as <tr> with two <td> elements. All inline styles directly on the element, no external stylesheet.",
        },
        codeSnippet: `<!-- ✅ Table-basiertes 2-Spalten-Layout für Outlook -->
<table role="presentation" width="680" cellpadding="0"
       cellspacing="0" border="0" align="center">
  <tr>
    <td width="320" valign="top"
        style="padding: 0 12px 0 0;">
      <!-- Artikel 1 -->
    </td>
    <td width="320" valign="top"
        style="padding: 0 0 0 12px;">
      <!-- Artikel 2 -->
    </td>
  </tr>
</table>`,
        codeLanguage: "html",
        tags: ["Tables", "Inline Styles", "cellpadding=0", "role=presentation"],
      },
      {
        phase: 4,
        status: "problem",
        title: {
          de: "Phase 4 – CTA-Buttons: border-radius fehlt in Outlook",
          en: "Phase 4 – CTA Buttons: border-radius Missing in Outlook",
        },
        description: {
          de: "Nach der Table-Migration sahen die Buttons in Outlook immer noch schlecht aus – eckig und ohne Styling. border-radius wird von MSO komplett ignoriert. Die Lösung: VML (Vector Markup Language) – eine XML-basierte Markup-Sprache aus den 90ern, die Outlook als einziger Client noch versteht. Mit Conditional Comments wird VML-Code nur für Outlook-Clients gerendert.",
          en: "After the table migration, the buttons still looked bad in Outlook – boxy and without styling. border-radius is completely ignored by MSO. The solution: VML (Vector Markup Language) – an XML-based markup language from the 90s that only Outlook still understands. With Conditional Comments, VML code is only rendered for Outlook clients.",
        },
        codeSnippet: `<!-- ✅ VML-Button für Outlook (bulletproof button) -->
<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
  href="https://example.com"
  style="height:44px;v-text-anchor:middle;width:200px;"
  arcsize="10%" strokecolor="#0d9488" fillcolor="#0d9488">
  <w:anchorlock/>
  <center style="color:#ffffff;font-family:Arial,sans-serif;
    font-size:14px;font-weight:bold;">
    Artikel lesen →
  </center>
</v:roundrect>
<![endif]-->
<!-- Fallback für andere Clients -->
<!--[if !mso]><!-->
<a href="https://example.com"
   style="background-color:#0d9488;border-radius:6px;
   color:#ffffff;display:inline-block;padding:12px 24px;">
  Artikel lesen →
</a>
<!--<![endif]-->`,
        codeLanguage: "html",
        tags: ["VML", "Conditional Comments", "bulletproof button", "mso"],
      },
      {
        phase: 5,
        status: "solution",
        title: {
          de: "Phase 5 – Dark Mode: prefers-color-scheme + [data-ogsc]",
          en: "Phase 5 – Dark Mode: prefers-color-scheme + [data-ogsc]",
        },
        description: {
          de: "Dark Mode in E-Mails ist komplex, da verschiedene Clients unterschiedliche Implementierungen haben. Apple Mail und iOS Mail nutzen prefers-color-scheme Media Queries. Outlook.com (OWA) nutzt den [data-ogsc]-Selektor. Gmail auf Android invertiert teilweise automatisch. Die Lösung: Mehrschichtige CSS-Strategie mit forced color schemes und spezifischen Overrides per Client.",
          en: "Dark mode in emails is complex as different clients have different implementations. Apple Mail and iOS Mail use prefers-color-scheme media queries. Outlook.com (OWA) uses the [data-ogsc] selector. Gmail on Android partially auto-inverts. The solution: Multi-layered CSS strategy with forced color schemes and client-specific overrides.",
        },
        codeSnippet: `/* ✅ Dark Mode – Multi-Client-Strategie */
@media (prefers-color-scheme: dark) {
  .email-body { background-color: #1e1e2e !important; }
  .email-text { color: #cdd6f4 !important; }
  .email-card { background-color: #181825 !important; }
}

/* Outlook.com Dark Mode Override */
[data-ogsc] .email-body {
  background-color: #1e1e2e !important;
}
[data-ogsc] .email-text {
  color: #cdd6f4 !important;
}`,
        codeLanguage: "css",
        tags: ["Dark Mode", "prefers-color-scheme", "data-ogsc", "Apple Mail"],
      },
      {
        phase: 6,
        status: "problem",
        title: {
          de: "Phase 6 – New Outlook (Chromium): Fast perfekt, aber …",
          en: "Phase 6 – New Outlook (Chromium): Almost Perfect, but …",
        },
        description: {
          de: "Das neue Outlook (2019+ mit Chromium-Engine) rendert viel besser als die alten Versionen. Der Test in Testi.at zeigt ein deutlich besseres Ergebnis. Dennoch gab es Feinheiten: Bestimmte Schriftgrößen wurden skaliert, und der <style>-Block im <head> wurde teilweise ignoriert. Lösung: kritische Styles als Inline-Style duplizieren.",
          en: "The new Outlook (2019+ with Chromium engine) renders much better than the old versions. The test in Testi.at shows a significantly better result. However, there were nuances: Certain font sizes were scaled, and the <style> block in <head> was partially ignored. Solution: Duplicate critical styles as inline style.",
        },
        screenshot: "/nl-testi_MSOChrome.jpeg",
        screenshotCaption: {
          de: "Testi.at Screenshot – New Outlook (Chromium-Engine): Layout korrekt, Buttons funktionieren, Dark Mode aktiv. Deutliche Verbesserung gegenüber MSO-Rendering.",
          en: "Testi.at Screenshot – New Outlook (Chromium engine): Layout correct, buttons work, dark mode active. Significant improvement over MSO rendering.",
        },
        screenshotLabel: {
          de: "✅ New Outlook (Chromium) – nach allen Fixes",
          en: "✅ New Outlook (Chromium) – after all fixes",
        },
        tags: ["New Outlook", "Chromium", "Chromium-Engine", "Style-Konflikte"],
        facts: [
          {
            de: "Das neue Outlook ab 2021 verwendet eine Chromium-Engine – deutlich besser, aber immer noch nicht 100% Standard.",
            en: "The new Outlook from 2021 uses a Chromium engine – significantly better, but still not 100% standard.",
          },
          {
            de: "<style>-Tags im <head> werden von einigen Clients (Gmail) vollständig entfernt.",
            en: "<style> tags in <head> are completely removed by some clients (Gmail).",
          },
        ],
      },
      {
        phase: 7,
        status: "result",
        title: {
          de: "Phase 7 – Bulletproof Newsletter",
          en: "Phase 7 – Bulletproof Newsletter",
        },
        description: {
          de: "Das finale Template besteht den Test in allen wichtigen Clients: Outlook 2016/2019, New Outlook, Gmail (Web & App), Apple Mail, iOS Mail und Android Gmail. Table-basiertes Layout, VML-Buttons, Inline-Styles, Dark Mode Overrides und ein sauberer Preheader-Text. Der vollständige Entwicklungsprozess dauerte mehrere Iterationszyklen mit Testi.at-Tests nach jeder größeren Änderung.",
          en: "The final template passes the test in all major clients: Outlook 2016/2019, New Outlook, Gmail (Web & App), Apple Mail, iOS Mail and Android Gmail. Table-based layout, VML buttons, inline styles, dark mode overrides and a clean preheader text. The complete development process took several iteration cycles with Testi.at tests after each major change.",
        },
        tags: ["Bulletproof", "Cross-Client", "Production-Ready", "WCAG 2.1"],
        facts: [
          {
            de: "HTML-Größe final: ~68KB – unter dem Gmail 102KB Clip-Limit.",
            en: "Final HTML size: ~68KB – below the Gmail 102KB clip limit.",
          },
          {
            de: "Alle Bilder haben Alt-Texte, Kontrastverhältnisse erfüllen WCAG 2.1 AA (4.5:1).",
            en: "All images have alt texts, contrast ratios meet WCAG 2.1 AA (4.5:1).",
          },
          {
            de: "Preheader-Text optimiert für 50–100 Zeichen Vorschau in Inbox-Listen.",
            en: "Preheader text optimized for 50–100 character preview in inbox lists.",
          },
        ],
      },
    ],
    keyLearnings: [
      {
        de: "Niemals Flexbox oder CSS Grid in E-Mails – immer Tables für Layout-Struktur verwenden.",
        en: "Never Flexbox or CSS Grid in emails – always use tables for layout structure.",
      },
      {
        de: "VML-Buttons sind der einzige Weg für stilisierte CTAs mit border-radius in MSO.",
        en: "VML buttons are the only way for styled CTAs with border-radius in MSO.",
      },
      {
        de: "Dark Mode braucht mindestens zwei Implementierungsebenen: prefers-color-scheme + [data-ogsc].",
        en: "Dark mode needs at least two implementation layers: prefers-color-scheme + [data-ogsc].",
      },
      {
        de: "Testi.at nach jeder größeren Änderung testen – Bugs frühzeitig erkennen spart viel Zeit.",
        en: "Test with Testi.at after every major change – catching bugs early saves a lot of time.",
      },
      {
        de: "Alle kritischen Styles immer als Inline-Style duplizieren – Gmail entfernt <style>-Tags.",
        en: "Always duplicate all critical styles as inline style – Gmail removes <style> tags.",
      },
    ],
    relevantEmailFacts: [
      "technicalLimitations",
      "clientProblems",
      "whatWorks",
      "bestPractices",
    ],
    relevantOutlookSections: [0, 1, 2, 3],
  },

  "product-grid": {
    templateId: "product-grid",
    templateName: { de: "Produkt-Grid", en: "Product Grid" },
    templateDescription: {
      de: "2-Spalten Produktpräsentation mit Badges, Preisen und CTAs – das größte Layout-Herausforderung: Produkt-Karten mit Bild-Overlays, die in Outlook schlicht nicht existieren.",
      en: "2-column product showcase with badges, prices and CTAs – the biggest layout challenge: product cards with image overlays that simply don't exist in Outlook.",
    },
    complexity: "high",
    icon: "🛍️",
    accentColor: "violet",
    steps: [
      {
        phase: 1,
        status: "insight",
        title: {
          de: "Phase 1 – Konzept: 2-Spalten-Produktkarten mit Badge-Overlays",
          en: "Phase 1 – Concept: 2-Column Product Cards with Badge Overlays",
        },
        description: {
          de: "Das Design sah moderne Produktkarten mit Bild-Overlays für Sale- und New-Badges vor. In CSS: position: relative auf dem Card-Container und position: absolute für die Badges. Ein klassisches Pattern aus der Web-Entwicklung – und in E-Mails vollständig unmöglich.",
          en: "The design featured modern product cards with image overlays for Sale and New badges. In CSS: position: relative on the card container and position: absolute for the badges. A classic pattern from web development – and completely impossible in emails.",
        },
        codeSnippet: `/* ❌ Overlay-Badge – funktioniert NICHT in E-Mails */
.product-card {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.badge-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #ef4444;
  border-radius: 4px;
  padding: 4px 8px;
}`,
        codeLanguage: "css",
        tags: ["position: absolute", "CSS Grid", "Overlays", "Badges"],
      },
      {
        phase: 2,
        status: "problem",
        title: {
          de: "Phase 2 – Testi.at Desaster: Grid kollabiert, Badges verschwinden",
          en: "Phase 2 – Testi.at Disaster: Grid Collapses, Badges Disappear",
        },
        description: {
          de: "Das 2-Spalten-Grid kollapierte in Outlook zu einer einzigen langen Liste. Die position:absolute Badges verschwanden vollständig – MSO ignoriert Positioning komplett. Produktbilder wurden aufgrund des DPI-Scalings um ~25% zu groß dargestellt. Keine einzige Produktkarte sah so aus wie im Design.",
          en: "The 2-column grid collapsed in Outlook to a single long list. The position:absolute badges disappeared completely – MSO ignores positioning completely. Product images were displayed ~25% too large due to DPI scaling. Not a single product card looked like the design.",
        },
        tags: [
          "Layout-Kollaps",
          "DPI-Scaling",
          "position:absolute ignored",
          "MSO",
        ],
        facts: [
          {
            de: "position: relative/absolute wird von Outlook (MSO-Engine) vollständig ignoriert.",
            en: "position: relative/absolute is completely ignored by Outlook (MSO engine).",
          },
          {
            de: "Outlook skaliert Bilder basierend auf DPI-Einstellungen – explizite width/height Attribute sind Pflicht.",
            en: "Outlook scales images based on DPI settings – explicit width/height attributes are mandatory.",
          },
        ],
      },
      {
        phase: 3,
        status: "solution",
        title: {
          de: "Phase 3 – Table-Grid und Badge-Neudesign",
          en: "Phase 3 – Table Grid and Badge Redesign",
        },
        description: {
          de: "Das 2-Spalten-Grid wurde als verschachtelte Table umgebaut. Die Badge-Overlays wurden komplett neu gedacht: Statt Overlay-Position werden Badges jetzt direkt über dem Produkttitel platziert – als inline <span> mit Hintergrundfarbe. Optisch anders als das ursprüngliche Design, aber funktioniert in allen Clients.",
          en: "The 2-column grid was rebuilt as nested tables. The badge overlays were completely rethought: Instead of overlay positioning, badges are now placed directly above the product title – as inline <span> with background color. Visually different from the original design, but works in all clients.",
        },
        codeSnippet: `<!-- ✅ Table-Grid + Inline-Badge (kein Overlay) -->
<table role="presentation" width="640"
       cellpadding="0" cellspacing="0" border="0">
  <tr>
    <!-- Produkt 1 -->
    <td width="300" valign="top" style="padding:0 10px 0 0">
      <img src="product1.jpg" width="300" height="200"
           style="width:300px;height:200px;display:block;"
           alt="Premium Headphones" />
      <!-- Badge UNTER dem Bild, nicht darüber -->
      <span style="background:#ef4444;color:#fff;
        font-size:11px;font-weight:700;padding:3px 8px;
        display:inline-block;margin:8px 0 4px 0;">
        SALE
      </span>
    </td>
    <!-- Produkt 2 -->
    <td width="300" valign="top" style="padding:0 0 0 10px">
      <!-- ... -->
    </td>
  </tr>
</table>`,
        codeLanguage: "html",
        tags: [
          "Table-Grid",
          "Inline-Badge",
          "DPI-Fix",
          "explicit width/height",
        ],
      },
      {
        phase: 4,
        status: "problem",
        title: {
          de: "Phase 4 – Responsive Kollaps: Mobile braucht 1-Spalte",
          en: "Phase 4 – Responsive Collapse: Mobile Needs 1-Column",
        },
        description: {
          de: "Das 2-Spalten-Grid war auf Desktop perfekt, aber auf Smartphones (<480px) zu eng. Das klassische responsive E-Mail-Pattern: Media Queries mit !important-Overrides für Breiten. Das Problem: Outlook ignoriert Media Queries, aber das ist hier kein Problem – Outlook ist Desktop-only.",
          en: "The 2-column grid was perfect on desktop, but too narrow on smartphones (<480px). The classic responsive email pattern: media queries with !important overrides for widths. The problem: Outlook ignores media queries, but that's not a problem here – Outlook is desktop-only.",
        },
        codeSnippet: `/* ✅ Responsive Stack für Mobile */
@media only screen and (max-width: 480px) {
  .product-col {
    display: block !important;
    width: 100% !important;
    padding: 0 0 16px 0 !important;
  }
  .product-img {
    width: 100% !important;
    height: auto !important;
  }
}`,
        codeLanguage: "css",
        tags: ["Responsive", "Media Queries", "Mobile-First", "Stack-Layout"],
      },
      {
        phase: 5,
        status: "result",
        title: {
          de: "Phase 5 – Bulletproof Produkt-Grid",
          en: "Phase 5 – Bulletproof Product Grid",
        },
        description: {
          de: "Das finale Template: 2-Spalten Table-Grid, Inline-Badges ohne Overlays, explizite Bildgrößen gegen DPI-Scaling, VML-Buttons für alle CTAs, responsive Stack-Layout via Media Queries für Mobile. Getestet und funktionierend in Outlook 2016/2019, New Outlook, Gmail, Apple Mail und iOS Mail.",
          en: "The final template: 2-column table grid, inline badges without overlays, explicit image sizes against DPI scaling, VML buttons for all CTAs, responsive stack layout via media queries for mobile. Tested and working in Outlook 2016/2019, New Outlook, Gmail, Apple Mail and iOS Mail.",
        },
        tags: ["Bulletproof", "Cross-Client", "VML-Buttons", "DPI-Safe"],
        facts: [
          {
            de: "Alle Produktbilder haben explizite width/height-Attribute UND Inline-Style-Größen – doppelt hält besser.",
            en: "All product images have explicit width/height attributes AND inline style sizes – double protection.",
          },
          {
            de: "Badges als Inline-Elemente statt Overlays sind auch accessibility-freundlicher.",
            en: "Badges as inline elements instead of overlays are also more accessibility-friendly.",
          },
        ],
      },
    ],
    keyLearnings: [
      {
        de: "position: absolute/relative existiert in E-Mails nicht – alle Overlays müssen im Dokumentfluss sein.",
        en: "position: absolute/relative doesn't exist in emails – all overlays must be in document flow.",
      },
      {
        de: "DPI-Scaling in Outlook: IMMER explizite width/height-Attribute UND Inline-Style-Größen setzen.",
        en: "DPI scaling in Outlook: ALWAYS set explicit width/height attributes AND inline style sizes.",
      },
      {
        de: "Responsive via Media Queries funktioniert – Outlook ignoriert sie, aber Outlook ist ohnehin Desktop-only.",
        en: "Responsive via media queries works – Outlook ignores them, but Outlook is desktop-only anyway.",
      },
      {
        de: "Kreatives Umstyling ist Pflicht: Was im Web als Overlay funktioniert, muss in E-Mails neu gedacht werden.",
        en: "Creative restyling is mandatory: What works as an overlay on the web must be rethought in emails.",
      },
    ],
    relevantEmailFacts: ["technicalLimitations", "whatDoesntWork", "whatWorks", "performance"],
    relevantOutlookSections: [1, 2, 3, 4],
  },

  transactional: {
    templateId: "transactional",
    templateName: { de: "Transaktional", en: "Transactional" },
    templateDescription: {
      de: "Zahlungsbestätigung mit Transaktionsdetails, Bestellübersicht und Sicherheitshinweis. Single-Column-Layout – die robusteste Struktur, aber mit eigenen Tücken bei Tabellen und Borders.",
      en: "Payment confirmation with transaction details, order summary and security notice. Single-column layout – the most robust structure, but with its own pitfalls for tables and borders.",
    },
    complexity: "medium",
    icon: "✓",
    accentColor: "green",
    steps: [
      {
        phase: 1,
        status: "insight",
        title: {
          de: "Phase 1 – Konzept: Klare Transaktions-Struktur",
          en: "Phase 1 – Concept: Clear Transaction Structure",
        },
        description: {
          de: "Das Transaktional-Template hat eine klare Anforderung: maximale Lesbarkeit und Vertrauen. Single-Column-Layout, klare Hierarchie, Bestelldetails in einer übersichtlichen Tabelle, grüner Header für 'Erfolg'. Der erste Entwurf war technisch unkritisch – bis auf die Bestelldetails-Tabelle und den Sicherheits-Hinweisblock.",
          en: "The transactional template has a clear requirement: maximum readability and trust. Single-column layout, clear hierarchy, order details in a clear table, green header for 'success'. The first draft was technically uncritical – except for the order details table and the security notice block.",
        },
        tags: [
          "Single-Column",
          "Transaktional",
          "Trust Design",
          "Clear Hierarchy",
        ],
      },
      {
        phase: 2,
        status: "problem",
        title: {
          de: "Phase 2 – Bestelldetails-Tabelle: Borders und Padding-Chaos",
          en: "Phase 2 – Order Details Table: Borders and Padding Chaos",
        },
        description: {
          de: "Die Bestelldetails-Tabelle hatte in Outlook ein Border-Rendering-Problem: border-collapse: collapse funktionierte nicht zuverlässig, doppelte Borders erschienen an bestimmten Stellen. padding auf <p>-Tags innerhalb der Tabellenzellen wurde ignoriert. Die Trenner zwischen Zeilen waren mal vorhanden, mal nicht.",
          en: "The order details table had a border rendering problem in Outlook: border-collapse: collapse didn't work reliably, double borders appeared in certain places. padding on <p> tags within table cells was ignored. The separators between rows were sometimes present, sometimes not.",
        },
        codeSnippet: `/* ❌ border-collapse funktioniert nicht zuverlässig in MSO */
.order-table {
  border-collapse: collapse;
  width: 100%;
}
.order-table td {
  border-bottom: 1px solid #e5e7eb;
  padding: 12px;  /* <p> padding wird in MSO ignoriert */
}`,
        codeLanguage: "css",
        tags: ["border-collapse", "padding on p", "MSO Table Bugs", "Borders"],
        facts: [
          {
            de: "padding auf <p>-Tags innerhalb von <td> funktioniert in Outlook (MSO) nicht.",
            en: "padding on <p> tags inside <td> doesn't work in Outlook (MSO).",
          },
          {
            de: "border-collapse: collapse hat in der Word-Rendering-Engine inkonsistentes Verhalten.",
            en: "border-collapse: collapse has inconsistent behavior in the Word rendering engine.",
          },
        ],
      },
      {
        phase: 3,
        status: "solution",
        title: {
          de: "Phase 3 – Saubere Table-Struktur mit expliziten Borders",
          en: "Phase 3 – Clean Table Structure with Explicit Borders",
        },
        description: {
          de: "Lösung: Borders direkt als Inline-Style auf den <td>-Elementen statt über CSS-Klassen. cellpadding-Attribut auf der <table> für konsistente Abstände. Kein <p> mehr innerhalb von Tabellenzellen – stattdessen <span> oder direkt Text-Nodes. Für die Trennlinie zwischen Items: ein separates <tr> mit einem 1px hohen <td> in der Trennfarbe.",
          en: "Solution: Borders directly as inline style on <td> elements instead of CSS classes. cellpadding attribute on <table> for consistent spacing. No more <p> inside table cells – instead <span> or direct text nodes. For the separator between items: a separate <tr> with a 1px height <td> in the separator color.",
        },
        codeSnippet: `<!-- ✅ Robuste Bestelldetails-Tabelle -->
<table role="presentation" width="560"
       cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding:12px 0;
        border-bottom:1px solid #e5e7eb;
        font-family:Arial,sans-serif;font-size:14px;">
      Premium Wireless Headphones
    </td>
    <td align="right"
        style="padding:12px 0;
        border-bottom:1px solid #e5e7eb;
        font-family:Arial,sans-serif;font-size:14px;
        font-weight:700;">
      €149,00
    </td>
  </tr>
</table>`,
        codeLanguage: "html",
        tags: [
          "Inline Borders",
          "cellpadding on table",
          "no p in td",
          "explicit td styles",
        ],
      },
      {
        phase: 4,
        status: "problem",
        title: {
          de: "Phase 4 – Sicherheitsblock: border-left in Outlook gebrochen",
          en: "Phase 4 – Security Block: border-left Broken in Outlook",
        },
        description: {
          de: "Der Sicherheitshinweis-Block nutzte einen auffälligen linken Border (border-left) als visuellen Akzent – ein bekanntes UI-Pattern. In Outlook wurde dieser Border entweder gar nicht gerendert oder hatte falsche Dicke. Die Lösung: Ein schmaler, gefärbter <td> als 'fake border' in einer Table mit zwei Spalten.",
          en: "The security notice block used a prominent left border (border-left) as a visual accent – a well-known UI pattern. In Outlook, this border was either not rendered at all or had the wrong thickness. The solution: A narrow, colored <td> as a 'fake border' in a two-column table.",
        },
        codeSnippet: `<!-- ✅ Fake border-left via Table-Trick -->
<table role="presentation" width="560"
       cellpadding="0" cellspacing="0" border="0">
  <tr>
    <!-- Fake border-left: 4px breiter, gefärbter <td> -->
    <td width="4" style="background-color:#16a34a;
        font-size:0;line-height:0;">&nbsp;</td>
    <!-- Content-Bereich -->
    <td style="padding:16px 20px;
        background-color:#f0fdf4;">
      <strong style="color:#15803d;">Sicherheitshinweis:</strong>
      Wir werden Sie niemals nach Ihren Kartendaten fragen.
    </td>
  </tr>
</table>`,
        codeLanguage: "html",
        tags: [
          "border-left Workaround",
          "fake border",
          "Table Trick",
          "Security Block",
        ],
      },
      {
        phase: 5,
        status: "solution",
        title: {
          de: "Phase 5 – mso-line-height-rule für konsistente Abstände",
          en: "Phase 5 – mso-line-height-rule for Consistent Spacing",
        },
        description: {
          de: "Ein subtiles Problem: Zeilenhöhen in Outlook wichen von anderen Clients ab. Der Grund: Outlook interpretiert line-height-Werte anders als Browser. Die Lösung: mso-line-height-rule: exactly in Kombination mit expliziten mso-* Properties für perfekte Kontrolle in MSO.",
          en: "A subtle problem: Line heights in Outlook deviated from other clients. The reason: Outlook interprets line-height values differently than browsers. The solution: mso-line-height-rule: exactly in combination with explicit mso-* properties for perfect control in MSO.",
        },
        codeSnippet: `<!-- ✅ MSO-spezifische Line-Height-Kontrolle -->
<td style="
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 22px;
  mso-line-height-rule: exactly;
  mso-text-raise: 3px;
">
  Ihre Bestellung wurde erfolgreich verarbeitet.
</td>`,
        codeLanguage: "html",
        tags: [
          "mso-line-height-rule",
          "mso-text-raise",
          "mso-* properties",
          "Typography",
        ],
      },
      {
        phase: 6,
        status: "result",
        title: {
          de: "Phase 6 – Bulletproof Transaktional-Template",
          en: "Phase 6 – Bulletproof Transactional Template",
        },
        description: {
          de: "Das finale Transaktional-Template ist das technisch robusteste der drei Templates. Single-Column-Layout ohne komplexe mehrspaltige Strukturen, explizite Inline-Styles auf allen Elementen, Table-Trick für den border-left Sicherheitsblock und mso-* Properties für typografische Präzision. Kleinste HTML-Größe (~42KB) und höchste Zustellbarkeits-Score.",
          en: "The final transactional template is the technically most robust of the three templates. Single-column layout without complex multi-column structures, explicit inline styles on all elements, table trick for the border-left security block and mso-* properties for typographic precision. Smallest HTML size (~42KB) and highest deliverability score.",
        },
        tags: [
          "Bulletproof",
          "Single-Column",
          "~42KB HTML",
          "Highest Deliverability",
        ],
        facts: [
          {
            de: "Transaktionale E-Mails haben die höchsten Öffnungsraten (70–80%) – Zuverlässigkeit ist kritisch.",
            en: "Transactional emails have the highest open rates (70–80%) – reliability is critical.",
          },
          {
            de: "Single-Column-Layouts sind die robustesten E-Mail-Strukturen und funktionieren in praktisch allen Clients.",
            en: "Single-column layouts are the most robust email structures and work in virtually all clients.",
          },
          {
            de: "SPF, DKIM und DMARC sind für transaktionale E-Mails besonders wichtig – sie müssen ankommen.",
            en: "SPF, DKIM and DMARC are especially important for transactional emails – they must arrive.",
          },
        ],
      },
    ],
    keyLearnings: [
      {
        de: "Single-Column-Layouts sind die zuverlässigsten Email-Strukturen – für transaktionale Mails die erste Wahl.",
        en: "Single-column layouts are the most reliable email structures – the first choice for transactional emails.",
      },
      {
        de: "border-left niemals direkt nutzen – immer den Table-Trick mit einem schmalen farbigen <td> verwenden.",
        en: "Never use border-left directly – always use the table trick with a narrow colored <td>.",
      },
      {
        de: "mso-* Properties (mso-line-height-rule, mso-text-raise) geben präzise Kontrolle über MSO-Rendering.",
        en: "mso-* properties (mso-line-height-rule, mso-text-raise) give precise control over MSO rendering.",
      },
      {
        de: "Borders direkt als Inline-Style auf <td>-Elementen – niemals über border-collapse.",
        en: "Borders directly as inline style on <td> elements – never via border-collapse.",
      },
    ],
    relevantEmailFacts: ["bestPractices", "performance", "whatWorks", "clientProblems"],
    relevantOutlookSections: [2, 3, 4, 5],
  },
};
