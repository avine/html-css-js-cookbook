import { createServer } from 'http';
import { URL } from 'url';

import { SERVER_HOST, SERVER_PORT, SPA_URL_STATE_PREFIX } from '../../config';
import { fillResponse, getContent, getContent404, getPathfile } from './_content';

createServer((request, response) => {
  const { url } = request;
  if (url && !url.startsWith(SPA_URL_STATE_PREFIX)) {
    let pathname = new URL(url, 'http://whatever/').pathname;
    if (pathname === '/') pathname = '/index.html';
    const pathfile = getPathfile(pathname);

    getContent(pathfile).then((data) => {
      response.statusCode = 200;
      fillResponse(response, data);
      log(`url: ${url}\npathfile: ${pathfile}\n`);
    }).catch(() => {
      response.statusCode = 404;

      getContent404().then((data) => {
        data.content = data.content.replace('{{url}}', url);
        fillResponse(response, data);
        log(`url: ${url} [error 404]\n`);
      });
    });
  } else {
    const pathfile = getPathfile('/index.html');

    getContent(pathfile).then((data) => {
      response.statusCode = 200;
      fillResponse(response, data);
      log(`url: ${url}\npathfile: ${pathfile} [ROOT]\n`);
    });
  }
}).listen(SERVER_PORT, SERVER_HOST, undefined, () => {
  log(`Server is listening on port http://${SERVER_HOST}:${SERVER_PORT}/`);
});

function log(...msg: any[]) {
  console.log(...msg); // tslint:disable-line no-console
}
