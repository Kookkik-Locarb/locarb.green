import * as S from './snippets.js';
export default { title: 'Sections/Page sections', parameters: { full: true } };
const full = (h) => `<div class="sb-full">${h}</div>`;
export const WhatWeDo = { render: () => full(S.wwd), parameters: { page: 'home' } };
export const SectionHead = { render: () => `<div style="padding:40px"><div class="wrap">${S.sectionHead}</div></div>` };
export const TaglineBand = { render: () => full(S.tagline) };
export const CTABand = { render: () => full(S.ctaBand) };
export const Footer = { render: () => full(S.footer) };
