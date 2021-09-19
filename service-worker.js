const cacheName = 'v1';
const cacheAssets = [
  './',
  './index.html',
  './page1.html',
  './page2.html',
  './page3.html',
  './page4.html',
  './page5.html',
  './css/peter.css',
  './js/peter.js',
  './img/boat-360.webp',
  './img/peter1-360.webp',
  './img/peter2-360.webp',
  './img/peter3-360.webp',
  './img/peter4-360.webp',
  './img/EnaBryan-360.webp'
];

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
