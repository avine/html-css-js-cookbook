import { highlight, languages } from 'prismjs';

import { createNode, getAction, toggleNode, wrapNode } from './_helper';
import { ON_NAVIGATE } from './_router';

function getLinkIcon(icon: string, href = '#') {
  return createNode(`<a href="${href}"><i class="fas fa-${icon} fa-fw fa-lg"></i></a>`);
}

// TODO: MOVE THIS IN `_helper`...
export function querySelectorAll<T>(selector: string, element?: Element): T[] {
  return [].slice.call((element || document).querySelectorAll(selector));
}

export function toggleCss() {
  const headCss = querySelectorAll<HTMLStyleElement>('head [app-css-toggle]');
  let contentCss: HTMLStyleElement[];

  const toggle = (styles: HTMLStyleElement[]) => styles.forEach((style) => {
    style.disabled = !style.disabled; // eslint-disable-line no-param-reassign
  });

  const action = getAction('toggle_css', getLinkIcon('eye-slash'), () => {
    toggle(headCss);
    if (contentCss) toggle(contentCss);
  });

  window.addEventListener(ON_NAVIGATE, () => {
    contentCss = querySelectorAll('[app-content] [app-css-toggle]');
    if (action.active) toggle(contentCss);
  });

  return action.link;
}

function formatSource(source: Element) {
  const code = source.cloneNode(true) as Element;
  querySelectorAll<Element>('[app-code-hidden]', code).forEach((hidden) => {
    if (hidden.parentNode) hidden.parentNode.removeChild(hidden);
  });
  return code.innerHTML.trim().replace(/\n{2,}/g, '\n\n');
}

export function viewCode() {
  const source = document.querySelector('[app-content]');
  if (!source) return;

  source.classList.add('app-code__source');
  const wrap = wrapNode(source, 'app-code');
  const code = createNode('<pre class="app-code__target language-html"><code></code></pre>');

  const action = getAction('view_code', getLinkIcon('code'), () => {
    wrap.classList.toggle('app-code--active');
    toggleNode(code, wrap);
  });

  window.addEventListener(ON_NAVIGATE, () => {
    code.firstChild.innerHTML = highlight(formatSource(source), languages.html, languages.html);
  });

  return action.link;
}

export function initTool() {
  const tool = document.querySelector('[app-tool]');
  if (!tool) return;

  tool.classList.add('app-tool');

  tool.appendChild(toggleCss());
  tool.appendChild(viewCode());
}
