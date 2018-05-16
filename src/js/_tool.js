import { highlight, languages } from 'prismjs';

import { createNode, toggleNode, wrapNode } from './_helper';
import { ON_NAVIGATE } from './_router';

export function getAction(title, callback) {
  const link = createNode(`<a href="#" class="app-tool__link">${title}</a>`);
  const action = {
    link,
    active: false,
    handler: (e) => {
      if (e) e.preventDefault();
      action.active = link.classList.toggle('app-tool__link_active');
      sessionStorage.setItem(title, action.active);
      callback();
    },
  };
  if (sessionStorage.getItem(title) === 'true') action.handler();
  link.addEventListener('click', action.handler);
  return action;
}

export function toggleCss(selector) {
  const allCss = document.querySelectorAll(selector);
  return getAction('<i class="fas fa-image fa-fw fa-lg"></i>', () => {
    allCss.forEach(css => toggleNode(css));
  }).link;
}

export function viewCode() {
  const source = document.querySelector('[app-content]');
  const wrap = wrapNode(source, 'app-code');
  const code = createNode('<pre class="app-code__target language-html"><code></code></pre>');
  source.classList.add('app-code__source');
  const refresh = () => {
    code.firstChild.innerHTML = highlight(source.innerHTML.trim(), languages.html, 'html');
  };
  window.addEventListener(ON_NAVIGATE, refresh);
  return getAction('<i class="fas fa-code fa-fw fa-lg"></i>', () => {
    wrap.classList.toggle('app-code_active');
    refresh();
    toggleNode(code, wrap);
  }).link;
}

export function bootstrapTool() {
  const tool = document.querySelector('[app-tool]');
  tool.classList.add('app-tool');
  // tool.appendChild(toggleCss('[app-css-toggle]'));
  tool.appendChild(viewCode());
}
