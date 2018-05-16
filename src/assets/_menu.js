import { fetchContent } from './_helper';

// eslint-disable-next-line import/prefer-default-export
export function bootstrapMenu() {
  return fetchContent('./pages/menu.html', document.querySelector('[app-menu]'));
}

export function bootstrapToggleMenu() {
  document.querySelector('[app-menu-toggle]').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.app-grid').classList.toggle('app-grid_hide-menu');
  });
}
