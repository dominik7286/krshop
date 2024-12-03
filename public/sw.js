const cacheName = "v2";
const filesToCache = [
    '/Images/drink.png',
    '/Images/editicon.png',
    '/Images/food.png',
    '/Images/lidl.png',
    '/Images/logout.png',
    '/Images/others.png',
    '/Images/shopping-cart.png',
    '/Images/store.png',
    '/Images/tesco.png',
    '/Images/trashbin.png',
    '/Images/vegetable.png',
    '/Images/logo.png'
  ];
  
  // Telepítési esemény, amikor a service worker először regisztrálódik
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(cacheName)
        .then(cache => {
          return cache.addAll(filesToCache); // Az összes fájl hozzáadása a cache-hez
        })
    );
  });
async function impl(e) {
    let cache = await caches.open(cacheName); // Cache megnyitása, async
    let cacheResponse = await cache.match(e.request); // Lookup
    if (cacheResponse) // Ha megvan
        return cacheResponse // Visszadjuk
    else {
        let networkResponse = await fetch(e.request); // Ha nincs meg, akkor elindítjuk a tényleges hálózati lekérdezést
        cache.put(e.request, networkResponse.clone()) // Eltároljuk
        return networkResponse; // Visszadjuk
    }
}
self.addEventListener("fetch", e => e.respondWith(impl(e))); // Eseményre feliratkozás