import { highlight, languages } from 'prismjs';

import { createNode, insertAfter, querySelectorAll } from './_dom';
import { ON_NAVIGATE } from './_router';

function playHtml(element: Element) {
  element.classList.add('app-playground');
  element.classList.add('app-playground--demo');
}

function insertSource(element: Element, type: 'js' | 'css' | 'html') {
  const source = element.innerHTML.trim().replace(/\n{2,}/g, '\n\n');
  const code = createNode('<pre class="app-playground"><code class="app-playground__code"></code></pre>');
  (code.firstChild as Element).innerHTML = highlight(source, languages[type], languages[type]);
  code.appendChild(createNode(`<div class="app-playground__label">${type}</div>`));
  insertAfter(code, element);
}

function enablePlayground(playground: Element) {
  switch (playground.nodeName.toLowerCase()) {
    case 'script':
      insertSource(playground, 'js');
      break;
    case 'style':
      insertSource(playground, 'css');
      break;
    default:
      insertSource(playground, 'html');
      playHtml(playground);
      break;
  }
}

function playgroundHandler() {
  querySelectorAll<Element>('[app-content] [app-playground]').forEach(enablePlayground);
}

export function initPlayground() {
  window.addEventListener(ON_NAVIGATE, playgroundHandler);
}
