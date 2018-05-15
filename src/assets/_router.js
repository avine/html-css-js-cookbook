import { getUrl } from './_helper';

let defaultUrl;
let content;

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

export function navigate(url) {
  if (url && url !== defaultUrl) {
    fetch(url).then(response => response.text()).then((html) => {
      content.innerHTML = html;
      bootstrapScripts();
    });
  } else {
    content.innerHTML = '';
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
  defaultUrl = window.location.href;
  content = document.querySelector('[app-content]');

  // On first load (for Chrome)
  replaceState(defaultUrl);

  window.addEventListener('popstate', stateHandler);
  document.addEventListener('click', linkHandler);
}
