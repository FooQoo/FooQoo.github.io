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
    "revision": "d5ad6e6c03fcd7856e876085c67305f1"
  },
  {
    "url": "2020/03/20/shinkansen-2020-0320/index.html",
    "revision": "68df15c6db266db2c751e008114d2bef"
  },
  {
    "url": "2020/03/29/lifeplan-2020-0329/index.html",
    "revision": "b57563e77c2f7c8eb2af0183491ba743"
  },
  {
    "url": "2020/05/05/vue-calnedar-2020-0505/index.html",
    "revision": "21f9a606f781147b0019538244320727"
  },
  {
    "url": "2020/05/25/watch-movie-2020-0524/index.html",
    "revision": "5e3353ee2b64c82d351076ca3ab589fd"
  },
  {
    "url": "2020/08/14/dairy-2020-0814/index.html",
    "revision": "f2eb57188c133f7048c29bf519283c97"
  },
  {
    "url": "404.html",
    "revision": "2febc9eb2f4bf1432d229bc0b90963e3"
  },
  {
    "url": "assets/css/0.styles.e7b25b67.css",
    "revision": "c8646a53f642d06757fb646a910aad84"
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
    "url": "assets/js/10.2f1ba270.js",
    "revision": "df3df748f30d9c830105468a3f036fa0"
  },
  {
    "url": "assets/js/11.5564a423.js",
    "revision": "22a3bed40d47b0e8157438ca3874b5b1"
  },
  {
    "url": "assets/js/12.f2064339.js",
    "revision": "c65760a6112985b799f88ac8281e1ea2"
  },
  {
    "url": "assets/js/13.51925786.js",
    "revision": "86fa64073e0165a5d66133a5137e7eb4"
  },
  {
    "url": "assets/js/14.8246c064.js",
    "revision": "1a4cab98eddd9dd2a3e61cc4c253e341"
  },
  {
    "url": "assets/js/15.20204084.js",
    "revision": "d17250baa61391261c88f4053016a211"
  },
  {
    "url": "assets/js/16.0e892aea.js",
    "revision": "bc4f6a31a6beb9e7f6e1fe89357e39ca"
  },
  {
    "url": "assets/js/17.7d211647.js",
    "revision": "fafde1139e814444093d37322583905e"
  },
  {
    "url": "assets/js/18.5ef6fe9f.js",
    "revision": "afec766f551a3d5d5014a3a492cc84c1"
  },
  {
    "url": "assets/js/19.45b529e7.js",
    "revision": "9f75ed140ec81548ad1d840676568edd"
  },
  {
    "url": "assets/js/20.61a15d93.js",
    "revision": "bcd26860c1850061b4ed11090792f410"
  },
  {
    "url": "assets/js/4.0ea7642d.js",
    "revision": "67c6a6d5588b6c4539ac36b4af61a212"
  },
  {
    "url": "assets/js/5.5ff5f081.js",
    "revision": "0354d3494a12e52a9f753bf48550b0e3"
  },
  {
    "url": "assets/js/6.50ef9e4b.js",
    "revision": "5e129e57dc2d9ba33962cdb12057af18"
  },
  {
    "url": "assets/js/7.d1b06853.js",
    "revision": "aad9ccb7a1465a3a3c270cdfdebd69ec"
  },
  {
    "url": "assets/js/8.a185b13e.js",
    "revision": "cb8270f70cf5b2f7b706d327fc119934"
  },
  {
    "url": "assets/js/9.d242a050.js",
    "revision": "662e8e188897c90794a39621b8ea6361"
  },
  {
    "url": "assets/js/app.a2bfbf5f.js",
    "revision": "6b926fdf456697e3fd5eca37ae761223"
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
    "revision": "810ee7e87989c63e80c982e15351e27d"
  },
  {
    "url": "tag/index.html",
    "revision": "664c6502c57eb8281c591fcfef71c327"
  },
  {
    "url": "tag/ライフハック/index.html",
    "revision": "b5e3a4644d173fd81e8b4c4536efef5c"
  },
  {
    "url": "tag/日記/index.html",
    "revision": "2b35f03cfca3882ac7523eb5b4db9fea"
  },
  {
    "url": "tag/開発/index.html",
    "revision": "3c82ee6ada41ff01b5d93752b9e05c99"
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
