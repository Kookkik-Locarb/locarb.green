# LO-CARB website — redesign (Nov 2026)

All 19 pages are plain static HTML (no `support.js` runtime needed), with the same file names as before, so every link and the menu keep working.

- `Main.dc.html` — homepage (hand-built)
- every other `*.dc.html` — built from the content of the previous pages (EN + TH) in the new design
- CI rules: Green #0EA552 / Black / Eggwhite #F3F0DF only, no white, no gradients, square shapes with rounded buttons,
  EN = Termina Bold + STIX Two Text, TH = Anakotmai only (English brand lines such as "Green that grows." keep Termina/STIX)
- Language and text size are remembered with `locarb-lang` / `locarb-scale`
- Contact form (homepage + Contact page) follows the original: topic is required (Solutions shows a solution multi-select,
  Careers shows a LinkedIn field and routes to hr@locarb.green), privacy consent is required, one Send button, thank-you state.
  Sending opens the visitor's email app (no backend yet).
- Blog article pages still carry the placeholder (lorem ipsum) text from the old site
