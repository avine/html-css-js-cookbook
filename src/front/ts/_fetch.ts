import { FRONT_PAGES_FOLDER } from '../../config';
import { insertHtml, resolveUrl } from './_dom';

export function fetchContent404() {
  return fetch(resolveUrl(`/${FRONT_PAGES_FOLDER}/error404.html`)).then(response => response.text());
}

export function fetchContent(url: string, element: Element) {
  return fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        return fetchContent404().then(html => html.replace('{{url}}', url));
      }
      return response.text();
    })
    .then(html => insertHtml(html, element));
}
