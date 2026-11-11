import * as S from './snippets.js';
import { icons } from './_helpers.js';
export default { title: 'Controls/Icon Button', tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Icon-only buttons (header search / menu, search close). Always give an `aria-label`. Hover = green with white icon.' } } } };
export const Search = { render: () => S.iconBtn };
export const Menu = { name: 'Menu (mobile)', render: () => S.mobileBtn };
export const All = { render: () => `<div class="sb-row">${S.iconBtn}<button class="ic" type="button" aria-label="Close">${icons.close}</button><button class="ic" type="button" aria-label="Menu">${icons.menu}</button></div>` };
