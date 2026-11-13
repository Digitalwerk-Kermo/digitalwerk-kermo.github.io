# Digitalwerk Kermo – Hinweise für Claude und andere KI-Assistenten

Geschäftsseite von Digitalwerk Kermo (Aladin Kermo, Einzelfirma) mit Beispielseiten erfundener Firmen. Statisches HTML/CSS ohne Build-Schritt, veröffentlicht über GitHub Pages (Push auf `main` = live).

- Gemeinsames Design: Tokens oben in `css/site.css` (`--blue`, `--cyan`, Schrift Outfit, selbst gehostet unter `fonts/`). Nach CSS-Änderungen den `?v=`-Parameter in allen HTML-Dateien erhöhen.
- Beispielseiten (`tannwald-bau/`, `senn-sanitaer/`, `farbwerk-braendli/`) haben eigenes CSS im `<style>` und müssen sichtbar als «Beispielseite, erfundene Firma» gekennzeichnet bleiben.
- Keine Cookies, kein Tracking, keine Drittanbieter-Einbindungen – so steht es in der Datenschutzerklärung. Wer etwas davon einbaut, muss `impressum.html` anpassen.
- `404.html` nutzt absolute Pfade (`/css/…`), weil GitHub Pages sie unter jeder Adresse ausliefert.
- Diese Seite und alle Kundenseiten sind öffentlich: **Teil A und Teil B** der Checkliste gelten.

## Webseiten-Check (Design + Recht)

Gilt für alle Web-Projekte von Aladin Kermo. Er programmiert nicht selbst – Erklärungen einfach halten, Deutsch (Schweiz, «ss» statt «ß»).

**Zwei Arten von Projekten:**
- **Privat** (Spiele/Tools für ihn und Freunde, z. B. MusicBattle, HoopVote, TotalGuesser): nur Teil A (Design).
- **Für Kunden/Öffentlichkeit** (Shop «Junge Sorgen», Digitalwerk Kermo und alle Kundenseiten): Teil A **und** Teil B (Recht).

Wenn unklar ist, welche Art: kurz fragen.

Projektspezifische Regeln (CLAUDE.md/AGENTS.md im Repo) gehen vor – z. B. echte Daten nie anfassen, ein PR pro Thema.

### Ablauf

1. **Beim Start** eines neuen Projekts: zuerst ein kleines Design-System festlegen (Farb-, Schrift-, Abstands- und Radius-Tokens als CSS-Variablen) und eine kurze Design-Beschreibung (Zielgruppe, Stimmung, 1–2 Vorbilder). Fehlt das, beim Nutzer nachfragen statt raten.
2. **Beim Bauen**: Punkte aus Teil A (und B) direkt einhalten.
3. **Vor dem Abschluss**: die Prüfung unten durchgehen und im Abschluss kurz nennen, was geprüft wurde und was offen bleibt.

### Teil A – Design (alle Projekte)

Typischer «KI-Look» vermeiden:
1. **Keine lila/violetten Verläufe** und keine Verläufe als Hauptgestaltung. Verläufe nur, wenn sie zur Marke passen.
2. **Echte Icons statt Emojis** (SVG, z. B. Lucide-Stil, `aria-hidden="true"`). Textsymbole wie ▶ mit `︎`, damit iOS kein Emoji zeigt.
3. **Tab-Titel + Favicon** auf jeder Seite (aussagekräftiger `<title>`, `favicon`, `apple-touch-icon`; bei Apps `manifest.webmanifest`).
4. **Weniger Karten, mehr Luft**: nicht alles in Karten packen, keine Karten in Karten.
5. **Schrift nicht Inter** (und nicht Arial/Standard als einzige Wahl): eine bewusst gewählte Schrift passend zum Projekt. Für Kundenseiten Schriften **selbst hosten** (keine Google-Fonts-Einbindung).
6. **Eine Akzentfarbe** (plus neutrale Töne). Weitere Farben nur mit klarer Bedeutung.
7. **Abstands-Skala** (z. B. 4/8/12/16/24/32/48/64) über Variablen, keine Zufallswerte.
8. **Ein Eck-Radius-System** (max. 2–3 Werte über Variablen).
9. **Texte selbst schreiben**: konkret, kurz, in der Sprache der Zielgruppe. Keine Floskeln («Willkommen auf unserer Webseite», «innovative Lösungen»), kein Lorem ipsum.
10. **Echte Fotos** statt Stockbilder/KI-Bilder, wo es um echte Menschen, Produkte oder Arbeiten geht. Fehlt ein Foto: klar als Platzhalter kennzeichnen.
11. **Eigene Domain** für öffentliche Seiten einplanen (Hinweis an den Nutzer, nicht selbst kaufen).
12. **Leerzustände gestalten**: Was sieht man, wenn noch keine Daten da sind? Kurzer Satz + nächster Schritt.
13. **Ladezustände**: Platzhalter/Skeleton oder «Lade …», nie eine leere Seite.
14. **Eigene 404-Seite** im Stil der Seite, mit Weg zurück (bei GitHub Pages/Vercel `404.html` mit absoluten Pfaden; bei Shopify Vorlage + Übersetzung).
15. **Verständliche Fehlermeldungen**: Deutsch, sagt was passiert ist und was man tun kann (z. B. «Keine Verbindung. Prüfe dein Internet und versuche es nochmals.»). Technische Meldungen höchstens klein als «Details».
16. **Sinnvolle Animationen**: nur wo sie etwas erklären, kurz, nur `transform`/`opacity`, immer `prefers-reduced-motion` beachten.
17. **Referenz geben**: Bei Design-Aufträgen nach Vorbildern fragen bzw. selbst 1–2 passende Referenzen vorschlagen.
18. **Design-Brief** kurz festhalten (in CLAUDE.md oder README): Zielgruppe, Ton, Farben, Schriften, Vorbilder.
19. **Design-System zuerst**: Tokens oben in der CSS-Datei definieren, danach nur noch diese verwenden.
20. **Barrierefreiheit**: Kontrast mind. 4.5:1 für Text (WCAG AA), Alt-Texte für Bilder, Formularfelder mit `<label>`, klare Button-Texte, per Tastatur bedienbar, sichtbarer Fokus, Touch-Ziele mind. 44 px, mobil bei 375 px ohne seitliches Scrollen.

