import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('app/page.tsx', 'utf8');
const needle = 'isActive={activeTemplateId === template.id}\r\n                  />';
const replacement = 'isActive={activeTemplateId === template.id}\r\n                    journeyHref={`/journey/${template.id}`}\r\n                    journeyLabel={locale === "de" ? "Entwicklungsreise" : "Dev Journey"}\r\n                  />';
if (!c.includes(needle)) { console.error('NOT FOUND'); process.exit(1); }
writeFileSync('app/page.tsx', c.replace(needle, replacement));
console.log('DONE');
