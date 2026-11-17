# LO-CARB Website Revamp 2027 (prototype)

Static prototype of the LO-CARB website (TH/EN), exported from the Claude Design canvas.

## Structure
- `index.html` – redirects to `Main.dc.html` (Home)
- `*.dc.html` – one file per page (Home, About, Solutions, Blog, Article detail, Contact)
- `support.js` – the Design Component runtime that renders each `.dc.html` page
- `assets/` – images, video, fonts and the shared stylesheet `site.css`

## Run locally
Serve the folder with any static server (opening the files directly from disk will not load the runtime), e.g.

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open http://localhost:8000/

## Deploy on GitHub Pages
1. Create a repository and upload the contents of this folder to the root of the default branch.
2. In **Settings → Pages**, choose **Deploy from a branch**, select the branch and `/ (root)`, then save.
3. The site will be served at `https://<user>.github.io/<repo>/`.

## Notes
- Mockup / placeholder content (Lorem ipsum, `[TBC]` figures, sections marked “Mockup · awaiting BD content”) is for development preview only.
- Fonts from Google Fonts and the Google Maps embeds need an internet connection.
