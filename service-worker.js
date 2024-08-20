/*const CACHE_NAME = 'registration-form-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/icons/l1.png',
    '/icons/l2.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});*/


self.addEventListener('fetch', function(event){
    if(event.request.url.includes('articles-api.com/articles')){
        event.respondwith(
            caches.match(event.request).then(function(response){
                return response || fetch(event.request).then(function(response){
                    return caches.open('mon-cache-api').then(function(cache){
                        cache.put(event.request, response.clone())
                        response;
                    })
                })
            })
        )
    }
})