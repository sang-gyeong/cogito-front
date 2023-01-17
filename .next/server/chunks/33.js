"use strict";
exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 9263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ reissueToken),
/* harmony export */   "h": () => (/* binding */ getAccessToken)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getAccessToken = (host, authToken) => _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get(`/auth/${host}/login/token?code=${authToken}`).then(response => response?.data);
const reissueToken = () => _index__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get('/auth/reissue').then(response => response?.data);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3618:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NJ": () => (/* binding */ getTags),
/* harmony export */   "Rf": () => (/* binding */ getUsers),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const request = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: `${"https://dev.cogito.shop"}/api`,
  timeout: 3000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);
const getTags = () => request.get(`/tags`).then(response => response?.data);
const getUsers = () => request.get(`/users`).then(response => response?.data);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D$": () => (/* binding */ setLocalStorageItem),
/* harmony export */   "D9": () => (/* binding */ setSessionStorageItem),
/* harmony export */   "St": () => (/* binding */ getSessionStorageItem),
/* harmony export */   "le": () => (/* binding */ getLocalStorageItem)
/* harmony export */ });
const getLocalStorageItem = (key, defaultValue) => {
  const localStorage = globalThis?.localStorage;

  if (!localStorage) {
    return defaultValue;
  }

  return localStorage.getItem(key) ?? defaultValue;
};
const setLocalStorageItem = (key, value) => {
  const localStorage = globalThis?.localStorage;

  if (!localStorage) {
    return;
  }

  return localStorage.setItem(key, value);
};
const getSessionStorageItem = key => {
  const sessionStorage = globalThis?.sessionStorage;

  if (!sessionStorage) {
    return undefined;
  }

  return sessionStorage.getItem(key);
};
const setSessionStorageItem = (key, value) => {
  const sessionStorage = globalThis?.sessionStorage;

  if (!sessionStorage) {
    return;
  }

  return sessionStorage.setItem(key, value);
};

/***/ })

};
;