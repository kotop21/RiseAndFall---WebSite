// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: '[https://kotop21.github.io](https://kotop21.github.io)',
  base: '/RiseAndFall',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'never'
  }
});
