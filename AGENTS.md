# Digitalwerk Kermo – Hinweise für Claude und andere KI-Assistenten

Geschäftsseite von Digitalwerk Kermo (Aladin Kermo, Einzelfirma) mit Beispielseiten erfundener Firmen. Statisches HTML/CSS ohne Build-Schritt, veröffentlicht über GitHub Pages (Push auf `main` = live).

- Gemeinsames Design: Tokens oben in `css/site.css` (`--blue`, `--cyan`, Schrift Outfit, selbst gehostet unter `fonts/`). Nach CSS-Änderungen den `?v=`-Parameter in allen HTML-Dateien erhöhen.
- Beispielseiten (`tannwald-bau/`, `senn-sanitaer/`, `farbwerk-braendli/`) haben eigenes CSS im `<style>` und müssen sichtbar als «Beispielseite, erfundene Firma» gekennzeichnet bleiben.
- Keine Cookies, kein Tracking, keine Drittanbieter-Einbindungen – so steht es in der Datenschutzerklärung. Wer etwas davon einbaut, muss `impressum.html` anpassen.
- Kontrast nach jeder Farbänderung mit `tools/kontrast-check.mjs` prüfen (Anleitung oben in der Datei) – er misst auch `::before`/`::after` und dunkle Abschnitte.
- Beispielseiten und `404.html` haben `<meta name="robots" content="noindex">` (erfundene Firmen sollen nicht bei Google erscheinen). Neue Hauptseiten in `sitemap.xml` eintragen und mit `canonical`/Open-Graph-Tags versehen (Vorschaubild `img/og.png`).
- `404.html` nutzt absolute Pfade (`/css/…`), weil GitHub Pages sie unter jeder Adresse ausliefert.
- Diese Seite und alle Kundenseiten sind öffentlich: **Teil A, B, C und D** der Checkliste gelten.

## Webseiten-Check (Design, Recht, Sicherheit, Google)

Gilt für alle Web-Projekte von Aladin Kermo. Er programmiert nicht selbst – Erklärungen einfach halten, Deutsch (Schweiz, «ss» statt «ß»).

**Zwei Arten von Projekten:**
- **Privat** (Spiele/Tools für ihn und Freunde, z. B. MusicBattle, HoopVote, TotalGuesser): Teil A (Design) und Teil C (Sicherheit).
- **Für Kunden/Öffentlichkeit** (Shop «Junge Sorgen», Digitalwerk Kermo und alle Kundenseiten): Teil A, B (Recht), C und D (Domain/Google).

Wenn unklar ist, welche Art: kurz fragen.

Projektspezifische Regeln (CLAUDE.md/AGENTS.md im Repo) gehen vor – z. B. echte Daten nie anfassen, ein PR pro Thema.

### Ablauf

1. **Beim Start** eines neuen Projekts: zuerst ein kleines Design-System festlegen (Farb-, Schrift-, Abstands- und Radius-Tokens als CSS-Variablen) und eine kurze Design-Beschreibung (Zielgruppe, Stimmung, 1–2 Vorbilder). Fehlt das, beim Nutzer nachfragen statt raten.
2. **Beim Bauen**: Punkte aus Teil A (und B) direkt einhalten.
3. **Vor dem Abschluss**: die Prüfung unten durchgehen und im Abschluss kurz nennen, was geprüft wurde und was offen bleibt.

### Teil A – Design (alle Projekte)

