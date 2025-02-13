self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            return cache.addAll([
                './static/js/3977-6be7cb311712c2d7.js' // 缓存本地脚本
                
            ]);
            console.log('缓存本地脚本');
        })
    );
});

self.addEventListener('fetch', function(event) {
    if (event.request.url.endsWith('3977-6be7cb311712c2d7.js')) {
        event.respondWith(
            caches.match('./static/js/3977-6be7cb311712c2d7.js').then(function(response) {
                return response || fetch(event.request); // 如果缓存中有，则使用缓存，否则继续网络请求
            })
        );
    } else {
        event.respondWith(fetch(event.request)); // 处理其他网络请求
    }
});