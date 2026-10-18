// Runs automatically after `npm install`.
// 1. Copies the reading fonts into www/fonts so the app has them offline.
// 2. On the GitHub build machine only: installs the app's permanent signing key,
//    so every new build can be installed as an update over the previous one.
const fs = require('fs');
const path = require('path');
const os = require('os');

const root = path.join(__dirname, '..');
const nm = path.join(root, 'node_modules');
const out = path.join(root, 'www', 'fonts');
fs.mkdirSync(out, { recursive: true });

const fonts = [
  ['@fontsource-variable/literata', 'literata-latin-wght-normal.woff2'],
  ['@fontsource-variable/literata', 'literata-latin-wght-italic.woff2'],
  ['@fontsource-variable/lora', 'lora-latin-wght-normal.woff2'],
  ['@fontsource-variable/lora', 'lora-latin-wght-italic.woff2'],
  ['@fontsource/atkinson-hyperlegible', 'atkinson-hyperlegible-latin-400-normal.woff2'],
  ['@fontsource/atkinson-hyperlegible', 'atkinson-hyperlegible-latin-400-italic.woff2'],
  ['@fontsource/atkinson-hyperlegible', 'atkinson-hyperlegible-latin-700-normal.woff2'],
  ['@fontsource/cormorant-garamond', 'cormorant-garamond-latin-600-normal.woff2'],
  ['@fontsource/cormorant-garamond', 'cormorant-garamond-latin-700-normal.woff2'],
];
for (const [pkg, file] of fonts) {
  const src = path.join(nm, pkg, 'files', file);
  if (!fs.existsSync(src)) { console.warn('font missing:', src); continue; }
  fs.copyFileSync(src, path.join(out, file));
}
console.log('fonts copied to www/fonts');

if (process.env.CI === 'true') {
  const key = path.join(root, 'signing', 'debug.keystore');
  const dir = path.join(os.homedir(), '.android');
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(key, path.join(dir, 'debug.keystore'));
  console.log('signing key installed');
}
