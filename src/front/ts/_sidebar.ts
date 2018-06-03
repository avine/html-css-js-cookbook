import { getAction } from './_dom';
import { fetchContent } from './_fetch';
import { updateActiveLink } from './_router';

export function initSidebar({ hidden = false }) {
  const element = document.querySelector('.app-grid__wrap');
  if (element && hidden) element.classList.add('app-grid__wrap--sidebar-hidden');
  const sidebar = document.querySelector('[app-sidebar]');
  if (sidebar) fetchContent('./pages/sidebar.html', sidebar).then(updateActiveLink);
}

export function toggleSidebar() {
  const element = document.querySelector('.app-grid__wrap');
  if (element) element.classList.toggle('app-grid__wrap--sidebar-hidden');
}

export function initToggleSidebar() {
  const toggle = document.querySelector('[app-sidebar-toggle]');
  if (toggle) getAction('view_sidebar', toggle, toggleSidebar);
}
