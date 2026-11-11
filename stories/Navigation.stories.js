import * as S from './snippets.js';
import { t } from './_helpers.js';
export default { title: 'Navigation/Components', parameters: { full: true } };
export const Header = { render: () => `<div class="sb-full">${S.header}</div>`, parameters: { surface: 'eggwhite', docs: { description: { story: 'Sticky header (80px). Use the Viewport toolbar → Mobile 375 to see the mobile layout.' } } } };
export const UtilitySwitchers = { name: 'Language / Text-size switchers', render: () => `<div style="padding:24px">${S.utility}</div>` };
export const MegaMenu = { render: () => `<div class="sb-menu-open" style="position:relative;padding:24px;min-height:420px">${S.menu}</div>` };
export const Breadcrumbs = { render: () => `<div style="padding:24px">${S.crumbs}</div>`, parameters: { surface: 'black', docs: { description: { story: 'Sits on the page-hero photo (dark), so it is shown on Black.' } } } };
export const Sidebar = {
  name: 'Sidebar (ADDED)',
  render: () => `<nav class="lc-sidebar" aria-label="Categories">${[['ทั้งหมด', 'All', 24, true], ['บทความ', 'Articles', 9], ['ข่าวและกิจกรรม', 'News & events', 7], ['ผลงาน', 'Portfolio', 5], ['คลังความรู้', 'Knowledge base', 3]].map(([th, en, n, on]) => `<a href="#"${on ? ' aria-current="page"' : ''}>${t(th, en)}<small>${n}</small></a>`).join('')}</nav>`,
  parameters: { full: false },
};
