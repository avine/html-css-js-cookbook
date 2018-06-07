import { querySelectorAll } from './_dom';

function updateMenu(header: Element) {
  const isOpen = header.classList.contains('app-menu__header--active');
  if (isOpen) {
    const menu = header.nextElementSibling;
    if (menu) closeSubMenus(menu);
  }
  header.classList.toggle('app-menu__header--active');
}

function closeSubMenus(menu: Element) {
  querySelectorAll<Element>('.app-menu__header', menu).forEach(
    header => header.classList.remove('app-menu__header--active')
  );
}

function menuHandler(event: Event) {
  const header = event.target as Element;
  if (header && header.classList.contains('app-menu__header')) {
    updateMenu(header);
  }
}

export function initMenu() {
  window.addEventListener('click', menuHandler);
}
