import { highlight, languages } from 'prismjs';

import { createNode, insertAfter, makeScriptAlive, querySelectorAll } from './_dom';
import { ON_NAVIGATE } from './_router';

function isDeferred(playground: HTMLScriptElement) {
  return playground.hasAttribute('app-script-defer');
}

function playJs(playground: HTMLScriptElement, action: Element) {
  if (!isDeferred(playground)) {
    return;
  }
  action.addEventListener('click', () => {
    if (playground.parentNode) {
      playground.parentNode.insertBefore(makeScriptAlive(playground), playground);
      playground.parentNode.removeChild(playground);
    }
  });
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
  // Remove useless indentation
  let lines = html.split('\n');
  const indent = lines.reduce((idt, currLine) => {
    if (currLine) {
      const currIndent = (currLine.match(/^[\s]+/) || [''])[0].length;
      idt = idt === -1 ? currIndent : Math.min(idt, currIndent);
    }
    return idt;
  }, -1);
  if (indent > 0) lines = lines.map(line => line.substr(indent));
  return lines.join('\n').trim().replace(/\n{2,}/g, '\n\n');
}

function getLabel(type: SourceType) {
  return createNode(`<span class="app-playground__action app-playground__action--disabled">${type}</span>`);
}

function getAction(type: SourceType, wrap: Element, isJs = false) {
  const action = createNode(`<a href="#" class="app-playground__action">${type}</a>`);
  if (isJs) {
    wrap.classList.add('app-playground--disabled');
  }
  action.addEventListener('click', (event) => {
    event.preventDefault();
    if (isJs) {
      wrap.classList.remove('app-playground--disabled');
      action.classList.add('app-playground__action--disabled');
    } else {
      wrap.classList.toggle('app-playground--disabled');
    }
  });
  return action;
}

function hasAction(playground: Element, type: SourceType) {
  switch (type) {
    case 'js': return isDeferred(playground as HTMLScriptElement);
    case 'css': return true;
    case 'html': return false;
  }
}

function insertSource(playground: Element, type: SourceType) {
  const wrap = createNode('<pre class="app-playground"></pre>');
  const code = createNode('<code class="app-playground__code"></code>');
  const action = hasAction(playground, type) ? getAction(type, wrap, type === 'js') : getLabel(type);
  const source = formatSource(playground.innerHTML);
  code.innerHTML = highlight(source, languages[type], languages[type]);
  wrap.appendChild(code);
  wrap.appendChild(action);
  let anchor: Element | null = null;
  const anchorId = playground.getAttribute('app-playground') || '';
  anchor = document.querySelector(`[app-playground-anchor="${anchorId}"]`);
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
