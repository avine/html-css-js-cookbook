import { SPA_URL_STATE_PREFIX } from '../../config';
import { insertHtml, querySelectorAll, resolveUrl } from './_dom';
import { fetchContent } from './_fetch';

let content: Element;
let baseContent: string;
let baseUrl: { root: string; index: string; };

export function getBaseHref() {
  const root = resolveUrl((document.querySelector('base') as HTMLBaseElement).href) as string;
  const index = resolveUrl(`${root}index.html`) as string;
  return { root, index };
}

export const ON_NAVIGATE = 'appNavigate';

export function addStatePrefix(url: string) {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  if (a.pathname !== '/') a.pathname = SPA_URL_STATE_PREFIX + a.pathname;
  return a.href;
}

export function removeStatePrefix(url: string) {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.pathname = a.pathname.replace(new RegExp(`^${SPA_URL_STATE_PREFIX}`), '');
  return a.href;
}

function pushState(url: string) {
  window.history.pushState({ appUrl: url }, undefined, addStatePrefix(url));
}

function replaceState(url: string) {
  window.history.replaceState({ appUrl: url }, undefined, addStatePrefix(url));
}

function triggerEvent(appUrl: string) {
  const event = new CustomEvent(ON_NAVIGATE, { detail: { appUrl } });
  window.dispatchEvent(event);
}

export function navigate(url: string) {
  if (url && url === baseUrl.index) replaceState(baseUrl.root);
  if (url && url !== baseUrl.root && url !== baseUrl.index) {
    return fetchContent(url, content).then(() => triggerEvent(url));
  }
  insertHtml(baseContent, content);
  triggerEvent(baseUrl.root);
  return Promise.resolve();
}

function stateHandler(event: PopStateEvent) {
  if (event.state && event.state.appUrl) {
    navigate(event.state.appUrl);
  }
}

function linkHandler(event: Event) {
  const target = event.target as Element;
  if (target.hasAttribute('app-link')) {
    const link = target.getAttribute('app-link');
    let url;
    if (link) {
      url = resolveUrl(link);
    }
    if (target.nodeName.toLowerCase() === 'a') {
      event.preventDefault();
      if (!link && (target as HTMLAnchorElement).href) {
        url = (target as HTMLAnchorElement).href;
      }
    }
    if (url && url !== removeStatePrefix(window.location.href)) {
      pushState(url);
      navigate(url);
    }
  }
}

export function updateActiveLink() {
  querySelectorAll<Element>('[app-link]').forEach(((link) => {
    const linkUrl = resolveUrl(link.getAttribute('app-link') || (link as HTMLAnchorElement).href);
    link.classList[linkUrl === removeStatePrefix(window.location.href) ? 'add' : 'remove']('app-link__active');
  }));
}

// The "handler" version is the same because we don't rely on the provided "event" parameter...
const activeLinkHandler = updateActiveLink;

export function initRouter() {
  // Init
  content = document.querySelector('[app-content]') as Element;
  baseContent = content.innerHTML;
  baseUrl = getBaseHref();

  // Bootstrap
  navigate(removeStatePrefix(window.location.href)).then(() => content.classList.add('app-content--active'));

  window.addEventListener('popstate', stateHandler);
  window.addEventListener('click', linkHandler);
  window.addEventListener(ON_NAVIGATE, activeLinkHandler);
}
