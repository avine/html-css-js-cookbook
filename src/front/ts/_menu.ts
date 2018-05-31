import { fetchContent, getAction } from './_helper';
import { updateActiveLink } from './_router';

export function initMenu({ hidden = false }) {
  const element = document.querySelector('.app-grid__wrap');
  if (element && hidden) element.classList.add('app-grid__wrap--menu-hidden');
  const menu = document.querySelector('[app-menu]');
  if (menu) fetchContent('./pages/menu.html', menu).then(updateActiveLink);
}

export function toggleMenu() {
  const element = document.querySelector('.app-grid__wrap');
  if (element) element.classList.toggle('app-grid__wrap--menu-hidden');
}

export function initToggleMenu() {
  const toggle = document.querySelector('[app-menu-toggle]');
  if (toggle) getAction('view_menu', toggle, toggleMenu);
}
