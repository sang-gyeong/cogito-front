"use strict";
exports.id = 641;
exports.ids = [641];
exports.modules = {

/***/ 5158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$L": () => (/* binding */ getMyData),
/* harmony export */   "EC": () => (/* binding */ getUserDataById),
/* harmony export */   "Rf": () => (/* binding */ getUsers)
/* harmony export */ });
/* unused harmony export modifyUserData */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// 마이 프로필 조회
const getMyData = () => {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.get */ .D.get(`/users/me`).then(response => {
    return response?.data;
  });
}; // 유저 프로필 조회

const getUserDataById = userId => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForSSR.get */ .W.get(`/users/${userId}`).then(response => response?.data); // 유저 프로필 수정

const modifyUserData = (userId, body) => axiosInstanceForCSR.patch(`/users/${userId}`, body).then(response => response?.data); // 유저 순위 조회

const getUsers = ({
  query,
  page,
  size
}) => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForSSR.get */ .W.get(`/users`, {
  params: {
    query,
    page,
    size
  }
}).then(response => response?.data);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "l": () => (/* binding */ QUERY_KEY)
/* harmony export */ });
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5158);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_user__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_api_user__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const QUERY_KEY = 'useMyQuery';

const useMyQuery = () => {
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([QUERY_KEY], _api_user__WEBPACK_IMPORTED_MODULE_0__/* .getMyData */ .$L);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMyQuery);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;