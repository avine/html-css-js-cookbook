import { createNode } from './_helper';
import { toggleCss, viewCode } from './_actions';

function bootstrapApp() {
  const menu = createNode('<div class="app-menu">');
  menu.appendChild(toggleCss());
  menu.appendChild(viewCode());

  const body = document.querySelector('body');
  body.appendChild(menu);
}

function handleSpa() {
  const content = document.querySelector('[app-content]');
  document.addEventListener('click', function (event) {
    if (event.target.nodeName.toLowerCase() === 'a' && event.target.getAttribute('app-link') !== null) {
      event.preventDefault();
      const href = event.target.href;

      fetch(href).then(response => response.text()).then(html => {
        content.innerHTML = html;
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  bootstrapApp();
  handleSpa();
});
