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
".git/index": "a3dcde98da12c5868e8388662cb35349",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0cb5cf8eeb9126c6d3faad1d172e1c70",
".git/logs/refs/heads/main": "c887cbc0345b941d0050945b448ac43f",
".git/logs/refs/remotes/origin/main": "8c81bc9fa416e9c3e8825009b8096d26",
".git/objects/00/1aa21b0b9a22d4c070d57863725bcb64e38f59": "91ff44dc4ef76e1282b6fe5ca328f2b1",
".git/objects/00/f0d9974eb3dc0f922bb3ceae399764b9ce779c": "07facb77dd41163e7c888af559b30273",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/03/fde6a86d9db4e86df3027e99ee9deacc8b73c4": "b5e1b1e99924cb7ce3eab13c06028832",
".git/objects/07/db2e4f4c3168507c44cd2c487fe67ee75e0ef4": "08032a6245542ef037364527d8684bd2",
".git/objects/08/083f038d88a9225360602c58ca5a321385202b": "1452914b15b6a9e8d38e419788a59300",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0b/8970611a1747ff175d9d3a258adb5965538dec": "825da52419937d066975086bb285cce0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/c560242e89fabbec7bd861afc700f447c89672": "e45a6d9ebce49fc271dd7ab0bbbb9948",
".git/objects/12/0591898af68abae01b630b6c62d27153e11d06": "5a89f5b05fd049a2dbb7e79283f1b200",
".git/objects/14/a6b83743c4b73a930abaa7b460307501fc99b6": "41bf9f3f26134410686db500a10765e8",
".git/objects/15/2eb46f13e1fff5c224cefad3ff566f2cb969b0": "5741b6f11f53a62323f78bedfa071cfa",
".git/objects/17/4e576ee9dd33e0fb132f4f00e5e199f6e3af2a": "ba06ca0aa14c98ed7fd58acde82d8a81",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/17/e02ede39ec41d2125ab890042e0fa29fd03764": "68cce399bc7c3235cb42a7906acf750f",
".git/objects/18/b9831e9ac41289f60ba6a6bf61d21ff6c57ccb": "064ad45176e1bda2ff1d335a5530b3ea",
".git/objects/18/f74abf3b9f81a867d4cc562400366e1049807d": "9c2211fc53d938617138d41797a3f916",
".git/objects/19/0b737b1246c14b1347ebf747cbf53b782736fa": "2788f1e3eb8d358bc6432dfc71634d33",
".git/objects/1a/02a9b609de505c03245fa02330d7f82eb2e4c6": "bf68654e11a874865bdd426ecaf7f111",
".git/objects/1a/5cb836deb3180cacd8b5c1747293f721137fcb": "5f389ff1e32aa8f56bc20252d6a67bba",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/a7080e00e36cdee0fff9f017c2f6420cec1c0c": "667264ee4ab2434ea5d0dd1f1c9ccc57",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1d/649a9a7bc20d593f806e8bbd8418b1f469477f": "d8ae0b7863e2ebecdb8b33ada901a532",
".git/objects/1e/433470f539c7d9e64f6a728bf03f13e5f3c6bb": "feb312a6028727c8aab9558da3483784",
".git/objects/1e/c2fa4005f0a190575bdaa4edad74bf501bbae6": "1ac7182949a8879972948c9a5ae4a696",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/20/e237de0e9d9c393bf1dbdc20fb5edd9f0a12fc": "580185e49da7e13cc1a74cef43421c67",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/628e8525475609798de1be2c8d19745b7af2fd": "d434fa462667182d4758aac8dba54e11",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/96f16c966b6666d6aba6176f9a1dbf510df0d1": "723e443f8e7bb7cf57e0b1c8aae5fceb",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/9b2419ad2dc69468b1f82e9f6a0f6a8554f851": "a739ea9328b5544ccb4fb521e3635d47",
".git/objects/2a/cd20431a29f2b9ac6fbe28e932f673744cf94d": "abc186142eca4bd8f958bcc765b0970a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/2f/3f727359d097e7755ba22cb20717f3d3785a8e": "1a0d8788f2520d51775829a6dc190a2c",
".git/objects/33/d74c598ddb75ba5a41b45db028ecfee088036b": "dab41ce0bd5e13897be5d95cf1b85e6f",
".git/objects/34/1c99f6303a73f7e82a0446ae95bf79b2db8520": "10cb3bf5b2205bf5804f85f57a23f287",
".git/objects/34/2bb652ebe5db648c6e92ec2bf4471c4c0b6c91": "2a138d52a0afa34b4882dd1c4de14189",
".git/objects/37/0fc577174e088d51b55466f11b677e1c8bd0e8": "bd42cb7d336beea078fc91ee502b3f70",
".git/objects/37/960ae62b42bdf10f87a6f41b92a9712276208e": "3020c9f6efe10d4e1ac6cee66bd20376",
".git/objects/3b/4cff7ebc03ee0d67f6a2d6cd6e4cd2e04491bc": "6e4dab5ee2dc9badc7d84e73ba369630",
".git/objects/3e/23ab055a01ca2fd98c9d151b54bd9f82862788": "e595556be29ed6a119b906fb58ab8743",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/eb8b9d9420af0988b681795a758d208c9c3bec": "714f6010ad5280c7d008126eb409c468",
".git/objects/40/185d51a48585f5b68f338142c744965b3a1cc5": "891b80307eb523b97c89c7f8d3326925",
".git/objects/41/69e80cd886bfe3887a689f022ad10d662e2f0e": "6642eb1dcf203e5f69a2776aad4c7f2f",
".git/objects/41/6e6ebc02a77d5072a5cc3cd05afc014abe3a4a": "c6082b70b342a359b01cad547701d0f4",
".git/objects/42/41e4b864ab4b119ab7601110e143af503f47f3": "b12f3f96f9bbf7cd81e83ace63d619cf",
".git/objects/44/3672fe85c94e910411cca6ac64cde35b3a7944": "e3b1733ad49c1fad3288fbef43d1ee77",
".git/objects/44/f9ebf510f893cf0ea208e93311dbe99c23d115": "6c20a9da9431e948b784a19d78817732",
".git/objects/46/291289bd6280cd43bcc1e6a3ab8f51a045f116": "58932d57891e4840e2cc799a30cbee98",
".git/objects/46/6f1fab22c7936e2e42d085df4db6dd584ce6ac": "775880222a112f2d79fe2779754ff7fc",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/b3b0f8e4cd0ed5dfea952dc3860168fa9fbd6c": "38effda6bd1a3e46e77f87a6672ad271",
".git/objects/53/ef14b2be0969fc67c7ae802777733442f4716b": "69f58783aedceed6d06bf99bf7dccf20",
".git/objects/59/19618f42de552e7bef88a9398836670d65e415": "5a1d818111ebe425f432d99c4bdf4ba0",
".git/objects/59/41eb7d3d330780d4b6a2f07e2639b887f8af02": "bfa0521d0818409fede012cfe4162589",
".git/objects/5a/832b632294afb9be1d70a59acee065685be2e6": "3c4e662577dcf91fe64635d11e479714",
".git/objects/5a/8f7c648713adb2bdd5d61caf3fb6b23b3d853c": "5c3927f28094c0b39fe1aa207c3faa9c",
".git/objects/5c/405aec87143fa179b80b6acd894a06f07c5843": "65c076fb8564f776230890185812962d",
".git/objects/5d/8ad85e4296db024fb623fb09443b21896bae6c": "754d62c74b218b617e2fd0f44ce12516",
".git/objects/5e/ce113f3611d2c17b0485b23c2cde888fcda290": "99b8105d018eb3500df72dd1e50db3b7",
".git/objects/63/14113992a654fd8365d8f29babff4efaff8162": "2ef978e815cacbe8f1a118000b17eac9",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/64/d889e67d2183d221956f2a553527cd639a0ce0": "bead43c910bfc05d0b7dd45ee926fd7d",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/66/0e59206b88b9d271c2c1951b50c1cbe206fe7c": "5dc105a950f9b141fa77b35df389c2e9",
".git/objects/66/71cc273c31b0f8c80f22f221cadeade82e7a87": "835a8dcfad49aa722d87e13f1c9f31a8",
".git/objects/66/c6b9d92ba274dc2a72c86206e7c7cfdc131722": "21f486cfa65363e18881288caa570aeb",
".git/objects/67/53f2b09f6b71f8fc0a2621cfa00b83c5c9359e": "7bf50bcf187d37f8c615ae142685fa9e",
".git/objects/67/ab67926454cd337a3d158833b1fc76a7ede150": "37c514b8ecb9c23563f5225c50892394",
".git/objects/69/55922357d84030a33c7a8959a6eaafc537fc6f": "672146a86a0de46641533c234bacea88",
".git/objects/6a/f1d8a0106d708f578ef2044226082df606638d": "ad03b9ce4ae170b7404e1fd85974e14b",
".git/objects/6e/ce29ba4f58c0f87eab17f183af2d3f48df85fb": "7463d8d336addf3765a5449d57c6a29e",
".git/objects/70/8a724000bc977dccd88fe616f3ce088a7932da": "3dd553bc98ccb4234dbdbcd5b3a5f18f",
".git/objects/72/300f5c324ef27c02f6ddd19b30207edec55233": "254094ffe1f824d58fb4aa468b09f69a",
".git/objects/72/7705a94b80cda6bfacc55e684fad56e15006c8": "30aaf07944d0157d8025d082a0d881f3",
".git/objects/73/387add3c1b8c2662cce3424dc3831cb0faa8de": "307a990f53990173b2f0e47c4e0b2498",
".git/objects/74/1a735d0bb8f607163d1f55f59d5fd970113642": "ba018630fcd42d76667bddc7cc9e1373",
".git/objects/74/b2726be4daf1fdc63bd917df4a8cb0c7a3901c": "2704dabce97a34cc6d03ee3d0d231ecc",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/75/35078578e56b3481c2de533e5475231b5ba8a1": "b0800dbe4e7a05ae9a6e73485f76d8a4",
".git/objects/75/745d27a39d1255fa4a1e16692113c880a3081b": "2c9af695700735f222c161dc1151f815",
".git/objects/75/ec5ca22fb544181ea13a2d98b68d3c17ef6fa9": "a0b4990ae9974f1c515fd859ff9cd2f8",
".git/objects/76/2c4c35ad96306debfa0a56b7ed294ec5b14835": "93c96998f4ef84b5428e4cdadb65a753",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/057db1437560aa09fb81549c7edf9f8fce05b5": "3eeddef32dec27966a3d7e86b767975d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f039d5ca7005d11be0c34ae9d133233402e6a7": "2a3723f2e7e9a18d700e2f74517deeda",
".git/objects/7b/2711694f866077ab6169b5e56296726dca10e4": "faefc203b1525d26b9b68e26d7ebdc6c",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/03ddaacbe7de479a20fe3d916cce8d4d61e323": "9cd73393d4164e0b47c662820aa749b9",
".git/objects/7e/69c0caaee7bab4683f7ed186564c0e2f2784bb": "7ee0d812acfc81439721d5826229db00",
".git/objects/7f/ec98461cabcc8fb8c71aef3754adabe31e3ad6": "b2f20c1df8ea3daa2fc1e2a543c2f42a",
".git/objects/81/f38ca71aa191a638d8917f8da04c997ca94c40": "63e413360d2923d087452ffa1bc2d7a6",
".git/objects/82/a43310876c7feea930a66554416ad1e97b5c4d": "ddbb434ebec53bf61c88c112afe5ea0b",
".git/objects/82/fcdf61f390b5e27fb9953a8f70af5978abc4b4": "3edbb359a8a5494ce72cd4be090b7253",
".git/objects/84/d98a58b34932c2dd8cd25b524a0f803e0f5a4e": "4872f4a9971ec6f2bb3d97f30fb34935",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/956019637cd6a3914c199b7d1143b21c32cda7": "d6da15049a1308af2bb0daa8c5a81f39",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/90/c024d00394ead53b50e3019fd253fd03d47ef4": "7d77e1a55679950d3275d36d545c7246",
".git/objects/92/0df8e1f1a2c25b260737fd9f3804f1bcc5b477": "3f5805fac882baf277cc664552074475",
".git/objects/92/b974a906ce09f5f61d599c963ec44431df3469": "4e0976284de0f6eba16f7fcad5eb088d",
".git/objects/94/f697460abab07d92505145a06f96a8a9ad196f": "02610b3abca9781a8cd322a5d63312b8",
".git/objects/95/e7ed8effe7065be6660bbf0a855d9ddf65e4b5": "f368a837c3b09d78db8ce09d664c99a5",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/75f39fb8519c5e50f7af7c6ded1bb06fed0264": "132bb047b37cf826b72d2b3cc68f46d4",
".git/objects/9b/68a70d2891aa32c8a0869a00e3d10c43af6f90": "52de08721b374a07ce6d8faf0078d45c",
".git/objects/9b/b3bbb1fbd0763fdcdd929d64afa73cf7a8793e": "5599a3e165bd25770668b274a79f24de",
".git/objects/9c/84db3561739f9c4ac6dfb9102f12ca3a6abccb": "3d268f49361fa252c93aada9f6ea6f65",
".git/objects/9f/ee954fbce6a83b9a37451f08b0730a2a6c27f6": "d586068759434310f29e2b8c7ff4fada",
".git/objects/a0/b769da4a6d4c5e9b739dc4cc5a3d3997b5755e": "455ac3dd476575468aa58f3eac8a561c",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/c39cbbe0c33543a59c213b4c7b00eafe0f1774": "4e5c5fbdab78ccffe6d2e42dac9b5ba5",
".git/objects/a4/fea179e55abb05cece9a7147a8f1cf8423924b": "f88b5e4222eecc9869b58a1eef87f5e3",
".git/objects/a5/2fcf07f30f61dd31fef4bb4ec915530a0c4c57": "7d9fe621f6b72f57d56549c6c6499eba",
".git/objects/a8/b140d437294595f336bce7d1c8f5e956bd56eb": "30daf765332041da51995a451f2748f9",
".git/objects/ab/1682586f25e19c34e7eb07465f65c105a46bcd": "bb957edd6cce67d242a5122eaff2c920",
".git/objects/ab/987f98ee53641debff338de60df66d55549e24": "77a995e893f8ed9955ccf9634109a66c",
".git/objects/ab/dcc4007bf7099d1f5f3719aad4890eeb153067": "2e22be2913c814522bcf829d9f8e44ae",
".git/objects/ad/51d7df5b9c4f31dde87c77a295900520c1b703": "da7cf93d5d577ee70b16e1b0adc55805",
".git/objects/ae/4ba9ff8c3819e55d563f614be384333a7b3b30": "ba696e7ffd5862c80e6721faf5d49e5d",
".git/objects/af/550e088f0d1ae0a26b3a1de29f304a593f05e5": "42221ecfa00260a60290b437735d7c38",
".git/objects/af/bd31ef44029c160b6e4b6be64ae1f05eae07b8": "d968e844e437915f9c641ba064dd2ab6",
".git/objects/af/f90d4a04e689dcc0ee4f0873e5e8eb725974d8": "317d7c1f9df73857a6dde5ad8541f6d6",
".git/objects/b0/0e9cd694ef57b4b85d614b17a29660eef6578d": "e264889481c7d858be660858711e90d3",
".git/objects/b1/99dc9e273dae5a58e67723d2704c306fc7b15c": "5ef5c8015566c2607ed93630bf9e5428",
".git/objects/b2/5e03cc9855964d483815e3473b304614a3b95b": "d81039ee46c989f3e091c7db1343a6bd",
".git/objects/b2/b136f0ff1f3eeef19a29ebd36564ae72433298": "889547132781cfdf7027067a6f879d2d",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b6/72e1bc5d94fb2835d62d2c5be04b01bbd2edab": "da3773a5129421f3aa766da929054661",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6262f5a0befcc5ef41ad8e76e06c7096a791dc": "931d055e891cb9beeb21fa51ce095a67",
".git/objects/b7/d476b554d8242d4e5a5a48fa6c49e9264038a6": "a6da801c8201f0d35ec6ec9c8604e7a4",
".git/objects/b7/ec52af767feab8fab4658860aa77c249327f77": "27b2359425447a4606f8a8b83fe04699",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/869b4a19b6ce5d003d7a36b7da284a42e6beeb": "58ecf199fb8cc3fc0ffeb3260f83a950",
".git/objects/ba/4b1c732c0953e944b0a1295b0cf94d10e2c673": "973f2122f95078352cb63a789170c9f0",
".git/objects/ba/664a7088cdec02d92d46fe66d3aa1e6411173a": "18f031a0479d36aaba6ad0b8ef2c867b",
".git/objects/bb/c32da43225440aa5ded29e7a48b89aa074acb7": "b7b5f0b9eb7cfd0fddc9696938df8571",
".git/objects/bc/fb2496276c84e02e3f01cc4e3d73cd460d0840": "e5bc45d0390d2e38c10f911769c9f06c",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c0/213147ef93deeedf13a41f82dd5cbe96b2ed83": "f9fc0f62b1ce2a94296f734c926b2b1e",
".git/objects/c1/f5e2ec1ccf201861ca2d47ecf14813afdcabdb": "bed3fa9ebc951bd659a1761494bc307b",
".git/objects/c2/d0e20e12e293cfc8735f9d145406c6b32301d5": "73696264e55abeacc4ef47b2300f1f71",
".git/objects/c4/0418c4107f0819a0c3a4bfae56b2daa9153040": "2cdf055c995ec2ecbddcb0f5e8cfcc64",
".git/objects/c6/c9d1850624915de428b849fc44009b02ae0664": "73cabd5058e16d1ba041136fab2f487c",
".git/objects/c7/9d7373276a2ef8ff8bedd1ddd2eac150b05789": "4d81d3a25eb986684f51770c17e0498e",
".git/objects/c8/a52573fb23c0d810b069922da9769b2adff525": "fd5e1312199c4123af35ce95766059ee",
".git/objects/cc/497a3d2d6ed1965297cb154d6a8a923cc5cb40": "3dd5f8a8f910407f858dd505a95b201b",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/a9731920519c1a6156c5c6a157c4f2b93a5213": "246f6eec4161941f409e354656c2fe98",
".git/objects/cd/b7c8277bac755e2c5b429e5a8f5cfd9f7329ad": "133192ba24a8f1db9ddbf5b01aafb80f",
".git/objects/cf/1adb525fdef661ef1d8edc776f700d33bd126d": "fb899142c159a6c8d1248116e699b83c",
".git/objects/cf/be71a181d83e3401a53185be282c87c1447b90": "322f4c617c96459d26a2230fbe358d5c",
".git/objects/cf/f870d683b58618a2d6a04a2069b07b8fc5f8e9": "e84272f0902edd234243d2a870247a10",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d2/734285384e9c0ae054db569c7944ecb725f27f": "479b9bdb404bef355059514007c0a1b9",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/4ae113b8c155b1f211e99fcdb1a3dd3d0c454d": "c251462ec0b229cd864105d4a2e156e6",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/c0c6acd59f4f100374205ec852ad283bddc8ee": "ba90cb1fa414849aebf02212fe2cfa2d",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/ec8df20ad4d5d66a1999c4fb851f5779435380": "9602e1a7f67e9439a931cbad3d8feefe",
".git/objects/e7/29c2592eb69d33eded41303737a61f2d8e79dc": "f382d8453f2400623d1bd3c5f041e6d9",
".git/objects/e7/4f060b641cf7ee5146d9384412e98a2432686c": "fdfdd920e411001761d5e08f9d663c3b",
".git/objects/e8/8b6a98ceab94d506a9160ef3f846b9d362d504": "863f6fffb478bb9cf4f3029aebf4e5b9",
".git/objects/e9/a4989eccf11551174b930e8cdcf93ca3f25bc3": "ac65bbd32ed8c54d022d663da8e7ae25",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/06df227196943bf20a120a2b69832a497cee7e": "dad243f66559d2eeb57e4b4dc256e683",
".git/objects/ef/e48731907615375431b7dbf97d04c35eefb003": "9e80565cf67e3ffaff4f37a44e63130a",
".git/objects/f2/a4abeae80910239f516465879650566143a513": "b62e19a5473521cc3acd7ab2ae410796",
".git/objects/f3/13dd4e5a8656e225f87bea9bac9f8fc46d1753": "3b715948dbd9bcf8ef9052374b9cd4ba",
".git/objects/f4/e0ca2a0a6d25d0d61387fdb41f322560b86a15": "f27ce2b2321a4acc6e57e03f20ec1deb",
".git/objects/f5/d1bad8ffab55596637753f2965680a8fcc7a00": "704f2f951408d8e6a008a8180e1fc64b",
".git/objects/f6/1a0c3ac97bd47c672f145eaab63de57d75c776": "6594d20b8631bf8e62620733cc98f87c",
".git/objects/f6/33b6f11381d7a012e4677af4c31b6c5a1fb169": "9f3da8bdcc3fb9b7c4ec63ccc2781248",
".git/objects/f8/89eda5ccee9a66f4a1faf934def4380a14fe4a": "e1a0da5388aa7e35b4832efdbd556a40",
".git/refs/heads/main": "276d19a4d56a2a8330de340530924981",
".git/refs/remotes/origin/main": "276d19a4d56a2a8330de340530924981",
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
"assets/NOTICES": "a6ec6c502e6ed5d6399dfbb9be23ee28",
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
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "f1b3dc8db1e554275cba4d0257557241",
"firebase-messaging-sw.js": "9d9770d1c8710afaf0e3a565335bca5c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a171578c59ba7d6d7540c77822d60a04",
"/": "a171578c59ba7d6d7540c77822d60a04",
"main.dart.js": "384fad9ecb69dcead75d35d690ad1dcd",
"manifest.json": "50a9c7d97bfdc89cd04a2f388e4324d5",
"version.json": "e83e1368a4e6ab1d743b678a9992bd82"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
