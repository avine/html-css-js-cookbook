self.addEventListener('fetch', function(event) {

});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('webexplorer-1').then(function(cache) {
      return cache.addAll(
        [
          '/assets/offline.html',
        ]
      );
    })
  );
});
