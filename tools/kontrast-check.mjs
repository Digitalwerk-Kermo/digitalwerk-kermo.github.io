// Kontrast-Check: node tools/kontrast-check.mjs <url> [<url> …]
// Braucht: npm i playwright-core (einmalig, ausserhalb des Repos oder ohne Commit) und Chrome/Chromium (Pfad in CHROME_PATH oder /usr/bin/google-chrome).
// Prüft JEDES Textelement inkl. ::before/::after (z. B. Zähler-Nummern) gegen seinen tatsächlichen Hintergrund (auch dunkle Abschnitte).
// Texte auf Bildern/Verläufen kann das Skript nicht messen – sie werden als «von Auge prüfen» aufgelistet.
import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args:['--no-sandbox'] });
for (const url of process.argv.slice(2)) {
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto(url); await p.waitForTimeout(800);
  const { out: bad, manual } = await p.evaluate(() => {
    const parse = c => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const v = m[1].split(/[ ,\/]+/).filter(Boolean).map(Number); return { r:v[0], g:v[1], b:v[2], a: v[3] ?? 1 }; };
    const lum = ({r,g,b}) => { const f = x => { x/=255; return x<=0.03928? x/12.92 : ((x+0.055)/1.055)**2.4; }; return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b); };
    // Hintergrund: halbtransparente Ebenen der Elternkette übereinanderlegen; Bild/Verlauf → nicht prüfbar (null)
    const bgOf = el => { const layers = []; for (let e = el; e; e = e.parentElement) { const s = getComputedStyle(e); if (s.backgroundImage !== 'none') return null; const c = parse(s.backgroundColor); if (c && c.a > 0) { layers.push(c); if (c.a >= 1) break; } }
      let acc = {r:255,g:255,b:255}; for (const c of layers.reverse()) acc = { r: c.r*c.a + acc.r*(1-c.a), g: c.g*c.a + acc.g*(1-c.a), b: c.b*c.a + acc.b*(1-c.a) }; return acc; };
    const out = [], manual = [];
    for (const el of document.querySelectorAll('body *')) {
      if (el.closest('option, script, style, noscript, svg')) continue; // native Dropdown-Listen haben eigenen Hintergrund
      for (const pseudo of [null, '::before', '::after']) {
        const s = getComputedStyle(el, pseudo);
        const text = pseudo ? s.content : [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
        if (!text || text === 'none' || text === '""' || s.visibility === 'hidden' || s.display === 'none') continue;
        let fg = parse(s.color); const bg = bgOf(el); if (!fg) continue; if (!bg) { manual.push(`${el.tagName.toLowerCase()}.${el.className}${pseudo||''} "${text.slice(0,30)}"`); continue; }
        if (fg.a < 1) fg = { r: fg.r*fg.a + bg.r*(1-fg.a), g: fg.g*fg.a + bg.g*(1-fg.a), b: fg.b*fg.a + bg.b*(1-fg.a) };
        const L1 = lum(fg), L2 = lum(bg), cr = (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05);
        const size = parseFloat(s.fontSize), bold = parseInt(s.fontWeight) >= 700, large = size >= 24 || (bold && size >= 18.66);
        if (cr < (large ? 3 : 4.5)) out.push(`${cr.toFixed(2)} ${el.tagName.toLowerCase()}.${el.className}${pseudo||''} "${text.slice(0,30)}"`);
      }
    }
    return { out, manual };
  });
  console.log(`## ${url}: ${bad.length ? bad.length + ' Probleme' : 'ok'}`); bad.slice(0, 12).forEach(x => console.log('  ' + x));
  if (manual.length) { console.log(`  von Auge prüfen (Text auf Bild/Verlauf): ${manual.length}`); manual.slice(0, 5).forEach(x => console.log('    ' + x)); }
  if (bad.length) process.exitCode = 1;
  await p.close();
}
await b.close();
