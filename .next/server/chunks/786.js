"use strict";
exports.id = 786;
exports.ids = [786];
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

const getAccessToken = (host, authToken) => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.get */ .D2.get(`/auth/${host}/login/token?code=${authToken}`).then(response => response?.data);
const reissueToken = () => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.get */ .D2.get('/auth/reissue').then(response => response?.data);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3618:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D2": () => (/* binding */ axiosInstanceForCSR),
/* harmony export */   "NJ": () => (/* binding */ getTags),
/* harmony export */   "Rf": () => (/* binding */ getUsers),
/* harmony export */   "We": () => (/* binding */ axiosInstanceForSSR)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(542);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5637);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9263);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _auth__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const axiosInstanceForCSR = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: `${"https://dev.cogito.shop"}/api`,
  timeout: 3000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json'
  }
});
axiosInstanceForCSR.interceptors.request.use(async request => {
  const refreshToken = react_cookies__WEBPACK_IMPORTED_MODULE_2___default().load('refreshToken');
  const expiresAt = (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__/* .getLocalStorageItem */ .le)('expiresAt', moment__WEBPACK_IMPORTED_MODULE_1___default()().format('yyyy-MM-DD HH:mm:ss')); // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때

  if (moment__WEBPACK_IMPORTED_MODULE_1___default()(expiresAt).diff(moment__WEBPACK_IMPORTED_MODULE_1___default()()) < 0 && refreshToken && request.headers) {
    request.headers['Authorization'] = `Bearer ${refreshToken}`;
    const data = await (0,_auth__WEBPACK_IMPORTED_MODULE_3__/* .reissueToken */ ._)();
    console.log('-----requestInterceptor reissueToken response : ', data);

    if (data) {
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__/* .setLocalStorageItem */ .D$)('accessToken', data.accessToken);
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__/* .setLocalStorageItem */ .D$)('expiresAt', moment__WEBPACK_IMPORTED_MODULE_1___default()().add(30, 'minutes').format('yyyy-MM-DD HH:mm:ss')); // @TODO: 쿠키 만료시간 지정

      react_cookies__WEBPACK_IMPORTED_MODULE_2___default().save('refreshToken', data.refreshToken, {
        httpOnly: true
      });
    }
  }

  const accessToken = (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__/* .getLocalStorageItem */ .le)('accessToken', '');
  console.log('-----requestInterceptor refreshToken : ', refreshToken);
  console.log('-----requestInterceptor accessToken : ', accessToken);

  if (request.headers && accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return request;
});
axiosInstanceForCSR.interceptors.response.use(response => response, error => {
  if (['A008', 'A011', 'A012', 'A013'].includes(error?.response?.data?.code)) {
    react_cookies__WEBPACK_IMPORTED_MODULE_2___default().remove('refreshToken');
    globalThis?.localStorage.clear();
  }

  console.log('csr axios error : ', error);
  window.alert(error?.response?.data?.message ?? error?.message);
});
const axiosInstanceForSSR = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: `${"https://dev.cogito.shop"}/api`,
  timeout: 3000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json'
  }
});
axiosInstanceForSSR.interceptors.response.use(response => response, error => {
  console.log('ssr axios error : ', error);
  throw new Error(error);
});

const getTags = () => axiosInstanceForCSR.get(`/tags`).then(response => response?.data);
const getUsers = () => axiosInstanceForCSR.get(`/users`).then(response => response?.data);
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