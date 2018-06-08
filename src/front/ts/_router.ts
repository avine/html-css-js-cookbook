import { FRONT_PAGES_FOLDER, SPA_URL_STATE_PREFIX } from '../../config';
import { insertHtml, querySelectorAll, resolveUrl } from './_dom';
import { fetchContent } from './_fetch';

let content: Element;
let baseUrl: { root: string; index: string; home: string; };

export enum ON_NAVIGATE {
  START = 'appNavigateStart',
  CANCEL = 'appNavigateCancel',
  END = 'appNavigateEnd'
}

function getBaseHref() {
  const root = resolveUrl((document.querySelector('base') as HTMLBaseElement).href) as string;
  const index = resolveUrl(`${root}index.html`) as string;
  const home = resolveUrl(`${root}${FRONT_PAGES_FOLDER}/index.html`) as string;
  return { root, index, home };
}

function addStatePrefix(url: string) {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  if (a.pathname !== '/') a.pathname = SPA_URL_STATE_PREFIX + a.pathname;
  return a.href;
}

function removeStatePrefix(url: string) {
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

function emitNavigation(type: ON_NAVIGATE, appUrl: string) {
  const event = new CustomEvent(type, { detail: { appUrl } });
  window.dispatchEvent(event);
}

function showContent(yes = true) {
  content.classList[yes ? 'add' : 'remove']('app-content--active');
}

let pendingUrl = '';
export function navigate(url: string) {
  if (pendingUrl) {
    emitNavigation(ON_NAVIGATE.CANCEL, pendingUrl);
  }
  if (url === baseUrl.home || url === baseUrl.index) {
    replaceState(baseUrl.root);
  }
  if (url === baseUrl.index || url === baseUrl.root) {
    url = baseUrl.home;
  }
  pendingUrl = url;
  emitNavigation(ON_NAVIGATE.START, url);
  showContent(false);
  return fetchContent(url).then((html) => {
    if (url !== pendingUrl) {
      return;
    }
    insertHtml(html, content);
    pendingUrl = '';
    emitNavigation(ON_NAVIGATE.END, url);
    showContent();
  });
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

function getLinks(container?: Element) {
  return querySelectorAll('[app-link]', container).map((element) => {
    let url = resolveUrl(element.getAttribute('app-link') || (element as HTMLAnchorElement).href);
    if (url === baseUrl.home || url === baseUrl.index) {
      url = baseUrl.root;
    }
    return { element, url, active: url === removeStatePrefix(window.location.href) };
  });
}

export function getActiveLinks(container?: Element) {
  return getLinks(container).filter(link => link.active).map(link => link.element);
}

export function updateActiveLinks() {
  getLinks().forEach(link => link.element.classList[link.active ? 'add' : 'remove']('app-link__active'));
}

// The "handler" version is the same because we don't rely on the provided "event" parameter...
const activeLinkHandler = updateActiveLinks;

export function initRouter() {
  // Init
  content = document.querySelector('[app-content]') as Element;
  baseUrl = getBaseHref();

  // Bootstrap
  navigate(removeStatePrefix(window.location.href)).then(() => showContent());

  window.addEventListener('popstate', stateHandler);
  window.addEventListener('click', linkHandler);
  window.addEventListener(ON_NAVIGATE.END, activeLinkHandler);
}
