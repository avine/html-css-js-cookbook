import { createNode } from './_dom';
import { ON_NAVIGATE } from './_router';

class Spinner {

  spinner = createNode(
    '<div class="app-spinner"><i class="app-spinner__content fas fa-3x fa-spinner fa-pulse"></i></div>'
  ) as HTMLDivElement;

  pendingHide: any;

  constructor(private element: HTMLElement) {
  }

  show() {
    if (this.pendingHide) {
      this.pendingHide = null;
      clearTimeout(this.pendingHide);
    }
    this.spinner.classList.remove('app-spinner--hide');
    this.element.appendChild(this.spinner);
  }

  hide() {
    this.spinner.classList.add('app-spinner--hide');
    this.pendingHide = setTimeout(() => {
      this.pendingHide = null;
      this.element.removeChild(this.spinner);
    }, 600);
  }
}

export function initSpinner() {
  const spinner = new Spinner(document.querySelector('[app-spinner]') as HTMLElement);

  window.addEventListener(ON_NAVIGATE.START, () => {
    spinner.show();
  });

  window.addEventListener(ON_NAVIGATE.END, () => {
    spinner.hide();
  });
}
