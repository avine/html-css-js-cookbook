/*
 * Post process of the `./docs` folder for Github pages
 */

const Path = require('path');
const Fs = require('fs');

const base = {
  from: '<base href="/">',
  to: '<base href="/web-explorer/">',
}

const indexPath = Path.resolve(__dirname, 'docs/index.html');
const indexContent = Fs.readFileSync(indexPath, 'utf-8');

const content = indexContent.replace(base.from, base.to);
const notFoundPath = Path.resolve(__dirname, 'docs/404.html');

Fs.writeFileSync(indexPath, content, { encoding: 'utf-8' });
Fs.writeFileSync(notFoundPath, content, { encoding: 'utf-8' });

console.log(`
Update base href in "index.html": ${base.to}
Add "not found" page: 404.html
`);
