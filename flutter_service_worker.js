'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6bab127e0874a13b859100348bbb953e",
".git/config": "00b445daa99d66396332bf29ca588c86",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9fb99c848032e8ad802102c61c7b6dec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "831a1a7b3f9aa713541bddf03091a740",
".git/logs/refs/heads/main": "75c24f39bd26ee32f6b0833709ae0bd0",
".git/logs/refs/remotes/origin/main": "bd1d340fd5ee0f90a77cbace4bd7dc46",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/17/e02ede39ec41d2125ab890042e0fa29fd03764": "68cce399bc7c3235cb42a7906acf750f",
".git/objects/1a/5cb836deb3180cacd8b5c1747293f721137fcb": "5f389ff1e32aa8f56bc20252d6a67bba",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/628e8525475609798de1be2c8d19745b7af2fd": "d434fa462667182d4758aac8dba54e11",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/96f16c966b6666d6aba6176f9a1dbf510df0d1": "723e443f8e7bb7cf57e0b1c8aae5fceb",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/cd20431a29f2b9ac6fbe28e932f673744cf94d": "abc186142eca4bd8f958bcc765b0970a",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/33/d74c598ddb75ba5a41b45db028ecfee088036b": "dab41ce0bd5e13897be5d95cf1b85e6f",
".git/objects/34/1c99f6303a73f7e82a0446ae95bf79b2db8520": "10cb3bf5b2205bf5804f85f57a23f287",
".git/objects/34/2bb652ebe5db648c6e92ec2bf4471c4c0b6c91": "2a138d52a0afa34b4882dd1c4de14189",
".git/objects/37/0fc577174e088d51b55466f11b677e1c8bd0e8": "bd42cb7d336beea078fc91ee502b3f70",
".git/objects/37/960ae62b42bdf10f87a6f41b92a9712276208e": "3020c9f6efe10d4e1ac6cee66bd20376",
".git/objects/3f/eb8b9d9420af0988b681795a758d208c9c3bec": "714f6010ad5280c7d008126eb409c468",
".git/objects/40/185d51a48585f5b68f338142c744965b3a1cc5": "891b80307eb523b97c89c7f8d3326925",
".git/objects/41/6e6ebc02a77d5072a5cc3cd05afc014abe3a4a": "c6082b70b342a359b01cad547701d0f4",
".git/objects/42/41e4b864ab4b119ab7601110e143af503f47f3": "b12f3f96f9bbf7cd81e83ace63d619cf",
".git/objects/44/f9ebf510f893cf0ea208e93311dbe99c23d115": "6c20a9da9431e948b784a19d78817732",
".git/objects/46/6f1fab22c7936e2e42d085df4db6dd584ce6ac": "775880222a112f2d79fe2779754ff7fc",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/59/19618f42de552e7bef88a9398836670d65e415": "5a1d818111ebe425f432d99c4bdf4ba0",
".git/objects/63/14113992a654fd8365d8f29babff4efaff8162": "2ef978e815cacbe8f1a118000b17eac9",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/67/ab67926454cd337a3d158833b1fc76a7ede150": "37c514b8ecb9c23563f5225c50892394",
".git/objects/69/55922357d84030a33c7a8959a6eaafc537fc6f": "672146a86a0de46641533c234bacea88",
".git/objects/6e/ce29ba4f58c0f87eab17f183af2d3f48df85fb": "7463d8d336addf3765a5449d57c6a29e",
".git/objects/74/b2726be4daf1fdc63bd917df4a8cb0c7a3901c": "2704dabce97a34cc6d03ee3d0d231ecc",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/75/35078578e56b3481c2de533e5475231b5ba8a1": "b0800dbe4e7a05ae9a6e73485f76d8a4",
".git/objects/75/745d27a39d1255fa4a1e16692113c880a3081b": "2c9af695700735f222c161dc1151f815",
".git/objects/76/2c4c35ad96306debfa0a56b7ed294ec5b14835": "93c96998f4ef84b5428e4cdadb65a753",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/69c0caaee7bab4683f7ed186564c0e2f2784bb": "7ee0d812acfc81439721d5826229db00",
".git/objects/7f/ec98461cabcc8fb8c71aef3754adabe31e3ad6": "b2f20c1df8ea3daa2fc1e2a543c2f42a",
".git/objects/81/f38ca71aa191a638d8917f8da04c997ca94c40": "63e413360d2923d087452ffa1bc2d7a6",
".git/objects/82/fcdf61f390b5e27fb9953a8f70af5978abc4b4": "3edbb359a8a5494ce72cd4be090b7253",
".git/objects/84/d98a58b34932c2dd8cd25b524a0f803e0f5a4e": "4872f4a9971ec6f2bb3d97f30fb34935",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/956019637cd6a3914c199b7d1143b21c32cda7": "d6da15049a1308af2bb0daa8c5a81f39",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/95/e7ed8effe7065be6660bbf0a855d9ddf65e4b5": "f368a837c3b09d78db8ce09d664c99a5",
".git/objects/9b/68a70d2891aa32c8a0869a00e3d10c43af6f90": "52de08721b374a07ce6d8faf0078d45c",
".git/objects/a0/b769da4a6d4c5e9b739dc4cc5a3d3997b5755e": "455ac3dd476575468aa58f3eac8a561c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/fea179e55abb05cece9a7147a8f1cf8423924b": "f88b5e4222eecc9869b58a1eef87f5e3",
".git/objects/ae/4ba9ff8c3819e55d563f614be384333a7b3b30": "ba696e7ffd5862c80e6721faf5d49e5d",
".git/objects/af/550e088f0d1ae0a26b3a1de29f304a593f05e5": "42221ecfa00260a60290b437735d7c38",
".git/objects/b1/99dc9e273dae5a58e67723d2704c306fc7b15c": "5ef5c8015566c2607ed93630bf9e5428",
".git/objects/b2/5e03cc9855964d483815e3473b304614a3b95b": "d81039ee46c989f3e091c7db1343a6bd",
".git/objects/b2/b136f0ff1f3eeef19a29ebd36564ae72433298": "889547132781cfdf7027067a6f879d2d",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/869b4a19b6ce5d003d7a36b7da284a42e6beeb": "58ecf199fb8cc3fc0ffeb3260f83a950",
".git/objects/ba/4b1c732c0953e944b0a1295b0cf94d10e2c673": "973f2122f95078352cb63a789170c9f0",
".git/objects/c6/c9d1850624915de428b849fc44009b02ae0664": "73cabd5058e16d1ba041136fab2f487c",
".git/objects/c8/a52573fb23c0d810b069922da9769b2adff525": "fd5e1312199c4123af35ce95766059ee",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/4ae113b8c155b1f211e99fcdb1a3dd3d0c454d": "c251462ec0b229cd864105d4a2e156e6",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/c0c6acd59f4f100374205ec852ad283bddc8ee": "ba90cb1fa414849aebf02212fe2cfa2d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/ec8df20ad4d5d66a1999c4fb851f5779435380": "9602e1a7f67e9439a931cbad3d8feefe",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/06df227196943bf20a120a2b69832a497cee7e": "dad243f66559d2eeb57e4b4dc256e683",
".git/objects/ef/e48731907615375431b7dbf97d04c35eefb003": "9e80565cf67e3ffaff4f37a44e63130a",
".git/objects/f2/a4abeae80910239f516465879650566143a513": "b62e19a5473521cc3acd7ab2ae410796",
".git/objects/f6/33b6f11381d7a012e4677af4c31b6c5a1fb169": "9f3da8bdcc3fb9b7c4ec63ccc2781248",
".git/refs/heads/main": "124fc14556fd245e3af62c61d2afab54",
".git/refs/remotes/origin/main": "124fc14556fd245e3af62c61d2afab54",
"assets/AssetManifest.json": "414ff36d1a8813220d42202c8ac0a494",
"assets/assets/dashboards/avg.svg": "3d8e893345314cc418d40f4d5e31552c",
"assets/assets/dashboards/avg_delivery_time.png": "913d068e9cab81e2e8bede9f22daddba",
"assets/assets/dashboards/balance.png": "89043505406fe33527031eace17d98b3",
"assets/assets/dashboards/balance.svg": "f11def9a4943e36a382da8b3b85155bb",
"assets/assets/dashboards/cod.png": "82e19a2beb9c0e0585230f519b07bf22",
"assets/assets/dashboards/cod.svg": "f5727d37495204028ef277f803ae2991",
"assets/assets/dashboards/orders_number.png": "4bb00b0411bbad340d9328e6e58f2347",
"assets/assets/dashboards/total_number.svg": "76fdb40b0aec0ee32d0fc1c81924fad1",
"assets/assets/illustrations/change_password_image.png": "a200c3fcf02d21e8401feda352203daf",
"assets/assets/illustrations/id.png": "107627df23bd3968d0523ffc622678cc",
"assets/assets/illustrations/id.svg": "20241f8446b44d064cc3743e7a07d444",
"assets/assets/illustrations/login_1.png": "9b8f361a123c5448ddcd85f5fdd5eacb",
"assets/assets/illustrations/login_2.png": "60d9d4da414af0f41642e10d2eae0bcf",
"assets/assets/illustrations/login_3.png": "98c9850f8d54be7373c289ae85a42399",
"assets/assets/illustrations/logo.png": "9b3460d66355d8091606817977d6571b",
"assets/assets/illustrations/splash.png": "57b55f9a1d4c781838a7d30535ea4010",
"assets/assets/order_logo.png": "35ababc2d6b934869513b19815af3775",
"assets/assets/order_logo_trans.png": "a1fc3afd786bbdaa8e24775cf1f401a6",
"assets/assets/reports/net_transfer.png": "d5dc675c8ff8ffe599ef47ea2108b34e",
"assets/assets/reports/transfer_value.png": "ebafa715fcfc8642a6d85115987f97e1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "63b4a12cd962ebe76cc2f3f1f1c1248b",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "f1b3dc8db1e554275cba4d0257557241",
"firebase-messaging-sw.js": "9fb5d02a32e03a969659e80636809813",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2903110f8e52844fae563cd89466a472",
"/": "2903110f8e52844fae563cd89466a472",
"main.dart.js": "747c68ecde181feebdf5cb5dda992c78",
"manifest.json": "50a9c7d97bfdc89cd04a2f388e4324d5",
"version.json": "e83e1368a4e6ab1d743b678a9992bd82"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
