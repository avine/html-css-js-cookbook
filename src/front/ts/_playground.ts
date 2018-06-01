import { highlight, languages } from 'prismjs';

import { createNode, insertAfter, querySelectorAll } from './_dom';
import { ON_NAVIGATE } from './_router';

function playJs(playground: HTMLScriptElement, action: Element) {
  // TODO...
}

function playCss(playground: HTMLStyleElement, action: Element) {
  action.addEventListener('click', (event) => {
    playground.disabled = !playground.disabled;
  });
}

function playHtml(playground: Element, action: Element) {
  playground.classList.add('app-playground');
  playground.classList.add('app-playground--demo');
}

function formatSource(html: string) {
  return html.trim().replace(/\n{2,}/g, '\n\n');
}

function getLabel(type: SourceType) {
  return createNode(`<span class="app-playground__action app-playground__action--disabled">${type}</span>`);
}

function getAction(type: SourceType, wrap: Element) {
  const action = createNode(`<a href="#" class="app-playground__action">${type}</a>`);
  action.addEventListener('click', (event) => {
    event.preventDefault();
    wrap.classList.toggle('app-playground--disabled');
  });
  return action;
}

function insertSource(playground: Element, type: SourceType) {
  const wrap = createNode('<pre class="app-playground"></pre>');
  const code = createNode('<code class="app-playground__code"></code>');
  const action = type === 'css' ? getAction(type, wrap) : getLabel(type);
  const source = formatSource(playground.innerHTML);
  code.innerHTML = highlight(source, languages[type], languages[type]);
  wrap.appendChild(code);
  wrap.appendChild(action);
  const anchor = document.querySelector(`[app-playground-anchor-${type}]`);
  insertAfter(wrap, anchor || playground);
  return { wrap, code, action };
}

function enablePlayground(playground: Element) {
  const nodeName = playground.nodeName.toLowerCase();
  const type: SourceType = nodeName === 'script' ? 'js' : nodeName === 'style' ? 'css' : 'html';
  const source = insertSource(playground, type);
  switch (type) {
    case 'js': playJs(playground as HTMLScriptElement, source.action); break;
    case 'css': playCss(playground as HTMLStyleElement, source.action); break;
    case 'html': playHtml(playground as Element, source.action); break;
  }
}

function playgroundHandler() {
  querySelectorAll<Element>('[app-content] [app-playground]').forEach(enablePlayground);
}

export function initPlayground() {
  window.addEventListener(ON_NAVIGATE, playgroundHandler);
}

type SourceType = 'js' | 'css' | 'html';
