export function createNode(node) {
  const wrap = document.createElement('div');
  wrap.innerHTML = node;
  return wrap.removeChild(wrap.firstChild);
}

export function wrapNode(node, css = '') {
  const wrap = createNode('<div>');
  if (css) wrap.classList.add(css);
  node.parentNode.insertBefore(wrap, node);
  wrap.appendChild(node);
  return wrap;
}

export function toggleNode(node, parent = undefined) {
  let id = node.getAttribute('app-toggle-id');
  if (!id) {
    id = getId();
    node.setAttribute('app-toggle-id', id);
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
  const link = createNode(`<a href="#" class="app-menu__link">${title}</a>`);
  const handler = function (e) {
    if (e) e.preventDefault();
    sessionStorage.setItem(title, link.classList.toggle('app-menu__link_active'));
    callback();
  };
  link.addEventListener('click', handler);
  if (sessionStorage.getItem(title) === 'true') handler();
  return { link, handler };
}

let id = 1;
export function getId() {
  return id++;
}
