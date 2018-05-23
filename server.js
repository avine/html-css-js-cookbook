const fs = require('fs');
const http = require('http');
const path = require('path');

const getContentType = require('./contentTypes');

http
  .createServer((request, response) => {
    let { url } = request;
    if (!url.startsWith('/content')) {
      if (url === '/') url = '/index.html';
      const pathfile = path.resolve(__dirname, `dist${url}`);
      fs.readFile(pathfile, { encoding: 'utf8' }, (err, data) => {
        if (!err) {
          const ext = path.extname(pathfile).substr(1);
          const contentType = getContentType(ext);
          response.statusCode = 200;
          if (contentType) response.setHeader('Content-Type', `${contentType}; charset=utf-8`);
          response.end(data);
        } else {
          response.statusCode = 404;
          response.end('File not Found');
        }
      });
    } else {
      fs.readFile(path.resolve(__dirname, 'dist/index.html'), { encoding: 'utf8' }, (err, data) => {
        if (!err) {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/html; charset=utf-8');
          response.end(data);
        } else {
          response.statusCode = 404;
          response.end('File not Found');
        }
      });
    }
  }).listen(1234, undefined, undefined, () => {
    console.log('Server is listening on port 1234'); // eslint-disable-line no-console
  });
