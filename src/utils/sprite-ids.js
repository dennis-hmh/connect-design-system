import fs from 'fs'

const svgContent = fs.readFileSync('./public/svg/sprite.svg', 'utf8');

const regex = /<symbol[^>]+id="([^"]+)"/g;

let match;
let ids = [];
while ((match = regex.exec(svgContent)) !== null) {
  ids.push(match[1]);
}

console.log(ids, 'Done!');

fs.writeFileSync(
  './src/utils/icon-list.ts',
  `export type IconId = \n  '${ids.join("'|\n  '")}'\n;\n // To generate lists run 'Node src/utils/sprite-ids.js'`,
);
