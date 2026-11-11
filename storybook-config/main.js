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
  // Storybook's own UI bundle is ~900 kB; raise the limit so Vite doesn't warn about it
  viteFinal: async (cfg) => ({ ...cfg, build: { ...(cfg.build || {}), chunkSizeWarningLimit: 1500 } }),
};
export default config;
