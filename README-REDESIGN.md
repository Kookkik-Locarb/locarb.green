# LO-CARB website — redesign (2026)

## What changed
- `Main.dc.html` is the new website. It is a single self-contained file (fonts and images embedded) and contains these pages as in-file views:
  - Home (`Main.dc.html`)
  - LO-CARB's story (`#story`), Certificates (`#certificates`)
  - Our solutions: IFRS S1 & S2 (`#ifrs`), CarbonCal + Carbon Camp (`#carboncal`), ISSB Training (`#issb`), Carbon Scout (`#carbonscout`), Sustainability Reporting & Consulting (`#reporting`)
  - Contact (`#contact-us`)
- The old page files for those pages (`About-Story`, `About-Certificates`, `Solution-*`, `Contact`) now redirect to the matching view in `Main.dc.html`, so existing links keep working.
- `index.html` still redirects to `Main.dc.html`.
- Blog, Portfolio and Board pages are unchanged (original files) until they are redesigned.

## Brand rules used
Colours Green #0EA552, Black #000, Eggwhite #F3F0DF (no white, no gradients). Termina + STIX Two Text (EN accents, uppercase) and Anakotmai (TH). Square corners except pill chips and round markers.

## To confirm before going live (BD)
- Mockup content: CarbonCal figures (120+ / 1,500+ / 250K) and user quotes, Carbon Scout area and tCO2e (12,000+ rai / 450K), ISSB format/duration (2 days / 12 hours) and past training, Reporting selected projects.
- Certificate issuer/year details; official logo files for ISO, TGO (CFO) and BSI (only the ISSB Training Partner / IFRS Sustainability Alliance marks are in place).
- Contact forms open the visitor's email app (no backend yet); careers go to hr@locarb.green, everything else to contact@locarb.green.
