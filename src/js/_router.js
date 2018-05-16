import { resolveUrl, fetchContent, insertHtml } from './_helper';

let content;
let defaultContent;
let defaultUrl;

export const ON_NAVIGATE = 'app-navigate';

function pushState(url) {
  window.history.pushState({ appUrl: url }, null, url);
}

function replaceState(url) {
  window.history.replaceState({ appUrl: url }, null, url);
}

function emit(appUrl) {
  const event = new CustomEvent(ON_NAVIGATE, { detail: { appUrl } });
  window.dispatchEvent(event);
}

export function navigate(url) {
  if (url && url !== defaultUrl) {
    fetchContent(url, content).then(() => emit(url));
  } else {
    insertHtml(defaultContent, content);
    emit(defaultUrl);
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

export function updateActiveLink(appUrl) {
  document.querySelectorAll('[app-link]').forEach(((link) => {
    const linkUrl = resolveUrl(link.getAttribute('app-link') || link.href);
    link.classList[linkUrl === appUrl ? 'add' : 'remove']('app-link__active');
  }));
}

function activeLinkHandler(event) {
  updateActiveLink(event.detail.appUrl);
}

export function initRouter() {
  // Init
  content = document.querySelector('[app-content]');
  defaultContent = content.innerHTML;
  defaultUrl = window.location.href;

  // On first load (for Chrome)
  replaceState(defaultUrl);

  window.addEventListener('popstate', stateHandler);
  window.addEventListener('click', linkHandler);
  window.addEventListener(ON_NAVIGATE, activeLinkHandler);
}
