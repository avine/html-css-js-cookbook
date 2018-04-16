function bootstrapApp() {
  const menu = Helper.createNode('<div class="app-menu">');
  menu.appendChild(Actions.toggleCss());

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
      headCss.forEach(css => toggle(css, head));
      bodyCss.forEach(css => toggle(css, body));
    });
    function toggle(css, parent) {
      css.parentNode ? parent.removeChild(css) : parent.appendChild(css);
    }
  }
}

class Helper {
  static createNode(node) {
    const wrap = document.createElement('div');
    wrap.innerHTML = node;
    return wrap.firstChild;
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
}
