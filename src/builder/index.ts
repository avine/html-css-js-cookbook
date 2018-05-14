import { relative, resolve } from 'path';
import { readFileSync, watch, writeFileSync } from 'fs';

import { TreeView } from 'node-treeview';
import { TreeNode, IFile } from 'node-treeview/model';
import { flatten } from 'node-treeview/helper';

const TMPL_NAME = '_template.html';

const ROOT_PATH = resolve('./');
const PAGES_PATH = resolve('./src/pages');
const BUILD_PATH = resolve('./build');

function filenameToTitle(filename: string) {
  const title = filename
    .replace(/\.[a-z0-9]+$/, '')
    .replace(/\-/g, ' ');
  return title.substr(0, 1).toUpperCase() + title.substr(1);
}

function getTmplGenerator(tree: TreeNode[]): ProcessTmpl {
  // Find and extract template at the tree root
  const tmplIndex = tree.findIndex(item => item.name === TMPL_NAME && item.path === '');
  const tmplItem = tree.splice(tmplIndex, 1);
  const tmplContent = (tmplItem[0] as IFile).content || '';

  return (path: string, filename: string, content?: string, depth = 0) => {
    const comment = `<!-- AUTO GENERATED FILE | ${new Date().toUTCString()} -->\n`;

    const pageContent = comment + tmplContent
      .replace('{{baseHref}}', new Array(depth).fill('../').join() || './')
      .replace('{{title}}', filenameToTitle(filename))
      .replace('{{content}}', content || '');

    writeFileSync(resolve(BUILD_PATH, path, filename), pageContent, 'utf8');
    console.log('change:', relative(ROOT_PATH, resolve(PAGES_PATH, path, filename)));
  };
}

function updateResource(tree: TreeNode[], event: string, filename: string, processTmpl: ProcessTmpl) {
  const path = resolve(PAGES_PATH, filename);
  const pathFromPages = relative(PAGES_PATH, path);

  if (event === 'change') {
    const changed = tree.filter(item => item.pathname === pathFromPages)[0] as IFile;
    if (changed) {
      const content = readFileSync(path, 'utf8');
      changed.content = content;
      processTmpl(changed.path, changed.name, changed.content, changed.depth);
    }
  } else {
    console.log('rename:', pathFromPages, '(you need to restart the script)');
  }
}

new TreeView({
  content: true,
  relative: true
}).process(PAGES_PATH).then(tree => {
  tree = flatten(tree);

  const processTmpl = getTmplGenerator(tree);

  // Process
  tree.forEach(item => processTmpl(item.path, item.name, (item as IFile).content, item.depth));

  // Update
  const timeout: { [index: string]: any } = {};
  watch(PAGES_PATH, { recursive: true }, (event, filename) => {
    if (timeout[filename]) clearTimeout(timeout[filename]);
    timeout[filename] = setTimeout(() => {
      delete timeout[filename];
      updateResource(tree, event, filename, processTmpl);
  }, 100);
  });
});

function log(data: any) {
  console.log(JSON.stringify(data, undefined, 2));
}

type ProcessTmpl = (path: string, filename: string, content?: string | undefined, depth?: number) => void;
