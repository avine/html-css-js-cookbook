import { highlight, languages } from 'prismjs';

import { createNode, insertAfter, querySelectorAll } from './_dom';
import { ON_NAVIGATE } from './_router';

function playHtml(playground: Element) {
  playground.classList.add('app-playground');
  playground.classList.add('app-playground--demo');
}

function insertSource(playground: Element, type: SourceType, anchor?: Element | null) {
  const source = playground.innerHTML.trim().replace(/\n{2,}/g, '\n\n');
  const code = createNode('<pre class="app-playground"><code class="app-playground__code"></code></pre>');
  (code.firstChild as Element).innerHTML = highlight(source, languages[type], languages[type]);
  code.appendChild(createNode(`<div class="app-playground__label">${type}</div>`));
  insertAfter(code, anchor || playground);
}

function enablePlayground(playground: Element) {
  let type: SourceType;
  switch (playground.nodeName.toLowerCase()) {
    case 'script':
      type = 'js';
      break;
    case 'style':
      type = 'css';
      break;
    default:
      type = 'html';
      playHtml(playground);
      break;
  }
  insertSource(playground, type, document.querySelector(`[app-playground-${type}]`));
}

function playgroundHandler() {
  querySelectorAll<Element>('[app-content] [app-playground]').forEach(enablePlayground);
}

export function initPlayground() {
  window.addEventListener(ON_NAVIGATE, playgroundHandler);
}

type SourceType = 'js' | 'css' | 'html';
