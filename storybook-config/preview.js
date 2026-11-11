import '../website/assets/fonts/fonts.css';
import '../design-tokens/tokens.css';
import '../website/css/base.css';
import '../website/css/inner.css';
import '../website/css/ds-overrides.css';
import '../stories/styles/added-components.css';
import '../stories/styles/storybook.css';

const SURFACES = { eggwhite: '', black: 'on-k', green: 'on-g' };

/** Surface (Eggwhite / Black / Green) + language (TH / EN) toolbar */
export const globalTypes = {
  surface: {
    description: 'Surface / พื้นหลัง',
    toolbar: { title: 'Surface', icon: 'paintbrush', dynamicTitle: true, items: [
      { value: 'eggwhite', title: 'Eggwhite' }, { value: 'black', title: 'Black' }, { value: 'green', title: 'Green' } ] },
  },
  lang: {
    description: 'Language / ภาษา',
    toolbar: { title: 'Lang', icon: 'globe', dynamicTitle: true, items: [
      { value: 'th', title: 'ไทย (TH)' }, { value: 'en', title: 'English (EN)' } ] },
  },
};
export const initialGlobals = { surface: 'eggwhite', lang: 'th' };

const withSurface = (storyFn, ctx) => {
  const { surface = 'eggwhite', lang = 'th' } = ctx.globals;
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang;
  // inner pages use <body class="ip">, the Home page has no class
  document.body.classList.toggle('ip', ctx.parameters.page !== 'home');
  const wrap = document.createElement('div');
  const fixedSurface = ctx.parameters.surface; // a story can force its own surface
  wrap.className = 'sb-canvas ' + (SURFACES[fixedSurface || surface] || '') + (ctx.parameters.full ? ' sb-full' : '');
  wrap.setAttribute('data-surface', fixedSurface || surface);
  const out = storyFn();
  if (typeof out === 'string') wrap.innerHTML = out; else wrap.appendChild(out);
  return wrap;
};

const preview = {
  decorators: [withSurface],
  parameters: {
    layout: 'fullscreen', // the canvas wrapper adds its own 40px padding; set `full: true` for edge-to-edge stories
    controls: { expanded: true, matchers: { color: /(background|color)$/i } },
    backgrounds: { disable: true },
    options: { storySort: { order: ['Introduction', 'Foundations', 'Controls', 'Input', 'Navigation', 'Content', 'Feedback', 'Sections', 'Pages'] } },
    viewport: {
      viewports: {
        desktop: { name: 'Desktop 1440', styles: { width: '1440px', height: '900px' }, type: 'desktop' },
        tablet: { name: 'Tablet 768', styles: { width: '768px', height: '1024px' }, type: 'tablet' },
        mobile: { name: 'Mobile 375', styles: { width: '375px', height: '812px' }, type: 'mobile' },
      },
    },
  },
};
export default preview;
