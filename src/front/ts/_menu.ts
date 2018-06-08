import { getParents } from './_dom';
import { getActiveLinks, ON_NAVIGATE } from './_router';

export class Menu {
  activeLinkHandler = this.openActiveLink.bind(this);

  constructor(private menu: Element) {
    this.closeChilds(menu);
    menu.addEventListener('click', this.handler.bind(this));

    window.addEventListener(ON_NAVIGATE.END, this.activeLinkHandler);
  }

  destroy() {
    window.removeEventListener(ON_NAVIGATE.END, this.activeLinkHandler);
  }

  openActiveLink(event: Event) {
    getActiveLinks(this.menu).forEach(this.openParents.bind(this));
  }

  handler(event: Event) {
    const header = event.target as Element;
    if (header && header.classList.contains('app-menu__header')) {
      this.toggle(header);
    }
  }

  toggle(header: Element) {
    const isOpen = !header.classList.contains('app-menu__header--closed');
    if (isOpen) {
      const menu = header.nextElementSibling;
      if (menu) this.closeChilds(menu);
    }
    header.classList.toggle('app-menu__header--closed');
  }

  closeChilds(menu: Element) {
    menu.querySelectorAll('.app-menu__header').forEach(header => header.classList.add('app-menu__header--closed'));
  }

  openParents(activeLink: Element) {
    getParents(activeLink, this.menu).forEach((menu) => {
      if (menu.classList.contains('app-menu')) {
        const header = menu.previousElementSibling;
        if (header && header.classList.contains('app-menu__header')) {
          header.classList.remove('app-menu__header--closed');
        }
      }
    });
  }
}

export function initMenu(container: Element) {
  container.querySelectorAll('[app-menu]').forEach(menu => new Menu(menu));
}
