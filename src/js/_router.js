import { resolveUrl, fetchContent, insertHtml } from './_helper';

let content;
let baseContent;
let baseUrl;

export function getBaseHref() {
  return resolveUrl(document.querySelector('base').href);
}

export const ON_NAVIGATE = 'app-navigate';

function pushState(url) {
  window.history.pushState({ appUrl: url }, null, url);
}

function replaceState(url) {
  window.history.replaceState({ appUrl: url }, null, url);
}

function triggerEvent(appUrl) {
  const event = new CustomEvent(ON_NAVIGATE, { detail: { appUrl } });
  window.dispatchEvent(event);
}

export function navigate(url) {
  if (url && url !== baseUrl) {
    fetchContent(url, content).then(() => triggerEvent(url));
  } else {
    insertHtml(baseContent, content);
    triggerEvent(baseUrl);
  }
}

function stateHandler(event) {
  if (event.state && event.state.appUrl) {
    navigate(event.state.appUrl);
  }
}

function linkHandler(event) {
  const link = event.target.getAttribute('app-link');
  if (link !== null) {
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
    if (url && url !== window.location.href) {
      pushState(url);
      navigate(url);
    }
  }
}

export function updateActiveLink() {
  document.querySelectorAll('[app-link]').forEach(((link) => {
    const linkUrl = resolveUrl(link.getAttribute('app-link') || link.href);
    link.classList[linkUrl === window.location.href ? 'add' : 'remove']('app-link__active');
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
  replaceState(baseUrl);
  triggerEvent(baseUrl);

  window.addEventListener('popstate', stateHandler);
  window.addEventListener('click', linkHandler);
  window.addEventListener(ON_NAVIGATE, activeLinkHandler);
}
