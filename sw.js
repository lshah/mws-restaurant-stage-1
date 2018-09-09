
// declare a variable for cache
let staticCacheName = 'restaurant-cache-v1';

// install service worker and cache files
self.addEventListener('install', (event)=>{
	event.waitUntil(
		caches.open(staticCacheName).then((cache)=>{
			return cache.addAll([
		'/',
		'/index.html',
		'/restaurant.html',
		'/css/styles.css',
		'/data/restaurants.json',
		'/img/',
		'/js/'

	]);
		})
		);
});

// activiate service worker and delete old cache
self.addEventListener('activate', (event)=>{
	event.waitUntil(caches.keys().then((cacheNames)=>{
		return Promise.all(
			cacheNames.filter((cacheName)=>{
			return cacheName.startsWith('restaurant-') && cacheName != staticCacheName;
		}).map((cacheName)=>{
			return cache.delete(cacheName);
			console.log('test');
		})
			);
		
	})
		);
});

// fetch event request
self.addEventListener('fetch', (event)=>{
	event.respondWith(
		caches.match(event.request).then((response)=>{
			if(response) return response;
			return fetch(event.request);
		})
		);
});