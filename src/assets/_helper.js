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

export function getAction(title, callback) {
  const link = createNode(`<a href="#" class="app-tool__link">${title}</a>`);
  const handler = (e) => {
    if (e) e.preventDefault();
    sessionStorage.setItem(title, link.classList.toggle('app-tool__link_active'));
    callback();
  };
  link.addEventListener('click', handler);
  if (sessionStorage.getItem(title) === 'true') handler();
  return { link, handler };
}

export function getUrl(href) {
  const a = document.createElement('a');
  a.setAttribute('href', href);
  return a.href;
}
