const path = require('path');
const fs = require('fs');

const { TreeView } = require('node-treeview');
const { flatten } = require('node-treeview/helper');

// FIXME: it works only if './pages' has no sub folders.

new TreeView({
  content: true
}).process(path.resolve(__dirname, './pages')).then(tree => {
  const flat = flatten(tree);

  // Prepare
  const templateIndex = flat.findIndex(item => item.name === '_template.html');
  const template = flat.splice(templateIndex, 1)[0];
  const comment = `<!-- AUTO GENERATED FILE | ${new Date().toUTCString()} -->\n`;
  function processTemplate(_path, name, content) {
    const full = comment + template.content
      .replace('{{title}}', fileNameToTitle(name))
      .replace('{{content}}', content);

    fs.writeFileSync(path.resolve(__dirname, './src', name), full, 'utf8');
    console.log('Updated:', path.resolve(_path, name));
  }

  // Process
  flat.forEach(item => processTemplate(item.path, item.name, item.content));

  // Update
  const timeout = {};
  fs.watch(path.resolve(__dirname, './pages'), { recursive: true }, (eventType, filename) => {
    if (timeout[filename]) clearTimeout(timeout[filename]);
    timeout[filename] = setTimeout(() => {
      delete timeout[filename];

      const modified = flat.filter(item => item.name === filename)[0];
      if (modified) {
        const content = fs.readFileSync(path.resolve(__dirname, './pages', modified.name), 'utf8');
        modified.content = content;
        processTemplate(modified.path, modified.name, modified.content);
      } else {
        // TODO...
      }
    }, 100);
  });
});

function fileNameToTitle(filename) {
  const title = filename.replace('.html', '').replace(/\-/g, ' ');
  return title.substr(0, 1).toUpperCase() + title.substr(1);
}