### Teil B – Recht (nur Kunden-/öffentliche Seiten)

Rechtsrahmen Schweiz (DSG, UWG); bei Kunden in der EU zusätzlich DSGVO/EU-Recht. Claude ist kein Anwalt – bei Unsicherheit darauf hinweisen.

1. **Impressum** (UWG): vollständiger Name, Postadresse, E-Mail; Firmenform bzw. «nicht im Handelsregister»; MWST-Status. Pflicht für alle, die online etwas anbieten.
2. **Datenschutzerklärung** (DSG): wer verantwortlich ist, welche Daten, wofür, an wen (Hosting, E-Mail-Anbieter, Zahlungs-/Versanddienste), Bekanntgabe ins Ausland (z. B. USA), Aufbewahrung, Rechte der Betroffenen. Muss zur tatsächlichen Technik passen.
3. **AGB** bei Verkauf oder Dienstleistung (Vertragsschluss, Preise, Lieferung, Gewährleistung, Haftung, Recht/Gerichtsstand).
4. **Cookies**: am besten keine unnötigen Cookies und kein Tracking → dann kein Banner nötig. Sonst Hinweis in der Datenschutzerklärung; Einwilligungs-Banner, wenn Tracking/Marketing-Cookies oder Kunden in der EU.
5. **Rückgabe/Widerruf** (Shops): in der Schweiz kein gesetzliches Widerrufsrecht – was gilt, klar regeln; für EU-Kunden 14 Tage Widerruf.
6. **Formulare**: nur nötige Felder, Zweck nennen, Hinweis auf die Datenschutzerklärung. Kein verstecktes Newsletter-Häkchen.
7. **Nur nötige Daten** erheben (Datenminimierung).
8. **Analyse/Tracking**: möglichst keines; wenn doch, datensparsam, in der Datenschutzerklärung nennen.
9. **Drittanbieter-Einbindungen** (Google Fonts, Maps, YouTube, Social-Media-Plugins, CDNs): vermeiden oder selbst hosten; sonst in der Datenschutzerklärung nennen (Daten gehen an Dritte).
10. **Barrierefreiheit** wie A.20. Für Shops mit EU-Kunden: European Accessibility Act beachten.
11. **Alt-Texte** für alle informativen Bilder.
12. **Farbkontrast** mind. 4.5:1 (Text), 3:1 (grosse Schrift, Bedienelemente).
13. **Formulare per Tastatur** bedienbar, Fehler am Feld erklärt.
14. **Klare Button-Texte** («Offerte anfragen», nicht «Klick hier»).
15. **Keine erfundenen Bewertungen/Testimonials** (UWG). Nur echte Kundenstimmen mit Einverständnis; Beispielseiten deutlich als «Beispiel, erfundene Firma» kennzeichnen.
16. **Keine unbelegten Werbeaussagen** («Nr. 1», «günstigster», «100 % nachhaltig», erfundene Zahlen wie «500+ Kunden»).
17. **Firmenangaben korrekt** und überall gleich (Name, Adresse, E-Mail, Telefon; auch in Produkt-/GPSR-Texten).
18. **Bildrechte**: nur eigene, lizenzierte oder freie Bilder (Quelle notieren); keine fremden Logos, Figuren, Marken oder Songtexte in Designs/Produkten.
19. **Weitere Gesetze je nach Branche**: z. B. Preisangaben (Endpreise in CHF inkl. MWST bzw. Hinweis «nicht MWST-pflichtig»), Produktsicherheit (GPSR bei EU-Versand: Herstellername + Postadresse), Altersangaben.
20. **Übrige Risiken**: Urheberrecht an Texten/Code, Domain-/Markenkonflikte (Name vor Kauf prüfen), Links zu Dritten.

### Prüfung vor dem Abschluss

- Seite bei 375 px und 1280 px ansehen (Screenshot), kein seitliches Scrollen.
- Automatischer Barrierefreiheits-Check, wenn möglich (z. B. axe-core per Playwright): Kontrast, Labels, Alt-Texte, Überschriften-Reihenfolge.
- Suchen: Emojis in der Oberfläche, `Inter`, lila Farbwerte (`#8b5cf6`, `#7c3aed`, `#a855f7`, `#6366f1` …), `alert(`, rohe `error.message` in der Anzeige, Google-Fonts-/CDN-Einbindungen (bei Kundenseiten).
- Fehlerfall ausprobieren (z. B. Netzwerk blockieren) → verständliche Meldung?
- 404-Adresse aufrufen → eigene Seite?
- Teil B: Impressum, Datenschutz, ggf. AGB/Rückgabe vorhanden, verlinkt im Footer, Angaben stimmen mit der Technik überein.
- Im Abschluss nennen: geprüft / geändert / offen (mit Grund).
