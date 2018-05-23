const http = require('http');

const content = require('./content');

http
  .createServer((request, response) => {
    let { url } = request;
    if (!url.startsWith('/content')) {
      if (url === '/') url = '/index.html';
      const pathfile = content.getPathfile(url);
      content.getResource(pathfile).then((data) => {
        response.statusCode = 200;
        content.fillResponse(response, data);
      }).catch(() => {
        response.statusCode = 404;
        const error404 = content.getPathfile('/pages/404.html');
        content.getResource(error404).then(data => content.fillResponse(response, data));
      });
    } else {
      const pathfile = content.getPathfile('/index.html');
      content.getResource(pathfile).then((data) => {
        response.statusCode = 200;
        content.fillResponse(response, data);
      });
    }
  }).listen(1234, undefined, undefined, () => {
    console.log('Server is listening on port 1234'); // eslint-disable-line no-console
  });
