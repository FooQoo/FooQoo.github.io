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
    "revision": "ab29624302e46dfdc24be87ae53a2516"
  },
  {
    "url": "2020/03/20/shinkansen-2020-0320/index.html",
    "revision": "5561d7298a73d3bff3c76bc3a04c9c48"
  },
  {
    "url": "2020/03/29/lifeplan-2020-0329/index.html",
    "revision": "e2bc029b1d526e30287a48044ce3afc0"
  },
  {
    "url": "2020/05/05/vue-calnedar-2020-0505/index.html",
    "revision": "216493fbc41bfef7f755682fa1c9a27c"
  },
  {
    "url": "404.html",
    "revision": "abf7ffc73044b8d5ff00fb557550f7f8"
  },
  {
    "url": "assets/css/0.styles.74195618.css",
    "revision": "3b0bf004ca0c218d6aefab20e2046c2d"
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
    "url": "assets/js/1.eed09a28.js",
    "revision": "0d5023bc9ecd82ff9f9a233181738e6a"
  },
  {
    "url": "assets/js/10.794c12a0.js",
    "revision": "fce5963bce9b56734d83eddd964d20a9"
  },
  {
    "url": "assets/js/11.5564a423.js",
    "revision": "22a3bed40d47b0e8157438ca3874b5b1"
  },
  {
    "url": "assets/js/12.760e144c.js",
    "revision": "3333074bd8578f2328a3012d737a3a95"
  },
  {
    "url": "assets/js/13.b77f9162.js",
    "revision": "d348927acf0e135294543f42d4af835f"
  },
  {
    "url": "assets/js/14.8f66106a.js",
    "revision": "70fadbb77c6da39d7d19fcf5092bed3a"
  },
  {
    "url": "assets/js/15.ce650d3c.js",
    "revision": "012bc6ee07b8df2deaf469f30edf2252"
  },
  {
    "url": "assets/js/16.b40d64ef.js",
    "revision": "87f28e4562f504d99d0adce82a4db0dc"
  },
  {
    "url": "assets/js/17.19f26134.js",
    "revision": "fae5cd1f5f8a784fb7df928a76073e83"
  },
  {
    "url": "assets/js/18.d7cc4c1d.js",
    "revision": "08bd6c9022ba5eefb94eb26f946a062e"
  },
  {
    "url": "assets/js/4.01a63097.js",
    "revision": "2d054e58e4bf5683d949e1282739fdc1"
  },
  {
    "url": "assets/js/5.53da258a.js",
    "revision": "c77a1afc9b1074440f75e616d2ec9ba0"
  },
  {
    "url": "assets/js/6.37812674.js",
    "revision": "97051a3ef2ee92216fde1247e5a27f00"
  },
  {
    "url": "assets/js/7.169c6634.js",
    "revision": "40667bb6ac0ae97401df8f0571055076"
  },
  {
    "url": "assets/js/8.8d13be75.js",
    "revision": "9914b9fd5ff719b720cad7849de36cf7"
  },
  {
    "url": "assets/js/9.32f480b6.js",
    "revision": "8e427b475620ccb6d93c9ce9b3244364"
  },
  {
    "url": "assets/js/app.6cd7877d.js",
    "revision": "214871c801b53a9975933ef780b0518e"
  },
  {
    "url": "assets/js/vuejs-paginate.4fa0aed3.js",
    "revision": "8d826d2cf10905198f7055634b421f38"
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
    "revision": "bbe42515ebff996ddbd472138474f82e"
  },
  {
    "url": "tag/index.html",
    "revision": "6df8979c3c866963e053c5b986f19ce3"
  },
  {
    "url": "tag/ライフスタイル/index.html",
    "revision": "5db7bc004c122c290b2ac938fc019fc4"
  },
  {
    "url": "tag/開発/index.html",
    "revision": "4999510d41e26cb1cc66bd61ba93b638"
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
