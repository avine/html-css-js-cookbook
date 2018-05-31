import http from 'http';

import { fillResponse, getContent, getContent404, getPathfile } from './_helper';

http
  .createServer((request, response) => {
    let { url } = request;
    if (url && !url.startsWith('/content')) {
      if (url === '/') url = '/index.html';
      const pathfile = getPathfile(url);

      getContent(pathfile).then((data) => {
        response.statusCode = 200;
        fillResponse(response, data);
        log(`url: ${url}\npathfile: ${pathfile}\n`);
      }).catch(() => {
        response.statusCode = 404;

        getContent404().then((data) => {
          data.content = data.content.replace('{{url}}', url as string);
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
  }).listen(1234, undefined, undefined, () => {
    log('Server is listening on port 1234');
  });

function log(...msg: any[]) {
  console.log(...msg); // tslint:disable-line no-console
}
