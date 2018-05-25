import { fetchContent, getAction } from './_helper';
import { updateActiveLink } from './_router';

// eslint-disable-next-line import/prefer-default-export
export function initMenu({ hidden = false }) {
  const element = document.querySelector('.app-grid__wrap');
  if (element && hidden) element.classList.add('app-grid__wrap--menu-hidden');
  fetchContent('./pages/menu.html', document.querySelector('[app-menu]')).then(updateActiveLink);
}

export function toggleMenu() {
  const element = document.querySelector('.app-grid__wrap');
  if (element) element.classList.toggle('app-grid__wrap--menu-hidden');
}

export function initToggleMenu() {
  getAction('view_menu', document.querySelector('[app-menu-toggle]'), toggleMenu);
}
