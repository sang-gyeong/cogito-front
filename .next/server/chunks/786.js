"use strict";
exports.id = 786;
exports.ids = [786];
exports.modules = {

/***/ 9263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_J": () => (/* binding */ reissueToken),
/* harmony export */   "hP": () => (/* binding */ getAccessToken),
/* harmony export */   "kS": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getAccessToken = (host, authToken) => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.get */ .D2.get(`/auth/${host}/login/token?code=${authToken}`).then(response => response?.data);
const reissueToken = () => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.post */ .D2.post('/auth/reissue').then(response => response?.data);
const logout = () => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.post */ .D2.post('/auth/logout').then(() => console.log('로그아웃 되었습니다.'));
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
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5637);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9263);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _auth__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const axiosInstanceForCSR = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: `${"https://dev.cogito.shop"}/api`,
  timeout: 3000,
  withCredentials: true,
  headers: {}
});
axiosInstanceForCSR.interceptors.request.use(async request => {
  const expiresAt = (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__/* .getLocalStorageItem */ .le)('expiresAt', moment__WEBPACK_IMPORTED_MODULE_1___default()().format('yyyy-MM-DD HH:mm:ss')); // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때

  if (moment__WEBPACK_IMPORTED_MODULE_1___default()(expiresAt).diff(moment__WEBPACK_IMPORTED_MODULE_1___default()()) < 0) {
    const data = await (0,_auth__WEBPACK_IMPORTED_MODULE_2__/* .reissueToken */ ._J)();

    if (data) {
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__/* .setLocalStorageItem */ .D$)('accessToken', data.accessToken);
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__/* .setLocalStorageItem */ .D$)('expiresAt', moment__WEBPACK_IMPORTED_MODULE_1___default()().add(30, 'minutes').format('yyyy-MM-DD HH:mm:ss'));
    }
  }

  const accessToken = (0,_utils_storage__WEBPACK_IMPORTED_MODULE_3__/* .getLocalStorageItem */ .le)('accessToken', '');

  if (request.headers && accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return request;
});
axiosInstanceForCSR.interceptors.response.use(response => response, error => {
  if (['A008', 'A011', 'A012', 'A013'].includes(error?.response?.data?.code)) {
    globalThis?.localStorage.clear();
    window.alert('로그인이 필요합니다.');
    return;
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