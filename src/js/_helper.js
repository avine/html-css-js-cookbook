let id = 0;
export function getId() {
  id += 1;
  return id;
}

export function createNode(node) {
  const wrap = document.createElement('div');
  wrap.innerHTML = node;
  return wrap.removeChild(wrap.firstChild);
}

export function wrapNode(node, css = '') {
  const wrap = document.createElement('div');
  if (css) wrap.classList.add(css);
  node.parentNode.insertBefore(wrap, node);
  wrap.appendChild(node);
  return wrap;
}

export function toggleNode(node, parent = undefined) {
  let toggleId = node.getAttribute('app-toggle-id');
  if (!toggleId) {
    toggleId = getId();
    node.setAttribute('app-toggle-id', toggleId);
    if (!node.parentNode) {
      parent.appendChild(node); // `parent` required to insert `node` the first time
      return;
    }
  }
  let placeholder;
  if (node.parentNode) {
    placeholder = createNode(`<script type="placeholder" app-toggle-id="${id}">`);
    node.parentNode.insertBefore(placeholder, node);
    node.parentNode.removeChild(node);
  } else {
    placeholder = document.querySelector(`[app-toggle-id="${id}"]`);
    placeholder.parentNode.insertBefore(node, placeholder);
    placeholder.parentNode.removeChild(placeholder);
  }
}

export function getUrl(href) {
  if (href === undefined || href === null) return undefined;
  const a = document.createElement('a');
  a.setAttribute('href', href);
  return a.href;
}

export function insertHtml(html, node) {
  node.innerHTML = html; // eslint-disable-line no-param-reassign
  node.querySelectorAll('script').forEach((dummy) => {
    dummy.parentNode.removeChild(dummy);
    const script = document.createElement('script');
    script.setAttribute('app-script-alive', '');
    script.innerHTML = dummy.innerHTML;
    node.appendChild(script);
  });
  return node.innerHTML;
}

export function fetchContent(url, node) {
  return fetch(url).then(response => response.text()).then(html => insertHtml(html, node));
}
