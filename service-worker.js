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
    "revision": "b0ddb3a13867dc5a7aa3f59e47b666d4"
  },
  {
    "url": "2020/03/20/shinkansen-2020-0320/index.html",
    "revision": "74ac497caa75b8b407145ca8914b2ae7"
  },
  {
    "url": "2020/03/29/lifeplan-2020-0329/index.html",
    "revision": "6db0110f3c6bef1eb95c20cfd63e6d68"
  },
  {
    "url": "2020/05/05/vue-calnedar-2020-0505/index.html",
    "revision": "0d66524fb3d1c24f9a119dad5fa0d609"
  },
  {
    "url": "2020/05/25/watch-movie-2020-0524/index.html",
    "revision": "4c39d1c8b917a02ef2615ed12e0d38d1"
  },
  {
    "url": "2020/08/14/dairy-2020-0814/index.html",
    "revision": "f767763c4c77480870228df18dc94cc7"
  },
  {
    "url": "2020/08/15/dairy-2020-0815/index.html",
    "revision": "a9f11e22d8490c5ab2e14fb223530768"
  },
  {
    "url": "404.html",
    "revision": "5f05843fb0d4dbea95b1529ac6b9035b"
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
    "url": "assets/js/10.8a60a6df.js",
    "revision": "e3a160c92cc8f578d47a307ff029005f"
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
    "url": "assets/js/13.7fb70438.js",
    "revision": "bcf5f65af02dc269889ba5b693dca18c"
  },
  {
    "url": "assets/js/14.e0861d65.js",
    "revision": "4c8a0d8d47490dd6bd0387f60c732ddf"
  },
  {
    "url": "assets/js/15.03f192bf.js",
    "revision": "f75da78cbb428fd928761e72a663568c"
  },
  {
    "url": "assets/js/16.5206eee8.js",
    "revision": "9836bb4297d13cb6fd5d13d95cd0d15e"
  },
  {
    "url": "assets/js/17.62d0aae5.js",
    "revision": "5e4be0b2374783fe8ded2803ef06c20b"
  },
  {
    "url": "assets/js/18.b9939a90.js",
    "revision": "a549bb3a898f2fd03cfb3f766c55c03e"
  },
  {
    "url": "assets/js/19.202b8323.js",
    "revision": "5865ad974e8b8a4126278d59c23784c4"
  },
  {
    "url": "assets/js/20.e2ca1456.js",
    "revision": "050bb271579edfa6609c55ca9410eb02"
  },
  {
    "url": "assets/js/4.afb34513.js",
    "revision": "184c1538fc0a3538c15a7a5376221ab3"
  },
  {
    "url": "assets/js/5.e3fb29c6.js",
    "revision": "edc8fbce39a70c95730dbf717abdf6e7"
  },
  {
    "url": "assets/js/6.da72cb92.js",
    "revision": "48a6b3524c832edd0b9ce0d55fe2b19d"
  },
  {
    "url": "assets/js/7.f7fff3c0.js",
    "revision": "f5eaca7f6a5dd1ac234ffcd9b9f91dc0"
  },
  {
    "url": "assets/js/8.fbbcfc47.js",
    "revision": "a1cdf596901b195896d275ca72ef994e"
  },
  {
    "url": "assets/js/9.eceedd41.js",
    "revision": "4ef16e9bb858340199fe85fa3a5df5ae"
  },
  {
    "url": "assets/js/app.068f4503.js",
    "revision": "7be3df389cd83697fbf79565890ee5d2"
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
    "revision": "7afa619933eab55bd575f6af64cdf715"
  },
  {
    "url": "tag/index.html",
    "revision": "0e0f0a49c1f257711453d7acfad2ebe7"
  },
  {
    "url": "tag/ライフハック/index.html",
    "revision": "ebb01bafd0bcd5fcd2fdda6de37f05a8"
  },
  {
    "url": "tag/日記/index.html",
    "revision": "9d44cd47510ac7b1e1da55125b825b4f"
  },
  {
    "url": "tag/開発/index.html",
    "revision": "82183a3026b758e720b28f26c765797a"
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
