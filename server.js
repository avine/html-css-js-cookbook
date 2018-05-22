const http = require('http');

const fs = require('fs');
const path = require('path');

http
  .createServer((request, response) => {
    let { url } = request;
    if (!url.startsWith('/dynamic')) {
      if (url === '/') url = '/index.html';
      const pathfile = path.resolve(__dirname, `dist${url}`);
      fs.readFile(pathfile, { encoding: 'utf8' }, (err, data) => {
        if (!err) {
          // response.setHeader('Content-Type', 'text/html');
          response.end(data);
        } else {
          response.end('OUPS');
        }
      });
    } else {
      fs.readFile(path.resolve(__dirname, 'dist/index.html'), { encoding: 'utf8' }, (err2, data2) => {
        if (!err2) {
          // response.setHeader('Content-Type', 'text/html');
          response.end(data2);
        } else {
          response.end('OUPS');
        }
      });
    }
  }).listen(1235);
