const web_cache = 'peter-v1';
const filesToCache = [
  '/',
  'index.html',
  'page1.html',
  'page2.html',
  'page3.html',
  'page4.html',
  'page5.html',
  '/css/peter.css',
  '/js/peter.js',
  '/img/boat-360.webp',
  '/img/peter1-360.webp',
  '/img/peter2-360.webp',
  '/img/peter3-360.webp',
  '/img/peter4-360.webp',
  '/img/EnaBryan-360.webp'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(web_cache)
      .then(function(cache) {
        //Cache has been opened succesfully
        return cache.addAll(filesToCache);
      })
  );
});