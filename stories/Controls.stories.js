import * as S from './snippets.js';
import { t, arrow, icons, label } from './_helpers.js';

/* ---------- Button ---------- */
const VARIANT = { Primary: 'b-g', Secondary: 'b-k', Tertiary: 'b-c' };
const button = ({ variant, labelTh, labelEn, arrow: withArrow, disabled }) => variant === 'Ghost'
  ? `<a class="xh-ghost" href="#"${disabled ? ' aria-disabled="true" style="opacity:.4;pointer-events:none"' : ''}>${t(labelTh, labelEn)}</a>`
  : `<a class="btn ${VARIANT[variant]}" href="#"${disabled ? ' aria-disabled="true" style="opacity:.4;pointer-events:none"' : ''}>${t(labelTh, labelEn)}${withArrow ? arrow : ''}</a>`;

export default {
  title: 'Controls/Button',
  render: (args) => `<div class="sb-row">${button(args)}</div>`,
  argTypes: {
    variant: { control: 'inline-radio', options: ['Primary', 'Secondary', 'Tertiary', 'Ghost'], description: 'Primary = green (white label + icon) · Secondary = black · Tertiary = eggwhite (use on Black/Green surfaces) · Ghost = outline' },
    labelTh: { control: 'text', name: 'Label (TH)' },
    labelEn: { control: 'text', name: 'Label (EN)' },
    arrow: { control: 'boolean', description: 'Circular arrow chip' },
    disabled: { control: 'boolean' },
  },
  args: { variant: 'Primary', labelTh: 'คุยกับเรา', labelEn: 'Talk to us', arrow: true, disabled: false },
  parameters: { docs: { description: { component: 'Pill buttons with a circular arrow chip — CSS `.btn .b-g / .b-k / .b-c`, `.xh-ghost`. Hover: green → black, black → green, eggwhite → green. Use one Primary per view.' } } },
  tags: ['autodocs'],
};

export const Primary = {};
export const Secondary = { args: { variant: 'Secondary' } };
export const Tertiary = { args: { variant: 'Tertiary', labelTh: 'ดูทั้งหมด', labelEn: 'See all' }, parameters: { surface: 'black' } };
export const Ghost = { args: { variant: 'Ghost', labelTh: 'ดูโซลูชันของเรา', labelEn: 'Explore our solutions', arrow: false }, parameters: { surface: 'black', docs: { description: { story: 'Outline button used on dark hero photos.' } } } };
export const AllVariants = {
  render: () => `<div class="sb-col">${['Primary', 'Secondary', 'Tertiary', 'Ghost'].map((v) => `${label(v)}<div class="sb-row${v === 'Ghost' || v === 'Tertiary' ? ' on-k' : ''}" style="${v === 'Ghost' || v === 'Tertiary' ? 'padding:16px' : ''}">${button({ variant: v, labelTh: 'คุยกับเรา', labelEn: 'Talk to us', arrow: v !== 'Ghost' })}${button({ variant: v, labelTh: 'คุยกับเรา', labelEn: 'Talk to us', arrow: v !== 'Ghost', disabled: true })}</div>`).join('')}</div>`,
};
export const NavCTA = { name: 'Nav CTA (header)', render: () => S.navCta };
export const SubmitBlock = { name: 'Submit (block)', render: () => `<div style="max-width:560px">${S.send}</div>` };
