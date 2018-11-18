const Path = require('path');
const Fs = require('fs');

const base = {
  from: '<base href="/">',
  to: '<base href="/web-explorer/">',
}

const indexPath = Path.resolve(__dirname, 'docs/index.html');
const indexContent = Fs.readFileSync(indexPath, 'utf-8');

Fs.writeFileSync(
  indexPath,
  indexContent.replace(base.from, base.to),
  { encoding: 'utf-8' }
);

console.log(`
Set base in index.html: ${base.to}
`);
