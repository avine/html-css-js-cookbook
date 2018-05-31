let id = 0;
export function getId() {
  id += 1;
  return id;
}

export function querySelectorAll<T>(selector: string, element?: Element): T[] {
  return [].slice.call((element || document).querySelectorAll(selector));
}

export function createNode(html: string) {
  const wrap = document.createElement('div');
  wrap.innerHTML = html || ' ';
  // FIXME: if `html` is a string then wrap.firstChild is a `Text` and not a `Element`
  return wrap.removeChild(wrap.firstChild as Element);
}

export function wrapNode(element: Element, wrapCss = '') {
  const wrap = document.createElement('div');
  if (wrapCss) wrap.classList.add(wrapCss);
  if (element.parentNode) {
    element.parentNode.insertBefore(wrap, element);
  }
  wrap.appendChild(element);
  return wrap;
}

export function toggleNode(element: Element, parentElement?: Element) {
  let toggleId = parseInt(element.getAttribute('app-toggle-id') as any, 10);
  if (!toggleId) {
    toggleId = getId();
    element.setAttribute('app-toggle-id', toggleId + '');
    if (!element.parentNode && parentElement) {
      parentElement.appendChild(element); // `parent` required to insert `node` the first time
      return toggleId;
    }
  }

  let placeholder;
  if (element.parentNode) {
    placeholder = createNode(`<script type="placeholder" app-toggle-id="${toggleId}">`);
    element.parentNode.insertBefore(placeholder, element);
    element.parentNode.removeChild(element);
  } else {
    placeholder = document.querySelector(`[app-toggle-id="${toggleId}"]`);
    placeholder.parentNode.insertBefore(element, placeholder);
    placeholder.parentNode.removeChild(placeholder);
  }
  return toggleId;
}

export function cloneScript(dummy: HTMLScriptElement) {
  const script = document.createElement('script');
  [].forEach.call(dummy.attributes, (attr: Attr) => script.setAttribute(attr.name, attr.value));
  script.innerHTML = dummy.innerHTML;
  return script;
}

export function insertHtml(html: string, element: Element ) {
  element.innerHTML = html;
  querySelectorAll<HTMLScriptElement>('script', element).forEach((dummy) => {
    if (!dummy.hasAttribute('app-script-defer') && dummy.parentNode) {
      dummy.parentNode.insertBefore(cloneScript(dummy), dummy);
      dummy.parentNode.removeChild(dummy);
    }
  });
  return element.innerHTML;
}

export function getAction(name: string, link: Element, callback: any) {
  link.classList.add('app-action');
  const action = {
    link,
    active: false,
    handler: (event?: Event) => {
      if (event) event.preventDefault();
      action.active = link.classList.toggle('app-action--active');
      sessionStorage.setItem(name, action.active + '');
      callback();
    },
  };
  if (sessionStorage.getItem(name) === 'true') action.handler();
  link.addEventListener('click', action.handler);
  return action;
}

export function resolveUrl(href: string) {
  if (href === undefined || href === null) return undefined;
  const a = document.createElement('a');
  a.setAttribute('href', href);
  return a.href;
}

export function fetchContent404() {
  return fetch(resolveUrl('/pages/error404.html')).then(response => response.text());
}

export function fetchContent(url: string, element: Element) {
  return fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        return fetchContent404().then(html => html.replace('{{url}}', url));
      }
      return response.text();
    })
    .then(html => insertHtml(html, element));
}
