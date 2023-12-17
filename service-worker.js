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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "8a048e1607841864bd212cff7601b186"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1895703e.css",
    "revision": "e2694897af5072c3c9441558e38454c0"
  },
  {
    "url": "assets/img/messages_400.b7d4f19d.png",
    "revision": "b7d4f19d11db11e35ba2782cb04165e9"
  },
  {
    "url": "assets/img/messages_db_after_delete.c7f7f839.png",
    "revision": "c7f7f839b22b86412710d0ef570320da"
  },
  {
    "url": "assets/img/messages_db_after_update.5f98ee75.png",
    "revision": "5f98ee75c7133d8f9d003a7c6d43e57c"
  },
  {
    "url": "assets/img/messages_delete_404.15facb6a.png",
    "revision": "15facb6a00e358be5911047a5b7945e1"
  },
  {
    "url": "assets/img/messages_delete.0402d40d.png",
    "revision": "0402d40df109d5da15c38eed96e7f3c3"
  },
  {
    "url": "assets/img/messages_get_404.45140edb.png",
    "revision": "45140edb5273ad49c6153e74ca03e0c8"
  },
  {
    "url": "assets/img/messages_get_all.90cb5da7.png",
    "revision": "90cb5da7d03fcec38ebc2f5ab2bbca6f"
  },
  {
    "url": "assets/img/messages_get_one.aa63e7e6.png",
    "revision": "aa63e7e65028f044cb9a47849e6e16a5"
  },
  {
    "url": "assets/img/messages_initial.98177023.png",
    "revision": "98177023f7bac02803b0addd289ad246"
  },
  {
    "url": "assets/img/messages_post.cd896d64.png",
    "revision": "cd896d642fc20c48840949a951b47c14"
  },
  {
    "url": "assets/img/messages_put.f16684e8.png",
    "revision": "f16684e817262d8464d07c10cc6de4ca"
  },
  {
    "url": "assets/img/relational_scheme.44c970b0.png",
    "revision": "44c970b0a143ec6fead87694514ea610"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/users_400.758ea4d1.png",
    "revision": "758ea4d1046c83604bff037d5c2f36b4"
  },
  {
    "url": "assets/img/users_db_after_delete.6af0c67f.png",
    "revision": "6af0c67fc262d73a1a722e439eca3a0f"
  },
  {
    "url": "assets/img/users_db_after_update.37353cfc.png",
    "revision": "37353cfcfa7beb7bae768f49be84cb02"
  },
  {
    "url": "assets/img/users_delete_404.79413cac.png",
    "revision": "79413cacbcd19e0a1412f181386eee9e"
  },
  {
    "url": "assets/img/users_delete.b5f94ba1.png",
    "revision": "b5f94ba1bf3c061ca48246cc18ff4cf7"
  },
  {
    "url": "assets/img/users_get_404.8c099a5c.png",
    "revision": "8c099a5c89359c5998050460ce912553"
  },
  {
    "url": "assets/img/users_get_all.e9e44828.png",
    "revision": "e9e448287f2866fd510ed2f84a12ae3a"
  },
  {
    "url": "assets/img/users_get_one.75c89a7a.png",
    "revision": "75c89a7ab476952a488455c2a57df21b"
  },
  {
    "url": "assets/img/users_initial.bacdb8d4.png",
    "revision": "bacdb8d4616d3612f89cd4b3f95542d1"
  },
  {
    "url": "assets/img/users_post.71b62d5b.png",
    "revision": "71b62d5b6374983965a819c145d8773a"
  },
  {
    "url": "assets/img/users_put.18fcb61c.png",
    "revision": "18fcb61cd034d58cf8717383e71b944e"
  },
  {
    "url": "assets/js/1.17a57802.js",
    "revision": "317eb653c21edc5f76105fa354fb2490"
  },
  {
    "url": "assets/js/10.7776d0d2.js",
    "revision": "3ca85133fd5d585db26c1aa0b09b5295"
  },
  {
    "url": "assets/js/13.0b0e6b83.js",
    "revision": "9add298c24418a4e24e10414ccb1ff5a"
  },
  {
    "url": "assets/js/14.376c631f.js",
    "revision": "19fcfb4b133023059c0b672ad890c5e7"
  },
  {
    "url": "assets/js/15.c1abf8dc.js",
    "revision": "dbaf2fff94b424d1d7df69032ea9fc56"
  },
  {
    "url": "assets/js/16.b8cb012a.js",
    "revision": "7bdc205b2b31240cec7970b515fdf10c"
  },
  {
    "url": "assets/js/17.5f026901.js",
    "revision": "6b36433d703667c4360539eb8f938f66"
  },
  {
    "url": "assets/js/18.e09d80d7.js",
    "revision": "d12dba1a9a7706c8b37cca889e347d37"
  },
  {
    "url": "assets/js/19.bca954a1.js",
    "revision": "4892856f92a3216b9bba4673ac4d367d"
  },
  {
    "url": "assets/js/2.66889842.js",
    "revision": "fc411a19f9f8c133d01b602b9025e584"
  },
  {
    "url": "assets/js/20.5aefb568.js",
    "revision": "62b79af8b70f85e70101facf0acffadd"
  },
  {
    "url": "assets/js/21.25c3404c.js",
    "revision": "4a55c78f428654422992b19cbfcb6c9e"
  },
  {
    "url": "assets/js/22.f4100a6d.js",
    "revision": "2d2aefcd7cb000ccfc7354d5c4d7992b"
  },
  {
    "url": "assets/js/23.7279c42d.js",
    "revision": "05c3867aa6d44f09d35b28d89ffa8c7b"
  },
  {
    "url": "assets/js/24.2e6e9958.js",
    "revision": "9a1663cef2e3fa7afe1434a5b8158779"
  },
  {
    "url": "assets/js/25.f80cb9fa.js",
    "revision": "b9f0f7fdbd160f6264d23c9893ce1523"
  },
  {
    "url": "assets/js/26.5bfe8cfc.js",
    "revision": "25097d4b15d164877a074855c62d5254"
  },
  {
    "url": "assets/js/27.e964e0ca.js",
    "revision": "3b54bbf1a0e2f061e674ab79ced60bdb"
  },
  {
    "url": "assets/js/28.a86d132d.js",
    "revision": "aea69a8541fca92c3bb0ed2f2dc73bde"
  },
  {
    "url": "assets/js/29.111b5c63.js",
    "revision": "178976665ef9bfb9f143a398d231d8bc"
  },
  {
    "url": "assets/js/3.9512e6a8.js",
    "revision": "ba785f5ef9f15b19603ffb18aee7c990"
  },
  {
    "url": "assets/js/30.7a2afb55.js",
    "revision": "09bc29af1c9545cecf179f73e2caad80"
  },
  {
    "url": "assets/js/31.0c3406fa.js",
    "revision": "021135e6d2a3ed3fe33f11580b4b0c86"
  },
  {
    "url": "assets/js/32.7db69651.js",
    "revision": "7de27d9d507fa09bf1509cb46f424e72"
  },
  {
    "url": "assets/js/33.c0868fd2.js",
    "revision": "bc55ca37b28d3292ab4e3598df04d2a8"
  },
  {
    "url": "assets/js/34.b8674d3b.js",
    "revision": "b851e9379b2e3e21d7de15f5e77c4d24"
  },
  {
    "url": "assets/js/35.d384a68d.js",
    "revision": "0f57cba254feefe8748745a2cf72ab88"
  },
  {
    "url": "assets/js/36.d55a2ca3.js",
    "revision": "fd8a66c2a3697f382d4beaed67f1792b"
  },
  {
    "url": "assets/js/37.8095f0c7.js",
    "revision": "f2af5f8b29757f3d200058166efdfbcc"
  },
  {
    "url": "assets/js/38.c953ba83.js",
    "revision": "7bbc219454e775ba2494e389a967e907"
  },
  {
    "url": "assets/js/39.6964f453.js",
    "revision": "dfac4a5a1f46e1480caf192d9e967b11"
  },
  {
    "url": "assets/js/4.0446d790.js",
    "revision": "da8a59b809337668f2ca13b4cbc2d5ac"
  },
  {
    "url": "assets/js/41.61aa90e8.js",
    "revision": "066959bec3c5f45d798f3d1a90380fa5"
  },
  {
    "url": "assets/js/5.4ea83c8a.js",
    "revision": "040b86484ca454044fadab03bbf870ae"
  },
  {
    "url": "assets/js/6.670c69fd.js",
    "revision": "4e6b61cd3c255df000d81fde2a907b84"
  },
  {
    "url": "assets/js/7.e54bdaad.js",
    "revision": "03b3676c71a015f609e9871812602de5"
  },
  {
    "url": "assets/js/8.9355f411.js",
    "revision": "886a0023d0b684373e09be4df5b29bde"
  },
  {
    "url": "assets/js/9.948354fd.js",
    "revision": "651b33ee624bfe8d7ef1bcb0dacfc4f1"
  },
  {
    "url": "assets/js/app.acebe1e6.js",
    "revision": "db7423456c26756de93af320aa97710b"
  },
  {
    "url": "assets/js/vendors~docsearch.a7a1cc5b.js",
    "revision": "dd76b1dc32160e58eafabb5eb9d1d835"
  },
  {
    "url": "conclusion/index.html",
    "revision": "9b8888f37db8c14c2e9defe68675de4e"
  },
  {
    "url": "design/index.html",
    "revision": "5c336d52a33ea37f3bb93512b8eece45"
  },
  {
    "url": "index.html",
    "revision": "cadee4760bac88467150326f8087c214"
  },
  {
    "url": "intro/index.html",
    "revision": "ac1c02717b417b7396294faa81b64cae"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "be29b0877b88d292335f2f3d8458998b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "9a3b429000f963a42241723163d84032"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "651a8b1454de0853dc146844e225ebb1"
  },
  {
    "url": "software/index.html",
    "revision": "077d78229edff244fbf7d7328fedaa1b"
  },
  {
    "url": "test/index.html",
    "revision": "d3dd21247dd739c1abec5a6acb10a29b"
  },
  {
    "url": "use cases/index.html",
    "revision": "c074d00c392208023e5fc709adb18ddb"
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
