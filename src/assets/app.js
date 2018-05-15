import { createNode, getUrl } from './_helper';
import { toggleCss, viewCode } from './_actions';
import { bootstrapRouter } from './_router';

function bootstrapApp() {
  const menu = createNode('<div class="app-menu">');
  menu.appendChild(toggleCss());
  menu.appendChild(viewCode());

  const body = document.querySelector('body');
  body.appendChild(menu);
}

window.addEventListener('DOMContentLoaded', () => {
  // bootstrapApp();
  bootstrapRouter();
});
