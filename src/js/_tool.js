import { highlight, languages } from 'prismjs';

import { createNode, getActionFromText, toggleNode, wrapNode } from './_helper';
import { ON_NAVIGATE } from './_router';

export function toggleCss(selector) {
  const allCss = document.querySelectorAll(selector);
  return getActionFromText('toggle_css', '<i class="fas fa-eye-slash fa-fw fa-lg"></i>', () => {
    allCss.forEach(css => toggleNode(css));
  }).link;
}

function formatHtml(node) {
  const code = node.cloneNode(true);
  code.querySelectorAll('[app-code-hidden]').forEach(hidden => hidden.parentNode.removeChild(hidden));
  return code.innerHTML.trim().replace(/\n{2,}/g, '\n\n');
}

export function viewCode() {
  const source = document.querySelector('[app-content]');
  const wrap = wrapNode(source, 'app-code');
  const code = createNode('<pre class="app-code__target language-html"><code></code></pre>');

  source.classList.add('app-code__source');

  const refresh = () => {
    code.firstChild.innerHTML = highlight(formatHtml(source), languages.html, 'html');
  };

  window.addEventListener(ON_NAVIGATE, refresh);

  return getActionFromText('view_code', '<i class="fas fa-code fa-fw fa-lg"></i>', () => {
    wrap.classList.toggle('app-code_active');
    refresh();
    toggleNode(code, wrap);
  }).link;
}

export function initTool() {
  const tool = document.querySelector('[app-tool]');
  tool.classList.add('app-tool');

  tool.appendChild(toggleCss('[app-css-toggle]'));
  tool.appendChild(viewCode());
}
