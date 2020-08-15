/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/03/15/vuepress-2020-0315/index.html",
    "revision": "46ca9576265f43117f206d318ef47615"
  },
  {
    "url": "2020/03/20/shinkansen-2020-0320/index.html",
    "revision": "a161efc01e97b1e3b15a86dd1e25d178"
  },
  {
    "url": "2020/03/29/lifeplan-2020-0329/index.html",
    "revision": "f7c48ca1625d26613127ab77d6efbc6d"
  },
  {
    "url": "2020/05/05/vue-calnedar-2020-0505/index.html",
    "revision": "2be752250c8fa1836018bc8e1b4c2f21"
  },
  {
    "url": "2020/05/25/watch-movie-2020-0524/index.html",
    "revision": "af401fd07e27ef12b73beb8de2780eba"
  },
  {
    "url": "2020/08/14/dairy-2020-0814/index.html",
    "revision": "3b9ac5bf7e0f5aee1f98d5980fb08fb1"
  },
  {
    "url": "404.html",
    "revision": "53a83b21a77c196275b15b2c7dd974de"
  },
  {
    "url": "assets/css/0.styles.311a043f.css",
    "revision": "0f6de858e66c1360875d9eb37c156889"
  },
  {
    "url": "assets/fonts/themify.2c454669.eot",
    "revision": "2c454669bdf3aebf32a1bd8ac1e0d2d6"
  },
  {
    "url": "assets/fonts/themify.a1ecc3b8.woff",
    "revision": "a1ecc3b826d01251edddf29c3e4e1e97"
  },
  {
    "url": "assets/fonts/themify.e23a7dca.ttf",
    "revision": "e23a7dcaefbde4e74e263247aa42ecd7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/themify.9c8e96ec.svg",
    "revision": "9c8e96ecc7fa01e6ebcd196495ed2db5"
  },
  {
    "url": "assets/js/1.d36cdda6.js",
    "revision": "9f0e96c686d1dbbc8a75ca86f570dbd9"
  },
  {
    "url": "assets/js/10.87aeb8dd.js",
    "revision": "0277d1138d609eaaf7c87dedb625977b"
  },
  {
    "url": "assets/js/11.2f082023.js",
    "revision": "7d9c608576ea7e6591b413689c829f45"
  },
  {
    "url": "assets/js/12.a6ab07fa.js",
    "revision": "076c99bd8bb77db772f27517e97e056a"
  },
  {
    "url": "assets/js/13.9a6679fd.js",
    "revision": "eb100582a4443c0099c9a46d24bf19e5"
  },
  {
    "url": "assets/js/14.5e8919f0.js",
    "revision": "254ee30c21ca789dfe88875e7b3ef64e"
  },
  {
    "url": "assets/js/15.6aa9ac7b.js",
    "revision": "1b6399494ac17ac0203d9dd9d232275d"
  },
  {
    "url": "assets/js/16.15b46100.js",
    "revision": "e3bc46952a3a82687759e95da2360c14"
  },
  {
    "url": "assets/js/17.6dc7ab9e.js",
    "revision": "934c76dd4d7ed763eeaf4e942ab439bb"
  },
  {
    "url": "assets/js/18.70bb0d92.js",
    "revision": "e8a82304c51d93004ba17e9c7b237aa2"
  },
  {
    "url": "assets/js/19.ca65977b.js",
    "revision": "74dd2c8df5fb040b95c876740ec744f6"
  },
  {
    "url": "assets/js/4.32915724.js",
    "revision": "0b6719d7e8583fca66104f58db7da221"
  },
  {
    "url": "assets/js/5.e3fb29c6.js",
    "revision": "edc8fbce39a70c95730dbf717abdf6e7"
  },
  {
    "url": "assets/js/6.b5c26390.js",
    "revision": "8695c12c49a1b0b550e2a9199e2898fc"
  },
  {
    "url": "assets/js/7.abaa76e8.js",
    "revision": "2219a7bd2e27e0b2e1f94186d7120527"
  },
  {
    "url": "assets/js/8.3c48bce1.js",
    "revision": "9fd6e8b938fbcc110a48470570fc9e18"
  },
  {
    "url": "assets/js/9.65048366.js",
    "revision": "b26b582eb70fd9c3e490ee5b1681da9a"
  },
  {
    "url": "assets/js/app.335357a8.js",
    "revision": "e151d3c8db1e6de8d1b558d8edcf23df"
  },
  {
    "url": "assets/js/vuejs-paginate.20523a58.js",
    "revision": "bfdea47b00917716003bef5626f96049"
  },
  {
    "url": "img/beluga.jpg",
    "revision": "0a3fff07d11cd786f785afcefc795f01"
  },
  {
    "url": "img/calendar.jpg",
    "revision": "7537210d33f6e224f7c4e555503e7860"
  },
  {
    "url": "img/engineer.jpg",
    "revision": "42882405ad49085fdcc4117033a7bba9"
  },
  {
    "url": "img/fare.png",
    "revision": "eda63cb2fa53b9deebcc2a6092b1d79c"
  },
  {
    "url": "img/lifeplan.jpg",
    "revision": "c3d31b2f34b35a6d356787eb8eecd8e9"
  },
  {
    "url": "img/train.jpg",
    "revision": "cbd1e6a2803089f328c42d7762e6cd2d"
  },
  {
    "url": "index.html",
    "revision": "1123aaec75e18bef8824037642a3a87c"
  },
  {
    "url": "tag/index.html",
    "revision": "e96f2b73e984f5e35ca1dd2ccf5016cf"
  },
  {
    "url": "tag/ライフハック/index.html",
    "revision": "4a7a56cdf528f7cebb89beba5c8a21e7"
  },
  {
    "url": "tag/日記/index.html",
    "revision": "e422ae25201e126f3945c22a9949a956"
  },
  {
    "url": "tag/開発/index.html",
    "revision": "00b32fb7aa9e07530637762a05fe22c2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
