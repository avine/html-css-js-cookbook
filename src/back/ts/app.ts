import { createServer } from 'http';
import { URL } from 'url';

import { STATE_PREFIX } from '../../front/ts/_router';
import { fillResponse, getContent, getContent404, getPathfile } from './_helper';

const hostname = '127.0.0.1';
const port = 3000;

createServer((request, response) => {
  const { url } = request;
  if (url && !url.startsWith(STATE_PREFIX)) {
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
}).listen(port, hostname, undefined, () => {
  log(`Server is listening on port http://${hostname}:${port}/`);
});

function log(...msg: any[]) {
  console.log(...msg); // tslint:disable-line no-console
}
