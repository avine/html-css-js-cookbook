import { getUrl, fetchContent, insertHtml } from './_helper';

let content;
let defaultContent;
let defaultUrl;

export const ON_NAVIGATE = 'app-navigate';

export function pushState(url) {
  window.history.pushState({ appUrl: url }, null, url);
}

export function replaceState(url) {
  window.history.replaceState({ appUrl: url }, null, url);
}

export function emit(appUrl) {
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

export function stateHandler(event) {
  if (event.state && event.state.appUrl) {
    navigate(event.state.appUrl);
  }
}

export function linkHandler(event) {
  const link = event.target.getAttribute('app-link');
  if (link !== null) {
    let url;
    if (link) {
      url = getUrl(link);
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

export function bootstrapRouter() {
  // Init
  content = document.querySelector('[app-content]');
  defaultContent = content.innerHTML;
  defaultUrl = window.location.href;

  // On first load (for Chrome)
  replaceState(defaultUrl);

  window.addEventListener('popstate', stateHandler);
  document.addEventListener('click', linkHandler);
}
