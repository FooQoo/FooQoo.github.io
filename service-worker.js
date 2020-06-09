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
    "revision": "0ae05072e1dd45ea4bcc3db8d2838eac"
  },
  {
    "url": "2020/03/20/shinkansen-2020-0320/index.html",
    "revision": "44516b36f447a20d3cc5740c012ae00a"
  },
  {
    "url": "2020/03/29/lifeplan-2020-0329/index.html",
    "revision": "72b47b420aa492df1219701e577d194c"
  },
  {
    "url": "2020/05/05/vue-calnedar-2020-0505/index.html",
    "revision": "9a35c795658c11c6d59b60ccfd1ad0d4"
  },
  {
    "url": "2020/05/25/watch-movie-2020-0524/index.html",
    "revision": "ab3996420e85dc328d0335aa244cc0f3"
  },
  {
    "url": "404.html",
    "revision": "66571908f703be84115e47e4fdd90484"
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
    "url": "assets/js/13.79c08120.js",
    "revision": "44432a63f6d2ab1574c51bf4896ac48e"
  },
  {
    "url": "assets/js/14.d3d1386f.js",
    "revision": "6b1285061832a7dee49d0271f73480e8"
  },
  {
    "url": "assets/js/15.d4fc184c.js",
    "revision": "2ab47c08baa9baad7021f35fd1dc1632"
  },
  {
    "url": "assets/js/16.058d2d03.js",
    "revision": "c2c9b655cddff5af6d411b50ea1e75c2"
  },
  {
    "url": "assets/js/17.7f141652.js",
    "revision": "1e0be5a57277f70b11427e5c9c9ca30c"
  },
  {
    "url": "assets/js/18.8597117b.js",
    "revision": "80861fd5d3500e2438af475bba5aa520"
  },
  {
    "url": "assets/js/19.f1192c53.js",
    "revision": "f700598072eb9fe6f165c6583fd8f11b"
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
    "url": "assets/js/6.f244966e.js",
    "revision": "e8c99ffc1c18562d4aca5881a48d7d60"
  },
  {
    "url": "assets/js/7.8ed61028.js",
    "revision": "66d2654a110a679366aa2d4cb7ad3fbe"
  },
  {
    "url": "assets/js/8.573118ff.js",
    "revision": "d0d9602bc84dd5095ec1a9ce6a33a3fa"
  },
  {
    "url": "assets/js/9.11161fa2.js",
    "revision": "17ab4680f436fca5efbfd5710aafbad0"
  },
  {
    "url": "assets/js/app.a49a2b92.js",
    "revision": "f36312a05485186f0d0810cfbeaeec40"
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
    "revision": "015f84d9c7b60a733f1c63d379b95805"
  },
  {
    "url": "tag/index.html",
    "revision": "fedcbece1f2b0eb3a0b8d8d6448ffb9a"
  },
  {
    "url": "tag/ライフハック/index.html",
    "revision": "02c480a7d971d6f8578554bbd3861736"
  },
  {
    "url": "tag/開発/index.html",
    "revision": "ff6d6e0ed36fbac5d549744e16222b03"
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
