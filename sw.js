const CACHE_NAME = 'dienstplan-v1';
const ASSETS = [
  '/',
  'index.html',
  'style.css',
  'app.js',
  'manifest.json'
];

// Installation: Dateien cachen
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch-Event: Daten aus dem Cache liefern, wenn offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});