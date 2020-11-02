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
    "revision": "eaae3633c003028ff9cd6a02dccbd351"
  },
  {
    "url": "2020/03/20/shinkansen-2020-0320/index.html",
    "revision": "357ddff3b68663b50266536da9421a6d"
  },
  {
    "url": "2020/03/29/lifeplan-2020-0329/index.html",
    "revision": "6129730c294a09d387ea6667045cb469"
  },
  {
    "url": "2020/05/05/vue-calnedar-2020-0505/index.html",
    "revision": "480e2f7dc4d9dff1c5868eaea41ba0b4"
  },
  {
    "url": "2020/05/25/watch-movie-2020-0524/index.html",
    "revision": "9e1724c79f3153eaaaab6a73037dbb89"
  },
  {
    "url": "2020/08/14/dairy-2020-0814/index.html",
    "revision": "5fc40f066e2d4128352ed2ec80178b31"
  },
  {
    "url": "2020/08/15/dairy-2020-0815/index.html",
    "revision": "6cf6761f98e2080fe2ec65c11e28cc9a"
  },
  {
    "url": "2020/08/19/dairy-2020-0819/index.html",
    "revision": "95b58eee4a7476a0695120d6382e73bb"
  },
  {
    "url": "404.html",
    "revision": "02864bd35689c3286359c50b53e1c7a7"
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
    "url": "assets/js/10.f1867d80.js",
    "revision": "d418a0710ada22ce6f217c777165ec8b"
  },
  {
    "url": "assets/js/11.2f082023.js",
    "revision": "7d9c608576ea7e6591b413689c829f45"
  },
  {
    "url": "assets/js/12.7a9756d0.js",
    "revision": "c90354241e43a870d974e7ec8b25bb80"
  },
  {
    "url": "assets/js/13.de91fad8.js",
    "revision": "242d7d633821a19fd50597e131ed9b6a"
  },
  {
    "url": "assets/js/14.433810b1.js",
    "revision": "44fa8cee25f48fff80921dbe8c63e87b"
  },
  {
    "url": "assets/js/15.443aea6d.js",
    "revision": "cf9bcbd999558db7e414a0856047df85"
  },
  {
    "url": "assets/js/16.4415942b.js",
    "revision": "1c07e313ef19b7e64ccd22cf47d078f5"
  },
  {
    "url": "assets/js/17.b39608dc.js",
    "revision": "457f1d6b3170fdf2790c014f9a4f339e"
  },
  {
    "url": "assets/js/18.b604edbb.js",
    "revision": "869fe031101e55a0fcc528e42aa04c09"
  },
  {
    "url": "assets/js/19.ba4787ae.js",
    "revision": "8717329536a881a3bc82666428f4376f"
  },
  {
    "url": "assets/js/20.a878fe3c.js",
    "revision": "e2ac041302f3a40feac218daf828f0d3"
  },
  {
    "url": "assets/js/21.bbd61257.js",
    "revision": "2ff62b60e9095b2e6f4998ce33a6788c"
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
    "url": "assets/js/6.17ed7500.js",
    "revision": "64b82c7e7f450a580217fe034b9c14c1"
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
    "url": "assets/js/app.818a6a84.js",
    "revision": "2007887a87d07a542aef3d66b7416956"
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
    "revision": "09ee54832a00644bde2327905ea94dbe"
  },
  {
    "url": "tag/index.html",
    "revision": "7f8a1a9a3dceafa5a7e20059ded653a4"
  },
  {
    "url": "tag/ライフハック/index.html",
    "revision": "13f6428d009298711d096a847355c1e5"
  },
  {
    "url": "tag/日記/index.html",
    "revision": "845f826c69678161143c83605dac89ff"
  },
  {
    "url": "tag/開発/index.html",
    "revision": "cd25d0dd53acb6bf820fd953c274a9e8"
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
