import { highlight, languages } from 'prismjs';

import { createNode, getAction, toggleNode, wrapNode } from './_helper';
import { ON_NAVIGATE } from './_router';

function getLinkIcon(icon, href = '#') {
  return createNode(`<a href="${href}"><i class="fas fa-${icon} fa-fw fa-lg"></i></a>`);
}

export function toggleCss() {
  const selector = '[app-css-toggle]';
  const headCss = document.querySelector('head').querySelectorAll(selector);
  let contentCss;

  const toggle = cssArr => cssArr.forEach((css) => {
    css.disabled = !css.disabled; // eslint-disable-line no-param-reassign
  });

  const action = getAction('toggle_css', getLinkIcon('eye-slash'), () => {
    toggle(headCss);
    if (contentCss) toggle(contentCss);
  });

  window.addEventListener(ON_NAVIGATE, () => {
    contentCss = document.querySelector('[app-content]').querySelectorAll(selector);
    if (action.active) toggle(contentCss);
  });

  return action.link;
}

function formatHtml(node) {
  const code = node.cloneNode(true);
  code.querySelectorAll('[app-code-hidden]').forEach(hidden => hidden.parentNode.removeChild(hidden));
  return code.innerHTML.trim().replace(/\n{2,}/g, '\n\n');
}

export function viewCode() {
  const source = document.querySelector('[app-content]');
  source.classList.add('app-code__source');
  const wrap = wrapNode(source, 'app-code');
  const code = createNode('<pre class="app-code__target language-html"><code></code></pre>');

  const action = getAction('view_code', getLinkIcon('code'), () => {
    wrap.classList.toggle('app-code--active');
    toggleNode(code, wrap);
  });

  const refresh = () => {
    code.firstChild.innerHTML = highlight(formatHtml(source), languages.html, 'html');
  };

  window.addEventListener(ON_NAVIGATE, refresh);

  return action.link;
}

export function initTool() {
  const tool = document.querySelector('[app-tool]');
  tool.classList.add('app-tool');

  tool.appendChild(toggleCss());
  tool.appendChild(viewCode());
}
