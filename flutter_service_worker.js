'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2582586fd804b6a59896c2a25e1b91f2",
"index.html": "c5794928fbe24e53de00339e122742b9",
"/": "c5794928fbe24e53de00339e122742b9",
"main.dart.js": "4944b8b51d006d02b9ccf256f86f3fd2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "800d6c101a908680d9288a1bbecf7386",
"assets/AssetManifest.json": "e9949abd6358de16c8304f01df41500c",
"assets/NOTICES": "d5f52c4161d39371923a4cd945b10ba5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/problem-slide.json": "1c77247813895f67d2f7f1927663e37f",
"assets/assets/solution-slide.json": "80edfab4b1a098265d6ee8e0f3da9860",
"assets/assets/Verso-Profile.json": "b9eb50148e8e60635aefb22517c7eb68",
"assets/assets/Hi,-I'm-Verso.json": "bca4a41ed14b9ff2f47a0e61125058f3",
"assets/assets/ask-slide.json": "2b752bf68fdb53e4366dd32da8ecb130",
"assets/assets/new-economic-system.json": "67697b47df9b2d52d026b4e208c4a752",
"assets/assets/go-to-market-slide.json": "c6c7110e24cbdb38ce7da36785e1fff9",
"assets/assets/discovering-high-value-knowledge.json": "6eeab6e6fbcd3ed5cc4c8c37a24789b1",
"assets/assets/passion-economy.json": "acc23b03e6a45ba63feb906fba8ce003",
"assets/assets/tipping-model-slide.json": "f0c0e1edb60cd07359159cbb45fd3c76",
"assets/assets/passion-economy-slide.json": "1040fd540bbe6a17694bab61676f6dbb",
"assets/assets/What-is-a-digital-garden%253F.json": "3e93de3e8cd68764234188198b605cb7",
"assets/assets/creators-struggle-to-run-their-businesses.json": "dd1c51b3ff5913d575ece60462c6a04e",
"assets/assets/the-shift-from-the-attention-economy-to-the-value-economy.json": "7e76fff2890d86dcdd3ee1a1ed3110dc",
"assets/assets/digital-garden.json": "cba3c1e4906ab0c708bb268b86a28507",
"assets/assets/customer-acquisition-funnel-slide.json": "1a27ba3fe53043b034c8cf349bddb4e5",
"assets/assets/creator-first.json": "f4408793a36cd21defd24950462b6c85",
"assets/assets/knowledge-graph-slide.json": "af9be3e7dd3afc6e5fd5b4b0d0044d02",
"assets/assets/Start-Here.json": "f6ee6a0ad4876e6d7cd06b3cbede5680",
"assets/assets/first-slide.json": "1c64727a993e698cef99c44ca609d0ac",
"assets/assets/aligning-incentives.json": "499f417fef820536acb448e67cb391fd",
"assets/assets/digital-garden-examples.json": "fd427a88032cc65d85b07b328a24369b",
"assets/assets/the-current-state-of-affairs.json": "1d8530a5ec40c41c4afeecfacfff9b25",
"assets/assets/architecture-of-the-internet.json": "6ee2c34f2f9f912fd8bc1e5e0556146a",
"assets/assets/What-is-a-digital-garden.json": "18dad2800b2ce8cdfcf4e957dfc2a3ac",
"assets/assets/competition-slide.json": "55e9c5ae538f3b265034280e93b4c585",
"assets/assets/Digital-Garden-examples-ff4c8994ee8d45269c1aa272b088a632.md": "60c267ca7eab575aced10a6b0db8127e",
"assets/assets/digital-renaissance.json": "573db2a32de02594dbb27f730caab2cb",
"assets/assets/tools-for-thought.json": "aa4dcdc79676c8633f499f9caac2ba23",
"assets/assets/history-of-computing-and-tools-for-thought.json": "e6f5967927490b5395243fe4a4c55d89",
"assets/assets/programmable-feeds-slide.json": "7e65504be0081b46177fa80c1c5bd56f",
"assets/assets/the-internet-was-born-with-missing-pieces.json": "41235d45187d328cd4ced4d729b4ee7a",
"assets/assets/Bitcoin.json": "802bab129a011767eaafe32e7972bfa4",
"assets/assets/the-shift-from-the-attention-economy-to-the-knowledge-economy.json": "47691afb7b1fd4acc9a06eec82a17626",
"assets/assets/team-slide.json": "6191be128aadbefbee4872a94e327bf0",
"assets/assets/tool-for-thought.json": "5cb14d302830c991c278018d51ceb568",
"assets/assets/product-slide.json": "990b3a5ef4126864aaa891ac0905f8b4",
"assets/assets/peer-into-the-future.json": "303941edc85807bc90dac244c7dac545",
"assets/assets/problem-intro-slide.json": "881d11a531ebb6a21beaa55399d50b09",
"assets/assets/business-model-slide.json": "5bfb89c8efa250603225cb1beba6c52c",
"assets/assets/market-network-slide.json": "b864652b483eb27c639fc17ecf1e0997"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
