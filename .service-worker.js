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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_data/header.json",
    "revision": "220f6fd14bfbce10ffc6b5a576ea02f7"
  },
  {
    "url": "_data/site.json",
    "revision": "b7a815991dac6e728ccd0c5e5e1315d7"
  },
  {
    "url": "_includes/assets/css/inline.css",
    "revision": "a2ad898140841a862a4991d5d223e584"
  },
  {
    "url": "_includes/assets/js/inline.js",
    "revision": "d518e6e35c139fff9ef9781b30e24885"
  },
  {
    "url": "_site/_includes/assets/css/inline.css",
    "revision": "a2ad898140841a862a4991d5d223e584"
  },
  {
    "url": "_site/_includes/assets/js/inline.js",
    "revision": "d518e6e35c139fff9ef9781b30e24885"
  },
  {
    "url": "_site/404.html",
    "revision": "c8e9ab205a8ee491bc548e3bfa9f99bb"
  },
  {
    "url": "_site/about/index.html",
    "revision": "5d6d5437cc636abe45c616b33c359d7a"
  },
  {
    "url": "_site/admin/index.html",
    "revision": "f4957aa0cd3984f17133d424f248e228"
  },
  {
    "url": "_site/admin/preview-templates/index.js",
    "revision": "c6c3008e95e5bf4cf0900103dd25434b"
  },
  {
    "url": "_site/admin/preview-templates/page.js",
    "revision": "698e0d19e147e2655ca80d73c9147719"
  },
  {
    "url": "_site/admin/preview-templates/post.js",
    "revision": "d58653039597a495a17320abb331ab3d"
  },
  {
    "url": "_site/blog/index.html",
    "revision": "647f7c3fc8484db9a7c95f8dfbf12fbc"
  },
  {
    "url": "_site/contact/index.html",
    "revision": "56a355589eeaaa5d5258fe0cd633e623"
  },
  {
    "url": "_site/favicon.ico",
    "revision": "a1ec1700cad7c4efeac85722ff6b4aac"
  },
  {
    "url": "_site/index.html",
    "revision": "1db09d037b6e2cfd65d7190a690c361a"
  },
  {
    "url": "_site/pages/success/index.html",
    "revision": "fec16ca642b1e7b7ea911bb064f24dfc"
  },
  {
    "url": "_site/posts/sdfsdfsdf/index.html",
    "revision": "87e9d7c993737285aef2e006887cae66"
  },
  {
    "url": "_site/posts/this-is-my-first-post/index.html",
    "revision": "36931dc4d540eb1bc7e97070994e5d0c"
  },
  {
    "url": "_site/posts/this-is-my-fourth-post/index.html",
    "revision": "883c1c0b1fb8ceb2d789e2be9824ac78"
  },
  {
    "url": "_site/posts/this-is-my-second-post/index.html",
    "revision": "ffe8a9709797b9c658534e0073e024b3"
  },
  {
    "url": "_site/posts/this-is-my-third-post-which-has-a-rather-long-title/index.html",
    "revision": "8747a12a659a11dca4e5786c3b4c3714"
  },
  {
    "url": "_site/README/index.html",
    "revision": "7fad1e9055d7ed55094015d6c345cef4"
  },
  {
    "url": "_site/schedule/index.html",
    "revision": "ade2344eaf105bc9858c0334005d144f"
  },
  {
    "url": "_site/schedule/schedule-test/index.html",
    "revision": "a60b2e98561b4976d80290160b373d7e"
  },
  {
    "url": "_site/speaker/john-richard-smith/index.html",
    "revision": "fc582060c561f09bb163c4c65bb942cb"
  },
  {
    "url": "_site/speaker/john-smith/index.html",
    "revision": "281b1a2e23ff29446fbc9ba438414edb"
  },
  {
    "url": "_site/speakers/index.html",
    "revision": "958e8252b6ef186c0dcba9d8face0298"
  },
  {
    "url": "_site/static/images/f.svg",
    "revision": "04c4848f4fcd50df33729f19d86e4671"
  },
  {
    "url": "_site/static/images/favicon.svg",
    "revision": "31e735db2add5244635744bf9aac1aeb"
  },
  {
    "url": "_site/static/images/favicon/android-chrome-192x192.png",
    "revision": "d14b0ea7078df71eb08dc716b367f908"
  },
  {
    "url": "_site/static/images/favicon/android-chrome-512x512.png",
    "revision": "9b7d5fb9ece111b2fafc581e20f62f94"
  },
  {
    "url": "_site/static/images/favicon/apple-touch-icon.png",
    "revision": "db7b8793538ddbebca267fce53ffc044"
  },
  {
    "url": "_site/static/images/favicon/favicon-16x16.png",
    "revision": "6cd5d55e175961ab9dea3d63ccad5979"
  },
  {
    "url": "_site/static/images/favicon/favicon-32x32.png",
    "revision": "ee9843a8f22a7944e3b63b7b2ce41ec2"
  },
  {
    "url": "_site/static/images/favicon/mstile-144x144.png",
    "revision": "025d6ae18f895832d353cbde2fecc641"
  },
  {
    "url": "_site/static/images/favicon/mstile-150x150.png",
    "revision": "d38ddf08146eed9c4e2f069c909c6e6f"
  },
  {
    "url": "_site/static/images/favicon/mstile-310x150.png",
    "revision": "36021a8146e14733708649fa60f5331d"
  },
  {
    "url": "_site/static/images/favicon/mstile-310x310.png",
    "revision": "6ca155ff6ddc82a04817658b46a78405"
  },
  {
    "url": "_site/static/images/favicon/mstile-70x70.png",
    "revision": "7c7d927b089dfbe96aab005953ce8a89"
  },
  {
    "url": "_site/static/images/favicon/safari-pinned-tab.svg",
    "revision": "1a200346e5825808e49f6622f664d3ec"
  },
  {
    "url": "_site/static/images/feconf-logo.png",
    "revision": "0e98fb2c3219bc8480725b62cda2246d"
  },
  {
    "url": "_site/static/images/feconf-logo.svg",
    "revision": "05686b810832d9070be4b6b800f8f671"
  },
  {
    "url": "_site/success/indesx.html",
    "revision": "45f44bc1e1bd1687b3c46905eb58d784"
  },
  {
    "url": "_site/success/index.html",
    "revision": "92946636052c58ae1014daf1820fcf31"
  },
  {
    "url": "_site/tags/environment/index.html",
    "revision": "58bf13ccf0db520a343d05d64af9179a"
  },
  {
    "url": "_site/tags/politics/index.html",
    "revision": "d5c9de5dadc298a64b42f186c13cc808"
  },
  {
    "url": "_site/tags/schedule/index.html",
    "revision": "f4854e5127ec205a8c4c72c84812e3f9"
  },
  {
    "url": "_site/tags/speaker/index.html",
    "revision": "c488d5f524f349ecca2de3864f19cfee"
  },
  {
    "url": "_site/tags/sport/index.html",
    "revision": "326e2b9baa770eb4d0312d6e6d8c36e4"
  },
  {
    "url": "_site/tags/tech/index.html",
    "revision": "2f010cfe32ed947e934451ce4ab8ee91"
  },
  {
    "url": "admin/index.html",
    "revision": "879176e7c60a363ee056d322726fdf6c"
  },
  {
    "url": "admin/preview-templates/index.js",
    "revision": "c6c3008e95e5bf4cf0900103dd25434b"
  },
  {
    "url": "admin/preview-templates/page.js",
    "revision": "698e0d19e147e2655ca80d73c9147719"
  },
  {
    "url": "admin/preview-templates/post.js",
    "revision": "d58653039597a495a17320abb331ab3d"
  },
  {
    "url": "favicon.ico",
    "revision": "a1ec1700cad7c4efeac85722ff6b4aac"
  },
  {
    "url": "package-lock.json",
    "revision": "e00d4bb52f0fc3208c581700294a4f9f"
  },
  {
    "url": "package.json",
    "revision": "46adca87c83d783c20f656c55c6ee884"
  },
  {
    "url": "pages/pages.json",
    "revision": "1d419a857f4de0c4fcd621cc875ebafa"
  },
  {
    "url": "posts/posts.json",
    "revision": "9193225de78bcd13f6c74b9465bcb17d"
  },
  {
    "url": "schedule/schedule.json",
    "revision": "75147be938f94dcb1a381d9b93912b10"
  },
  {
    "url": "speaker/speaker.json",
    "revision": "71c9967a81085978b0da89aa79d3ef7b"
  },
  {
    "url": "static/fonts/opensans-regular-webfont.woff",
    "revision": "ec1147224f23a4bfcb267c2cdd0ad3fa"
  },
  {
    "url": "static/fonts/opensans-regular-webfont.woff2",
    "revision": "eb7e2689760be667105b2b46dcadf966"
  },
  {
    "url": "static/fonts/Quicksand-Bold.woff",
    "revision": "351cfc7539d2d00b599391f8e34bf9f6"
  },
  {
    "url": "static/fonts/Quicksand-Bold.woff2",
    "revision": "25f6e6f5ce9fdd9157ed92bbe1384898"
  },
  {
    "url": "static/fonts/Quicksand-Light.woff",
    "revision": "261d0a4a0fbc9a09cd599e0bd082b51f"
  },
  {
    "url": "static/fonts/Quicksand-Light.woff2",
    "revision": "06b187f85ae8b2463a843bd55bc88303"
  },
  {
    "url": "static/fonts/Quicksand-Medium.woff",
    "revision": "3ba5022b847547a011616dc2c9f64454"
  },
  {
    "url": "static/fonts/Quicksand-Medium.woff2",
    "revision": "e110ff0b2be6db44e4be069c5820600a"
  },
  {
    "url": "static/fonts/Quicksand-Regular.woff",
    "revision": "30e1a19b2997d55f01ec5e7cabeb6c97"
  },
  {
    "url": "static/fonts/Quicksand-Regular.woff2",
    "revision": "d7bed2260647104b9f77d9d9aa85ea2e"
  },
  {
    "url": "static/images/f.svg",
    "revision": "04c4848f4fcd50df33729f19d86e4671"
  },
  {
    "url": "static/images/favicon.svg",
    "revision": "31e735db2add5244635744bf9aac1aeb"
  },
  {
    "url": "static/images/favicon/android-chrome-192x192.png",
    "revision": "d14b0ea7078df71eb08dc716b367f908"
  },
  {
    "url": "static/images/favicon/android-chrome-512x512.png",
    "revision": "9b7d5fb9ece111b2fafc581e20f62f94"
  },
  {
    "url": "static/images/favicon/apple-touch-icon.png",
    "revision": "db7b8793538ddbebca267fce53ffc044"
  },
  {
    "url": "static/images/favicon/favicon-16x16.png",
    "revision": "6cd5d55e175961ab9dea3d63ccad5979"
  },
  {
    "url": "static/images/favicon/favicon-32x32.png",
    "revision": "ee9843a8f22a7944e3b63b7b2ce41ec2"
  },
  {
    "url": "static/images/favicon/mstile-144x144.png",
    "revision": "025d6ae18f895832d353cbde2fecc641"
  },
  {
    "url": "static/images/favicon/mstile-150x150.png",
    "revision": "d38ddf08146eed9c4e2f069c909c6e6f"
  },
  {
    "url": "static/images/favicon/mstile-310x150.png",
    "revision": "36021a8146e14733708649fa60f5331d"
  },
  {
    "url": "static/images/favicon/mstile-310x310.png",
    "revision": "6ca155ff6ddc82a04817658b46a78405"
  },
  {
    "url": "static/images/favicon/mstile-70x70.png",
    "revision": "7c7d927b089dfbe96aab005953ce8a89"
  },
  {
    "url": "static/images/favicon/safari-pinned-tab.svg",
    "revision": "1a200346e5825808e49f6622f664d3ec"
  },
  {
    "url": "static/images/feconf-logo.png",
    "revision": "0e98fb2c3219bc8480725b62cda2246d"
  },
  {
    "url": "static/images/feconf-logo.svg",
    "revision": "05686b810832d9070be4b6b800f8f671"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
