// NGRD Motors PWA service worker — pass-through only, NO caching.
// Purpose: enable installability (standalone app, no browser bar).
// It intentionally does NOT cache anything, so new deploys always load fresh.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  // Always go to network. No caching => deploys update instantly.
  event.respondWith(fetch(event.request));
});
