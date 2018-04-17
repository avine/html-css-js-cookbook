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
  code.firstChild.innerHTML = highlight(source.innerHTML.trim(), languages.html, 'html');

  return getAction('View code', () => {
    body.classList.toggle('app-content');
    toggleNode(code, wrap);
  }).link;
}