Typischer «KI-Look» vermeiden:
1. **Keine lila/violetten Verläufe** und keine Verläufe als Hauptgestaltung. Verläufe nur, wenn sie zur Marke passen.
2. **Echte Icons statt Emojis** (SVG, z. B. Lucide-Stil, `aria-hidden="true"`). Textsymbole wie ▶ mit dem unsichtbaren Zeichen `U+FE0E` direkt dahinter (Text-Darstellung), damit iOS kein Emoji zeigt.
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
15. **Verständliche Fehlermeldungen**: Deutsch, sagt was passiert ist und was man tun kann. Technische Meldungen höchstens klein als «Details». Dabei:
    - **Nach Herkunft übersetzen, nie nach Sprache raten** (keine Erkennung über «enthält englische Wörter»). Eigene Texte der App bleiben unverändert – auch wenn ein englisches Wort darin vorkommt.
    - **Eigene Backend-Meldungen** (z. B. `raise exception` in Supabase-Migrationen) über eine feste Übersetzungstabelle; ein Test liest die Migrationen und schlägt fehl, wenn eine Meldung keine Übersetzung hat.
    - **Fremde Dienste** (Spotify, Zahlungsanbieter …): zuerst am Dienst erkennen, dann passenden Rat je Fehlercode (z. B. 401 neu anmelden, 403 Premium/Konto, 404 Gerät, 429 warten) und die Details des Dienstes sichtbar lassen – nie in eine allgemeine oder fremde Meldung umdeuten.
    - **Verbindungsabbruch beim Speichern/Absenden**: Der Ausgang ist unklar (kann schon gespeichert sein). Nicht «nochmals versuchen» raten, sondern «Seite neu laden und prüfen, ob es geklappt hat». Wo möglich «schon erledigt» als Erfolg behandeln (z. B. «bereits bewertet» → weiter).
    - **Jede Fehleranzeige braucht einen Ausweg in der Oberfläche**, der wirklich funktioniert (Knopf «Nochmals laden», Zurück, Neu starten). Was der Text verspricht («tippe auf …»), muss es geben. Kein endloses «Lade …» nach einem Fehler; ein gespeicherter Spielstand bleibt erhalten.
16. **Sinnvolle Animationen**: nur wo sie etwas erklären, kurz, nur `transform`/`opacity`, immer `prefers-reduced-motion` beachten.
17. **Referenz geben**: Bei Design-Aufträgen nach Vorbildern fragen bzw. selbst 1–2 passende Referenzen vorschlagen.
18. **Design-Brief** kurz festhalten (in CLAUDE.md oder README): Zielgruppe, Ton, Farben, Schriften, Vorbilder.
19. **Design-System zuerst**: Tokens oben in der CSS-Datei definieren, danach nur noch diese verwenden.
21. **Feinschliff, der den Unterschied macht**:
    - Volle Höhe mit `100dvh` (nicht `100vh`, sonst springt es auf dem Handy unter der Adressleiste).
    - Verschachtelte Ecken konzentrisch: innerer Radius = äusserer Radius − Abstand.
    - Rahmen halbtransparent (z. B. `rgb(0 0 0 / .08)` bzw. weiss auf dunkel) statt fester Grautöne – passt auf jedem Hintergrund.
    - Farben bei neuen Projekten in `oklch()` definieren (gleichmässige Helligkeit über Abstufungen); Kontrast trotzdem messen.
    - Icons in der Strichstärke zur Schrift passend (dünne Schrift → dünne Icons), alle aus einem Set.
    - Dunkelmodus: Tiefe über hellere Flächen statt Schatten; nie reines Schwarz/Weiss.
    - Bilder auf weissem Grund mit `mix-blend-mode: multiply` in helle Flächen einbetten.
    - Zahlen in Tabellen/Zählern mit `font-variant-numeric: tabular-nums`, damit nichts springt.
22. **UX-Grundregeln**:
    - Pro Bildschirm eine klare Hauptaktion (Hick: weniger Auswahl = schnellere Entscheidung).
    - Wichtige Knöpfe gross und dort, wo der Daumen ist (Fitts) – auf dem Handy unten.
    - Gewohntes nicht neu erfinden (Jakob): Logo oben links führt nach Hause, Warenkorb oben rechts, Formulare wie überall.
    - Kurze Listen und Schritte, max. ca. 5–7 Punkte auf einmal (Miller); lange Abläufe mit Fortschrittsanzeige.
    - Sofortige Rückmeldung unter 0.4 s (Doherty): Knopf reagiert sichtbar, bei Längerem «Lade …».
    - Zusammengehöriges nah beieinander und gleich aussehend, Getrenntes mit Abstand (Gestalt).
    - Destruktive Aktionen bestätigen oder rückgängig machbar machen.
