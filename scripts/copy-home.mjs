// Storybook skips index.html inside staticDirs — copy the Home page so "Pages/Home" works in the built Storybook.
import { copyFileSync, existsSync } from 'node:fs';
if (existsSync('storybook-static/website')) copyFileSync('website/index.html', 'storybook-static/website/index.html');
