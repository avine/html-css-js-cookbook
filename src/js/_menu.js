import { fetchContent, getAction } from './_helper';
import { updateActiveLink } from './_router';

// eslint-disable-next-line import/prefer-default-export
export function initMenu({ hidden = false }) {
  if (hidden) {
    document.querySelector('.app-grid').classList.add('app-grid_hide-menu');
  }
  fetchContent('./pages/menu.html', document.querySelector('[app-menu]'))
    .then(() => updateActiveLink(window.location.href));
}

export function toggleMenu() {
  document.querySelector('.app-grid').classList.toggle('app-grid_hide-menu');
}

export function initToggleMenu() {
  getAction('view_menu', document.querySelector('[app-menu-toggle]'), toggleMenu);
}
