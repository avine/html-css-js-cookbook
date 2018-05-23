import { resolveUrl, fetchContent, insertHtml } from './_helper';

let content;
let baseContent;
let baseUrl;

export function getBaseHref() {
  return resolveUrl(document.querySelector('base').href);
}

export const ON_NAVIGATE = 'app-navigate';

export const STATE_PREFIX = '/content';

export function addStatePrefix(url) {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  if (a.pathname !== '/') a.pathname = STATE_PREFIX + a.pathname;
  return a.href;
}

export function removeStatePrefix(url) {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.pathname = a.pathname.replace(new RegExp(`^${STATE_PREFIX}`), '');
  return a.href;
}

function pushState(url) {
  window.history.pushState({ appUrl: url }, null, addStatePrefix(url, STATE_PREFIX));
}

function replaceState(url) {
  window.history.replaceState({ appUrl: url }, null, addStatePrefix(url, STATE_PREFIX));
}

function triggerEvent(appUrl) {
  const event = new CustomEvent(ON_NAVIGATE, { detail: { appUrl } });
  window.dispatchEvent(event);
}

export function navigate(url) {
  if (url && url !== baseUrl) {
    return fetchContent(url, content).then(() => triggerEvent(url));
  }
  insertHtml(baseContent, content);
  triggerEvent(baseUrl);
  return Promise.resolve();
}

function stateHandler(event) {
  if (event.state && event.state.appUrl) {
    navigate(event.state.appUrl);
  }
}

function linkHandler(event) {
  if (event.target.hasAttribute('app-link')) {
    const link = event.target.getAttribute('app-link');
    let url;
    if (link) {
      url = resolveUrl(link);
    }
    if (event.target.nodeName.toLowerCase() === 'a') {
      event.preventDefault();
      if (!link && event.target.href) {
        url = event.target.href;
      }
    }
    if (url && url !== removeStatePrefix(window.location.href)) {
      pushState(url);
      navigate(url);
    }
  }
}

export function updateActiveLink() {
  document.querySelectorAll('[app-link]').forEach(((link) => {
    const linkUrl = resolveUrl(link.getAttribute('app-link') || link.href);
    link.classList[linkUrl === removeStatePrefix(window.location.href) ? 'add' : 'remove']('app-link__active');
  }));
}

// The "handler" version is the same because we don't rely on the provided "event" parameter...
const activeLinkHandler = updateActiveLink;

export function initRouter() {
  // Init
  content = document.querySelector('[app-content]');
  baseContent = content.innerHTML;
  baseUrl = getBaseHref();

  // Bootstrap
  navigate(removeStatePrefix(window.location.href)).then(() => content.classList.add('app-content--active'));

  window.addEventListener('popstate', stateHandler);
  window.addEventListener('click', linkHandler);
  window.addEventListener(ON_NAVIGATE, activeLinkHandler);
}
