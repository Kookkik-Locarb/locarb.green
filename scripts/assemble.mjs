// Build output for hosting: website at /  and Storybook at /storybook/  →  dist/
import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('website', 'dist', { recursive: true });
if (existsSync('storybook-static')) cpSync('storybook-static', 'dist/storybook', { recursive: true });
console.log('✓ dist/ ready (website + /storybook)');