23. **Barrierefreiheit**: Kontrast mind. 4.5:1 für Text (WCAG AA) – an **jeder** Stelle gegen den tatsächlichen Hintergrund, auch `::before`/`::after` (Zähler, Nummern), Texte in dunklen Abschnitten und auf halbtransparenten Flächen. Wird eine Farbe für eine Stelle geändert, alle anderen Stellen mit derselben Farbe einzeln nachprüfen (auf dunklem Grund braucht es oft die hellere Variante, nicht die dunklere). Alt-Texte für Bilder, Formularfelder mit `<label>`, klare Button-Texte, per Tastatur bedienbar, sichtbarer Fokus, Touch-Ziele mind. 44 px, mobil bei 375 px ohne seitliches Scrollen.

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
10. **Barrierefreiheit** wie A.23. Für Shops mit EU-Kunden: European Accessibility Act beachten.
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

### Teil C – Sicherheit (alle Projekte)

Grundsatz: **Alles, was im Browser läuft, ist öffentlich und veränderbar.** Prüfungen im Frontend sind Komfort, Schutz gibt es nur auf dem Server.

1. **Keine Geheimnisse im Frontend oder im Repo** (API-Keys, Service-Role-Key, Passwörter). Nur öffentliche Schlüssel (Supabase Publishable/Anon Key, Spotify Client-ID). Geheimnisse als Server-Secrets (Supabase Secrets, Vercel Env). `.env` in `.gitignore`, nur `.env.example` mit Platzhaltern. Auch die **Git-Historie** prüfen – ein einmal gepushter Key gilt als verbrannt und muss neu erzeugt werden.
2. **RLS auf jeder Tabelle** (Supabase). Neue Tabellen/Funktionen: Standardrechte entziehen (`revoke all … from anon, authenticated`, `revoke execute … from public, anon`) und nur das Nötige vergeben.
3. **Schreiben nur so weit wie nötig**: Clients dürfen direkt nur die Spalten ändern, die die App wirklich direkt schreibt (`grant update (spalte) …`). Rollen, Besitzer, Punkte, Gewinner, Status-Felder nur über `SECURITY DEFINER`-Funktionen mit eigener Rechteprüfung (`auth.uid()`, Rolle, Raum-Mitgliedschaft) und `set search_path = public`. Prüffrage pro Tabelle: «Was passiert, wenn ein Mitspieler diese Zeile selbst per API ändert?»
4. **Admin-Rechte nie aus dem Frontend ableiten**: Admin-Seiten dürfen sich im Browser verstecken, aber jede Admin-Aktion prüft auf dem Server. Neue Konten starten ohne Rechte (z. B. Status `pending`); der erste Admin nur einmalig.
5. **Nutzereingaben immer escapen** (`esc()` bzw. `textContent`, React escaped selbst – kein `dangerouslySetInnerHTML`). Gilt auch für Namen anderer Spieler, Songtitel aus APIs, Initialen, Fehlertexte. Links/Bild-URLs zusätzlich kodieren.
6. **Uploads**: nur erlaubte Dateitypen und Grösse (Bucket-Limit), Pfad an die Nutzer-ID gebunden, Pfad serverseitig prüfen; Bilder vor dem Upload verkleinern.
7. **Eingaben serverseitig prüfen**: Länge, erlaubte Werte, IDs per Regex; nie nur im Formular.
8. **Missbrauch begrenzen**: Edge Functions, die fremde APIs (Last.fm, KI, Mail) aufrufen, brauchen Anmeldung oder eine andere Identitätsprüfung **und** ein Limit pro Nutzer/Stunde, sonst kann jemand das Kontingent oder die Rechnung hochtreiben. `verify_jwt = false` nur mit eigener Prüfung und Begründung im Code.
9. **Einladungs-/Raumcodes** lang genug und zufällig (z. B. 6 Zeichen aus 32 = ca. 1 Mrd.; Einladungs-Token ≥ 16 Byte aus `gen_random_bytes`).
10. **Fehlermeldungen verraten nichts**: keine Stacktraces, SQL oder Keys in der Oberfläche (Details klein und nur, was hilft).
11. **Abhängigkeiten aktuell** (`npm audit` bei Projekten mit npm); keine fremden Skripte von unbekannten CDNs.
12. **Anmeldung**: Supabase «Leaked password protection» einschalten, wo verfügbar; sichere Passwortregeln; Weiterleitungs-URLs (Auth, OAuth) nur auf eigene Domains.
13. **Alte Teile aufräumen**: nicht mehr genutzte Edge Functions, Tabellen, Keys entfernen bzw. deaktivieren (mit Bestätigung des Nutzers).
14. **Supabase-Advisor** (Security) nach jeder Migration ansehen; erwartete Warnungen im Repo begründen.

