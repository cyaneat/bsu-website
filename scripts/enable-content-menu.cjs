/** Idempotently enables the news routes in existing menu without replacing the file. */
const fs = require('node:fs');
const path = require('node:path');
const file = path.join(process.cwd(), 'src/components/layout/MegaMenu.tsx');
if (!fs.existsSync(file)) throw new Error('Запусти скрипт из корня bsu-website');
let source = fs.readFileSync(file, 'utf8');
let changed = 0;
for (const label of ['Новости и мероприятия', 'Новости университета']) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rx = new RegExp(`(label:\\s*["']${escaped}["']\\s*,\\s*href:\\s*)["'][^"']+["']`);
  if (!rx.test(source)) throw new Error(`Не найден пункт меню: ${label}`);
  source = source.replace(rx, (_, prefix) => { changed += 1; return `${prefix}"/news"`; });
}
fs.writeFileSync(file, source, 'utf8');
console.log(`Готово: ${changed} пункта меню ведут на /news`);
