const path = require('path');
const fs = require('fs');

const { TreeView } = require('node-treeview');
const { flatten } = require('node-treeview/helper');

const TMPL_NAME = '_template.html';

const PAGES_PATH = path.resolve(__dirname, './pages');
const TARGET_PATH = path.resolve(__dirname, './src');

new TreeView({
  content: true,
  relative: true
}).process(PAGES_PATH).then(tree => {
  const flat = flatten(tree);

  // Prepare
  const tmplIndex = flat.findIndex(item => item.name === TMPL_NAME && item.path === '');
  const tmplItem = flat.splice(tmplIndex, 1)[0];
  const comment = `<!-- AUTO GENERATED FILE | ${new Date().toUTCString()} -->\n`;

  function processTmpl(dirpath, filename, content) {
    const html = comment + tmplItem.content
      .replace('{{title}}', filenameToTitle(filename))
      .replace('{{content}}', content);

    let fullname = dirpath.replace(/\/|\\/g, '-');
    fullname = (fullname ? fullname + '-' : '') + filename;

    fs.writeFileSync(path.resolve(TARGET_PATH, fullname), html, 'utf8');
    console.log('Updated:', path.resolve(dirpath, filename));
  }

  // Process
  flat.forEach(item => processTmpl(item.path, item.name, item.content));

  // Update
  const timeout = {};
  fs.watch(PAGES_PATH, { recursive: true }, (eventType, filename) => {
    if (timeout[filename]) clearTimeout(timeout[filename]);
    timeout[filename] = setTimeout(() => {
      delete timeout[filename];

      const modified = flat.filter(item => item.name === filename)[0];
      if (modified) {
        const content = fs.readFileSync(path.resolve(PAGES_PATH, modified.name), 'utf8');
        modified.content = content;
        processTmpl(modified.path, modified.name, modified.content);
      } else {
        // FIXME: sub folder still come here...!
        console.log('Unable to process:', filename);
      }
    }, 100);
  });
});

function filenameToTitle(filename) {
  const title = filename.replace('.html', '').replace(/\-/g, ' ');
  return title.substr(0, 1).toUpperCase() + title.substr(1);
}

function log(data) {
  console.log(JSON.stringify(data, undefined, 2));
}
