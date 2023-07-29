// sw.js
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado correctamente');
  event.waitUntil(
    caches.open('cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico', // Asegúrate de tener el favicon.ico en la carpeta public
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activado correctamente');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
