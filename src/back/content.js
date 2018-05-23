const fs = require('fs');
const path = require('path');

const getContentType = require('./contentTypes');

const FRONT_ROOT = path.resolve(__dirname, '../../dist/front');

exports.getPathfile = requestUrl => path.resolve(FRONT_ROOT, requestUrl.replace(/^\//, ''));

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

exports.fillResponse = (response, data) => {
  response.setHeader('Content-Type', data.contentType);
  response.end(data.content);
};
