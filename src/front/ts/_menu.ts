import { querySelectorAll } from './_dom';
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
    querySelectorAll<Element>('.app-menu__header', menu).forEach(
      header => header.classList.add('app-menu__header--closed')
    );
  }

  openParents(activeLink: Element) {
    // TODO...
  }
}

export function initMenu(container: Element) {
  querySelectorAll<Element>('[app-menu]', container).forEach(menu => new Menu(menu));
}
