import * as S from './snippets.js';
import { t } from './_helpers.js';
export default { title: 'Controls/Pills, Chips & Tabs', tags: ['autodocs'] };
export const SectionKicker = { render: () => S.kicker };
export const PillLabel = { render: () => S.pillLabel };
export const HeroEyebrowPill = { render: () => S.heroPill, parameters: { surface: 'black', page: 'home' } };
export const Chips = {
  args: { selected: 'Climate defense' },
  argTypes: { selected: { control: 'select', options: ['none', 'Climate defense', 'Reporting', 'Capacity building', 'Business solutions'] } },
  render: ({ selected }) => `<div class="cx-chips" role="group" aria-label="Topics">${['Climate defense', 'Reporting', 'Capacity building', 'Business solutions'].map((c) => `<button type="button" aria-pressed="${c === selected}">${c}</button>`).join('')}</div>`,
  parameters: { surface: 'black', docs: { description: { story: 'Topic picker from the contact form (`.cx-chips`, `aria-pressed`). Selected = green with white text.' } } },
};
export const Tabs = {
  args: { selected: 0 },
  argTypes: { selected: { control: { type: 'range', min: 0, max: 3 } } },
  render: ({ selected }) => `<div class="cl-tabs" role="tablist">${[['ทั้งหมด', 'All', 14], ['ภาครัฐ', 'Public', 6], ['พลังงาน', 'Energy', 4], ['การเงิน', 'Financial', 4]].map(([th, en, n], i) => `<button role="tab" aria-selected="${i === selected}">${t(th, en)} <small>${n}</small></button>`).join('')}</div>`,
};
export const StatusBadge = { name: 'Status Badge (ADDED)', render: () => `<div class="sb-row">${[['success', 'สำเร็จ', 'Success'], ['error', 'ผิดพลาด', 'Error'], ['warning', 'คำเตือน', 'Warning'], ['info', 'ข้อมูล', 'Info']].map(([k, th, en]) => `<span class="lc-badge ${k}">${t(th, en)}</span>`).join('')}</div>` };
