const enableLogs = true;
const log = enableLogs ? (msg) => console.log(msg) : () => {};

const cacheVersion = 2;
const dataCacheName = `webexplorer-data-v${cacheVersion}`;
const appShellCacheName = `webexplorer-appshell-v${cacheVersion}`;
const appShellFiles = [
  '/',
  'pages/sidebar.html',
  'pages/index.html',
];

self.addEventListener('install', function(e) {
  log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(appShellCacheName).then(function(cache) {
      log('[ServiceWorker] Caching app shell');
      return cache.addAll(appShellFiles);
    })
  );
});

self.addEventListener('activate', function(e) {
  log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(key) {
        if (key !== appShellCacheName && key !== dataCacheName) {
          log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) {
        log('[Service Worker] Fetch from cache', e.request.url);
        return response;
      } else {
        return caches.open(dataCacheName).then(function(cache) {
          return fetch(e.request).then(function(response){
            log('[Service Worker] Fetch from server', e.request.url);
            cache.put(e.request.url, response.clone());
            return response;
          });
        })
      }
    })
  );
});
