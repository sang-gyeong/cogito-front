"use strict";
(() => {
var exports = {};
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 4247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var _src_api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9263);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5637);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_api_auth__WEBPACK_IMPORTED_MODULE_0__]);
_src_api_auth__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function AuthPage() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const host = router.query?.host;
  const authToken = router.query?.code;

  const loadAccessToken = async (host, authToken) => {
    const data = await (0,_src_api_auth__WEBPACK_IMPORTED_MODULE_0__/* .getAccessToken */ .hP)(host, authToken);

    if (!data) {
      window.alert('로그인에 실패하였습니다.\n잠시 후에 다시 시도해주세요');
      router.replace('/');
      return;
    }

    (0,_src_utils_storage__WEBPACK_IMPORTED_MODULE_5__/* .setLocalStorageItem */ .D$)('accessToken', data.accessToken);
    (0,_src_utils_storage__WEBPACK_IMPORTED_MODULE_5__/* .setLocalStorageItem */ .D$)('expiresAt', moment__WEBPACK_IMPORTED_MODULE_3___default()().add(60, 'minutes').format('yyyy-MM-DD HH:mm:ss'));

    if (data.registered === false) {
      router.replace('/my');
    }

    router.replace('/');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (host && authToken) {
      loadAccessToken(host, authToken);
    }
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {});
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 542:
/***/ ((module) => {

module.exports = require("react-cookies");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786], () => (__webpack_exec__(4247)));
module.exports = __webpack_exports__;

})();