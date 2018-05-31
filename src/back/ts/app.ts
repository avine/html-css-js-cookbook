import http from 'http';

import * as content from './content';

http
  .createServer((request, response) => {
    let { url } = request;
    if (url && !url.startsWith('/content')) {
      if (url === '/') url = '/index.html';
      const pathfile = content.getPathfile(url);
      content.getResource(pathfile).then((data) => {
        response.statusCode = 200;
        content.fillResponse(response, data);
        log(`url: ${url}\npathfile: ${pathfile}\n`);
      }).catch(() => {
        response.statusCode = 404;
        content.getResource404().then((data) => {
          data.content = data.content.replace('{{url}}', url as string); // eslint-disable-line no-param-reassign
          content.fillResponse(response, data);
          log(`url: ${url} [error 404]\n`);
        });
      });
    } else {
      const pathfile = content.getPathfile('/index.html');
      content.getResource(pathfile).then((data) => {
        response.statusCode = 200;
        content.fillResponse(response, data);
        log(`url: ${url}\npathfile: ${pathfile} [ROOT]\n`);
      });
    }
  }).listen(1234, undefined, undefined, () => {
    log('Server is listening on port 1234');
  });

function log(...msg: any[]) {
  console.log(...msg); // tslint:disable-line no-console
}
