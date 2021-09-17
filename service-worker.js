var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/page1.html',
  '/page2.html',
  '/page3.html',
  '/page4.html',
  '/page5.html',
  '/css/peter.css',
  '/js/peter.js',
  '/img/boat-360.webp',
  '/img/peter1-360.webp',
  '/img/peter2-360.webp',
  '/img/peter3-360.webp',
  '/img/peter4-360.webp',
  '/img/EnaBryan-360.webp'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
