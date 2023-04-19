'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5370584c7ba71842c196ec37c98d0618",
"index.html": "a8fd47b7affa75ea25bae2eab894e809",
"/": "a8fd47b7affa75ea25bae2eab894e809",
"main.dart.js": "3527234d910ded44bab9ebab3170e92c",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4a28316fe179a58e0de7d7ee52d4af50",
"assets/AssetManifest.json": "a754e3ab95e3aa9f7c834e3b48da3525",
"assets/NOTICES": "74406ed0680055b6b2564c5686335368",
"assets/FontManifest.json": "abec0000daa6807d4301dbab8efaf77b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/animated_icon/assets/cool.json": "fed987b806728dfd57109dfa8fa7e4b9",
"assets/packages/animated_icon/assets/mute.json": "a7cd312791b602731566644cda8f01fd",
"assets/packages/animated_icon/assets/chat-message.json": "3d3b60d909f1ef7ae22be6f173003fef",
"assets/packages/animated_icon/assets/sign-out.json": "f375d0e8ba61b296e4c0ae9353965773",
"assets/packages/animated_icon/assets/loading_1.json": "75efe45219ef6143429b4b225634449d",
"assets/packages/animated_icon/assets/share.json": "bbca283e078a88e5e69608c207166403",
"assets/packages/animated_icon/assets/clock.json": "ef46b5eeb36672562513d96f630ccd69",
"assets/packages/animated_icon/assets/expensive.json": "0bb81a1ba4237d2e505c506a319f8bb2",
"assets/packages/animated_icon/assets/shocker.json": "6e697424f3c102bc2000c30245ddd14e",
"assets/packages/animated_icon/assets/upload.json": "0bd081997f18f3ec404d5903689b5411",
"assets/packages/animated_icon/assets/play_stop.json": "bed868226187c4132aa075a1277d11b8",
"assets/packages/animated_icon/assets/volume.json": "caf67509ea1a413e0627e5c6784b05af",
"assets/packages/animated_icon/assets/walk.json": "df4aba413834afcd8af026b1749c6040",
"assets/packages/animated_icon/assets/spinning_arrows.json": "8134b71f41e59b184d48fcd682b7ae43",
"assets/packages/animated_icon/assets/silent.json": "78626c6f16e9300839c518a92a19dd2d",
"assets/packages/animated_icon/assets/skip_forwards.json": "2af637238aa74085237d8554175a0d3c",
"assets/packages/animated_icon/assets/bell.json": "668dba34f67b4ed2fe0361a4391cc4aa",
"assets/packages/animated_icon/assets/settings.json": "4b6b3d0922452a469d80f1615fa1f3a0",
"assets/packages/animated_icon/assets/paid.json": "6bf0ede45aa0082ff8ba2d1c7d1d4df2",
"assets/packages/animated_icon/assets/no_comments.json": "63e9000d6324078c8c9b1848324b3d88",
"assets/packages/animated_icon/assets/wifi_search.json": "d37d07bb5deee76c31d7f6c383c6de22",
"assets/packages/animated_icon/assets/iphone_spinner.json": "e0d52eb299840750b45a7e80c43e7d55",
"assets/packages/animated_icon/assets/favorite_folder.json": "5c5be33497e5752392a757948f81ec5c",
"assets/packages/animated_icon/assets/discount.json": "8c523e7761603f05583c06a17354b64d",
"assets/packages/animated_icon/assets/edit_cancel.json": "4ee6ba5b65bf7d2ceb839aa990c7e90e",
"assets/packages/animated_icon/assets/calculator.json": "fe1abd248aff9fbc9f30a33fae8ca1e0",
"assets/packages/animated_icon/assets/numerical_sorting.json": "29ec74211cc6780607b965a97b7ddfa4",
"assets/packages/animated_icon/assets/thumb_up.json": "ae32094bbaf5a06c2fe785618c8ed4c5",
"assets/packages/animated_icon/assets/download.json": "5af632f5d17961301b0c4eca42b79d8c",
"assets/packages/animated_icon/assets/neatral_face.json": "9417a2503732b758f921064ffe09a3f4",
"assets/packages/animated_icon/assets/drag-left.json": "5bc31de4409a61a7a372da9353cd2a1a",
"assets/packages/animated_icon/assets/wink.json": "05858ea381a0523af1c93b8a045d01c6",
"assets/packages/animated_icon/assets/circles_menu_2.json": "c433cb02bf56657a42c1bb5963fa607d",
"assets/packages/animated_icon/assets/submit_progress.json": "73e31ca174258b4375dd8907bf4e598c",
"assets/packages/animated_icon/assets/cloud.json": "c76e77439df441152e8ab6f7b3bcd12c",
"assets/packages/animated_icon/assets/file.json": "3c5a683c8f0d5847e82447bc91f40d4b",
"assets/packages/animated_icon/assets/compass.json": "e29b3f473575de6c02af02da2f28690e",
"assets/packages/animated_icon/assets/loading_7.json": "6dd95d36ea9d09924d92f18e14def8ab",
"assets/packages/animated_icon/assets/birthday_cake.json": "715293a88d166b3d166c77c51133d30e",
"assets/packages/animated_icon/assets/fullscreen.json": "04fe2e8b50ddf67d14d951414f8667c3",
"assets/packages/animated_icon/assets/loading_6.json": "cad4b6ccd0a1e43b9c1ed47133dabb04",
"assets/packages/animated_icon/assets/heart_2.json": "ec728a02801a28844116fb7c2b8f70d5",
"assets/packages/animated_icon/assets/hourglass.json": "372b56bb7dc3e56090a6494a7fb4d69b",
"assets/packages/animated_icon/assets/live-video-on.json": "638fffb60c94010b7f8d68f550eba331",
"assets/packages/animated_icon/assets/circles_menu_3.json": "5df3f9c85e0ca9e5bc56b718ece86226",
"assets/packages/animated_icon/assets/drag-right.json": "979c0316830e0f193c4241a9e590cee0",
"assets/packages/animated_icon/assets/edit.json": "139320ad4e8be4aeb5421351744fec46",
"assets/packages/animated_icon/assets/demo.png": "7f9d85174d832fdd9ec3caaf583be682",
"assets/packages/animated_icon/assets/checkmark_ok.json": "d43791f67ed2065d8534d30ad3283365",
"assets/packages/animated_icon/assets/rotate.json": "0f43b79dc55b93a3d12948ccea68460d",
"assets/packages/animated_icon/assets/gmail.json": "b37689e4d0b1a31ddb7cc6f0b08df20b",
"assets/packages/animated_icon/assets/sleeping.json": "eeab4b61177e0b26feec443cda21e936",
"assets/packages/animated_icon/assets/fog_weather.json": "75b3d483c81c75eb4bac6fdb79b299ef",
"assets/packages/animated_icon/assets/crying.json": "57647df4780a9f4af5abc02124eb3dc7",
"assets/packages/animated_icon/assets/power-off-button.json": "e0fa101ae10bbed6a3aa85c20c9f47aa",
"assets/packages/animated_icon/assets/play_stop_2.json": "1762898e2b28750ae79fc22bf868efc5",
"assets/packages/animated_icon/assets/checkbox.json": "2930689eeba8a91e48be3089dccc53e1",
"assets/packages/animated_icon/assets/calendar-tear.json": "4d6e4bf2c0bd0e845ca1ff161003ebe8",
"assets/packages/animated_icon/assets/vomited.json": "1590f196364d415de15209f874366235",
"assets/packages/animated_icon/assets/diamond.json": "e983e51ad87489050b061cc4dde04a86",
"assets/packages/animated_icon/assets/block_mic.json": "8688283117e0044ec752ec2421b5c7cd",
"assets/packages/animated_icon/assets/save-changes.json": "5813bb5a358888658a51386819169671",
"assets/packages/animated_icon/assets/loading_5.json": "a831cd127c2d019778528f198cfefcc3",
"assets/packages/animated_icon/assets/document.json": "05b47c11f7dcee983a0e1c24e698fcb2",
"assets/packages/animated_icon/assets/print.json": "d54ba53aacc6d8fe2ea22012805d51b2",
"assets/packages/animated_icon/assets/menu_arrow.json": "16081971f09f67a26fc1b3f46b8802b1",
"assets/packages/animated_icon/assets/menu.json": "86180df740cc1a224561e130d1b81da2",
"assets/packages/animated_icon/assets/skip_backwards.json": "2835cc51b2e2766df5a8bd7a36518312",
"assets/packages/animated_icon/assets/left_right.json": "5806bf128cea8c82d106f29a584c1ea0",
"assets/packages/animated_icon/assets/qr-code.json": "66255531a8987c95d9115bbc6b6c4846",
"assets/packages/animated_icon/assets/loading_4.json": "66268fbf3f4c7dea6a81df21a5a1e46a",
"assets/packages/animated_icon/assets/add.json": "b7bb068a9790921472e8c717fe5ca168",
"assets/packages/animated_icon/assets/list.json": "fa94a8bf563855b68320e5b76aa5f764",
"assets/packages/animated_icon/assets/clear-symbol.json": "307c246cff2d27c944fb33cf4e24eb28",
"assets/packages/animated_icon/assets/alphabetical_sorting.json": "3f2b896ddd3d7f9d9359787eef3e846a",
"assets/packages/animated_icon/assets/heart.json": "4fd6bbd2a785c55c3c729217f9981cbc",
"assets/packages/animated_icon/assets/map_pointer.json": "018a74eec55f8959347aefbaf10f9dcb",
"assets/packages/animated_icon/assets/refresh.json": "0e4661e60e73fb2080d2248f1cfddfb5",
"assets/packages/animated_icon/assets/fatal-error.json": "9d82a9938e0eb82288d97f2948948c10",
"assets/packages/animated_icon/assets/trash_bin.json": "d66d677f84f62f9037f321af36acbfe6",
"assets/packages/animated_icon/assets/skateboarding.json": "36c68e00d9cf64d3f13746ccc3cd2bda",
"assets/packages/animated_icon/assets/tune.json": "4b763ed0cf954405cd7b2d501b63cd99",
"assets/packages/animated_icon/assets/loading_3.json": "18e23d18db166f2dff169cc1983f774f",
"assets/packages/animated_icon/assets/in_love.json": "9d3e528375ee6e063e1a952aa758e67b",
"assets/packages/animated_icon/assets/eye.json": "bf14651a14e319ac6d2ae8a37168e05f",
"assets/packages/animated_icon/assets/cross.json": "4f8186dcb99e125c7cae80c8a6c7d58c",
"assets/packages/animated_icon/assets/battery.json": "31acf00bd98d26ed21250a6d236ee37f",
"assets/packages/animated_icon/assets/calendar.json": "b74760ba851d59bd1acf3307bb0e9c12",
"assets/packages/animated_icon/assets/unlock.json": "bda8666eab56bd80fc6af5dbe5702458",
"assets/packages/animated_icon/assets/dollar.json": "41a4d363da9e51feade4d774712837b9",
"assets/packages/animated_icon/assets/info-click.json": "9c4df7c49129c6cafa5c341026d43115",
"assets/packages/animated_icon/assets/zoom.json": "5c12ae0d082ada5f1ad1633c556f8c0c",
"assets/packages/animated_icon/assets/missed_call.json": "d69450dda953da82afa80f5e14cfcdf2",
"assets/packages/animated_icon/assets/down-arrow.json": "d1ce2bcb82fe6075a7ed7356da89836f",
"assets/packages/animated_icon/assets/edit_ok.json": "51350be0e5c184d7c524fe38f40902f4",
"assets/packages/animated_icon/assets/internet.json": "de90409fd58251147830605d9896e44c",
"assets/packages/animated_icon/assets/home.json": "f7e97ef1b623b8db02a8db2476f37442",
"assets/packages/animated_icon/assets/bookmark.json": "37e02b2261b19c5944081d94883e24e3",
"assets/packages/animated_icon/assets/day_night_weather.json": "af60779aee2d8d834027bcf5ef2548c5",
"assets/packages/animated_icon/assets/angel.json": "ec103cc7e54b24104083c19f44d59ac4",
"assets/packages/animated_icon/assets/toggle.json": "3b2b9be0e4e36fefaa418741f3d0e26c",
"assets/packages/animated_icon/assets/pause.json": "bd53aeea8b02f227dd372454be07e120",
"assets/packages/animated_icon/assets/tongue_out.json": "0ad19f80c100e8ebfdd6b3e23ccea745",
"assets/packages/animated_icon/assets/map.json": "6a4ad8816ccaa5a630279fdef4f06ebe",
"assets/packages/animated_icon/assets/activity.json": "8c7cbe8cfb2c35ccc4751194573222a3",
"assets/packages/animated_icon/assets/smile.json": "dc30e2d8ae9ae4117513615780e0b452",
"assets/packages/animated_icon/assets/laughing.json": "b6f5507a7f3a6bd4d606a21282615e68",
"assets/packages/animated_icon/assets/puzzled.json": "365f0e93cef957303301c709fb4e6d63",
"assets/packages/animated_icon/assets/loading_2.json": "f6e465a44b33233ce28a12ee76045dda",
"assets/packages/animated_icon/assets/confused.json": "30cbf5b57f504158300c82b37d172cf9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/sign_button/images/mail.png": "c9172bdda51109489593c86da58f10e8",
"assets/packages/sign_button/images/instagram.png": "6c356b0bd4b0f7f80046fc2557e85757",
"assets/packages/sign_button/images/github.png": "c67686f615f334806a07d41d594c34c1",
"assets/packages/sign_button/images/microsoft.png": "dfb60902957a3204c63d4d3de2ae76ff",
"assets/packages/sign_button/images/tumblr.png": "695506da08f97651af960af9f268dcc4",
"assets/packages/sign_button/images/apple.png": "c82fbe8cbcecaa462da7bd30015b3565",
"assets/packages/sign_button/images/twitter.png": "08ed456da7c064a42ed528098c78dfc0",
"assets/packages/sign_button/images/facebookDark.png": "deface349f4fd6bece4039901e8c6c44",
"assets/packages/sign_button/images/linkedin.png": "e4ae6d8c444c75a24d02cd9995072297",
"assets/packages/sign_button/images/reddit.png": "1b200a970d87b9ab578ac556b24cf16b",
"assets/packages/sign_button/images/yahoo.png": "8d028327c009ae90e08ebfd965176f8b",
"assets/packages/sign_button/images/googleDark.png": "3a7df7781108618c2b3d05a5121abdfc",
"assets/packages/sign_button/images/youtube.png": "615f39ecf21272fec7eceb7984ed8959",
"assets/packages/sign_button/images/appleDark.png": "11238aa9e757b14b5e3460b467e6a2b4",
"assets/packages/sign_button/images/pinterest.png": "4e9b78531f5968aad62a1ec26eb75b18",
"assets/packages/sign_button/images/google.png": "46039fa62c3167028c4fdb86816c3363",
"assets/packages/sign_button/images/facebook.png": "f4dfe9871ac8cce8278c2aba8c897e1d",
"assets/packages/sign_button/images/amazon.png": "af00fbd77763d45afd0131b85e5f78a5",
"assets/packages/sign_button/images/githubDark.png": "561b115749533c422a8c02e4843c73d2",
"assets/packages/sign_button/images/quora.png": "b10aaad4707aad91cbab341ef33ea56c",
"assets/packages/circle_flags/assets/svg/hn.svg": "e1e066e80767cfe830026ae09eafcc5a",
"assets/packages/circle_flags/assets/svg/dm.svg": "4d90ade9aa265fc48c9aff0b1be5e919",
"assets/packages/circle_flags/assets/svg/fr.svg": "f8eb4977b540e0061fff1083b20d4377",
"assets/packages/circle_flags/assets/svg/dz.svg": "81c542cc9c3eed9b2901402868370a8d",
"assets/packages/circle_flags/assets/svg/ga.svg": "c01b3a0105f28ae37b9bbc2661ed2565",
"assets/packages/circle_flags/assets/svg/ph.svg": "e8ba0912f6f8e2ad603b966540511347",
"assets/packages/circle_flags/assets/svg/ss.svg": "d2370529dbb3e090a4db66d856f7527f",
"assets/packages/circle_flags/assets/svg/rw.svg": "1e2b64d0ca702e9c166e6aa6a8a25ec7",
"assets/packages/circle_flags/assets/svg/es-ib.svg": "40ad6feef01064938cb741af68a25ca4",
"assets/packages/circle_flags/assets/svg/sd.svg": "2df0511e89ccff16325df02e795a4adb",
"assets/packages/circle_flags/assets/svg/hausa.svg": "9a83dad6facbe7da17fee9cdeb0938b3",
"assets/packages/circle_flags/assets/svg/se.svg": "7396469458dffa7c1ec99f506e828b5a",
"assets/packages/circle_flags/assets/svg/sr.svg": "66b316222fcad7113d15a0b89cc9bbe1",
"assets/packages/circle_flags/assets/svg/eh.svg": "fe53008c7626792ee0e3bcdb24eb26b9",
"assets/packages/circle_flags/assets/svg/gw.svg": "348dad3673dfe6004ee0b675a49f77f4",
"assets/packages/circle_flags/assets/svg/es-pv.svg": "290d42d66b6e93eb7e3ddde33f1c50c2",
"assets/packages/circle_flags/assets/svg/jp.svg": "fe9962c9b147543656765ae9c3e70cae",
"assets/packages/circle_flags/assets/svg/hm.svg": "684f6a8ed8fc024181974a721b2f841d",
"assets/packages/circle_flags/assets/svg/je.svg": "f59ffe9a3faae24cb6d3aa1bfc69de18",
"assets/packages/circle_flags/assets/svg/gu.svg": "0487468b04ba93e5c77b25274f811537",
"assets/packages/circle_flags/assets/svg/gb.svg": "106f5c7c1d3a0df64d60bd8a0d17680e",
"assets/packages/circle_flags/assets/svg/pk.svg": "ab4fe19e3e1a45a1a5aa87960a788488",
"assets/packages/circle_flags/assets/svg/sg.svg": "5d5bdb0d940a36aba1bef299222743c1",
"assets/packages/circle_flags/assets/svg/kurdistan.svg": "741ccd3babdcb24d72428af01263af47",
"assets/packages/circle_flags/assets/svg/northern_cyprus.svg": "b99e898aaf75ecf42727ac9b3764a5a2",
"assets/packages/circle_flags/assets/svg/ru.svg": "839ee62b646310b857b1679b54ae5f4c",
"assets/packages/circle_flags/assets/svg/do.svg": "00a61779a588b564b26cc4b276f43be1",
"assets/packages/circle_flags/assets/svg/gt.svg": "cda3aef87638b5b1a9a0dd76bcc8dc4f",
"assets/packages/circle_flags/assets/svg/us-hi.svg": "3dc47ef92dc763fd0f95f847c8235f7c",
"assets/packages/circle_flags/assets/svg/kw.svg": "88a9a029209d7781c0c11dbd3e7bcfff",
"assets/packages/circle_flags/assets/svg/sh-hl.svg": "2f5e28ec7330d2fd43ffd5f766a13ba3",
"assets/packages/circle_flags/assets/svg/il.svg": "40b2f701cccb3374067946e1751d3d2e",
"assets/packages/circle_flags/assets/svg/gg.svg": "a5a8b9eb8ef644f39c5037da4b143e5b",
"assets/packages/circle_flags/assets/svg/gp.svg": "88c2095c1d5b9eb67906b273dbf19893",
"assets/packages/circle_flags/assets/svg/dk.svg": "4da8f611498458c86a3cc0feafe9f2e2",
"assets/packages/circle_flags/assets/svg/sb.svg": "973491fc588823e54a3bb8b1f1806921",
"assets/packages/circle_flags/assets/svg/py.svg": "b879aeb7a091ce4e433710db6b0b4355",
"assets/packages/circle_flags/assets/svg/pn.svg": "6cf5dce6ce5971f6b64bbe21d9601f21",
"assets/packages/circle_flags/assets/svg/fr-h.svg": "43089b2c762b067a316ee6dbc954ebf8",
"assets/packages/circle_flags/assets/svg/bq-bo.svg": "2e33672677f003fc1706bcf38dfee72f",
"assets/packages/circle_flags/assets/svg/st.svg": "25911ebe140d36c94f405cc6041a5167",
"assets/packages/circle_flags/assets/svg/sc.svg": "a99c39ec468f7f30726dc0bd1ec0a30f",
"assets/packages/circle_flags/assets/svg/dj.svg": "15c3c2b832e24791ba2cf68cee1ddf0b",
"assets/packages/circle_flags/assets/svg/gq.svg": "5890884b214d2c12fd9f2a448695fd2d",
"assets/packages/circle_flags/assets/svg/esperanto.svg": "b6d57fb0c24ebce04220870aff30e035",
"assets/packages/circle_flags/assets/svg/gf.svg": "ecb5d6990b83932d031980964f652c3e",
"assets/packages/circle_flags/assets/svg/kr.svg": "ce45246807f9d517c9f3791f69939e46",
"assets/packages/circle_flags/assets/svg/im.svg": "f5054ba360c196c53bc9410bcfcc5292",
"assets/packages/circle_flags/assets/svg/ke.svg": "9b414a3bd6f825654ede89172de6cf42",
"assets/packages/circle_flags/assets/svg/kg.svg": "4a37a402786d1bf4ff500caadeb0f76f",
"assets/packages/circle_flags/assets/svg/hk.svg": "9d2df129593fff7d297fe22e90460917",
"assets/packages/circle_flags/assets/svg/kp.svg": "a83222b2d9152b65538dec35d09969dd",
"assets/packages/circle_flags/assets/svg/io.svg": "2270085857db59b2b6d576504fb2a839",
"assets/packages/circle_flags/assets/svg/gd.svg": "95309fac39e70b44cc36df81d69b94ac",
"assets/packages/circle_flags/assets/svg/gs.svg": "4728036cce38ab7b41e20d0a7b9bf847",
"assets/packages/circle_flags/assets/svg/sa.svg": "ab8d4ba846bd8e3a5c211da92f215e6d",
"assets/packages/circle_flags/assets/svg/re.svg": "16ec0a3f3334115dde5125bb453eefae",
"assets/packages/circle_flags/assets/svg/pm.svg": "81eaa34ed80b925ca6197cada5cdb9a8",
"assets/packages/circle_flags/assets/svg/sv.svg": "cfe7380b093828f1609ff709adf61b20",
"assets/packages/circle_flags/assets/svg/es-variant.svg": "3902bb17032f3f68e80d5e4351605e78",
"assets/packages/circle_flags/assets/svg/rs.svg": "a995e1e300551178751e422f1b810dda",
"assets/packages/circle_flags/assets/svg/pl.svg": "93e96e132d4357fc98c9ea257cc44583",
"assets/packages/circle_flags/assets/svg/gr.svg": "6e60512ccae8faf69d66fcd3db947ccc",
"assets/packages/circle_flags/assets/svg/ge.svg": "7a4eb95de109613e2f401ea09dfcf9e8",
"assets/packages/circle_flags/assets/svg/in.svg": "06d51a462030a6065253ff0709b7a19b",
"assets/packages/circle_flags/assets/svg/mv.svg": "27371507bc0fd45f4de4b0eaac241f46",
"assets/packages/circle_flags/assets/svg/lr.svg": "f6a01fbd251db505a30f130623fe18c2",
"assets/packages/circle_flags/assets/svg/ma.svg": "8b2b3efe3d903f9b6a917f9b7e9b4a8c",
"assets/packages/circle_flags/assets/svg/nz.svg": "69439867cc71f89c6a94aedc748af601",
"assets/packages/circle_flags/assets/svg/au.svg": "684f6a8ed8fc024181974a721b2f841d",
"assets/packages/circle_flags/assets/svg/bn.svg": "225c366e11cb68905c1ee127a80402ed",
"assets/packages/circle_flags/assets/svg/by.svg": "964d8abf2f4aa07de1da875ab2206481",
"assets/packages/circle_flags/assets/svg/tt.svg": "52c1733868446f64fef5003b838068f0",
"assets/packages/circle_flags/assets/svg/ug.svg": "95ae11d0f72a5e4891523d0fee48e3f7",
"assets/packages/circle_flags/assets/svg/tc.svg": "5caf39764cb15e0709e652e94e986f5e",
"assets/packages/circle_flags/assets/svg/somaliland.svg": "2629d69fe6199ba15e457336520ad1c4",
"assets/packages/circle_flags/assets/svg/ye.svg": "c51cacdcb38497fef0550f194a72d7bf",
"assets/packages/circle_flags/assets/svg/ac.svg": "f80befc6bb09c504fd69508b340ffa86",
"assets/packages/circle_flags/assets/svg/ck.svg": "dc0b2706e9bed3b7086639ad1721a180",
"assets/packages/circle_flags/assets/svg/bo.svg": "14aba2a82a6b42eb86d47f6a6284658a",
"assets/packages/circle_flags/assets/svg/at.svg": "087cdf6b4741896b5fe42a1a019e4859",
"assets/packages/circle_flags/assets/svg/it-82.svg": "56a874b68c6aa074e1197b3447949c96",
"assets/packages/circle_flags/assets/svg/ls.svg": "cbc5db3a3f03615cf9cadc23e740ee1f",
"assets/packages/circle_flags/assets/svg/mw.svg": "fecbd81c8f515994e86c67612f8cba3c",
"assets/packages/circle_flags/assets/svg/nl.svg": "94f110dcfe37cba0290f966dd5359259",
"assets/packages/circle_flags/assets/svg/mu.svg": "b36ca35897f653cd9d5e1d8ab7b925c0",
"assets/packages/circle_flags/assets/svg/ci.svg": "526c99fc456aed2ede320a3a44552a06",
"assets/packages/circle_flags/assets/svg/bm.svg": "53e4b5358eeff31139276d2d008e21d7",
"assets/packages/circle_flags/assets/svg/bz.svg": "1dcacf986aeeaf8e43fb9bf4fd777c4f",
"assets/packages/circle_flags/assets/svg/tw.svg": "0f92646f3f1c384fd31db6e11504f4b4",
"assets/packages/circle_flags/assets/svg/us.svg": "4281df1053156e9f9d4608aa28a0fb85",
"assets/packages/circle_flags/assets/svg/bq-sa.svg": "52ed892c88ef61e42e1c3465362db300",
"assets/packages/circle_flags/assets/svg/maori.svg": "780a41357161eda9c3ed73ad1f8fb197",
"assets/packages/circle_flags/assets/svg/gb-ork.svg": "55041097d3b91b8de580d6c68a7e7ba6",
"assets/packages/circle_flags/assets/svg/ta.svg": "54ffc77512cd8a4d0aae57e82f8d115f",
"assets/packages/circle_flags/assets/svg/vi.svg": "c037a1d1a843f2dfdf79d1f71d776280",
"assets/packages/circle_flags/assets/svg/tv.svg": "a7eda155b40cb801fe9241b68eae5e83",
"assets/packages/circle_flags/assets/svg/bl.svg": "c813413a12855888ccd979df6b4a3ab3",
"assets/packages/circle_flags/assets/svg/aw.svg": "41e4a727f4960628e98923f98a2c56e2",
"assets/packages/circle_flags/assets/svg/ch.svg": "2f2cb6a2d15e64be332d8d488d3006ca",
"assets/packages/circle_flags/assets/svg/mc.svg": "a3d94920055ecaf056afb18277c2ca4d",
"assets/packages/circle_flags/assets/svg/mt.svg": "dfc9e91b66c8fcf3613b2075fcb952fe",
"assets/packages/circle_flags/assets/svg/no.svg": "cf046fce42fb67981d0438d353646c27",
"assets/packages/circle_flags/assets/svg/lc.svg": "8b4adb02d5dae577f1e12015518e49ec",
"assets/packages/circle_flags/assets/svg/mg.svg": "0ff81480075cbebcc7b0304cc939e479",
"assets/packages/circle_flags/assets/svg/lt.svg": "f90d4d0df85d57a86b7ae09809e21b0c",
"assets/packages/circle_flags/assets/svg/tibet.svg": "0b1b4721d2e507f50d57868263398959",
"assets/packages/circle_flags/assets/svg/mp.svg": "ab4edb746288b44caa1475bf8e7216d6",
"assets/packages/circle_flags/assets/svg/ad.svg": "89b7675faf3014508b3e55b18224f0ef",
"assets/packages/circle_flags/assets/svg/cl.svg": "69f0f9526b171eb1c0e6168fb5fe178a",
"assets/packages/circle_flags/assets/svg/as.svg": "65f8dee7ba68cd59d69731c395aaa8b6",
"assets/packages/circle_flags/assets/svg/bh.svg": "c16d2afd114265d947e946db7d021cec",
"assets/packages/circle_flags/assets/svg/ua.svg": "6c0f32b588419a29795dc2f396d4baaf",
"assets/packages/circle_flags/assets/svg/yiddish.svg": "3c4832acb4d8a2c13290e6221c055193",
"assets/packages/circle_flags/assets/svg/tr.svg": "245ead5bb540880d309ac8f0086ca560",
"assets/packages/circle_flags/assets/svg/sh-ta.svg": "54ffc77512cd8a4d0aae57e82f8d115f",
"assets/packages/circle_flags/assets/svg/nato.svg": "cdf78a6e76cb756a074668f51f5a4aff",
"assets/packages/circle_flags/assets/svg/bq-se.svg": "3e551d07e69dbcc311e3db6e5f7ec2ef",
"assets/packages/circle_flags/assets/svg/yt.svg": "d47884b93bfed3eb63c0a53e283c9e09",
"assets/packages/circle_flags/assets/svg/es-ce.svg": "4b77e8a38b294567848c5bbbcfdc61e5",
"assets/packages/circle_flags/assets/svg/td.svg": "8d662163422a1017dcf5feaaa0a89ae2",
"assets/packages/circle_flags/assets/svg/bi.svg": "fb54479ca4a35ce10471d7876dbb0f2b",
"assets/packages/circle_flags/assets/svg/ar.svg": "22bbd3b859135396d5730cab8e0faa12",
"assets/packages/circle_flags/assets/svg/cm.svg": "59543e68e1a774db1a75092c6ad22a98",
"assets/packages/circle_flags/assets/svg/ae.svg": "43158b83ebde34baa15ecfe1fe132470",
"assets/packages/circle_flags/assets/svg/cz.svg": "dd724558a466f4f4ee069f39fff62818",
"assets/packages/circle_flags/assets/svg/mq.svg": "237aebaa3473d9b3b378e5701659a239",
"assets/packages/circle_flags/assets/svg/lu.svg": "5bb7b44f4447b23c0599be9018c6ab86",
"assets/packages/circle_flags/assets/svg/mf.svg": "cd673c838473fd13e132e2484ae24aac",
"assets/packages/circle_flags/assets/svg/lb.svg": "a465a8b4aff49a86c11bcbe3589328e4",
"assets/packages/circle_flags/assets/svg/md.svg": "6dacb299c8e879ede7a67e557be88784",
"assets/packages/circle_flags/assets/svg/ms.svg": "488b3eab793b471fe8a1cd671067b91e",
"assets/packages/circle_flags/assets/svg/ag.svg": "ee8aea90d169850d7c3a43643ec2fb59",
"assets/packages/circle_flags/assets/svg/cx.svg": "bd82abf700acd550d17a82bc26dc8e64",
"assets/packages/circle_flags/assets/svg/sh-ac.svg": "f80befc6bb09c504fd69508b340ffa86",
"assets/packages/circle_flags/assets/svg/co.svg": "a343c4b17cdc9b56ad71ba1e0de1b5d2",
"assets/packages/circle_flags/assets/svg/es-ml.svg": "6fa87d6de5b0aa9ff692b8158b0d6929",
"assets/packages/circle_flags/assets/svg/tf.svg": "6d41d1a5b400beb74213c17bc67e9844",
"assets/packages/circle_flags/assets/svg/vn.svg": "aeb24c3f5309494bc256e04b5fcda385",
"assets/packages/circle_flags/assets/svg/zm.svg": "fba9f9ee5a6034fed1483b56e3f5a78f",
"assets/packages/circle_flags/assets/svg/gb-sct.svg": "d0351c4d43a3f3f110d708709f553cda",
"assets/packages/circle_flags/assets/svg/kannada.svg": "2648ec163d71181ee1d1cba0cc06ef72",
"assets/packages/circle_flags/assets/svg/tg.svg": "842212033bc37af4a47814e9cce03825",
"assets/packages/circle_flags/assets/svg/cn.svg": "33bc8425ef551d9f442c6c231b19c0b0",
"assets/packages/circle_flags/assets/svg/bj.svg": "f3bc44b414a8085fd4ac4b74bdfdbdee",
"assets/packages/circle_flags/assets/svg/aq.svg": "f2e93396d986f788f57bb8c8caec7aa3",
"assets/packages/circle_flags/assets/svg/cy.svg": "ff143ee1a95fdb2806addb8f123f9973",
"assets/packages/circle_flags/assets/svg/af.svg": "ed52837b76b3344324e6dac01b16b0bc",
"assets/packages/circle_flags/assets/svg/lv.svg": "955c9b9fbc7c495ed7edbb2133c1e3e2",
"assets/packages/circle_flags/assets/svg/om.svg": "3f98a1426fac16eadc5706a209b7dfc4",
"assets/packages/circle_flags/assets/svg/mr.svg": "48cf1e4b5dd10fc85ddf2f64b17c03b7",
"assets/packages/circle_flags/assets/svg/ni.svg": "4f75194fba70bd74c98b7fadafc48eef",
"assets/packages/circle_flags/assets/svg/la.svg": "2f670c6d617823c1ecf80ed22dc4f06b",
"assets/packages/circle_flags/assets/svg/me.svg": "b7e44ea3f52feb5eedf3000a71390363",
"assets/packages/circle_flags/assets/svg/mh.svg": "95c8d96a5e5a56c0d967d64c25e31382",
"assets/packages/circle_flags/assets/svg/gb-wls.svg": "38bc63f22463f3515144e305d31f9d75",
"assets/packages/circle_flags/assets/svg/cc.svg": "1efea451d3404a0de1c007fe10436eba",
"assets/packages/circle_flags/assets/svg/bg.svg": "c04b3b71c8cdc255c27d64ef11ef8ac3",
"assets/packages/circle_flags/assets/svg/tj.svg": "e50d19d84862233e45387f998d5c796c",
"assets/packages/circle_flags/assets/svg/vu.svg": "ede1218c12210aefaeb56cdb7c585f7c",
"assets/packages/circle_flags/assets/svg/wf.svg": "2d5f8e4cf4bcb23643bd2a819dad8acb",
"assets/packages/circle_flags/assets/svg/uy.svg": "ce36b1fde94b9e32a0868efcfbd239aa",
"assets/packages/circle_flags/assets/svg/za.svg": "c5883cb64e958cd98a103b2df8c68649",
"assets/packages/circle_flags/assets/svg/zw.svg": "ef4f4ac72c1247cd9715492f11284336",
"assets/packages/circle_flags/assets/svg/vc.svg": "c1dacf0b7be831c5d76f2f1e39d8695e",
"assets/packages/circle_flags/assets/svg/ca-bc.svg": "18d129f55796f28217e5368f096d97bc",
"assets/packages/circle_flags/assets/svg/tk.svg": "90c74fc0eb5727469333cc9be72e4fc9",
"assets/packages/circle_flags/assets/svg/bf.svg": "2bd8b89e7b9f329f9636d3588d60c9c1",
"assets/packages/circle_flags/assets/svg/bq.svg": "2e33672677f003fc1706bcf38dfee72f",
"assets/packages/circle_flags/assets/svg/cu.svg": "26857a69d78fb2ec36e439d435589a25",
"assets/packages/circle_flags/assets/svg/ne.svg": "ee61581e941c96e5a18e081bbb8e038a",
"assets/packages/circle_flags/assets/svg/nr.svg": "7db9ac8fad539857d637110db31cc561",
"assets/packages/circle_flags/assets/svg/mk.svg": "1a8049eadc2b6c5a419d463424edf981",
"assets/packages/circle_flags/assets/svg/np.svg": "1838bca752dc49398794161b3e3ef3c9",
"assets/packages/circle_flags/assets/svg/ng.svg": "5c430af7aada0e26ce1fc2ec0f1fbdad",
"assets/packages/circle_flags/assets/svg/bs.svg": "e00480ec602269f3d2f356ed88760cd0",
"assets/packages/circle_flags/assets/svg/cw.svg": "aa010b115b2e25d743f9e6de55bc255b",
"assets/packages/circle_flags/assets/svg/bd.svg": "aa6eb8bc767dabcfe4612ac98da2b6f5",
"assets/packages/circle_flags/assets/svg/um.svg": "4281df1053156e9f9d4608aa28a0fb85",
"assets/packages/circle_flags/assets/svg/va.svg": "4d77e062e0b68a361fcf5dad55085f0a",
"assets/packages/circle_flags/assets/svg/uz.svg": "8f5dd129f3f134ea6acaaa1eaccc1cc8",
"assets/packages/circle_flags/assets/svg/xk.svg": "691fbb7fb344d34bed8431105ea95c24",
"assets/packages/circle_flags/assets/svg/ec-w.svg": "0027f5bd4872d5906a9b4476478d4f8a",
"assets/packages/circle_flags/assets/svg/ws.svg": "8a51f7d2114dfd16fa68f258a1541825",
"assets/packages/circle_flags/assets/svg/th.svg": "07eebb9921f05fcd67133a994b1de346",
"assets/packages/circle_flags/assets/svg/ca.svg": "f9299ca944f3ba88b92d3e8bf166cdac",
"assets/packages/circle_flags/assets/svg/be.svg": "cae09b00847008df8bb6e74ab7d25770",
"assets/packages/circle_flags/assets/svg/cv.svg": "7838e341fdee013e76a8a0f02e02a896",
"assets/packages/circle_flags/assets/svg/ai.svg": "3a3b21bddea6d67a13b28411e70451f7",
"assets/packages/circle_flags/assets/svg/br.svg": "02d17088bb4aaf4527bbb2261b9a3aeb",
"assets/packages/circle_flags/assets/svg/ly.svg": "21d21965596bb14a6f50961e1b45915b",
"assets/packages/circle_flags/assets/svg/nf.svg": "fc331cd706a83a3cacbbaeaf68af8f8c",
"assets/packages/circle_flags/assets/svg/it-88.svg": "c90a93eadf4f50443f33b5b6e5b892e4",
"assets/packages/circle_flags/assets/svg/my.svg": "15a8ec6f22b16844597f5cd9dbb7f698",
"assets/packages/circle_flags/assets/svg/united_nations.svg": "ace4d8cc09fda98cc416b17ca976ae94",
"assets/packages/circle_flags/assets/svg/mn.svg": "d89b351b7a3f47e05c5035f8fcbc0b64",
"assets/packages/circle_flags/assets/svg/nu.svg": "7e5ffcccd7f8261cac29066ee378b8ee",
"assets/packages/circle_flags/assets/svg/az.svg": "0a46d81b9f4d6e74df6c0a553c8f616e",
"assets/packages/circle_flags/assets/svg/ba.svg": "ee48e572ba1aca5dddd3f532157c2f7d",
"assets/packages/circle_flags/assets/svg/bv.svg": "cf046fce42fb67981d0438d353646c27",
"assets/packages/circle_flags/assets/svg/am.svg": "2ae7caa5b6e139b07c8ea08219c97a3b",
"assets/packages/circle_flags/assets/svg/cr.svg": "b40308827907504485607b95c68072b2",
"assets/packages/circle_flags/assets/svg/tl.svg": "9e56b5b168d1f3f1c63224574fe2138d",
"assets/packages/circle_flags/assets/svg/xx.svg": "e7211fa8bc91a38a9f0cdc104560de73",
"assets/packages/circle_flags/assets/svg/european_union.svg": "9b140a871cc76b99499cb4da03a4046b",
"assets/packages/circle_flags/assets/svg/south_ossetia.svg": "9103c2bf68a2cfd62683b0f5e0fc5741",
"assets/packages/circle_flags/assets/svg/tm.svg": "dee9a77e197c95c514993e76c8ec773b",
"assets/packages/circle_flags/assets/svg/tz.svg": "58737e5afc27d0776101152943b49c0b",
"assets/packages/circle_flags/assets/svg/ve.svg": "3bea8466103da76add3fec9f754f1c39",
"assets/packages/circle_flags/assets/svg/al.svg": "b446bc5e6def7dd1ac2eba18a85eabed",
"assets/packages/circle_flags/assets/svg/bw.svg": "5f244372b0faf6f7884465c008b0215e",
"assets/packages/circle_flags/assets/svg/cd.svg": "eec94b8481f006513b9507a8a9967ce1",
"assets/packages/circle_flags/assets/svg/lk.svg": "1c3ab16dd25d4dd631955fa6e359e218",
"assets/packages/circle_flags/assets/svg/mo.svg": "ae4cbc769c622ddac3222c848c50e270",
"assets/packages/circle_flags/assets/svg/mx.svg": "eba2f3900bc96e43df95b08ff5680c0d",
"assets/packages/circle_flags/assets/svg/nc.svg": "fc309bf7c91a0dc20f2a7e91bb74fffe",
"assets/packages/circle_flags/assets/svg/na.svg": "d99b27fe92f05056d239f1b1369a559a",
"assets/packages/circle_flags/assets/svg/mz.svg": "a237483ad034d6b93ded6130e5a28b22",
"assets/packages/circle_flags/assets/svg/li.svg": "aeabe40f9d0d856ea15abf280f9f8a97",
"assets/packages/circle_flags/assets/svg/easter_island.svg": "ef05c647c03de345776b876b64339d09",
"assets/packages/circle_flags/assets/svg/mm.svg": "62ac27359e8fd15428ebb0312047b59b",
"assets/packages/circle_flags/assets/svg/cf.svg": "c6bd4164c18408f225007f5974cfcd3c",
"assets/packages/circle_flags/assets/svg/bb.svg": "f01c3e98ab28dc4706ac9b19ae136515",
"assets/packages/circle_flags/assets/svg/an.svg": "0acef1e241af15dc29d63b781ee02729",
"assets/packages/circle_flags/assets/svg/vg.svg": "1119c051959cb02049b2bf91de21f217",
"assets/packages/circle_flags/assets/svg/to.svg": "b936fe5947c7062a5dccdd5776a2dc99",
"assets/packages/circle_flags/assets/svg/es-cn.svg": "eda9ddb6623e7f01e7195e37a6c44f59",
"assets/packages/circle_flags/assets/svg/tn.svg": "6f8ff7904a3b0a38c421cc5b9c960ee8",
"assets/packages/circle_flags/assets/svg/ao.svg": "6f079c2bfe91da95fb3169239a1cc9b2",
"assets/packages/circle_flags/assets/svg/bt.svg": "cb65501b256c18d1dcb80497185db82d",
"assets/packages/circle_flags/assets/svg/ax.svg": "4f00f0fdfec805730f79130cf7490099",
"assets/packages/circle_flags/assets/svg/cg.svg": "b11f1a83dc32e04a0ecb00107db933fd",
"assets/packages/circle_flags/assets/svg/ml.svg": "8db39654af03c82a301bd72741deb954",
"assets/packages/circle_flags/assets/svg/jo.svg": "b2b71c7206885530255e1585d24e4914",
"assets/packages/circle_flags/assets/svg/it.svg": "db65ec5f57579bc6d60ac64c74fd36b2",
"assets/packages/circle_flags/assets/svg/gh.svg": "a90a4cf2eab37a18c9c5bbe96f9ba74d",
"assets/packages/circle_flags/assets/svg/sm.svg": "5419fce82d47b20aa1cfbff58612edf0",
"assets/packages/circle_flags/assets/svg/pa.svg": "4963ef7238b3f2b8e1e8d890a4f7916c",
"assets/packages/circle_flags/assets/svg/sz.svg": "074e9bf030d8bb281c24afda74640ea9",
"assets/packages/circle_flags/assets/svg/pt-30.svg": "e3fb9bb891fa0b38c778802d8c719b0e",
"assets/packages/circle_flags/assets/svg/gb-eng.svg": "d050a56e287a41eaeacc78eaef7c0358",
"assets/packages/circle_flags/assets/svg/es-ga.svg": "98d4d5e8669155d14fed1e8696813ccb",
"assets/packages/circle_flags/assets/svg/pw.svg": "0441d82cb23bb770be13a421b476f27f",
"assets/packages/circle_flags/assets/svg/sl.svg": "b0bef4e052fefb5b16e625779eb8a5db",
"assets/packages/circle_flags/assets/svg/de.svg": "55dcf5508162c371f3da65ad50180474",
"assets/packages/circle_flags/assets/svg/gi.svg": "437cb19a7aa9c0711599d3b574648c2d",
"assets/packages/circle_flags/assets/svg/fm.svg": "63ba16dbcfde8b70b87bfaf88951941c",
"assets/packages/circle_flags/assets/svg/kh.svg": "dc6a5ea8ad2b973bec240f8efccfb2fe",
"assets/packages/circle_flags/assets/svg/et.svg": "95faaa7cebe254bc77ed0271fc707b48",
"assets/packages/circle_flags/assets/svg/fo.svg": "019a0480bc1c34daa8eef499e9a07351",
"assets/packages/circle_flags/assets/svg/ec.svg": "cc99c0f2ca07d2ba955a8f60873cab64",
"assets/packages/circle_flags/assets/svg/sn.svg": "ce02b4362767028f6485e158377b21da",
"assets/packages/circle_flags/assets/svg/sy.svg": "bd539fd8b4ed01f50918f523ac2052d8",
"assets/packages/circle_flags/assets/svg/ge-ab.svg": "998a80783383964d8298e5aac40b6b8d",
"assets/packages/circle_flags/assets/svg/sx.svg": "b3d74780ab0cf3a1b1a0b516f0dfaec5",
"assets/packages/circle_flags/assets/svg/pt.svg": "fcd61103126462ca397f4f3243e1d1cd",
"assets/packages/circle_flags/assets/svg/so.svg": "4627fd9171cecdc0f2b6832bbbd7188f",
"assets/packages/circle_flags/assets/svg/jm.svg": "32d6f134c76c3bd6f2cdca5cd8739cea",
"assets/packages/circle_flags/assets/svg/hr.svg": "47e482440ca6980316313a6684eff0ef",
"assets/packages/circle_flags/assets/svg/ki.svg": "7835336c6e38700eb8b06095d4b97895",
"assets/packages/circle_flags/assets/svg/kz.svg": "faead64233c731547eb8393cbd2373b1",
"assets/packages/circle_flags/assets/svg/ie.svg": "ed6b8bf7dcfe3a6d33374347f7ec15e0",
"assets/packages/circle_flags/assets/svg/sindh.svg": "52dbd15d1a3b821a6d56f54dab7f7128",
"assets/packages/circle_flags/assets/svg/km.svg": "522a06e37a46c98e45923cfc50eb827a",
"assets/packages/circle_flags/assets/svg/ir.svg": "e580175b60301cd0f31cfd15333379f8",
"assets/packages/circle_flags/assets/svg/gy.svg": "3b9273f9ac8e17066062c43d7ebd951a",
"assets/packages/circle_flags/assets/svg/gn.svg": "59d8d02810b1159f3076618035501077",
"assets/packages/circle_flags/assets/svg/fj.svg": "144cd809e139a4186ed3164a368ef3b8",
"assets/packages/circle_flags/assets/svg/pg.svg": "73c850ae80c2389a589a749d7392096c",
"assets/packages/circle_flags/assets/svg/sk.svg": "add61d27b201faca12abe48c5989097f",
"assets/packages/circle_flags/assets/svg/ro.svg": "1f1fa55f9a81c1eaea22eee7e36685c9",
"assets/packages/circle_flags/assets/svg/sj.svg": "cf046fce42fb67981d0438d353646c27",
"assets/packages/circle_flags/assets/svg/pf.svg": "07e87ad595fd358f1812fa649701b7d1",
"assets/packages/circle_flags/assets/svg/fk.svg": "c4db4cbbe6f71fa8c3962d379d9e35a3",
"assets/packages/circle_flags/assets/svg/eg.svg": "e4700665f17734eb444cf5075528db5d",
"assets/packages/circle_flags/assets/svg/is.svg": "7639e9bd3ad101576713a38e94a7d512",
"assets/packages/circle_flags/assets/svg/id.svg": "1f9fa768c4f4679d3a27a1d8e06b44d9",
"assets/packages/circle_flags/assets/svg/ky.svg": "1321e97ad34a39fed6f51a444957572a",
"assets/packages/circle_flags/assets/svg/iq.svg": "10f3bee9c0b794beb44b87d2b1d1a23b",
"assets/packages/circle_flags/assets/svg/kn.svg": "cc4ace7dd4148be9c189dab15aebe9e3",
"assets/packages/circle_flags/assets/svg/hu.svg": "8d6fd787377df5f98055cd4b506bad06",
"assets/packages/circle_flags/assets/svg/ee.svg": "660823717af2e31fd5ff4e35a068afc5",
"assets/packages/circle_flags/assets/svg/er.svg": "ad9abd0ec23f81081447a406b5545a09",
"assets/packages/circle_flags/assets/svg/fi.svg": "4e896c6448e6451ebbee545d9343f3ab",
"assets/packages/circle_flags/assets/svg/gm.svg": "c8b00a525dd0bb3acfbba286fef8f0e3",
"assets/packages/circle_flags/assets/svg/sh.svg": "2f5e28ec7330d2fd43ffd5f766a13ba3",
"assets/packages/circle_flags/assets/svg/ps.svg": "2ae41583410d95be9f7a66c91d9e18b7",
"assets/packages/circle_flags/assets/svg/malayali.svg": "da4074e5829d9e254b99798875004137",
"assets/packages/circle_flags/assets/svg/hmong.svg": "d1e8c16e006679f3932f61239683cebe",
"assets/packages/circle_flags/assets/svg/pt-20.svg": "a596a02d4bc1a13285777fbc05430a52",
"assets/packages/circle_flags/assets/svg/pr.svg": "51383b487d0588d1dbdb7a0be9abd416",
"assets/packages/circle_flags/assets/svg/si.svg": "a91deb607ff6f47c0fce06da505baccc",
"assets/packages/circle_flags/assets/svg/transnistria.svg": "f1d0f3cc33a89aa123722ff0a0ec7f1d",
"assets/packages/circle_flags/assets/svg/pe.svg": "68ee39e30571c1632f7d30e2f1443223",
"assets/packages/circle_flags/assets/svg/qa.svg": "98d025a69ca529fb81c656240eb620ee",
"assets/packages/circle_flags/assets/svg/gl.svg": "17037df287fbc73d3e5be596c3fda6c2",
"assets/packages/circle_flags/assets/svg/es.svg": "67ed39e8fe57c68b711c26a6587cba00",
"assets/packages/circle_flags/assets/svg/ht.svg": "a9aaf67e111bd07793c6af3de4079493",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/lib/assets/media/pics/login_page/1.jpeg": "b8931d279e6524e2496e57800fd88149",
"assets/lib/assets/media/pics/login_page/6.jpeg": "12432b91a4f3d9e823824455e2ca743b",
"assets/lib/assets/media/pics/login_page/7.jpeg": "63333ab7fa345379ff8e98737a2ac74a",
"assets/lib/assets/media/pics/login_page/8.jpeg": "ae9ba499917de5548cf279734e1094a2",
"assets/lib/assets/media/pics/login_page/4.jpeg": "c7d0785e3c9666e0118fa0bf52352f4d",
"assets/lib/assets/media/pics/login_page/5.jpeg": "3bbdba79766ccb3a1ee3c9e7f8e422ff",
"assets/lib/assets/media/pics/login_page/9.jpeg": "1a9269bdcd37d1adfa4e520d06b9ded4",
"assets/lib/assets/media/pics/login_page/2.jpeg": "a05c7b9c2cd3a5e051070f48e6b0739a",
"assets/lib/assets/media/pics/login_page/3.jpeg": "902802ad6f2d7c2bd770c7a385094099",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"appwrite_auth.html": "7f93710517dd701b0355a89ea3e4b129",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
