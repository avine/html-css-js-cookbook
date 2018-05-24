const fs = require('fs');
const path = require('path');

const getContentType = require('./contentTypes');

const FRONT_ROOT = path.join(__dirname, '../../dist/front');

exports.getPathfile = requestUrl => path.join(FRONT_ROOT, requestUrl.replace(/^\//, ''));

exports.getResource = pathfile => new Promise((resolve, reject) => {
  fs.readFile(pathfile, { encoding: 'utf8' }, (err, content) => {
    if (!err) {
      const ext = path.extname(pathfile).substr(1);
      const contentType = `${getContentType(ext)}; charset=utf-8`;
      resolve({ content, contentType });
    } else {
      reject(err);
    }
  });
});

exports.getResource404 = () => exports.getResource(path.join(__dirname, './error404.html'));

exports.fillResponse = (response, data) => {
  response.setHeader('Content-Type', data.contentType);
  response.end(data.content);
};
