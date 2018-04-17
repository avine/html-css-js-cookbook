const path = require('path');
const fs = require('fs');

const { TreeView } = require('node-treeview');
const { flatten } = require('node-treeview/helper');

// FIXME: it works only if './pages' has no sub folders.

new TreeView({
  content: true
}).process(path.resolve(__dirname, './pages')).then(tree => {
  const flat = flatten(tree);

  const templateIndex = flat.findIndex(item => item.name === '_template.html');
  const template = flat.splice(templateIndex, 1)[0];
  const comment = `<!-- AUTO GENERATED FILE | ${new Date().toUTCString()} -->\n`;

  function processTemplate(item) {
    const full = comment + template.content
      .replace('{{title}}', item.name)
      .replace('{{content}}', item.content);

    fs.writeFileSync(path.resolve(__dirname, './src', item.name), full, 'utf8');
    console.log('Updated: ' + item.pathname);
  }

  flat.forEach(item => processTemplate(item));

  const timeout = {};
  fs.watch(path.resolve(__dirname, './pages'), { recursive: true }, (eventType, filename) => {
    if (timeout[filename]) clearTimeout(timeout[filename]);
    timeout[filename] = setTimeout(() => {
      delete timeout[filename];

      const modified = flat.filter(item => item.name === filename)[0];
      if (modified) {
        const content = fs.readFileSync(path.resolve(__dirname, './pages', modified.name), 'utf8');
        modified.content = content;
        processTemplate(modified);
      } else {
        // TODO...
      }
    }, 100);
  });
});
