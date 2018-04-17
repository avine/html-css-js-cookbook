import { createNode } from './_helper';
import { toggleCss, viewCode } from './_actions';

function bootstrapApp() {
  const menu = createNode('<div class="app-menu">');
  menu.appendChild(toggleCss());
  menu.appendChild(viewCode());

  const body = document.querySelector('body');
  body.appendChild(menu);
}

window.addEventListener('DOMContentLoaded', bootstrapApp);
