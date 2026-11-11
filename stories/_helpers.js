/** Small helpers shared by the stories */
export const t = (th, en) => `<span class="th">${th}</span><span class="en">${en}</span>`;
export const arrow = `<span class="ar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M2 8h12M9 3l5 5-5 5"/></svg></span>`;
export const icons = {
  search: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5"/><path d="M13 13l5 5"/></svg>',
  close: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15"/></svg>',
  menu: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h14M3 10h14M3 14h14"/></svg>',
  check: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5"/></svg>',
  plus: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M8 2v12M2 8h12"/></svg>',
};
export const head = (title, lead) => `<h1 class="sb-h">${title}</h1><div class="sb-bar"></div>${lead ? `<p class="sb-lead">${lead}</p>` : ''}`;
export const label = (s) => `<p class="sb-label">${s}</p>`;
