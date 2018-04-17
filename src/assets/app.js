
import { highlight, languages } from 'prismjs';

function bootstrapApp() {
  const menu = Helper.createNode('<div class="app-menu">');
  menu.appendChild(Actions.toggleCss());
  menu.appendChild(Actions.viewCode());

  const body = document.querySelector('body');
  body.appendChild(menu);
};

window.addEventListener('DOMContentLoaded', bootstrapApp);

class Actions {
  static toggleCss() {
    const head = document.querySelector('head');
    const body = document.querySelector('body');
    const headCss = document.querySelectorAll('head .app-css');
    const bodyCss = document.querySelectorAll('body .app-css');
    return Helper.getAction('Disable CSS', () => {
      headCss.forEach(css => Helper.toggleNode(css, head));
      bodyCss.forEach(css => Helper.toggleNode(css, body));
    });
  }

  static viewCode() {
    const body = document.querySelector('body');

    const source = document.querySelector('[app-content]');
    source.classList.add('app-content__source');
    const wrap = Helper.wrapNode(source, 'app-content__wrap');

    const code = Helper.createNode('<pre class="app-content__code language-html"><code></code></pre>');
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
      action.classList.toggle('app-menu__action_active');
      callback();
    })
    return action;
  }

  static toggleNode(node, parent) {
    node.parentNode ? parent.removeChild(node) : parent.appendChild(node);
  }
}
