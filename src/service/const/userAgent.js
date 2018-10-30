// // import Athena from '../../plugins/Athena';
// const UA = navigator.userAgent.toLowerCase();
// const IS_WX = /MicroMessenger/i.test(UA);
// const IS_ANDROID = /Android/i.test(UA) || /Linux/i.test(UA);
// const IS_IOS = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i);
// const IS_ATHENA = Athena.isAthena();
// const isIPhoneX = (function() {
//   if (!/iPhone/i.test(Athena)) {
//     return !1;
//   }
//   const e = window.screen || {};
//   return e.height === 812 && e.width === 375;
// })();
// const domain = new RegExp('https://www.cmrh.com');
// const ENV =
//   process.env.NODE_ENV === 'development'
//     ? 'development'
//     : domain.test(window.location.href)
//       ? 'production'
//       : 'test';
// export default [
//   {
//     name: 'userAgent',
//     value: {
//       IS_WX,
//       IS_ANDROID,
//       IS_IOS,
//       IS_ATHENA,
//       isIPhoneX,
//       ENV
//     }
//   }
// ];
