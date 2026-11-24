// Surum: v1 | Tarih: 2026-11-24 23:44:30 UTC+3 | Yalnizca 'ana ekrana ekle' icin gerekli; hicbir seyi onbellege almaz, istekleri degistirmez.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
