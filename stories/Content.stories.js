import * as S from './snippets.js';
import { t, icons } from './_helpers.js';
export default { title: 'Content/Components' };
export const ArticleCard = { render: () => `<div style="max-width:420px">${S.card}</div>` };
export const FeatureCards = { render: () => S.cards };
export const InsightCards = { render: () => `<div style="max-width:1200px">${S.insight}</div>`, parameters: { page: 'home' } };
export const Stats = { render: () => S.stats, parameters: { full: true, page: 'home' } };
export const Accordion = {
  render: () => `<div class="xf-list" style="max-width:820px">${[['IFRS S1 & S2 คืออะไร', 'What are IFRS S1 & S2?', true], ['ใช้เวลานานแค่ไหน', 'How long does it take?'], ['เริ่มต้นอย่างไร', 'How do we start?']].map(([th, en, open]) => `<details${open ? ' open' : ''}><summary>${t(th, en)}<i>${icons.plus}</i></summary><p>${t('คำตอบตัวอย่าง — แทนที่ด้วยเนื้อหาจริง', 'Sample answer — replace with real content.')}</p></details>`).join('')}</div>`,
};
export const ContactRows = { render: () => `<div style="max-width:560px">${S.contactList}</div>` };
export const Blockquote = { render: () => `<div class="prose" style="max-width:760px">${S.quote}</div>` };
export const PhotoCaption = { render: () => `<div style="max-width:640px">${S.photoCap}</div>` };
export const ClientLogos = { name: 'Client logos (hover)', render: () => S.clients, parameters: { full: true, page: 'home' } };
export const Prose = { name: 'Article prose', render: () => `<div style="max-width:760px">${S.prose}</div>` };
