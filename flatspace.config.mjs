import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

export default {
  outDir: 'dist',
  contentDir: 'config',
  theme: './src/theme.mjs'
};
