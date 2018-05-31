import fs from 'fs';
import { ServerResponse } from 'http';
import path from 'path';

import { getContentType } from './contentTypes';

const FRONT_ROOT = path.join(__dirname, '../../dist/front');

export const getPathfile = (requestUrl: string) => path.join(FRONT_ROOT, requestUrl.replace(/^\//, ''));

export const getResource = (pathfile: string): Promise<IResource> => new Promise((resolve, reject) => {
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

export const getResource404 = () => getResource(path.join(__dirname, './pages/error404.html'));

export const fillResponse = (response: ServerResponse, data: IResource) => {
  response.setHeader('Content-Type', data.contentType);
  response.end(data.content);
};

export interface IResource {
  content: string;
  contentType: string;
}
