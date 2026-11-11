import tokens from '../design-tokens/tokens.json';
import { head, label } from './_helpers.js';

export default { title: 'Foundations/Tokens' };

const flat = (node, path = []) => Object.entries(node).flatMap(([k, v]) =>
  k.startsWith('$') ? [] : v && v.$value !== undefined ? [{ name: [...path, k].join('/'), ...v }] : flat(v, [...path, k]));
const sw = (t, extra = '') => `<div class="sb-sw"><i style="background:var(${t.cssVar})"></i><div><b>${t.name}</b><small>${t.cssVar}${extra}</small></div></div>`;

export const Colors = {
  render: () => {
    const sem = flat(tokens.Color);
    const groups = {};
    sem.forEach((t) => (groups[t.name.split('/')[0]] ||= []).push(t));
    const prim = flat(tokens.Primitives);
    const pg = {};
    prim.forEach((t) => (pg[t.name.includes('/') ? t.name.split('/')[0] : 'brand'] ||= []).push(t));
    return `${head('Colors', 'Semantic colours follow the Surface toolbar (Eggwhite / Black / Green). Primitives are raw values — use them only through semantics.')}
      <div class="sb-section">${label('Semantic')}${Object.entries(groups).map(([g, list]) => `<div class="sb-section">${label(g)}<div class="sb-grid">${list.map((t) => sw(t)).join('')}</div></div>`).join('')}</div>
      <div class="sb-section">${label('Primitive')}${Object.entries(pg).map(([g, list]) => `<div class="sb-section">${label(g)}<div class="sb-grid">${list.map((t) => sw(t, ' · ' + t.$value)).join('')}</div></div>`).join('')}</div>`;
  },
};

const TYPE = [
  ['heading-h1', 'Heading 1', 'หัวข้อ 1'], ['heading-h2', 'Heading 2', 'หัวข้อ 2'], ['heading-h3', 'Heading 3', 'หัวข้อ 3'],
  ['heading-h4', 'Heading 4', 'หัวข้อ 4'], ['heading-h5', 'Heading 5', 'หัวข้อ 5'], ['heading-h6', 'Heading 6', 'หัวข้อ 6'],
  ['text-lead', 'Lead paragraph', 'เนื้อหานำ'], ['text-body', 'Body text for paragraphs', 'เนื้อหาสำหรับย่อหน้า'],
  ['text-body-sm', 'Small text', 'ตัวหนังสือเล็ก'], ['text-caption', 'Caption', 'คำอธิบายภาพ'],
];
export const Typography = {
  render: () => {
    const th = document.documentElement.dataset.lang === 'th';
    const L = th ? 'th' : 'en';
    const fam = th ? 'var(--font-anakotmai)' : 'var(--font-termina)';
    const rows = TYPE.map(([k, en, tht]) => {
      const heading = k.startsWith('heading');
      const style = `font-family:${fam};font-weight:${heading ? 700 : th ? 300 : 400};font-size:var(--font-size-${L}-${k});line-height:var(--line-height-${L}-${k});${heading && !th ? 'text-transform:uppercase;letter-spacing:-.03em;' : ''}`;
      return `<div class="sb-type-row"><div style="${style}">${th ? tht : en}</div><code>--font-size-${L}-${k}</code><code>--line-height-${L}-${k}</code><code>${heading ? 'Bold' : th ? 'Light' : 'Regular'}</code></div>`;
    }).join('');
    return `${head('Typography', 'EN = Termina (+ STIX Two Text italic accent) · TH = Anakotmai. Sizes change per breakpoint — try the Viewport toolbar. Switch Lang to see Thai.')}
      <div class="sb-section"><p style="font-family:var(--font-termina);font-weight:700;font-size:48px;margin:0;text-transform:uppercase;letter-spacing:-.04em">We put the world <span style="font-family:var(--font-stix-two-text);font-style:italic;text-transform:none;color:var(--color-text-brand)">on a carbon diet.</span></p></div>
      ${rows}`;
  },
};

export const Spacing = {
  render: () => {
    const sp = flat(tokens['Spacing & Shape']).filter((t) => t.name.startsWith('space/'));
    return `${head('Spacing', '8pt grid (2 / 4 / 6 / 12 / 14 / 22 for fine detail from the website).')}
      ${sp.map((t) => `<div class="sb-space"><span>${t.cssVar} · ${t.$value}</span><i style="width:var(${t.cssVar})"></i></div>`).join('')}`;
  },
};
