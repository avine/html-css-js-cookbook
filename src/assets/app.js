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
    const source = Helper.createNode('<pre class="app-code"><code></code></pre>');
    source.firstChild.innerText = body.innerHTML.trim();
    return Helper.getAction('View code', () => Helper.toggleNode(source, body));
  }
}

class Helper {
  static createNode(node) {
    const wrap = document.createElement('div');
    wrap.innerHTML = node;
    return wrap.removeChild(wrap.firstChild);
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
