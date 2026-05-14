import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const source = path.join(root, 'logo.png');
const target = path.join(root, 'public', 'logo.png');

if (!fs.existsSync(source)) {
  console.error('[sync-logo] Missing project logo at hourgymintro/logo.png');
  process.exit(1);
}

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.copyFileSync(source, target);
console.log('[sync-logo] Copied logo.png to public/logo.png');
