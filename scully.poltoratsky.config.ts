import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { docLink } from '@scullyio/scully-plugin-docs-link-update';
const { articlePlugin } = require('./plugins/article');
const { DisableAngular } = require('scully-plugin-disable-angular');

setPluginConfig(DisableAngular, 'render', {
  removeState: true
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'poltoratsky',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: articlePlugin,
      slug: {
        folder: './blog'
      },
      postRenderers: [DisableAngular, docLink],
    },
  },
};
