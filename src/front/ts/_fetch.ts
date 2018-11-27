import { FRONT_PAGES_FOLDER } from '../../config';
import { resolveUrl } from './_dom';

const noInternetAccess =
`<p class="app-content__error">
  <br>
  <i class="fas fa-3x fa-exclamation"></i>
  <br>
  <br>
  No internet access
</p>`;

export async function fetchContent404() {
  const response = await fetch((resolveUrl(`./${FRONT_PAGES_FOLDER}/error404.html`) as string));
  return response.text();
}

export async function fetchContent(url: string) {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      const html = await fetchContent404();
      return html.replace('{{url}}', url);
    }
    return response.text();
  } catch (e) {
    return noInternetAccess;
  }
}
