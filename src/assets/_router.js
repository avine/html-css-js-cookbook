import { getUrl } from './_helper';

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

export function bootstrapScripts() {
  content.querySelectorAll('script').forEach((dummy) => {
    dummy.parentNode.removeChild(dummy);
    const script = document.createElement('script');
    script.setAttribute('app-script-alive', '');
    script.innerHTML = dummy.innerHTML;
    content.appendChild(script);
  });
}

export function emit(appUrl) {
  const event = new CustomEvent(ON_NAVIGATE, { detail: { appUrl } });
  window.dispatchEvent(event);
}

export function navigate(url) {
  if (url && url !== defaultUrl) {
    fetch(url).then(response => response.text()).then((html) => {
      content.innerHTML = html;
      bootstrapScripts();
      emit(url);
    });
  } else {
    content.innerHTML = defaultContent;
    bootstrapScripts();
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
