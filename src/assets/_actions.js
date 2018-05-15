import { highlight, languages } from 'prismjs';

import { createNode, getAction, toggleNode, wrapNode } from './_helper';

export function toggleCss() {
  const allCss = document.querySelectorAll('[app-css]');
  return getAction('Disable CSS', () => {
    allCss.forEach(css => toggleNode(css));
  }).link;
}

export function viewCode() {
  const body = document.querySelector('body');
  const source = document.querySelector('[app-content]');
  const wrap = wrapNode(source, 'app-content__wrap');
  const code = createNode('<pre class="app-content__code language-html"><code></code></pre>');
  source.classList.add('app-content__source');
  return getAction('View code', () => {
    body.classList.toggle('app-content');
    code.firstChild.innerHTML = highlight(source.innerHTML.trim(), languages.html, 'html');
    toggleNode(code, wrap);
  }).link;
}

export function bootstrapMenu() {
  const menu = createNode('<div class="app-menu">');
  menu.appendChild(toggleCss());
  menu.appendChild(viewCode());

  const body = document.querySelector('body');
  body.appendChild(menu);
}
