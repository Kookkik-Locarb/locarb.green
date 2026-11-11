/** LO-CARB Storybook (HTML + Vite) */
const config = {
  framework: { name: '@storybook/html-vite', options: {} },
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: [
    { from: '../website/assets', to: '/assets' },
    { from: '../website', to: '/website' },
  ],
  docs: { autodocs: 'tag' },
  core: { disableTelemetry: true },
};
export default config;
