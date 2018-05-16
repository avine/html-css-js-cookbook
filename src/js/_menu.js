import { fetchContent } from './_helper';
import { activeLinkHandler } from './_router';

// eslint-disable-next-line import/prefer-default-export
export function bootstrapMenu(hidden = false) {
  if (hidden) {
    document.querySelector('.app-grid').classList.add('app-grid_hide-menu');
  }
  fetchContent('./pages/menu.html', document.querySelector('[app-menu]'))
    .then(() => activeLinkHandler({ detail: { appUrl: window.location.href } }));
}

export function bootstrapToggleMenu() {
  document.querySelector('[app-menu-toggle]').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.app-grid').classList.toggle('app-grid_hide-menu');
  });
}