### Teil D – Domain und Google (öffentliche Seiten)

1. **Eigene Domain** (kurz, ohne Bindestrich-Ketten; vor Kauf Marke/Name prüfen). HTTPS erzwingen, `www` und ohne `www` auf eine Adresse weiterleiten.
2. **Google Search Console** einrichten (Inhaberschaft per DNS-Eintrag), `sitemap.xml` einreichen, `robots.txt` vorhanden. Bei Firmen zusätzlich **Google-Unternehmensprofil** (Nutzer macht es selbst).
3. **Jede Seite**: eigener `<title>` und `meta description`, eine `<h1>`, `lang="de-CH"`, Open-Graph-Bild für Vorschauen in WhatsApp/LinkedIn, `canonical`.
4. **E-Mail auf der Domain**: Absender-Domain mit SPF, DKIM und DMARC; Newsletter/Massenmails über eine Subdomain (z. B. `news.`), damit der Ruf der Hauptdomain geschützt bleibt.
5. **Ladezeit**: Bilder in passender Grösse (WebP/AVIF), `loading="lazy"` unterhalb des sichtbaren Bereichs, Schriften selbst gehostet mit `font-display: swap`. Lighthouse/PageSpeed mobil prüfen.

### Prüfung vor dem Abschluss

- Seite bei 375 px und 1280 px ansehen (Screenshot), kein seitliches Scrollen.
- Automatischer Barrierefreiheits-Check (axe-core per Playwright): Labels, Alt-Texte, Überschriften-Reihenfolge.
- **Zusätzlich** der Kontrast-Check unten (misst auch `::before`/`::after` und dunkle Abschnitte, die axe übersieht). Nach **jeder** Farbänderung erneut laufen lassen, auf allen Seiten. Texte auf Bildern/Verläufen von Auge prüfen.
- Suchen: Emojis in der Oberfläche, `Inter`, lila Farbwerte (`#8b5cf6`, `#7c3aed`, `#a855f7`, `#6366f1` …), `alert(`, rohe `error.message` in der Anzeige, Google-Fonts-/CDN-Einbindungen (bei Kundenseiten).
- **Jeden Fehlerweg wirklich durchspielen**, nicht nur den Normalfall: in Playwright einzelne Anfragen blockieren (`page.route('**/pfad/*', r => r.abort())`) – beim ersten Laden, beim **Wiederherstellen eines gespeicherten Stands** (Seite neu laden) und beim Speichern/Absenden. Erwartung: verständliche Meldung + funktionierender Ausweg. Danach Anfrage freigeben, Ausweg klicken → App läuft weiter.
- Fehlertexte mit echten Beispielen testen: eigene deutsche Texte (auch mit englischen Wörtern) bleiben gleich, Backend- und Dienst-Fehler (inkl. Details) werden richtig zugeordnet, Verbindungsfehler raten zum Neuladen und Prüfen.
- **Selbstkontrolle wie ein Reviewer**: eigene Änderung nochmals lesen und fragen «Wo wird es dadurch schlechter als vorher?» (andere Stellen mit derselben Farbe, Meldungen, die jetzt anders übersetzt werden, Zustände ohne Bedienung).
- 404-Adresse aufrufen → eigene Seite?
- Teil C: Repo inkl. Historie nach Geheimnissen durchsuchen (z. B. Python über `git log -p` nach `key`, `secret`, `token`, `service_role`, `sk_`); bei Supabase Advisor + Rechte ansehen (`information_schema.role_table_grants`/`column_privileges`, `pg_policies`) und pro Tabelle die Prüffrage aus C.3 beantworten; alle `innerHTML`/Template-Ausgaben auf `esc()` prüfen; Edge Functions auf `verify_jwt` und Limits.
- Teil D (öffentlich): Sitemap/robots erreichbar, Titel/Beschreibung je Seite, OG-Bild, Lighthouse mobil.
- Teil B: Impressum, Datenschutz, ggf. AGB/Rückgabe vorhanden, verlinkt im Footer, Angaben stimmen mit der Technik überein.
- Im Abschluss nennen: geprüft / geändert / offen (mit Grund).
