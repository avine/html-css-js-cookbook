
import { highlight, languages } from 'prismjs';

function bootstrapApp() {
  const menu = Helper.createNode('<div class="app-menu">');
  menu.appendChild(Actions.toggleCss());
  menu.appendChild(Actions.viewCode());

  const body = document.querySelector('body');
  body.appendChild(menu);
}

window.addEventListener('DOMContentLoaded', bootstrapApp);

class Actions {
  static toggleCss() {
    const allCss = document.querySelectorAll('[app-css]');
    return Helper.getAction('Disable CSS', () => {
      allCss.forEach(css => Helper.toggleNode(css));
    });
  }

  static viewCode() {
    const body = document.querySelector('body');
    const source = document.querySelector('[app-content]');
    const wrap = Helper.wrapNode(source, 'app-content__wrap');
    const code = Helper.createNode('<pre class="app-content__code language-html"><code></code></pre>');

    source.classList.add('app-content__source');
    code.firstChild.innerHTML = highlight(source.innerHTML.trim(), languages.html, 'html');

    return Helper.getAction('View code', () => {
      body.classList.toggle('app-content');
      Helper.toggleNode(code, wrap);
    });
  }
}

class Helper {
  static createNode(node) {
    const wrap = document.createElement('div');
    wrap.innerHTML = node;
    return wrap.removeChild(wrap.firstChild);
  }

  static wrapNode(node, css = '') {
    const wrap = Helper.createNode('<div>');
    if (css) wrap.classList.add(css);
    node.parentNode.insertBefore(wrap, node);
    wrap.appendChild(node);
    return wrap;
  }

  static getAction(title, callback) {
    const action = Helper.createNode(`<a href="#" class="app-menu__action">${title}</a>`);
    action.addEventListener('click', function (e) {
      e.preventDefault();
      sessionStorage.setItem(title, action.classList.toggle('app-menu__action_active'));
      callback();
    });
    if (sessionStorage.getItem(title) === 'true') action.click();
    return action;
  }

  static toggleNode(node, parent = undefined) {
    let id = node.getAttribute('app-toggle-id');
    if (!id) {
      id = Helper.getId();
      node.setAttribute('app-toggle-id', id);
      if (!node.parentNode) {
        parent.appendChild(node); // `parent` required to insert `node` the first time
        return;
      }
    }
    let placeholder;
    if (node.parentNode) {
      placeholder = Helper.createNode(`<script type="placeholder" app-toggle-id="${id}">`);
      node.parentNode.insertBefore(placeholder, node);
      node.parentNode.removeChild(node);
    } else {
      placeholder = document.querySelector(`[app-toggle-id="${id}"]`);
      placeholder.parentNode.insertBefore(node, placeholder);
      placeholder.parentNode.removeChild(placeholder);
    }
  }
}

Helper.getId = (function () {
  let id = 1;
  return () => id++;
}());
